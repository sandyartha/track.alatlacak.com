import type { Metadata } from 'next'
import PrivacyClient from './client'

const SITE_URL = "https://track.alatlacak.com"

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Tracker LOC ID",
  description: "Kebijakan privasi Tracker LOC ID menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pengguna.",
  keywords: [
    "kebijakan privasi",
    "privacy policy",
    "perlindungan data",
    "privacy Tracker LOC ID"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/kebijakan-privasi`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/kebijakan-privasi`,
    title: "Kebijakan Privasi - Tracker LOC ID",
    description: "Kebijakan privasi Tracker LOC ID menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pengguna.",
    siteName: "Tracker LOC ID",
  },
}

export default function KebiakanPrivasiPage() {
  return <PrivacyClient />
}

