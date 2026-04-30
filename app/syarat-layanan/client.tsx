'use client'

import { useState } from 'react'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"

export default function TermsClient() {
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
              Syarat Layanan
            </h1>
            <p className="mt-3 text-muted-foreground">
              Terakhir diperbarui: Januari 2024
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Selamat datang di Tracker Loc ID. Dengan mengakses dan menggunakan website dan layanan kami, Anda menerima dan setuju terikat dengan syarat dan kondisi berikut.
            </p>
          </section>

          {/* Content */}
          <section className="py-10 space-y-10">
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Penerimaan Syarat</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Dengan menggunakan website dan layanan kami, Anda menyetujui syarat-syarat ini. Jika Anda tidak setuju dengan syarat-syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Deskripsi Layanan</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Tracker Loc ID menyediakan layanan pelacakan lokasi berbasis web. Layanan kami mencakup Tracker Link Premium, Tracker Nomor Premium, dan HLR Lookup. Kami berhak untuk mengubah atau menghentikan layanan ini kapan saja.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Penggunaan Sesuai Peraturan</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang legal dan sesuai dengan semua hukum dan regulasi yang berlaku. Anda tidak boleh:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Menggunakan layanan untuk stalking, harassment, atau ancaman</li>
                  <li>Melakukan aktivitas ilegal atau merugikan orang lain</li>
                  <li>Mengakses atau mencoba mengakses sistem kami secara tidak sah</li>
                  <li>Menyebarkan malware atau virus</li>
                  <li>Melakukan fraud atau penipuan</li>
                  <li>Menyalahgunakan layanan kami untuk spamming atau marketing tidak sah</li>
                  <li>Melanggar hak kekayaan intelektual kami atau pihak ketiga</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Akun Pengguna</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Jika Anda membuat akun di platform kami:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Anda bertanggung jawab atas kerahasiaan password Anda</li>
                  <li>Anda setuju untuk memberikan informasi yang akurat dan terkini</li>
                  <li>Anda bertanggung jawab untuk semua aktivitas di akun Anda</li>
                  <li>Anda harus segera memberi tahu kami tentang akses tidak sah</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Pembayaran dan Pembatalan</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Untuk layanan premium kami:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Harga dapat berubah dengan notifikasi sebelumnya</li>
                  <li>Pembayaran harus dilakukan sesuai dengan metode yang ditentukan</li>
                  <li>Refund hanya tersedia dalam kondisi tertentu sesuai kebijakan kami</li>
                  <li>Kami berhak untuk menolak atau membatalkan pesanan</li>
                  <li>Subscription dapat dibatalkan kapan saja dengan permohonan tertulis</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Semua konten di website kami termasuk text, graphics, logos, images, dan software adalah properti kami atau licensees kami. Anda tidak boleh mereproduksi, mendistribusikan, atau mentransmisikan konten ini tanpa izin tertulis kami.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Layanan kami disediakan "as is" dan "as available". Kami tidak memberikan warranty apapun, baik express maupun implied. Kami tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Akurasi atau kelengkapan informasi lokasi</li>
                  <li>Kerusakan atau kehilangan data</li>
                  <li>Downtime atau interruption layanan</li>
                  <li>Kerugian atau kerusakan tidak langsung atau konsekuensial</li>
                  <li>Keamanan atau privacy dari informasi yang Anda transmisikan</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Dalam sejauh yang diizinkan oleh hukum, liability kami kepada Anda tidak akan melebihi jumlah yang Anda bayarkan untuk layanan kami dalam 12 bulan terakhir.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Indemnification</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Anda setuju untuk membela, mengganti rugi, dan mempertahankan kami dari semua klaim, kerugian, atau biaya yang timbul dari penggunaan layanan Anda yang melanggar syarat-syarat ini atau melanggar hak pihak ketia.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Terminasi</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Kami berhak untuk menghentikan atau menangguhkan akun Anda kapan saja jika Anda melanggar syarat-syarat ini atau hukum yang berlaku. Anda dapat menghentikan penggunaan layanan kami kapan saja.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifikasi Syarat</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Kami berhak untuk memodifikasi syarat-syarat ini kapan saja. Perubahan signifikan akan dikomunikasikan melalui email atau notification di website kami.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Hukum yang Berlaku</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Syarat-syarat ini diatur oleh dan ditafsirkan sesuai hukum Republik Indonesia. Anda setuju untuk tunduk pada yurisdiksi eksklusif pengadilan Indonesia.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Hubungi Kami</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Jika Anda memiliki pertanyaan tentang syarat layanan ini, silakan hubungi kami:</p>
                <div>
                  <p className="font-semibold text-foreground">Tracker Loc ID</p>
                  <p>Email: support@trackerlocid.com</p>
                  <p>Website: https://www.alatlacak.com</p>
                </div>
              </div>
            </div>

          </section>

          {/* Internal Links */}
          <section className="py-8 border-t border-border">
            <div className="flex flex-wrap gap-3">
              <a href="/" className="text-xs font-medium text-primary hover:underline">← Kembali ke Beranda</a>
              <span className="text-border">•</span>
              <a href="/kebijakan-privasi" className="text-xs font-medium text-primary hover:underline">Kebijakan Privasi</a>
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
