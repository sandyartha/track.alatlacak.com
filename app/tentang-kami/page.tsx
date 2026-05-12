import type { Metadata } from 'next'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"
import AboutClient from './client'

const SITE_URL = "https://track.alatlacak.com"

export const metadata: Metadata = {
  title: "Tentang Kami - Tracker LOC ID",
  description: "Sejarah dan visi Tracker LOC ID. Kami adalah platform pelacakan lokasi terpercaya dengan teknologi terdepan untuk keamanan dan transparansi.",
  keywords: [
    "tentang Tracker LOC ID",
    "sejarah tracker",
    "visi misi perusahaan",
    "tim Tracker LOC ID",
    "tentang kami"
  ],
  alternates: {
    canonical: `${SITE_URL}/tentang-kami`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/tentang-kami`,
    title: "Tentang Kami - Tracker LOC ID",
    description: "Sejarah dan visi Tracker LOC ID. Platform pelacakan lokasi terpercaya dengan teknologi terdepan.",
    siteName: "Tracker LOC ID",
  },
}

export default function TentangKamiPage() {
  return <AboutClient />
}

