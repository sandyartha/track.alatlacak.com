"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import faqData from "@/content/faq.json"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-foreground">{question}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          open ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="py-14">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {faqData.badge}
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          {faqData.heading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {faqData.description}
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card px-6">
        {faqData.items.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

