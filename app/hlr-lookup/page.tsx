import type { Metadata } from 'next'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"
import HLRLookupClient from './client'

const SITE_URL = "https://track.alatlacak.com"

export const metadata: Metadata = {
  title: "HLR Lookup Gratis - Identifikasi Perangkat Tanpa Biaya",
  description: "HLR Lookup gratis untuk identifikasi perangkat secara akurat. Cek nomor HP dan informasi perangkat dengan mudah tanpa biaya tersembunyi. Rekomendasi ke layanan premium kami.",
  keywords: [
    "hlr lookup gratis",
    "identifikasi perangkat",
    "cek nomor hp",
    "imei lookup",
    "perangkat information",
    "hlr lookup online"
  ],
  alternates: {
    canonical: `${SITE_URL}/hlr-lookup`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/hlr-lookup`,
    title: "HLR Lookup Gratis - Identifikasi Perangkat Tanpa Biaya",
    description: "HLR Lookup gratis untuk identifikasi perangkat secara akurat. Cek nomor HP dan informasi perangkat dengan mudah tanpa biaya tersembunyi.",
    siteName: "Tracker LOC ID",
  },
}

export default function HLRLookupPage() {
  return <HLRLookupClient />
}

