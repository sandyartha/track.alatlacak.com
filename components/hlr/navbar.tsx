"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Monitor, Smartphone, Wifi, Settings, MapPin, Globe, HelpCircle, Info, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const navItems = [
  { id: "about", label: "About", icon: Info },
  { id: "services", label: "Layanan", icon: Layers },
  { id: "device", label: "Device", icon: Smartphone },
  { id: "faq", label: "FAQ", icon: HelpCircle },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6">
        {/* Top bar: logo + theme toggle */}
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.svg"
              alt="Tracker LOC ID Logo"
              className="h-7 w-7 object-contain"
            />
            <span className="font-semibold text-foreground text-sm tracking-tight">
              Tracker LOC ID
            </span>
          </div>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8"
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5" />
              ) : (
                <Moon className="h-3.5 w-3.5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>

        {/* Nav links row */}
        <div className="hidden items-center gap-0 border-t border-border md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-1.5 border-b-2 border-transparent px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

