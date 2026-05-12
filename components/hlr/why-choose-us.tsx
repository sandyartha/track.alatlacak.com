'use client'

import { ShieldCheck, Zap, Award } from 'lucide-react'

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Tidak memerlukan pemasangan aplikasi yang beresiko',
    description:
      'Akses layanan langsung dari browser tanpa perlu install apapun. Aman, cepat, dan tidak meninggalkan jejak di perangkat Anda. Hindari risiko malware, spyware, dan keamanan data privasi.',
    keywords: ['Aman', 'Tanpa install', 'Browser-based', 'Privasi terjamin'],
  },
  {
    icon: Zap,
    title: 'Tidak butuh waktu lama — Hasil cepat untuk kebutuhan mendadak',
    description:
      'Dapatkan hasil dalam hitungan detik hingga menit. Untuk tracking time-sensitive dan urgency tinggi, hubungi tim support kami untuk prioritas premium dengan hasil instant dalam 2 menit.',
    keywords: ['Cepat', 'Instant results', 'Real-time tracking', 'Urgent support'],
  },
  {
    icon: Award,
    title: 'Garansi 100% — Uang kembali jika lokasi tidak berhasil didapat',
    description:
      'Kepercayaan adalah prioritas. Kami memberikan jaminan uang kembali 100% selama 7 hari jika hasil tidak sesuai ekspektasi atau lokasi gagal diakses. Tidak ada pertanyaan, tidak ada biaya tersembunyi, transaksi Anda aman.',
    keywords: [
      'Garansi uang kembali',
      'Kepercayaan',
      'Risk-free',
      'Transparansi total',
    ],
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-14 border-b border-border">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Keunggulan Layanan
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          Mengapa Pilih Tracker LOC ID?
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Layanan kami dirancang untuk memberikan solusi terpercaya, aman, dan transparan dalam
          pelacakan nomor HP di seluruh Indonesia. Cepat, mudah, dan{' '}
          <strong className="text-foreground">dijamin hasil</strong>.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

