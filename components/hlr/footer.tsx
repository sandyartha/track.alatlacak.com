"use client"

import { MapPin, Shield, Zap, Globe } from "lucide-react"
import footerData from "@/content/footer.json"

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-muted/30 pt-16 pb-8 md:ml-64">
      <div className="mx-auto max-w-5xl px-6">
        {/* CTA Section */}
        <div className="mb-16 rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {footerData.cta.heading}
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            {footerData.cta.subheading}
          </p>
          <a
            href="https://www.alatlacak.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all hover:shadow-lg hover:scale-105"
          >
            {footerData.cta.button}
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {footerData.features.map((feature) => (
            <div key={feature.title} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid gap-8 sm:grid-cols-3 mb-12 py-12 border-y border-border">
          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-foreground font-medium hover:underline"
                    >
                      {link.label}
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {link.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">{footerData.brand.name}</span>
            <span className="hidden sm:inline">·</span>
            <span>{footerData.brand.tagline}</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>alatlacak.com</span>
            <span>|</span>
            <span>{new Date().getFullYear()} Tracker Loc ID</span>
          </div>
        </div>

        {/* Copyright & SEO Text */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground leading-relaxed text-center">
            {footerData.copyright}
          </p>
          
          {/* SEO Keywords (hidden but in HTML for search engines) */}
          <div className="sr-only mt-4">
            <p>Kata kunci: {footerData.seo.keywords.join(", ")}</p>
            <p>{footerData.brand.description}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
