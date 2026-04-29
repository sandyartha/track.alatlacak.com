"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappNumber = "6281246812354"
  const message = "Boleh tanya soal layanan lacak lokasi? 📍"
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {isHovered && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-green-500 text-white text-xs font-medium rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
            Boleh tanya soal layanan? 💬
          </div>
          <div className="absolute bottom-0 right-3 transform translate-y-full border-4 border-transparent border-t-green-500" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="opener"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-6 w-6 transition-transform duration-300" />

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-pulse" />
      </a>
    </div>
  )
}
