'use client'

import { useState } from 'react'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"

export default function TrackerPremiumClient() {
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
              Tracker Premium
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Pelacakan Lokasi dengan Presisi Tinggi dan Real-time
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">
              Layanan premium kami menawarkan dua solusi pelacakan yang dapat disesuaikan dengan kebutuhan Anda: Tracker Link untuk pelacakan via link yang dapat dibagikan, dan Tracker Nomor untuk pelacakan langsung nomor HP dengan presisi akurat.
            </p>
          </section>

          {/* Tracker Link Premium Section */}
          <section id="tracker-link" className="py-14 border-b border-border">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Tracker Link Premium
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pelacakan Lokasi via Link yang Dapat Dibagikan
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Apa itu Tracker Link?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tracker Link adalah layanan premium yang memungkinkan Anda membuat link unik yang dapat dibagikan melalui SMS, WhatsApp, atau media komunikasi lainnya. Ketika target mengakses link tersebut, sistem kami secara otomatis mengumpulkan data lokasi geografis mereka dengan presisi tinggi. Teknologi ini menggunakan kombinasi GPS, cell tower triangulation, dan WiFi mapping untuk memberikan hasil yang akurat.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Keunggulan Tracker Link</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Link Mudah Dibagikan</h4>
                      <p className="text-sm text-muted-foreground">Buat link unik dan bagikan melalui berbagai channel tanpa batasan</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Tracking Real-time</h4>
                      <p className="text-sm text-muted-foreground">Pantau lokasi target secara real-time melalui dashboard kami yang user-friendly</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Akurasi Presisi Tinggi</h4>
                      <p className="text-sm text-muted-foreground">Dapatkan koordinat lokasi dengan akurasi hingga 5-10 meter</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Riwayat Lokasi</h4>
                      <p className="text-sm text-muted-foreground">Akses riwayat pergerakan dan analisis pola mobilitas target</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Tanpa Aplikasi</h4>
                      <p className="text-sm text-muted-foreground">Target hanya perlu membuka link, tidak perlu install aplikasi apapun</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cara Menggunakan Tracker Link</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">1</div>
                    <div>
                      <p className="font-medium text-foreground">Buat Link Tracker</p>
                      <p className="text-sm text-muted-foreground">Masukkan nomor telepon target dan buat link unik</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">2</div>
                    <div>
                      <p className="font-medium text-foreground">Bagikan Link</p>
                      <p className="text-sm text-muted-foreground">Salin dan bagikan link melalui SMS, WhatsApp, atau media lainnya</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">3</div>
                    <div>
                      <p className="font-medium text-foreground">Target Membuka Link</p>
                      <p className="text-sm text-muted-foreground">Ketika target membuka link, sistem mulai mengumpulkan data lokasi</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">4</div>
                    <div>
                      <p className="font-medium text-foreground">Monitor Dashboard</p>
                      <p className="text-sm text-muted-foreground">Pantau lokasi real-time dan akses riwayat pergerakan di dashboard</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Use Case Tracker Link</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Tracking rute pengiriman dan logistik secara real-time</li>
                  <li>• Monitoring keamanan keluarga dengan tracking keberangkatan dan kedatangan</li>
                  <li>• Verifikasi lokasi meet-up atau appointment tanpa aplikasi tambahan</li>
                  <li>• Tracking kendaraan rental atau ride-sharing</li>
                  <li>• Monitoring perjalanan bisnis dan field sales team</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tracker Nomor Premium Section */}
          <section id="tracker-nomor" className="py-14 border-b border-border">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Tracker Nomor Premium
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Lacak Nomor HP dengan Hasil Pasti dan Presisi Akurat
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Apa itu Tracker Nomor?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tracker Nomor adalah layanan premium yang memungkinkan Anda melacak lokasi target hanya dengan memasukkan nomor telepon mereka. Sistem kami menggunakan teknologi advanced triangulation yang mengakses cell tower data dari semua operator telekomunikasi besar di Indonesia untuk memberikan lokasi yang akurat dan terpercaya.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Keunggulan Tracker Nomor</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Hanya Memerlukan Nomor HP</h4>
                      <p className="text-sm text-muted-foreground">Tidak perlu persetujuan target, cukup masukkan nomor telepon</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Akurasi Tinggi</h4>
                      <p className="text-sm text-muted-foreground">Presisi lokasi hingga 50-100 meter dengan technology triangulation terbaru</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Update Real-time</h4>
                      <p className="text-sm text-muted-foreground">Data lokasi diperbarui setiap beberapa menit untuk hasil yang selalu aktual</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Support Semua Operator</h4>
                      <p className="text-sm text-muted-foreground">Bekerja dengan Telkomsel, Indosat, XL Axiata, Tri, Smart, dan Bolt</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Riwayat Lengkap</h4>
                      <p className="text-sm text-muted-foreground">Akses riwayat lokasi hingga 30 hari sebelumnya</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cara Menggunakan Tracker Nomor</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">1</div>
                    <div>
                      <p className="font-medium text-foreground">Masukkan Nomor Target</p>
                      <p className="text-sm text-muted-foreground">Input nomor telepon yang ingin Anda lacak dalam format 628xxxxx</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">2</div>
                    <div>
                      <p className="font-medium text-foreground">Sistem Query Database</p>
                      <p className="text-sm text-muted-foreground">Kami query database cell tower dari semua operator Indonesia</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">3</div>
                    <div>
                      <p className="font-medium text-foreground">Triangulation Processing</p>
                      <p className="text-sm text-muted-foreground">Gunakan algoritma triangulation advanced untuk presisi lokasi maksimal</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">4</div>
                    <div>
                      <p className="font-medium text-foreground">Tampilkan Hasil</p>
                      <p className="text-sm text-muted-foreground">Lihat lokasi real-time di peta dengan akurasi tinggi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Use Case Tracker Nomor</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Keamanan keluarga dan anak-anak dengan monitoring lokasi</li>
                  <li>• Tracking karyawan field untuk optimasi distribusi dan efisiensi</li>
                  <li>• Investigasi kasus perselingkuhan atau investigasi pribadi</li>
                  <li>• Keamanan aset dengan tracking kendaraan atau barang berharga</li>
                  <li>• Penelitian lokasi untuk business intelligence dan market research</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Perbandingan Tracker Link vs Tracker Nomor
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-semibold text-foreground py-3 px-4">Fitur</th>
                    <th className="text-center font-semibold text-foreground py-3 px-4">Tracker Link</th>
                    <th className="text-center font-semibold text-foreground py-3 px-4">Tracker Nomor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Memerlukan Persetujuan</td>
                    <td className="text-center text-muted-foreground">Ya (akses link)</td>
                    <td className="text-center text-muted-foreground">Tidak</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Akurasi</td>
                    <td className="text-center text-muted-foreground">5-10 meter</td>
                    <td className="text-center text-muted-foreground">50-100 meter</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Setup Mudah</td>
                    <td className="text-center text-muted-foreground">Sangat Mudah</td>
                    <td className="text-center text-muted-foreground">Sangat Mudah</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Real-time Tracking</td>
                    <td className="text-center text-muted-foreground">Ya</td>
                    <td className="text-center text-muted-foreground">Ya</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Riwayat Lokasi</td>
                    <td className="text-center text-muted-foreground">7 hari</td>
                    <td className="text-center text-muted-foreground">30 hari</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted-foreground">Ideal Untuk</td>
                    <td className="text-center text-muted-foreground">Tracking dengan persetujuan</td>
                    <td className="text-center text-muted-foreground">Tracking langsung</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Security & Privacy Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
              Keamanan dan Privasi
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Kami sangat serius dalam melindungi privasi dan keamanan data Anda. Semua data yang dikumpulkan melalui layanan tracker kami dienkripsi menggunakan standar industri terbaru.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Enkripsi end-to-end untuk semua transmisi data</li>
                <li>Server dilindungi dengan firewall dan sistem keamanan berlapis</li>
                <li>Compliance dengan regulasi privasi data internasional</li>
                <li>Audit keamanan berkala oleh pihak ketiga independen</li>
                <li>Data pengguna tidak dijual atau dibagikan kepada pihak ketiga</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-14 border-b border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Pertanyaan Umum
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Apakah Tracker Legal?</h3>
                <p className="text-muted-foreground">Layanan kami legal untuk digunakan dalam konteks yang sesuai dengan hukum. Kami merekomendasikan pengguna untuk menggunakan layanan ini dengan etika dan bertanggung jawab.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Berapa Akurasi Lokasi yang Dihasilkan?</h3>
                <p className="text-muted-foreground">Tracker Link memberikan akurasi 5-10 meter, sementara Tracker Nomor memberikan akurasi 50-100 meter tergantung kepadatan cell tower di area tersebut.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Apakah Memerlukan Instalasi Aplikasi?</h3>
                <p className="text-muted-foreground">Tidak. Kedua layanan kami berbasis web dan tidak memerlukan instalasi aplikasi apapun pada perangkat target.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Berapa Harga Layanan Premium?</h3>
                <p className="text-muted-foreground">Silahkan kunjungi halaman harga kami atau hubungi tim support untuk informasi pricing yang detail dan paket yang sesuai dengan kebutuhan Anda.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-14 border-b border-border">
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                Siap Untuk Mulai?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Gunakan layanan Tracker Premium kami untuk monitoring lokasi dengan akurasi tinggi dan fitur-fitur canggih yang dapat disesuaikan dengan kebutuhan Anda.
              </p>
              <a 
                href="https://www.alatlacak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Mulai Menggunakan Tracker Premium
              </a>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-8">
            <div className="flex flex-wrap gap-3">
              <a href="/" className="text-xs font-medium text-primary hover:underline">← Kembali ke Beranda</a>
              <span className="text-border">•</span>
              <a href="/hlr-lookup" className="text-xs font-medium text-primary hover:underline">HLR Lookup Gratis</a>
              <span className="text-border">•</span>
              <a href="/tentang-kami" className="text-xs font-medium text-primary hover:underline">Tentang Kami</a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

