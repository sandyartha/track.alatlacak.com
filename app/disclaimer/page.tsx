import type { Metadata } from 'next'
import DisclaimerClient from './client'

const SITE_URL = "https://track.alatlacak.com"

export const metadata: Metadata = {
  title: "Disclaimer - Tracker LOC ID",
  description: "Disclaimer Tracker LOC ID menjelaskan batasan tanggung jawab dan penggunaan yang tepat dari layanan kami.",
  keywords: [
    "disclaimer",
    "batasan tanggung jawab",
    "disclaimer Tracker LOC ID"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/disclaimer`,
    title: "Disclaimer - Tracker LOC ID",
    description: "Disclaimer Tracker LOC ID menjelaskan batasan tanggung jawab dan penggunaan yang tepat dari layanan kami.",
    siteName: "Tracker LOC ID",
  },
}

export default function DisclaimerPage() {

  return <DisclaimerClient />

}

