"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

interface LocationMapProps {
  latitude: number
  longitude: number
}

export function LocationMap({ latitude, longitude }: LocationMapProps) {
  const [MapContainer, setMapContainer] = useState<typeof import("react-leaflet").MapContainer | null>(null)
  const [TileLayer, setTileLayer] = useState<typeof import("react-leaflet").TileLayer | null>(null)
  const [Marker, setMarker] = useState<typeof import("react-leaflet").Marker | null>(null)
  const [Popup, setPopup] = useState<typeof import("react-leaflet").Popup | null>(null)
  const [icon, setIcon] = useState<L.Icon | null>(null)

  useEffect(() => {
    // Dynamic import for client-side only
    const loadLeaflet = async () => {
      const L = await import("leaflet")
      const { MapContainer, TileLayer, Marker, Popup } = await import("react-leaflet")
      
      // Import leaflet CSS
      await import("leaflet/dist/leaflet.css")
      
      // Fix default marker icon
      const customIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      })
      
      setMapContainer(() => MapContainer)
      setTileLayer(() => TileLayer)
      setMarker(() => Marker)
      setPopup(() => Popup)
      setIcon(customIcon)
    }
    
    loadLeaflet()
  }, [])

  if (!MapContainer || !TileLayer || !Marker || !Popup || !icon) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl bg-muted/50">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 animate-pulse" />
          <span>Loading map...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "256px", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={icon}>
          <Popup>
            <div className="text-sm">
              <strong>Your Location</strong>
              <br />
              {latitude.toFixed(6)}, {longitude.toFixed(6)}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

