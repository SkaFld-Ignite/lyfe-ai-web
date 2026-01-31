"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"
import { createClient } from "@/lib/db/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Database } from "@/types/db"

type Role = Database["public"]["Tables"]["access_requests"]["Row"]["role"]

interface RequestAccessFormProps {
  defaultRole?: Role
  onSuccess?: () => void
}

interface FormErrors {
  name?: string
  email?: string
  role?: string
  practiceName?: string
  practiceSize?: string
}

const PRACTICE_SIZES = [
  { value: "solo", label: "Solo Practice" },
  { value: "2-5", label: "2-5 Providers" },
  { value: "6-10", label: "6-10 Providers" },
  { value: "11-25", label: "11-25 Providers" },
  { value: "26-50", label: "26-50 Providers" },
  { value: "50+", label: "50+ Providers" },
]

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function RequestAccessForm({ defaultRole = "provider", onSuccess }: RequestAccessFormProps) {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [role, setRole] = React.useState<Role>(defaultRole)
  const [practiceName, setPracticeName] = React.useState("")
  const [practiceSize, setPracticeSize] = React.useState("")
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Update role when defaultRole changes (e.g., when modal pre-selects based on audience)
  React.useEffect(() => {
    setRole(defaultRole)
  }, [defaultRole])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!role) {
      newErrors.role = "Please select your role"
    }

    // Provider-specific validation
    if (role === "provider") {
      if (!practiceName.trim()) {
        newErrors.practiceName = "Practice name is required for providers"
      }
      if (!practiceSize) {
        newErrors.practiceSize = "Please select your practice size"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const supabase = createClient()

      const { error } = await supabase.from("access_requests").insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        role,
        practice_name: role === "provider" ? practiceName.trim() : null,
        practice_size: role === "provider" ? practiceSize : null,
      })

      if (error) {
        console.error("Supabase error:", error)
        setErrors({ email: "Something went wrong. Please try again." })
        return
      }

      // Success!
      onSuccess?.()
    } catch (error) {
      console.error("Submit error:", error)
      setErrors({ email: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Dr. Jane Smith"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@practice.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      {/* Role Dropdown */}
      <div className="space-y-2">
        <Label htmlFor="role">I am a...</Label>
        <Select
          value={role}
          onValueChange={(value) => setRole(value as Role)}
          disabled={isSubmitting}
        >
          <SelectTrigger id="role" className="w-full" aria-invalid={!!errors.role}>
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="provider">Healthcare Provider</SelectItem>
            <SelectItem value="patient">Patient</SelectItem>
          </SelectContent>
        </Select>
        {errors.role && (
          <p className="text-sm text-destructive">{errors.role}</p>
        )}
      </div>

      {/* Conditional Provider Fields */}
      {role === "provider" && (
        <>
          {/* Practice Name */}
          <div className="space-y-2">
            <Label htmlFor="practiceName">Practice Name</Label>
            <Input
              id="practiceName"
              type="text"
              placeholder="Nashville Specialty Associates"
              value={practiceName}
              onChange={(e) => setPracticeName(e.target.value)}
              aria-invalid={!!errors.practiceName}
              disabled={isSubmitting}
            />
            {errors.practiceName && (
              <p className="text-sm text-destructive">{errors.practiceName}</p>
            )}
          </div>

          {/* Practice Size Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="practiceSize">Practice Size</Label>
            <Select
              value={practiceSize}
              onValueChange={setPracticeSize}
              disabled={isSubmitting}
            >
              <SelectTrigger id="practiceSize" className="w-full" aria-invalid={!!errors.practiceSize}>
                <SelectValue placeholder="Select practice size" />
              </SelectTrigger>
              <SelectContent>
                {PRACTICE_SIZES.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.practiceSize && (
              <p className="text-sm text-destructive">{errors.practiceSize}</p>
            )}
          </div>
        </>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Access"
        )}
      </Button>
    </form>
  )
}
