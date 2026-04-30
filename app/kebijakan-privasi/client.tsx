'use client'

import { useState } from 'react'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"

export default function PrivacyClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <MobileNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <main className="flex-1 md:ml-64">
        <div className="mx-auto w-full max-w-5xl px-6 py-14">
          
          {/* Header */}
          <section className="py-10 border-b border-border">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Kebijakan Privasi
            </h1>
            <p className="mt-3 text-muted-foreground">
              Terakhir diperbarui: Januari 2024
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Tracker Loc ID ("kami", "kami", atau "perusahaan") berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan praktik data kami dan hak Anda.
            </p>
          </section>

          {/* Content */}
          <section className="py-10 space-y-10">
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Informasi yang Kami Kumpulkan</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Kami mengumpulkan informasi dalam berbagai cara:</p>
                <div>
                  <h3 className="font-semibold text-foreground">a) Informasi yang Anda Berikan Secara Langsung</h3>
                  <ul className="list-disc list-inside ml-2 space-y-2 text-sm">
                    <li>Nama dan informasi kontak</li>
                    <li>Nomor telepon pengguna atau target</li>
                    <li>Email dan akun media sosial</li>
                    <li>Informasi pembayaran dan transaksi</li>
                    <li>Pertanyaan atau komentar yang Anda kirimkan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">b) Informasi yang Dikumpulkan Secara Otomatis</h3>
                  <ul className="list-disc list-inside ml-2 space-y-2 text-sm">
                    <li>Data lokasi GPS dari perangkat</li>
                    <li>Informasi cell tower dan triangulation data</li>
                    <li>IP address dan identifikasi perangkat</li>
                    <li>Browser dan tipe perangkat yang digunakan</li>
                    <li>Log akses dan aktivitas pengguna</li>
                    <li>Cookie dan teknologi tracking serupa</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">c) Informasi dari Pihak Ketiga</h3>
                  <ul className="list-disc list-inside ml-2 space-y-2 text-sm">
                    <li>Data dari operator telekomunikasi (HLR data)</li>
                    <li>Informasi dari payment gateway</li>
                    <li>Data dari social media jika Anda login via social</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Bagaimana Kami Menggunakan Informasi</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Menyediakan dan meningkatkan layanan kami</li>
                  <li>Memproses transaksi dan pengiriman layanan</li>
                  <li>Mengirim komunikasi dan update tentang akun Anda</li>
                  <li>Merespons pertanyaan dan permintaan Anda</li>
                  <li>Analisis dan research untuk meningkatkan pengalaman pengguna</li>
                  <li>Keamanan dan fraud detection</li>
                  <li>Compliance dengan kewajiban hukum</li>
                  <li>Marketing dan promotional activities (dengan persetujuan Anda)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Perlindungan Data</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Kami menggunakan berbagai ukuran keamanan untuk melindungi informasi Anda:</p>
                <ul className="list-disc list-inside ml-2 space-y-2 text-sm">
                  <li>Enkripsi SSL/TLS untuk semua transmisi data</li>
                  <li>Database encryption untuk data di rest</li>
                  <li>Firewall dan intrusion detection systems</li>
                  <li>Regular security audits dan penetration testing</li>
                  <li>Akses control dan authentication yang ketat</li>
                  <li>Backup dan disaster recovery procedures</li>
                  <li>Compliance dengan GDPR dan regulasi privasi lokal</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing dan Disclosure</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi dalam situasi berikut:</p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Dengan service providers yang membantu operasi kami</li>
                  <li>Untuk compliance dengan hukum atau regulasi</li>
                  <li>Dalam hal merger atau acquisition</li>
                  <li>Dengan persetujuan eksplisit Anda</li>
                  <li>Untuk melindungi hak, properti, dan keselamatan kami</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Hak dan Pilihan Anda</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside ml-2 space-y-2 text-sm">
                  <li>Akses data pribadi yang kami miliki tentang Anda</li>
                  <li>Mengkoreksi data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda (dengan pengecualian tertentu)</li>
                  <li>Opt-out dari komunikasi marketing</li>
                  <li>Withdraw persetujuan untuk pengolahan data</li>
                  <li>Portabilitas data dalam format terstruktur</li>
                </ul>
                <p className="text-sm">
                  Untuk menggunakan hak-hak ini, hubungi kami di support@trackerlocid.com
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Retention Data</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Kami menyimpan data pribadi Anda selama diperlukan untuk memberikan layanan atau sesuai dengan persyaratan hukum. Periode retention bervariasi berdasarkan konteks pengumpulan dan kebutuhan bisnis kami. Anda dapat meminta penghapusan data kapan saja.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies dan Tracking</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Website kami menggunakan cookies untuk meningkatkan pengalaman Anda. Cookies ini membantu kami mengingat preferensi dan menganalisis penggunaan website. Anda dapat mengkonfigurasi browser untuk menolak cookies, namun ini mungkin mempengaruhi fungsionalitas website.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Links ke Website Lain</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Website kami mungkin mengandung links ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi dari website tersebut. Kami merekomendasikan Anda membaca kebijakan privasi mereka.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Privasi Anak-anak</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Layanan kami tidak ditujukan untuk anak di bawah 13 tahun. Kami tidak mengumpulkan informasi pribadi dari anak-anak secara sadar. Jika kami menyadari kami telah mengumpulkan informasi dari anak-anak, kami akan menghapusnya segera.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Perubahan Kebijakan</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan signifikan melalui email atau notification di website kami.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Hubungi Kami</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami:</p>
                <div>
                  <p className="font-semibold text-foreground">Tracker Loc ID</p>
                  <p>Email: support@trackerlocid.com</p>
                  <p>Website: https://www.alatlacak.com</p>
                  <p>Address: Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

          </section>

          {/* Internal Links */}
          <section className="py-8 border-t border-border">
            <div className="flex flex-wrap gap-3">
              <a href="/" className="text-xs font-medium text-primary hover:underline">← Kembali ke Beranda</a>
              <span className="text-border">•</span>
              <a href="/syarat-layanan" className="text-xs font-medium text-primary hover:underline">Syarat Layanan</a>
              <span className="text-border">•</span>
              <a href="/disclaimer" className="text-xs font-medium text-primary hover:underline">Disclaimer</a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
