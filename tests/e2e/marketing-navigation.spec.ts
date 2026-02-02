import { test, expect } from "@playwright/test"

test.describe("Marketing Page Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("homepage loads correctly", async ({ page }) => {
    await expect(page).toHaveURL("/")
    // Check that main navigation is visible
    await expect(page.getByRole("banner")).toBeVisible()
    // Check that the logo is present
    await expect(page.getByRole("link", { name: /lyfe ai home/i })).toBeVisible()
  })

  test("About link is not visible in navigation", async ({ page }) => {
    // About should be hidden from navbar
    const navAboutLink = page.locator('nav a[href="/about"]')
    await expect(navAboutLink).toHaveCount(0)
  })

  test("About link is not visible in footer", async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    // About should be hidden from footer quick links
    const footerAboutLink = page.locator('footer a[href="#about"]')
    await expect(footerAboutLink).toHaveCount(0)
  })

  test("navigation does not cause URL stacking", async ({ page }) => {
    // Click on How It Works link
    await page.click('a[href="#how-it-works"]')
    await page.waitForTimeout(300)

    // URL should be clean (no double hashes or path stacking)
    const url = page.url()
    expect(url).not.toMatch(/\/#\/#/) // No double hash stacking
    expect(url).not.toMatch(/\/\/#/) // No path then double hash

    // Navigate to login and back
    await page.click('a[href="/auth/login"]')
    await expect(page).toHaveURL("/auth/login")

    // Click logo to go back home
    await page.click('a[aria-label="Lyfe AI Home"]')
    await expect(page).toHaveURL("/")

    // URL should not have stacked paths
    const finalUrl = page.url()
    expect(finalUrl).not.toMatch(/\/auth\/login\//)
    expect(finalUrl).toBe("http://localhost:3000/")
  })

  test("logo always navigates to home without URL stacking", async ({ page }) => {
    // Navigate to auth login first
    await page.goto("/auth/login")
    await expect(page).toHaveURL("/auth/login")

    // Click logo to return home
    await page.click('a[aria-label="Lyfe AI Home"]')
    await expect(page).toHaveURL("/")

    // Verify clean URL
    expect(page.url()).toBe("http://localhost:3000/")
  })

  test("For Providers button sets correct audience", async ({ page }) => {
    // Click For Providers in nav
    await page.click('button:has-text("For Providers")')
    await page.waitForTimeout(300)

    // URL should have #providers hash
    expect(page.url()).toContain("#providers")
  })

  test("For Patients button sets correct audience", async ({ page }) => {
    // Click For Patients in nav
    await page.click('button:has-text("For Patients")')
    await page.waitForTimeout(300)

    // URL should have #patients hash
    expect(page.url()).toContain("#patients")
  })

  test("footer quick links work correctly", async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    // Check Home link exists and works
    const homeLink = page.locator('footer a[href="/"]')
    await expect(homeLink).toBeVisible()

    // Check How It Works link exists
    const howItWorksLink = page.locator('footer a[href="#how-it-works"]')
    await expect(howItWorksLink).toBeVisible()

    // Check For Providers link exists
    const providersLink = page.locator('footer a[href="#providers"]')
    await expect(providersLink).toBeVisible()

    // Check For Patients link exists
    const patientsLink = page.locator('footer a[href="#patients"]')
    await expect(patientsLink).toBeVisible()
  })
})

