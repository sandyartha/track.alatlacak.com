import { ShieldCheck, Link, MapPin, Antenna } from "lucide-react"
import aboutData from "@/content/about.json"

const iconMap: Record<string, React.ElementType> = {
  Link,
  MapPin,
  Antenna,
  ShieldCheck,
}

/** Render **bold** markdown inline syntax */
function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-14 border-b border-border">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {aboutData.badge}
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          {aboutData.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          <InlineMarkdown text={aboutData.intro} />
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {aboutData.features.map((feature) => {
          const Icon = iconMap[feature.icon] ?? ShieldCheck
          return (
            <div
              key={feature.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  <InlineMarkdown text={feature.description} />
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

