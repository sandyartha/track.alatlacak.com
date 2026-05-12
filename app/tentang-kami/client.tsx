'use client'

import { useState } from 'react'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"

export default function AboutClient() {
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
              Tentang Tracker LOC ID
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Sejarah, Visi, dan Misi Kami
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">
              Tracker LOC ID adalah platform pelacakan lokasi yang inovatif dan terpercaya. Kami berkomitmen untuk memberikan solusi teknologi tracking yang aman, akurat, dan mudah digunakan untuk berbagai kebutuhan personal dan bisnis di Indonesia.
            </p>
          </section>

          {/* Sejarah Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Sejarah Kami
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Tracker LOC ID didirikan pada tahun 2020 dengan visi untuk menghadirkan solusi tracking yang aman, akurat, dan mudah diakses oleh semua orang. Pada awalnya, kami memulai dengan tim kecil yang terdiri dari para ahli di bidang teknologi, telekomunikasi, dan keamanan data.
              </p>
              <p>
                Perjalanan kami dimulai dari mengidentifikasi kebutuhan pasar Indonesia akan layanan tracking yang dapat diandalkan. Saat itu, banyak orang kesulitan melacak lokasi keluarga mereka atau mengoptimalkan fleet management dengan tools yang tersedia. Kami percaya bahwa teknologi tracking yang baik harus accessible, affordable, dan reliable.
              </p>
              <p>
                Dalam beberapa tahun pertama, kami fokus pada research and development untuk memahami kebutuhan market yang dinamis. Kami bekerja sama dengan universitas terkemuka dan lembaga telekomunikasi untuk mengembangkan algoritma triangulation yang presisi tinggi.
              </p>
              <p>
                Pada tahun 2021, kami meluncurkan Tracker Link Premium - solusi tracking via link yang dapat dibagikan. Produk ini menjadi sukses besar di kalangan business dan personal users yang membutuhkan tracking tanpa perlu instalasi aplikasi.
              </p>
              <p>
                Tahun 2022, kami meluncurkan Tracker Nomor Premium yang memungkinkan tracking langsung nomor HP dengan akurasi hingga 50-100 meter. Fitur ini menggunakan teknologi cell tower triangulation yang dikembangkan selama bertahun-tahun.
              </p>
              <p>
                Saat ini, Tracker LOC ID telah melayani ribuan pelanggan di seluruh Indonesia dan terus berkembang. Kami mengalami pertumbuhan signifikan dalam user base dan kepuasan pelanggan, dengan rating 4.8/5 dari lebih dari 10.000 reviews.
              </p>
            </div>
          </section>

          {/* Visi & Misi Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Visi & Misi Kami
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-border p-8 bg-muted/30">
                <h3 className="text-xl font-bold text-foreground mb-4">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi platform pelacakan lokasi terdepan di Indonesia yang dapat dipercaya oleh jutaan orang untuk keamanan, transparansi, dan efisiensi bisnis mereka.
                </p>
              </div>
              <div className="rounded-lg border border-border p-8 bg-muted/30">
                <h3 className="text-xl font-bold text-foreground mb-4">Misi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menyediakan teknologi tracking yang inovatif, aman, dan mudah digunakan untuk membantu individu dan bisnis membuat keputusan yang lebih baik melalui real-time location intelligence.
                </p>
              </div>
            </div>
          </section>

          {/* Nilai-Nilai Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Nilai-Nilai Kami
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Keamanan Data</h3>
                <p className="text-sm text-muted-foreground">
                  Kami menggunakan enkripsi military-grade dan mematuhi standar keamanan internasional untuk melindungi data pengguna.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Transparansi</h3>
                <p className="text-sm text-muted-foreground">
                  Kami jelas tentang bagaimana teknologi kami bekerja dan bagaimana kami menggunakan data pengguna.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Inovasi Berkelanjutan</h3>
                <p className="text-sm text-muted-foreground">
                  Kami terus berinovasi dan meningkatkan layanan berdasarkan feedback pengguna dan perkembangan teknologi terbaru.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Kepuasan Pelanggan</h3>
                <p className="text-sm text-muted-foreground">
                  Tim support kami tersedia 24/7 untuk memastikan setiap pelanggan mendapatkan pengalaman terbaik.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Akurasi & Reliability</h3>
                <p className="text-sm text-muted-foreground">
                  Kami berkomitmen untuk memberikan data lokasi yang akurat dan sistem yang reliable 99.9% uptime.
                </p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Etika Bisnis</h3>
                <p className="text-sm text-muted-foreground">
                  Kami menjalankan bisnis dengan integritas tinggi dan mematuhi semua regulasi yang berlaku.
                </p>
              </div>
            </div>
          </section>

          {/* Tim Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Tim Kami
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Tracker LOC ID digerakkan oleh tim yang berdedikasi dan berpengalaman di berbagai bidang. Tim kami terdiri dari para ahli dalam teknologi, telekomunikasi, data science, dan customer service.
              </p>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Struktur Tim</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Engineering & Technology</h4>
                    <p className="text-sm">Tim kami terdiri dari software engineers, data scientists, dan network specialists yang berpengalaman di perusahaan teknologi terkemuka.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Development</h4>
                    <p className="text-sm">Tim yang fokus pada pertumbuhan bisnis, partnership strategis, dan ekspansi pasar di berbagai sektor industri.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Customer Support</h4>
                    <p className="text-sm">Tim support yang terlatih dan responsif, tersedia 24/7 untuk membantu semua kebutuhan pelanggan kami.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Compliance & Security</h4>
                    <p className="text-sm">Tim yang memastikan semua operasi kami compliance dengan regulasi dan standar keamanan internasional.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teknologi Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Teknologi Kami
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Kami menggunakan teknologi terdepan untuk memberikan layanan tracking terbaik. Stack teknologi kami mencakup:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">GPS & Location Services</h3>
                  <p className="text-sm">Integrasi dengan GPS modern dan location APIs untuk presisi lokasi yang tinggi.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cell Tower Triangulation</h3>
                  <p className="text-sm">Algoritma triangulation advanced yang mengakses data dari semua operator telekomunikasi.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Machine Learning</h3>
                  <p className="text-sm">ML models untuk predictive tracking dan pattern recognition dari data lokasi.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cloud Infrastructure</h3>
                  <p className="text-sm">Server enterprise-grade dengan auto-scaling dan disaster recovery capabilities.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Encryption</h3>
                  <p className="text-sm">End-to-end encryption dan security protocols untuk proteksi maksimal data.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Real-time Analytics</h3>
                  <p className="text-sm">Dashboard real-time dengan analytics mendalam untuk insights lokasi yang actionable.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Achievement Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Pencapaian Kami
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-center p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Pengguna Aktif</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <p className="text-muted-foreground">Tracking Queries/Hari</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime Service</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <p className="text-muted-foreground">Rating dari 10K+ Reviews</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Hubungi Kami
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Kami senang mendengar dari Anda. Jika Anda memiliki pertanyaan, saran, atau ingin berkolaborasi, silakan hubungi kami:</p>
              <ul className="space-y-2">
                <li>Email: support@trackerlocid.com</li>
                <li>WhatsApp: +62 812-3456-7890</li>
                <li>Instagram: @trackerlocid</li>
                <li>Website: https://www.alatlacak.com</li>
              </ul>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-8">
            <div className="flex flex-wrap gap-3">
              <a href="/" className="text-xs font-medium text-primary hover:underline">← Kembali ke Beranda</a>
              <span className="text-border">•</span>
              <a href="/tracker-premium" className="text-xs font-medium text-primary hover:underline">Layanan Premium</a>
              <span className="text-border">•</span>
              <a href="/hlr-lookup" className="text-xs font-medium text-primary hover:underline">HLR Lookup</a>
              <span className="text-border">•</span>
              <a href="/#faq" className="text-xs font-medium text-primary hover:underline">FAQ</a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

