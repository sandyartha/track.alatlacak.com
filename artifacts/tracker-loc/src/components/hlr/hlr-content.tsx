
import { useDeviceInfo } from "@/hooks/use-device-info"
import { InfoSection, InfoRow } from "./info-section"
import { LocationMap } from "./location-map"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import {
  Smartphone,
  Monitor,
  Cpu,
  Wifi,
  Globe,
  MapPin,
} from "lucide-react"

export function HLRContent() {
  const { deviceInfo, isLoading, requestLocation } = useDeviceInfo()

  if (isLoading || !deviceInfo) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Spinner className="h-8 w-8" />
          <p className="text-muted-foreground">Gathering device information...</p>
        </div>
      </div>
    )
  }

  const formatBytes = (gb: number | null) => {
    if (gb === null) return "N/A"
    return `${gb} GB`
  }

  const getBrowserName = (userAgent: string) => {
    if (userAgent.includes("Firefox")) return "Firefox"
    if (userAgent.includes("Chrome")) return "Chrome"
    if (userAgent.includes("Safari")) return "Safari"
    if (userAgent.includes("Edge")) return "Edge"
    if (userAgent.includes("Opera")) return "Opera"
    return "Unknown"
  }

  const getOSName = (userAgent: string) => {
    if (userAgent.includes("Windows NT 10")) return "Windows 10/11"
    if (userAgent.includes("Windows")) return "Windows"
    if (userAgent.includes("Mac OS X")) return "macOS"
    if (userAgent.includes("Linux")) return "Linux"
    if (userAgent.includes("Android")) return "Android"
    if (userAgent.includes("iOS") || userAgent.includes("iPhone")) return "iOS"
    return "Unknown"
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Device Information */}
      <InfoSection
        id="device"
        title="Device Information"
        icon={<Smartphone className="h-5 w-5" />}
      >
        <InfoRow label="Device" value={deviceInfo.deviceName || "Unknown"} highlight />
        <InfoRow label="Browser" value={getBrowserName(deviceInfo.userAgent)} />
        <InfoRow label="Operating System" value={getOSName(deviceInfo.userAgent)} />
        <InfoRow label="Platform" value={deviceInfo.platform} />
        <InfoRow label="Vendor" value={deviceInfo.vendor || "Unknown"} />
        <InfoRow label="Language" value={deviceInfo.language} />
        <InfoRow label="Online Status" value={deviceInfo.online ? "Online" : "Offline"} />
        <InfoRow label="Cookies Enabled" value={deviceInfo.cookiesEnabled ? "Yes" : "No"} />
      </InfoSection>

      {/* Screen Information */}
      <InfoSection
        id="screen"
        title="Screen Information"
        icon={<Monitor className="h-5 w-5" />}
      >
        <InfoRow 
          label="Screen Resolution" 
          value={`${deviceInfo.screenWidth} x ${deviceInfo.screenHeight}`} 
          highlight 
        />
        <InfoRow 
          label="Available Screen" 
          value={`${deviceInfo.availWidth} x ${deviceInfo.availHeight}`} 
        />
        <InfoRow label="Color Depth" value={`${deviceInfo.colorDepth}-bit`} />
        <InfoRow label="Pixel Ratio" value={`${deviceInfo.devicePixelRatio}x`} />
        <InfoRow label="Orientation" value={deviceInfo.orientation.replace("-", " ")} />
      </InfoSection>

      {/* Hardware Information */}
      <InfoSection
        id="hardware"
        title="Hardware Information"
        icon={<Cpu className="h-5 w-5" />}
      >
        <InfoRow 
          label="CPU Cores" 
          value={`${deviceInfo.hardwareConcurrency} cores`} 
          highlight 
        />
        <InfoRow label="Device Memory" value={formatBytes(deviceInfo.deviceMemory)} />
        <InfoRow label="Touch Points" value={deviceInfo.maxTouchPoints} />
        <InfoRow label="GPU Vendor" value={deviceInfo.webglVendor || "Unknown"} />
        <InfoRow label="GPU Renderer" value={deviceInfo.webglRenderer || "Unknown"} />
        {deviceInfo.batteryLevel !== null && (
          <>
            <InfoRow 
              label="Battery Level" 
              value={`${deviceInfo.batteryLevel}%`} 
            />
            <InfoRow 
              label="Charging" 
              value={deviceInfo.batteryCharging ? "Yes" : "No"} 
            />
          </>
        )}
      </InfoSection>

      {/* Network Information */}
      <InfoSection
        id="network"
        title="Network Information"
        icon={<Wifi className="h-5 w-5" />}
      >
        <InfoRow 
          label="Connection Type" 
          value={deviceInfo.connectionType?.toUpperCase() || "Unknown"} 
          highlight 
        />
        <InfoRow 
          label="Downlink Speed" 
          value={deviceInfo.downlink ? `${deviceInfo.downlink} Mbps` : "N/A"} 
        />
        <InfoRow 
          label="RTT (Latency)" 
          value={deviceInfo.rtt ? `${deviceInfo.rtt} ms` : "N/A"} 
        />
        <InfoRow 
          label="Data Saver" 
          value={deviceInfo.saveData !== null ? (deviceInfo.saveData ? "Enabled" : "Disabled") : "N/A"} 
        />
      </InfoSection>

      {/* Preferences */}
      <InfoSection
        id="preferences"
        title="Preferences & Locale"
        icon={<Globe className="h-5 w-5" />}
      >
        <InfoRow label="Timezone" value={deviceInfo.timezone} highlight />
        <InfoRow 
          label="UTC Offset" 
          value={`UTC${deviceInfo.timezoneOffset > 0 ? "-" : "+"}${Math.abs(deviceInfo.timezoneOffset / 60)}`} 
        />
        <InfoRow label="Locale" value={deviceInfo.locale} />
        <InfoRow 
          label="Languages" 
          value={deviceInfo.languages.slice(0, 3).join(", ")} 
        />
        <InfoRow 
          label="Do Not Track" 
          value={deviceInfo.doNotTrack === "1" ? "Enabled" : "Disabled"} 
        />
      </InfoSection>

      {/* Location */}
      <InfoSection
        id="location"
        title="Location"
        icon={<MapPin className="h-5 w-5" />}
      >
        {deviceInfo.latitude !== null && deviceInfo.longitude !== null ? (
          <>
            <InfoRow 
              label="Latitude" 
              value={deviceInfo.latitude.toFixed(6)} 
              highlight 
            />
            <InfoRow 
              label="Longitude" 
              value={deviceInfo.longitude.toFixed(6)} 
            />
            <InfoRow 
              label="Accuracy" 
              value={deviceInfo.accuracy ? `${Math.round(deviceInfo.accuracy)} meters` : "N/A"} 
            />
            <div className="mt-4">
              <LocationMap 
                latitude={deviceInfo.latitude} 
                longitude={deviceInfo.longitude} 
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 py-6">
            {deviceInfo.locationError ? (
              <p className="text-sm text-destructive">{deviceInfo.locationError}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Location access is required to display your position.
              </p>
            )}
            <Button onClick={requestLocation} variant="outline">
              <MapPin className="mr-2 h-4 w-4" />
              Request Location Access
            </Button>
          </div>
        )}
      </InfoSection>
    </div>
  )
}
