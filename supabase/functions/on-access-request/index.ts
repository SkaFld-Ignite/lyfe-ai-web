import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const TWENTY_API_KEY = Deno.env.get("TWENTY_API_KEY")
const NOTIFICATION_EMAIL = Deno.env.get("NOTIFICATION_EMAIL") || "hello@lyfeco.ai"

interface AccessRequest {
  id: string
  name: string
  email: string
  role: "provider" | "patient"
  practice_name: string | null
  practice_size: string | null
  created_at: string
}

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE"
  table: string
  record: AccessRequest
  schema: string
  old_record: AccessRequest | null
}

serve(async (req) => {
  try {
    const payload: WebhookPayload = await req.json()

    // Only process INSERT events
    if (payload.type !== "INSERT") {
      return new Response(JSON.stringify({ message: "Ignored non-INSERT event" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }

    const record = payload.record
    console.log("Processing access request:", record.id)

    // Run email and CRM creation in parallel
    const results = await Promise.allSettled([
      sendEmailNotification(record),
      createTwentyContact(record),
    ])

    // Log results
    results.forEach((result, index) => {
      const task = index === 0 ? "Email" : "Twenty CRM"
      if (result.status === "fulfilled") {
        console.log(`${task}: Success`)
      } else {
        console.error(`${task}: Failed -`, result.reason)
      }
    })

    return new Response(
      JSON.stringify({
        success: true,
        email: results[0].status,
        emailError: results[0].status === "rejected" ? (results[0] as PromiseRejectedResult).reason?.message : null,
        crm: results[1].status,
        crmError: results[1].status === "rejected" ? (results[1] as PromiseRejectedResult).reason?.message : null,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error("Edge function error:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
})

async function sendEmailNotification(record: AccessRequest): Promise<void> {
  if (!RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY not configured")
  }

  const isProvider = record.role === "provider"

  const html = `
    <h2>New Access Request</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${record.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
        <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${record.email}">${record.email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Role</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${isProvider ? "Healthcare Provider" : "Patient"}</td>
      </tr>
      ${isProvider ? `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Practice Name</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${record.practice_name || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Practice Size</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${record.practice_size || "N/A"}</td>
      </tr>
      ` : ""}
    </table>
    <p style="margin-top: 16px; color: #666;">
      Submitted at ${new Date(record.created_at).toLocaleString()}
    </p>
  `

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Lyfe AI <hello@go.lyfeco.ai>",
      to: NOTIFICATION_EMAIL,
      subject: `New ${isProvider ? "Provider" : "Patient"} Access Request: ${record.name}`,
      html,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Resend API error: ${error}`)
  }
}

async function createTwentyContact(record: AccessRequest): Promise<void> {
  if (!TWENTY_API_KEY) {
    throw new Error("TWENTY_API_KEY not configured")
  }

  // Parse name into first/last
  const nameParts = record.name.trim().split(" ")
  const firstName = nameParts[0] || ""
  const lastName = nameParts.slice(1).join(" ") || ""

  const isProvider = record.role === "provider"

  // Map role to Contact Type SELECT values
  const contactType = isProvider ? "HEALTHCARE_PROVIDER" : "PATIENT"

  let companyId: string | null = null

  // If provider with a practice name, create or find the company first
  if (isProvider && record.practice_name) {
    companyId = await findOrCreateCompany(record.practice_name, record.practice_size)
  }

  // Build the person payload
  const personPayload: Record<string, unknown> = {
    name: {
      firstName,
      lastName,
    },
    emails: {
      primaryEmail: record.email,
    },
    contactType, // Custom SELECT field: HEALTHCARE_PROVIDER or PATIENT
  }

  // Link to company if we have one
  if (companyId) {
    personPayload.companyId = companyId
  }

  const response = await fetch("https://api.twenty.com/rest/people", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TWENTY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personPayload),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Twenty API error: ${error}`)
  }
}

async function findOrCreateCompany(practiceName: string, practiceSize: string | null): Promise<string | null> {
  // Create new company for each practice
  const companyPayload: Record<string, unknown> = {
    name: practiceName,
  }

  // Map practice size to SELECT field values
  if (practiceSize) {
    const sizeMap: Record<string, string> = {
      "Solo": "SOLO",
      "2-5": "SIZE_2_5",
      "6-20": "SIZE_6_20",
      "21-50": "SIZE_21_50",
      "51+": "SIZE_51_PLUS",
    }
    companyPayload.practiceSize = sizeMap[practiceSize] || null
  }

  const createResponse = await fetch("https://api.twenty.com/rest/companies", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TWENTY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(companyPayload),
  })

  if (!createResponse.ok) {
    const error = await createResponse.text()
    console.error(`Failed to create company: ${error}`)
    return null
  }

  const createData = await createResponse.json()
  console.log(`Created new company: ${practiceName}`)
  // API returns data.createCompany.id for POST
  return createData.data?.createCompany?.id || createData.data?.id || null
}
