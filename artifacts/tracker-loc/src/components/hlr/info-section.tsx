
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface InfoSectionProps {
  id: string
  title: string
  icon: ReactNode
  children: ReactNode
  className?: string
}

export function InfoSection({ id, title, icon, children, className }: InfoSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card p-6",
        className
      )}
    >
      {/* Grid background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        </div>
        <div className="space-y-3">
          {children}
        </div>
      </div>
    </section>
  )
}

interface InfoRowProps {
  label: string
  value: string | number | null | undefined
  highlight?: boolean
}

export function InfoRow({ label, value, highlight }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-muted/50 px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={cn(
        "text-sm font-medium text-right",
        highlight ? "text-primary" : "text-foreground"
      )}>
        {value ?? "N/A"}
      </span>
    </div>
  )
}
