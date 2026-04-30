'use client'

import { useTheme } from "next-themes"
import { Moon, Sun, X, Sparkles, MessageSquare, Zap, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const menuItems = [
  { id: "about", label: "Tentang", icon: MessageSquare },
  { id: "services", label: "Layanan", icon: Zap },
  { id: "device", label: "Device", icon: Navigation },
  { id: "faq", label: "FAQ", icon: MessageSquare },
]

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Sidebar({ open, setOpen }: SidebarProps) {
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
    if (window.innerWidth < 768) {
      setOpen(false)
    }
  }

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 flex flex-col border-r border-border bg-background transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header with Logo */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Tracker Loc ID Logo"
              className="h-6 w-6 object-contain"
            />
            <span className="text-sm font-bold text-foreground tracking-tight">
              Tracker Loc ID
            </span>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="border-b border-border px-4 py-4">
          <a
            href="https://www.alatlacak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-start gap-2 rounded-md bg-gradient-to-r from-primary to-primary/80 px-3 py-2 text-xs font-medium text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all"
          >
            <Sparkles className="h-4 w-4" />
            Mulai Pelacakan
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="border-t border-border px-4 py-4">
          {mounted && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full justify-start gap-2"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4" />
                  <span className="text-sm">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  <span className="text-sm">Dark Mode</span>
                </>
              )}
            </Button>
          )}
        </div>
      </aside>
    </>
  )
}
