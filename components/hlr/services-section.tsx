'use client'

import { CheckCircle2, AlertCircle, Zap } from 'lucide-react'
import servicesData from '@/content/services.json'

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

export function ServicesSection() {
  return (
    <section id="services" className="py-14 border-b border-border">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {servicesData.badge}
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          {servicesData.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          <InlineMarkdown text={servicesData.intro} />
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {servicesData.services.map((service) => (
          <div
            key={service.id}
            className="rounded-xl border border-border bg-card p-6 flex flex-col h-full"
          >
            {/* Badge & Title */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="inline-block bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2">
                  {service.badge}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {service.subtitle}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4 pb-4 border-b border-border">
              <p className="text-sm font-semibold text-primary">
                {service.price}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground mb-5">
              <InlineMarkdown text={service.description} />
            </p>

            {/* Highlights */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-3">
                Fitur Unggulan
              </p>
              <ul className="space-y-2">
                {service.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Caveat / Warning */}
            {service.caveat && (
              <div className="mb-4 flex gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                <p className="text-xs text-amber-700 dark:text-amber-200">
                  {service.caveat}
                </p>
              </div>
            )}

            {/* Limitation */}
            {service.limitation && (
              <div className="mb-4 flex gap-2 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                <p className="text-xs text-red-700 dark:text-red-200">
                  ⚠️ {service.limitation}
                </p>
              </div>
            )}

            {/* Best For */}
            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-1">
                Cocok Untuk
              </p>
              <p className="text-sm text-muted-foreground">
                {service.bestFor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

