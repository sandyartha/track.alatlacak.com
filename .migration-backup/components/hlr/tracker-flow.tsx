'use client'

const steps = [
  {
    step: 1,
    title: 'Pilih Layanan',
    description: 'Pilih antara "Tracker Link" untuk melacak lokasi melalui link yang dapat dibagikan, atau "Tracker Nomor" untuk melacak nomor telepon secara langsung.',
  },
  {
    step: 2,
    title: 'Input Nomor Ponsel Target',
    description: 'Masukkan nomor telepon target yang ingin dilacak dalam format 62812345678 (tanpa +, spasi, atau dash).',
  },
  {
    step: 3,
    title: 'Bagikan Link Tracker',
    description: 'Link tracker akan dihasilkan dan siap dibagikan melalui SMS atau WhatsApp kepada target.',
    examples: [
      'https://example.com/1',
      'https://example.com/2',
      'https://example.com/3',
    ],
  },
]

export function TrackerFlow() {

  return (
    <section id="tracker-flow" className="py-14 border-b border-border">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Cara Kerja
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          Buat Link Pelacak Lokasi
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Ikuti langkah-langkah sederhana untuk membuat link pelacak lokasi yang dapat dibagikan melalui SMS atau WhatsApp.
        </p>
      </div>

      {/* Steps Display */}
      <div className="space-y-6">
        {steps.map((item, index) => (
          <div key={index} className="flex gap-4">
            {/* Step Number */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground font-semibold">
                {item.step}
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-12 bg-border mt-2" />
              )}
            </div>

            {/* Step Content */}
            <div className="pb-6 flex-1">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              {/* Show examples for step 3 */}
              {item.examples && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Contoh Link
                  </p>
                  <div className="space-y-2 bg-muted/40 rounded-lg p-3 border border-border/50">
                    {item.examples.map((example, idx) => (
                      <code
                        key={idx}
                        className="text-xs text-foreground/80 block font-mono break-all"
                      >
                        {example}
                      </code>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
