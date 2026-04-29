import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import {
  Moon, Sun, Info, Layers, Smartphone, HelpCircle,
  Link2, Menu, X, ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { id: "about", label: "Tentang", icon: Info },
  { id: "services", label: "Layanan", icon: Layers },
  { id: "tracker-link", label: "Tracker Link", icon: Link2 },
  { id: "device", label: "Info Perangkat", icon: Smartphone },
  { id: "faq", label: "FAQ", icon: HelpCircle },
]

export function Sidebar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      let current = ""
      for (const section of sections) {
        if (!section) continue
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120) current = section.id
      }
      setActiveId(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-border">
        <img src="/logo.svg" alt="Tracker Loc ID" className="h-7 w-7 object-contain shrink-0" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground leading-tight truncate">Tracker Loc ID</p>
          <p className="text-[10px] text-muted-foreground leading-tight truncate">alatlacak.com</p>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-0.5">
        {navItems.map((item) => {
          const isActive = activeId === item.id
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all group ${
                isActive
                  ? "bg-primary/10 text-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className={`h-4 w-4 shrink-0 transition-colors ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
              <span className="truncate">{item.label}</span>
              {isActive && <ChevronRight className="ml-auto h-3.5 w-3.5 text-primary shrink-0" />}
            </button>
          )
        })}
      </nav>

      {/* Bottom: theme toggle */}
      <div className="border-t border-border px-3 py-3">
        {mounted && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground px-3 h-9"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 shrink-0" />
            ) : (
              <Moon className="h-4 w-4 shrink-0" />
            )}
            <span className="text-sm">{theme === "dark" ? "Mode Terang" : "Mode Gelap"}</span>
          </Button>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 sticky top-0 h-screen border-r border-border bg-background/95 backdrop-blur-sm overflow-hidden">
        <SidebarContent />
      </aside>

      {/* Mobile: Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-3.5 left-4 z-50 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/95 backdrop-blur-sm shadow-sm"
        aria-label="Open menu"
      >
        <Menu className="h-4 w-4 text-foreground" />
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <div className="relative flex flex-col w-64 h-full bg-background border-r border-border shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3.5 right-3.5 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  )
}
