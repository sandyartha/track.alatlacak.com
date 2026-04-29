import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/hlr/sidebar";
import { HLRContent } from "@/components/hlr/hlr-content";
import { Footer } from "@/components/hlr/footer";
import { AboutSection } from "@/components/hlr/about-section";
import { ServicesSection } from "@/components/hlr/services-section";
import { WhyChooseUs } from "@/components/hlr/why-choose-us";
import { ComparisonTable } from "@/components/hlr/comparison-table";
import { FeaturesHighlight } from "@/components/hlr/features-highlight";
import { FAQSection } from "@/components/hlr/faq-section";
import { FloatingWhatsApp } from "@/components/hlr/floating-whatsapp";
import { TrackerLinkSteps } from "@/components/hlr/tracker-link-steps";

function HLRLookupPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col min-w-0">
        <main className="flex-1">
          <div className="mx-auto max-w-3xl px-6 md:px-8 pt-14 md:pt-0">
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
            </section>

            {/* About */}
            <div id="about">
              <AboutSection />
            </div>

            {/* Services */}
            <div id="services">
              <ServicesSection />
            </div>

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Features */}
            <FeaturesHighlight />

            {/* Comparison */}
            <ComparisonTable />

            {/* Tracker Link Steps */}
            <TrackerLinkSteps />

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
            </section>

            {/* FAQ */}
            <div id="faq">
              <FAQSection />
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HLRLookupPage />
    </ThemeProvider>
  );
}

export default App;
