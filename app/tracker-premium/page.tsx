import type { Metadata } from 'next'
import { Sidebar } from "@/components/hlr/sidebar"
import { MobileNavbar } from "@/components/hlr/mobile-navbar"
import { Footer } from "@/components/hlr/footer"
import TrackerPremiumClient from './client'

const SITE_URL = "https://track.alatlacak.com"

export const metadata: Metadata = {
  title: "Tracker Premium - Pelacakan Link & Nomor HP Akurat",
  description: "Layanan tracker premium untuk pelacakan lokasi nomor HP dengan presisi tinggi. Tracker Link dan Tracker Nomor dengan hasil akurat dan real-time update.",
  keywords: [
    "tracker premium",
    "pelacak nomor hp",
    "tracker link",
    "pelacak lokasi",
    "lacak nomor real-time",
    "layanan tracking premium"
  ],
  alternates: {
    canonical: `${SITE_URL}/tracker-premium`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/tracker-premium`,
    title: "Tracker Premium - Pelacakan Link & Nomor HP Akurat",
    description: "Layanan tracker premium untuk pelacakan lokasi nomor HP dengan presisi tinggi. Tracker Link dan Tracker Nomor dengan hasil akurat dan real-time update.",
    siteName: "Tracker LOC ID",
  },
}

export default function TrackerPremiumPage() {
  return <TrackerPremiumClient />
}

