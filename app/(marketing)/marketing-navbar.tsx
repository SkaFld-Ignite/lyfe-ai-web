"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { LogIn, Menu } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAudience, Audience } from "@/lib/context/audience-context"
import { useRequestAccessModal } from "@/lib/context/request-access-modal-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HeaderAccountDropdown } from "@/components/account-dropdown"
import { LyfeLogo } from "@/components/lyfe-logo"

type MainNavProps = {
  session: User | null
}

export function MainNav({ session }: MainNavProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { scrollY } = useScroll()
  const { audience, setAudience } = useAudience()
  const { openModal } = useRequestAccessModal()

  // Transform scroll position to backdrop blur and shadow
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1])

  // Check if current path matches the link
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  // Handle audience-specific navigation (routes to / or /patients)
  const handleAudienceNavClick = (targetAudience: Audience) => {
    // setAudience handles navigation to the correct route
    setAudience(targetAudience)

    // Scroll to hero section after a brief delay for route change
    setTimeout(() => {
      const heroElement = document.getElementById("hero")
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  // Handle Request Access button click (opens modal with current audience)
  const handleRequestAccess = () => {
    openModal(audience)
  }

  const navItems = [
    { href: "/", label: "For Providers", audienceAction: "provider" as Audience },
    { href: "/patients", label: "For Patients", audienceAction: "patient" as Audience },
    // About page hidden temporarily
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50"
      role="banner"
    >
      {/* Backdrop blur layer that fades in on scroll */}
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/50"
        style={{ opacity: headerOpacity }}
      />

      <div className="relative container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left section - Logo and Nav */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Lyfe AI Home"
            >
              <LyfeLogo />
            </Link>

            {/* Primary navigation - desktop */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) =>
                item.audienceAction ? (
                  <button
                    key={item.href}
                    onClick={() => handleAudienceNavClick(item.audienceAction!)}
                    className={cn(
                      "relative py-1 text-sm transition-colors cursor-pointer",
                      audience === item.audienceAction
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {audience === item.audienceAction && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-[1px] left-0 w-full h-[1px] bg-foreground"
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative py-1 text-sm transition-colors",
                      isActive(item.href)
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-[1px] left-0 w-full h-[1px] bg-foreground"
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Right section */}
          <nav className="flex items-center space-x-3">
            {session ? (
              <HeaderAccountDropdown user={session} />
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="https://app.lyfeco.ai/login"
                  className={cn(
                    "text-sm text-muted-foreground hover:text-foreground transition-colors"
                  )}
                >
                  Login
                </a>
                <Button
                  onClick={handleRequestAccess}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Request Access
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-0 h-11 w-11 min-h-[44px] min-w-[44px]"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-6">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Logo in mobile menu */}
                  <LyfeLogo />

                  <nav className="flex flex-col space-y-1">
                    {navItems.map((item) =>
                      item.audienceAction ? (
                        <button
                          key={item.href}
                          onClick={() => handleAudienceNavClick(item.audienceAction!)}
                          className={cn(
                            "text-base min-h-[44px] py-3 px-2 transition-colors text-left cursor-pointer rounded-md",
                            audience === item.audienceAction
                              ? "text-foreground font-medium bg-accent"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          )}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-base min-h-[44px] py-3 px-2 transition-colors rounded-md flex items-center",
                            isActive(item.href)
                              ? "text-foreground font-medium bg-accent"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </nav>

                  {!session && (
                    <div className="pt-4 space-y-3 border-t border-border">
                      <a
                        href="https://app.lyfeco.ai/login"
                        className={cn(
                          "flex items-center justify-center",
                          "h-12 min-h-[48px] w-full rounded-md",
                          "border border-border",
                          "text-foreground text-base font-medium",
                          "hover:bg-accent transition-colors"
                        )}
                      >
                        <LogIn className="h-5 w-5 mr-2" />
                        Login
                      </a>
                      <Button
                        onClick={handleRequestAccess}
                        className="w-full h-12 min-h-[48px] text-base bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Request Access
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
