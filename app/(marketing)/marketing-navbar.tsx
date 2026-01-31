"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { LogIn, Menu } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAudience, Audience } from "@/lib/context/audience-context"
import { useRequestAccessModal } from "@/lib/context/request-access-modal-context"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HeaderAccountDropdown } from "@/components/account-dropdown"
import { LyfeLogo } from "@/components/lyfe-logo"

type MainNavProps = {
  session: User | null
}

export function MainNav({ session }: MainNavProps) {
  const pathname = usePathname()
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

  // Handle audience-specific navigation (scrolls to hero and sets audience toggle)
  const handleAudienceNavClick = (targetAudience: Audience) => {
    setAudience(targetAudience)
    // Scroll to hero section
    const heroElement = document.getElementById("hero")
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle Request Access button click (opens modal with current audience)
  const handleRequestAccess = () => {
    openModal(audience)
  }

  const navItems = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#providers", label: "For Providers", audienceAction: "provider" as Audience },
    { href: "#patients", label: "For Patients", audienceAction: "patient" as Audience },
    { href: "/about", label: "About" },
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
                <Link
                  href="/auth/login"
                  className={cn(
                    "text-sm text-muted-foreground hover:text-foreground transition-colors"
                  )}
                >
                  Login
                </Link>
                <Button
                  onClick={handleRequestAccess}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Request Access
                </Button>
                <ModeToggle />
              </div>
            )}

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-0 h-9 w-9"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-6">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Logo in mobile menu */}
                  <LyfeLogo />

                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) =>
                      item.audienceAction ? (
                        <button
                          key={item.href}
                          onClick={() => handleAudienceNavClick(item.audienceAction!)}
                          className={cn(
                            "text-sm py-2 transition-colors text-left cursor-pointer",
                            audience === item.audienceAction
                              ? "text-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-sm py-2 transition-colors",
                            isActive(item.href)
                              ? "text-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </nav>

                  {!session && (
                    <div className="pt-4 space-y-3 border-t border-border">
                      <Link
                        href="/auth/login"
                        className={cn(
                          "flex items-center justify-center",
                          "h-10 w-full rounded-md",
                          "border border-border",
                          "text-foreground text-sm font-medium",
                          "hover:bg-accent transition-colors"
                        )}
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </Link>
                      <Button
                        onClick={handleRequestAccess}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        Request Access
                      </Button>
                      <div className="flex justify-end mt-4">
                        <ModeToggle />
                      </div>
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
