import { Link2, Phone, Send, Package } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Kunjungi Salah Satu Link Berikut",
    description: "Pilih salah satu layanan pelacak link di bawah. Jangan gunakan semua sekaligus — cukup pilih satu yang paling sesuai.",
    note: "Website sedang disiapkan, segera hadir.",
    badge: "Segera Hadir",
  },
  {
    number: "02",
    icon: Phone,
    title: "Input Nomor Ponsel Target",
    description: "Masukkan nomor HP target yang ingin dilacak lokasinya. Sistem akan otomatis membuat link pelacakan unik khusus untuk nomor tersebut.",
    note: "Link bersifat satu kali pakai dan terenkripsi untuk keamanan.",
  },
  {
    number: "03",
    icon: Send,
    title: "Kirim Link ke Target",
    description: "Salin link yang dihasilkan dan kirimkan ke target melalui SMS atau WhatsApp. Saat target membuka link, sistem akan langsung menangkap koordinat GPS secara real-time.",
    note: "Akurasi hingga 10–50 meter tergantung perangkat target.",
  },
  {
    number: "04",
    icon: Package,
    title: "Paket Lengkap: Tracker Link + Tracker Nomor",
    description: "Layanan Tracker Link sudah termasuk dalam satu paket bersama Tracker Nomor. Dapatkan dua layanan sekaligus — pelacakan via link dan via nomor HP — dalam satu pembelian.",
    highlight: true,
  },
]

export function TrackerLinkSteps() {
  return (
    <section id="tracker-link" className="py-14 border-b border-border">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Cara Kerja
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          Tracker Link — Pelacakan via Link Unik
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xl">
          Buat link pelacakan unik, kirim ke target, dan dapatkan koordinat GPS mereka secara real-time saat link dibuka — tanpa install aplikasi apapun.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-0">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isLast = idx === steps.length - 1
            return (
              <div key={step.number} className="relative flex gap-5 sm:gap-6">
                {/* Step indicator */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                      step.highlight
                        ? "bg-primary border-primary"
                        : "bg-background border-border"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${step.highlight ? "text-primary-foreground" : "text-muted-foreground"}`}
                    />
                  </div>
                  {!isLast && (
                    <div className="sm:hidden w-px flex-1 bg-border mt-1 mb-1 min-h-[24px]" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                  <div className="flex items-start gap-2 flex-wrap">
                    <span className="text-[10px] font-bold text-muted-foreground/60 leading-none mt-1 font-mono">
                      {step.number}
                    </span>
                    {step.badge && (
                      <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:text-amber-400">
                        {step.badge}
                      </span>
                    )}
                    {step.highlight && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        Paket Bundle
                      </span>
                    )}
                  </div>

                  <h3
                    className={`mt-1.5 text-sm font-semibold leading-snug ${
                      step.highlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {step.note && (
                    <p className="mt-2 text-xs text-muted-foreground/70 italic">
                      ℹ️ {step.note}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
