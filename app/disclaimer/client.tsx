'use client'

import { useState } from 'react'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"

export default function DisclaimerClient() {
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
              Disclaimer
            </h1>
            <p className="mt-3 text-muted-foreground">
              Batasan Tanggung Jawab dan Penggunaan Layanan
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Disclaimer ini menjelaskan batasan tanggung jawab kami dan penggunaan yang tepat dari layanan Tracker LOC ID.
            </p>
          </section>

          {/* Content */}
          <section className="py-10 space-y-10">
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Tidak Ada Jaminan Akurasi</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Meskipun kami berusaha memberikan informasi lokasi yang akurat, Tracker LOC ID tidak memberikan jaminan 100% akurasi. Akurasi lokasi dapat bervariasi tergantung pada:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Kepadatan dan lokasi cell tower di area tertentu</li>
                  <li>Kondisi cuaca dan geografis</li>
                  <li>Jenis dan kondisi perangkat target</li>
                  <li>Ketersediaan sinyal dan konektivitas</li>
                  <li>Data dari provider telekomunikasi</li>
                </ul>
                <p>
                  Anda menggunakan layanan ini dengan pemahaman bahwa hasilnya mungkin tidak selalu akurat.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Tanggung Jawab Pengguna</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Pengguna bertanggung jawab sepenuhnya untuk penggunaan layanan kami. Kami tidak bertanggung jawab untuk:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Keputusan atau tindakan yang diambil berdasarkan informasi dari layanan kami</li>
                  <li>Penggunaan layanan untuk tujuan ilegal atau tidak etis</li>
                  <li>Kerugian atau kerusakan yang timbul dari penggunaan layanan</li>
                  <li>Pelanggaran privasi atau hak pihak ketiga</li>
                  <li>Akibat dari information yang tidak akurat atau outdated</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Tidak Untuk Penentuan Lokasi Presisi</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Layanan Tracker LOC ID tidak dirancang dan tidak boleh digunakan untuk:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Pelacakan real-time presisi dengan margin kesalahan kurang dari 50 meter</li>
                  <li>Aplikasi navigationyang memerlukan akurasi GPS tinggi</li>
                  <li>Penentuan lokasi indoor atau dalam gedung</li>
                  <li>Aplikasi keamanan kritis atau life-saving</li>
                  <li>Tracking yang memerlukan update lebih dari sekali per menit</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Keamanan dan Privasi</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Meskipun kami menggunakan enkripsi dan security measures, tidak ada sistem yang 100% aman. Kami tidak dapat menjamin:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Keamanan absolut dari data Anda</li>
                  <li>Tidak akan ada breach atau unauthorized access</li>
                  <li>Privasi dari pihak ketiga yang berdedikasi</li>
                  <li>Tidak ada interception atau eavesdropping</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Availabilitas Layanan</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Meskipun kami berusaha menjaga uptime 99.9%, layanan dapat mengalami downtime atau interruption karena:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Pemeliharaan dan updates sistem</li>
                  <li>Masalah dengan provider telekomunikasi</li>
                  <li>Kondisi network atau internet</li>
                  <li>Force majeure atau circumstances beyond our control</li>
                  <li>Bug atau error dalam sistem</li>
                </ul>
                <p>
                  Kami tidak bertanggung jawab untuk kerugian akibat unavailability layanan.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Provider</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Layanan kami bergantung pada data dari provider pihak ketiga, termasuk operator telekomunikasi. Kami tidak bertanggung jawab untuk:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Akurasi atau kelengkapan data dari provider</li>
                  <li>Delay dalam update data</li>
                  <li>Perubahan atau unavailability data dari provider</li>
                  <li>Compliance provider dengan hukum privacy</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Penggunaan yang Tidak Disarankan</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Kami sangat tidak merekomendasikan menggunakan Tracker LOC ID untuk:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Melacak HP yang hilang atau dicuri (gunakan Find My Device)</li>
                  <li>Surveilans yang melanggar hukum atau privacy pihak lain</li>
                  <li>Stalking, harassment, atau ancaman</li>
                  <li>Aktivitas criminal atau illegal</li>
                  <li>Keperluan medis emergency</li>
                  <li>Navigasi untuk kendaraan atau transportation</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Tanpa Warranty</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Layanan kami disediakan "AS IS" dan "AS AVAILABLE" tanpa warranty apapun, express maupun implied:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Tidak ada warranty untuk merchantability atau fitness untuk tujuan tertentu</li>
                  <li>Tidak ada warranty untuk title atau non-infringement</li>
                  <li>Tidak ada warranty bahwa layanan akan memenuhi kebutuhan Anda</li>
                  <li>Tidak ada warranty bahwa layanan akan uninterrupted atau error-free</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Dalam sejauh yang diizinkan oleh hukum, Tracker LOC ID tidak bertanggung jawab untuk:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Indirect, incidental, atau consequential damages</li>
                  <li>Loss of profits, revenue, atau data</li>
                  <li>Business interruption atau loss of business opportunity</li>
                  <li>Damages yang mungkin diperkirakan atau tidak diperkirakan</li>
                </ul>
                <p>
                  Liability total kami tidak akan melebihi jumlah yang Anda bayarkan dalam 12 bulan terakhir.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Anda setuju untuk membela, mengindemnifikasi, dan mempertahankan Tracker LOC ID dari semua klaim, kerugian, atau biaya yang timbul dari penggunaan layanan Anda.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Compliance dengan Hukum</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Anda bertanggung jawab untuk memastikan penggunaan layanan kami compliant dengan semua hukum dan regulasi yang berlaku. Kami tidak bertanggung jawab untuk:
                </p>
                <ul className="list-disc list-inside ml-2 space-y-2">
                  <li>Implikasi hukum dari penggunaan layanan</li>
                  <li>Violation dari privacy laws atau data protection regulations</li>
                  <li>Violation dari criminal laws atau regulations lainnya</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Kontak untuk Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>Jika Anda memiliki pertanyaan tentang disclaimer ini, silakan hubungi kami:</p>
                <div>
                  <p className="font-semibold text-foreground">Tracker LOC ID</p>
                  <p>Email: support@trackerlocid.com</p>
                  <p>Website: https://www.alatlacak.com</p>
                </div>
              </div>
            </div>

          </section>

          {/* Important Notice */}
          <section className="py-10 border-t border-border">
            <div className="rounded-lg border-2 border-yellow-500/50 bg-yellow-500/10 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Pemberitahuan Penting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dengan menggunakan layanan Tracker LOC ID, Anda menerima semua disclaimers, limitations, dan batasan tanggung jawab yang disebutkan di atas. Jika Anda tidak setuju dengan disclaimer ini, Anda tidak boleh menggunakan layanan kami.
              </p>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-8">
            <div className="flex flex-wrap gap-3">
              <a href="/" className="text-xs font-medium text-primary hover:underline">← Kembali ke Beranda</a>
              <span className="text-border">•</span>
              <a href="/kebijakan-privasi" className="text-xs font-medium text-primary hover:underline">Kebijakan Privasi</a>
              <span className="text-border">•</span>
              <a href="/syarat-layanan" className="text-xs font-medium text-primary hover:underline">Syarat Layanan</a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

