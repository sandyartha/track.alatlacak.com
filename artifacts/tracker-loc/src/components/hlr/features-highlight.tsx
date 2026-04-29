'use client'

import { Zap, Shield, Clock, CheckCircle2 } from 'lucide-react'

const highlights = [
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Dapatkan hasil dalam hitungan detik tanpa perlu setup rumit atau instalasi aplikasi.',
  },
  {
    icon: Shield,
    title: 'Aman & Terpercaya',
    description: 'Semua data terenkripsi dengan standar keamanan internasional & sesuai regulasi Indonesia.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Tracking tersedia 24 jam non-stop tanpa downtime, kapan saja Anda membutuhkan.',
  },
  {
    icon: CheckCircle2,
    title: 'Jaminan Puas',
    description: 'Uang kembali 100% jika hasil tidak sesuai ekspektasi. Tidak ada risiko, hanya kepuasan.',
  },
]

export function FeaturesHighlight() {
  return (
    <section className="py-14 border-b border-border">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {highlights.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
