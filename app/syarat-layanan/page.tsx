import type { Metadata } from 'next'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"
import TermsClient from './client'

const SITE_URL = "https://track.alatlacak.com"

export const metadata: Metadata = {
  title: "Syarat Layanan - Tracker Loc ID",
  description: "Syarat dan kondisi penggunaan Tracker Loc ID. Pelajari hak dan kewajiban Anda sebagai pengguna layanan kami.",
  keywords: [
    "syarat layanan",
    "terms of service",
    "persyaratan penggunaan",
    "terms tracker loc id"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/syarat-layanan`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/syarat-layanan`,
    title: "Syarat Layanan - Tracker Loc ID",
    description: "Syarat dan kondisi penggunaan Tracker Loc ID.",
    siteName: "Tracker Loc ID",
  },
}

export default function SyaratLayananPage() {
  return <TermsClient />
}