test.describe("FAQ Audience-Specific Content", () => {
  test("provider FAQ shows provider-specific questions", async ({ page }) => {
    await page.goto("/#providers")

    // Wait for page to fully load
    await page.waitForLoadState("networkidle")

    // Scroll down to make FAQ content load (lazy loading)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
    await page.waitForTimeout(1000)

    // Check provider-specific FAQ question exists in page content
    const providerQuestion = page.getByText("How does Lyfe AI collect patient information?")
    await expect(providerQuestion.first()).toBeAttached({ timeout: 10000 })

    // Verify patient-specific question is NOT in the DOM
    const patientQuestion = page.getByText("How do I use Lyfe AI before my appointment?")
    await expect(patientQuestion).toHaveCount(0)
  })

  test("patient FAQ shows patient-specific questions", async ({ page }) => {
    await page.goto("/#patients")

    // Wait for page to fully load
    await page.waitForLoadState("networkidle")

    // Scroll down to make FAQ content load
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
    await page.waitForTimeout(1000)

    // Check for patient-specific FAQ content
    const patientQuestion = page.getByText("How do I use Lyfe AI before my appointment?")
    await expect(patientQuestion.first()).toBeAttached({ timeout: 10000 })

    // Verify provider-specific question is NOT in the DOM
    const providerQuestion = page.getByText("How does Lyfe AI collect patient information?")
    await expect(providerQuestion).toHaveCount(0)
  })

  test("FAQ content changes when audience toggle changes", async ({ page }) => {
    // Start as provider (default)
    await page.goto("/")
    await page.waitForLoadState("networkidle")

    // Scroll to middle of page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
    await page.waitForTimeout(1000)

    // Verify provider FAQ exists in DOM
    let providerQuestion = page.getByText("How does Lyfe AI collect patient information?")
    await expect(providerQuestion.first()).toBeAttached({ timeout: 10000 })

    // Switch to patient via the toggle button
    await page.click('button:has-text("For Patients")')
    await page.waitForTimeout(1000)

    // Verify patient FAQ is now in DOM
    const patientQuestion = page.getByText("How do I use Lyfe AI before my appointment?")
    await expect(patientQuestion.first()).toBeAttached({ timeout: 10000 })

    // Verify provider FAQ is no longer in DOM
    providerQuestion = page.getByText("How does Lyfe AI collect patient information?")
    await expect(providerQuestion).toHaveCount(0)
  })
})

test.describe("Direct URL Access", () => {
  test("direct navigation to /about still works (page exists)", async ({ page }) => {
    // The about page still exists, just hidden from navigation
    await page.goto("/about")
    await expect(page).toHaveURL("/about")

    // Page should load without errors
    await expect(page.getByText("About")).toBeVisible()
  })

  test("terms page is accessible", async ({ page }) => {
    await page.goto("/terms")
    await expect(page).toHaveURL("/terms")
  })

  test("pricing page is accessible", async ({ page }) => {
    await page.goto("/pricing")
    await expect(page).toHaveURL("/pricing")
  })

  test("login page is accessible", async ({ page }) => {
    await page.goto("/auth/login")
    await expect(page).toHaveURL("/auth/login")
  })

  test("sign-up page is accessible", async ({ page }) => {
    await page.goto("/auth/sign-up")
    await expect(page).toHaveURL("/auth/sign-up")
  })
})

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test("mobile menu opens and shows navigation items", async ({ page }) => {
    await page.goto("/")

    // Click hamburger menu
    await page.click('button[aria-label="Open mobile menu"]')
    await page.waitForTimeout(300)

    // Verify nav items are visible in mobile menu (in the sheet)
    const sheet = page.locator('[data-state="open"]')
    await expect(sheet.getByRole("button", { name: "For Providers" })).toBeVisible()
    await expect(sheet.getByRole("button", { name: "For Patients" })).toBeVisible()

    // About should NOT be visible (hidden)
    const aboutInSheet = sheet.locator('button:has-text("About"), a:has-text("About")')
    await expect(aboutInSheet).toHaveCount(0)
  })

  test("mobile menu Request Access button works", async ({ page }) => {
    await page.goto("/")

    // Click hamburger menu
    await page.click('button[aria-label="Open mobile menu"]')
    await page.waitForTimeout(300)

    // Find Request Access button specifically in the mobile sheet
    const sheet = page.locator('[data-state="open"]')
    const requestAccessBtn = sheet.locator('button:has-text("Request Access")')
    await expect(requestAccessBtn).toBeVisible()
  })
})
