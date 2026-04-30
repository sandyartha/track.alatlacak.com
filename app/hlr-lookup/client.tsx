'use client'

import { useState } from 'react'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"

export default function HLRLookupClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <MobileNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <main className="flex-1 md:ml-64">
        <div className="mx-auto w-full max-w-5xl px-6 py-14">
          
          {/* Hero Section */}
          <section className="py-14 border-b border-border">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground">
              HLR Lookup Gratis
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Identifikasi Perangkat Tanpa Biaya
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">
              HLR Lookup adalah layanan gratis yang memungkinkan Anda mengidentifikasi informasi perangkat dan penyedia layanan dari nomor telepon dengan mudah dan akurat. Tanpa memerlukan aplikasi atau registrasi yang rumit, cukup masukkan nomor telepon dan dapatkan informasi detail tentang perangkat target.
            </p>
          </section>

          {/* What is HLR Lookup Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Apa itu HLR Lookup?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HLR (Home Location Register) Lookup adalah teknologi yang digunakan untuk mengakses informasi dari database telekomunikasi operator mobile. Teknologi ini memungkinkan identifikasi perangkat, status aktif nomor telepon, dan informasi provider dengan akurat dan real-time.
              </p>
              <p>
                Secara teknis, HLR adalah database pusat yang menyimpan informasi lengkap tentang setiap subscriber pada jaringan mobile. Database ini berisi data penting seperti:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Nama penyedia layanan (operator) dari nomor telepon</li>
                <li>Status aktif atau tidak aktif dari nomor telepon</li>
                <li>Tipe perangkat yang sedang digunakan</li>
                <li>Informasi roaming jika subscriber berada di luar negeri</li>
                <li>Kapasitas dan fitur yang didukung perangkat</li>
                <li>Status prepaid atau postpaid dari nomor</li>
              </ul>
              <p>
                Informasi ini sangat berguna untuk berbagai keperluan bisnis dan personal, termasuk verifikasi nomor telepon, identifikasi penyalahgunaan akun, dan penelitian perilaku konsumen.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Manfaat HLR Lookup Gratis
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border p-6 bg-muted/30">
                <h3 className="font-semibold text-foreground mb-2">Akurat dan Real-time</h3>
                <p className="text-sm text-muted-foreground">
                  Dapatkan informasi terkini langsung dari database operator, memastikan akurasi data yang tinggi dan update secara real-time.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6 bg-muted/30">
                <h3 className="font-semibold text-foreground mb-2">Tanpa Biaya Tersembunyi</h3>
                <p className="text-sm text-muted-foreground">
                  Layanan HLR Lookup gratis kami tidak memiliki biaya tersembunyi. Semua informasi dapat diakses tanpa perlu membayar apapun.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6 bg-muted/30">
                <h3 className="font-semibold text-foreground mb-2">Mudah Digunakan</h3>
                <p className="text-sm text-muted-foreground">
                  Interface yang sederhana dan intuitif membuat siapa saja dapat menggunakan layanan ini tanpa memerlukan pengetahuan teknis khusus.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6 bg-muted/30">
                <h3 className="font-semibold text-foreground mb-2">Tanpa Aplikasi</h3>
                <p className="text-sm text-muted-foreground">
                  Layanan berbasis web yang dapat diakses dari perangkat apapun tanpa perlu menginstal aplikasi tambahan.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Cara Kerja HLR Lookup
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Masukkan Nomor Telepon</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Cukup masukkan nomor telepon yang ingin Anda cek ke dalam form. Format standar Indonesia dimulai dengan 62 atau 0.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Query Database HLR</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Sistem kami akan melakukan query ke database HLR operator telekomunikasi terkait untuk mengumpulkan informasi lengkap tentang nomor tersebut.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Tampilkan Hasil</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Hasil HLR Lookup ditampilkan dalam hitungan detik, mencakup operator, status perangkat, dan informasi relevan lainnya.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Kasus Penggunaan HLR Lookup
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Verifikasi Nomor Telepon</h3>
                <p>
                  HLR Lookup membantu memverifikasi bahwa nomor telepon adalah valid dan aktif sebelum mengirim SMS atau melakukan komunikasi penting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Pencegahan Fraud</h3>
                <p>
                  Identifikasi nomor telepon fraud atau invalid untuk mencegah penyalahgunaan akun dan melindungi database pengguna dari data yang tidak valid.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Penelitian Konsumen</h3>
                <p>
                  Analisis perilaku konsumen berdasarkan data perangkat dan operator yang digunakan untuk strategi marketing yang lebih efektif.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Keamanan Akun</h3>
                <p>
                  Verifikasi nomor telepon pengguna untuk memastikan keamanan akun dan mencegah akses tidak sah dari pihak ketiga.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Keterbatasan HLR Lookup Gratis
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Meskipun HLR Lookup gratis sangat berguna, ada beberapa keterbatasan yang perlu diketahui:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Tidak dapat menampilkan lokasi presisi real-time pengguna</li>
                <li>Informasi terbatas hanya pada data yang tersedia di database operator</li>
                <li>Akurasi dapat bervariasi tergantung pada update database operator</li>
                <li>Tidak semua operator menyediakan informasi lengkap untuk privasi pengguna</li>
              </ul>
            </div>
          </section>

          {/* Premium Services CTA */}
          <section className="py-14 border-b border-border">
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                Butuh Fitur Lebih Canggih?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Jika Anda membutuhkan fitur pelacakan yang lebih canggih dengan presisi akurat dan real-time location tracking, kami menawarkan layanan premium:
              </p>
              <div className="space-y-3">
                <a 
                  href="/tracker-premium"
                  className="block text-primary hover:underline font-medium"
                >
                  → Tracker Link Premium - Lacak lokasi via link yang dapat dibagikan
                </a>
                <a 
                  href="/tracker-premium#tracker-nomor"
                  className="block text-primary hover:underline font-medium"
                >
                  → Tracker Nomor Premium - Lacak nomor HP dengan presisi tinggi
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Layanan premium kami menyediakan akurasi lokasi yang lebih tinggi dengan update real-time dan fitur-fitur tambahan untuk kebutuhan bisnis Anda.
              </p>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-8">
            <div className="flex flex-wrap gap-3">
              <a href="/" className="text-xs font-medium text-primary hover:underline">← Kembali ke Beranda</a>
              <span className="text-border">•</span>
              <a href="/#tracker-flow" className="text-xs font-medium text-primary hover:underline">Cara Kerja Tracker</a>
              <span className="text-border">•</span>
              <a href="/tracker-premium" className="text-xs font-medium text-primary hover:underline">Layanan Premium</a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
