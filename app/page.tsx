'use client'

import { useState } from "react"
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { HLRContent } from "@/components/hlr/hlr-content"
import { Footer } from "@/components/hlr/footer"
import { AboutSection } from "@/components/hlr/about-section"
import { ServicesSection } from "@/components/hlr/services-section"
import { TrackerFlow } from "@/components/hlr/tracker-flow"
import { WhyChooseUs } from "@/components/hlr/why-choose-us"
import { ComparisonTable } from "@/components/hlr/comparison-table"
import { FeaturesHighlight } from "@/components/hlr/features-highlight"
import { FAQSection } from "@/components/hlr/faq-section"

export default function HLRLookupPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <MobileNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <main className="flex-1 md:ml-64">
        <div className="mx-auto w-full max-w-5xl px-6 py-14">
            {/* Hero */}
            <section className="py-14 border-b border-border">
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Real-time Device Analysis
              </div>

              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Jasa Melacak Lokasi Nomor Telepon HP
              </h1>
              <p className="mt-1 text-base font-medium text-muted-foreground">
                Tanpa Install Aplikasi
              </p>

              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                Jasa Melacak Nomor HP secara akurat semua provider, tanpa ribet, mudah digunakan dan 
                pasti akurat. <strong className="text-foreground">Sangat tidak disarankan</strong> untuk melacak HP yang hilang, dicuri, atau jatuh di jalan 
                karena dibutuhkan lokasi dengan presisi tinggi dan fitur lanjutan. Gunakan Layanan Google: 
                <strong className="text-foreground"> Find My Device</strong> (kini bernama Find Hub) untuk keperluan tersebut.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#tracker-flow"
                  className="text-sm font-medium text-primary hover:text-primary/80 underline transition-colors"
                >
                  Lihat Cara Kerja →
                </a>
                <a
                  href="#services"
                  className="text-sm font-medium text-primary hover:text-primary/80 underline transition-colors"
                >
                  Pelajari Layanan Kami →
                </a>
              </div>
            </section>

            {/* About */}
            <AboutSection />

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 mb-8 p-4 rounded-lg bg-muted/50 border border-border/50">
              <a href="#tracker-flow" className="text-xs font-medium text-primary hover:underline">Cara Membuat Link Pelacak</a>
              <span className="text-border">•</span>
              <a href="#services" className="text-xs font-medium text-primary hover:underline">Layanan Tracker</a>
              <span className="text-border">•</span>
              <a href="#comparison" className="text-xs font-medium text-primary hover:underline">Perbandingan Fitur</a>
              <span className="text-border">•</span>
              <a href="#faq" className="text-xs font-medium text-primary hover:underline">Pertanyaan Umum</a>
            </div>

            {/* Tracker Flow */}
            <TrackerFlow />

            {/* Services */}
            <ServicesSection />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Features */}
            <FeaturesHighlight />

            {/* Comparison */}
            <div id="comparison">
              <ComparisonTable />
            </div>

            {/* Device Data */}
            <section id="device" className="py-14 border-b border-border">
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Data Perangkat
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                  Informasi Perangkat Anda
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Data berikut dibaca secara langsung dari browser Anda menggunakan Web APIs standar.
                </p>
              </div>
              <HLRContent />
              <div className="mt-6 text-center">
                <a href="#about" className="text-xs font-medium text-primary hover:underline">
                  ← Kembali ke Tentang Kami
                </a>
              </div>
            </section>

            {/* FAQ */}
            <div id="faq">
              <FAQSection />
            </div>

          </div>
      </main>

      <Footer />
    </div>
  )
}
