import type { Metadata } from 'next'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"
import AboutClient from './client'

const SITE_URL = "https://track.alatlacak.com"

export const metadata: Metadata = {
  title: "Tentang Kami - Tracker Loc ID",
  description: "Sejarah dan visi Tracker Loc ID. Kami adalah platform pelacakan lokasi terpercaya dengan teknologi terdepan untuk keamanan dan transparansi.",
  keywords: [
    "tentang tracker loc id",
    "sejarah tracker",
    "visi misi perusahaan",
    "tim tracker loc id",
    "tentang kami"
  ],
  alternates: {
    canonical: `${SITE_URL}/tentang-kami`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/tentang-kami`,
    title: "Tentang Kami - Tracker Loc ID",
    description: "Sejarah dan visi Tracker Loc ID. Platform pelacakan lokasi terpercaya dengan teknologi terdepan.",
    siteName: "Tracker Loc ID",
  },
}

export default function TentangKamiPage() {
  return <AboutClient />
}
