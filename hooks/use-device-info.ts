"use client"

import { useEffect, useState } from "react"

interface BatteryManager {
  charging: boolean
  chargingTime: number
  dischargingTime: number
  level: number
  addEventListener: (type: string, listener: EventListener) => void
  removeEventListener: (type: string, listener: EventListener) => void
}

interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>
  deviceMemory?: number
  connection?: {
    effectiveType: string
    downlink: number
    rtt: number
    saveData: boolean
  }
}

interface DeviceInfo {
  // Device Info
  userAgent: string
  deviceName: string | null
  platform: string
  vendor: string
  language: string
  languages: string[]
  cookiesEnabled: boolean
  doNotTrack: string | null
  online: boolean
  
  // Screen Info
  screenWidth: number
  screenHeight: number
  availWidth: number
  availHeight: number
  colorDepth: number
  pixelDepth: number
  devicePixelRatio: number
  orientation: string
  
  // Hardware Info
  hardwareConcurrency: number
  deviceMemory: number | null
  maxTouchPoints: number
  
  // Battery Info
  batteryLevel: number | null
  batteryCharging: boolean | null
  
  // Network Info
  connectionType: string | null
  downlink: number | null
  rtt: number | null
  saveData: boolean | null
  
  // WebGL Info
  webglVendor: string | null
  webglRenderer: string | null
  
  // Timezone & Locale
  timezone: string
  timezoneOffset: number
  locale: string
  
  // Location
  latitude: number | null
  longitude: number | null
  accuracy: number | null
  locationError: string | null
}

/** Parse a human-readable device model name from the User-Agent string. */
function getDeviceName(ua: string): string | null {
  // --- Android devices ---
  // UA pattern: "... (Linux; Android 13; Samsung Galaxy S22 Build/...)"
  // or shorter form: "... SM-G991B Build/..."
  const androidModel = ua.match(/\(Linux;[^)]*?;\s*([^;)]+?)\s*(?:Build\/|[)$])/i)
  if (androidModel) {
    const raw = androidModel[1].trim()
    // Skip generic OS strings
    if (!/^Android\s*[\d.]*$/i.test(raw) && raw.length > 2) {
      return normalizeDeviceName(raw)
    }
  }

  // Samsung — SM-XXXX codes
  const samsung = ua.match(/\b(SM-[A-Z0-9]+)\b/i)
  if (samsung) return `Samsung ${samsung[1].toUpperCase()}`

  // Xiaomi / Redmi / POCO
  const xiaomi = ua.match(/\b(Redmi\s[\w+\s]+?|POCO\s[\w+\s]+?|Mi\s[\w+\s]+?)\b(?:Build|\/)/i)
  if (xiaomi) return normalizeDeviceName(xiaomi[1].trim())

  // Huawei / Honor
  const huawei = ua.match(/\b((?:HUA)?WEI[-\s][\w-]+|ELS-[A-Z0-9]+|CLT-[A-Z0-9]+)\b/i)
  if (huawei) return `Huawei ${huawei[1]}`
  const honor = ua.match(/\b(HONOR[-\s][\w-]+|NTH-[A-Z0-9]+|RMO-[A-Z0-9]+)\b/i)
  if (honor) return `Honor ${honor[1]}`

  // Oppo / Realme / OnePlus / Vivo
  const oppo = ua.match(/\b(CPH\d+|OPPO\s[\w\s]+?)\b(?:Build|\/)/i)
  if (oppo) return `OPPO ${oppo[1].trim()}`
  const realme = ua.match(/\b(RMX\d+|Realme\s[\w\s]+?)\b(?:Build|\/)/i)
  if (realme) return normalizeDeviceName(realme[1].trim())
  const oneplus = ua.match(/\b((?:OnePlus|ONE PLUS)\s?[\w\s]+?)\b(?:Build|\/)/i)
  if (oneplus) return normalizeDeviceName(oneplus[1].trim())
  const vivo = ua.match(/\b(vivo\s?[\w\s]+?)\b(?:Build|\/)/i)
  if (vivo) return normalizeDeviceName(vivo[1].trim())

  // Lenovo / Motorola
  const lenovo = ua.match(/\b((?:Lenovo|Moto(?:rola)?)\s?[\w\s-]+?)\b(?:Build|\/)/i)
  if (lenovo) return normalizeDeviceName(lenovo[1].trim())

  // ASUS / Acer / Alcatel
  const asus = ua.match(/\b(ASUS[-_][\w]+)\b/i)
  if (asus) return `ASUS ${asus[1]}`
  const acer = ua.match(/\b(Acer\s[\w\s]+?)\b(?:Build|\/)/i)
  if (acer) return normalizeDeviceName(acer[1].trim())
  const alcatel = ua.match(/\b(ALCATEL[-\s][\w]+)\b/i)
  if (alcatel) return normalizeDeviceName(alcatel[1].trim())

  // Sony Xperia
  const sony = ua.match(/\b((?:Sony\s)?Xperia[-\s][\w\s]+?)\b(?:Build|\/)/i)
  if (sony) return normalizeDeviceName(sony[1].trim())

  // --- Apple devices ---
  if (ua.includes("iPhone")) {
    const ver = ua.match(/CPU iPhone OS ([\d_]+)/)
    return ver ? `iPhone (iOS ${ver[1].replace(/_/g, ".")})` : "iPhone"
  }
  if (ua.includes("iPad")) return "iPad"
  if (ua.includes("Macintosh") || ua.includes("Mac OS X")) return "Mac"

  // --- Windows PC ---
  if (ua.includes("Windows NT 10")) return "Windows 10 / 11 PC"
  if (ua.includes("Windows NT 6.3")) return "Windows 8.1 PC"
  if (ua.includes("Windows NT 6.1")) return "Windows 7 PC"
  if (ua.includes("Windows")) return "Windows PC"

  // --- Linux Desktop ---
  if (ua.includes("X11") || ua.includes("Linux x86_64")) return "Linux Desktop"

  return null
}

/** Capitalise words and clean trailing noise from model strings */
function normalizeDeviceName(raw: string): string {
  return raw
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function useDeviceInfo() {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getDeviceInfo = async () => {
      const nav = navigator as NavigatorWithBattery
      
      // Basic navigator info
      const info: DeviceInfo = {
        userAgent: nav.userAgent,
        deviceName: getDeviceName(nav.userAgent),
        platform: nav.platform,
        vendor: nav.vendor,
        language: nav.language,
        languages: [...nav.languages],
        cookiesEnabled: nav.cookieEnabled,
        doNotTrack: nav.doNotTrack,
        online: nav.onLine,
        
        // Screen
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth,
        devicePixelRatio: window.devicePixelRatio,
        orientation: window.screen.orientation?.type || "unknown",
        
        // Hardware
        hardwareConcurrency: nav.hardwareConcurrency,
        deviceMemory: nav.deviceMemory || null,
        maxTouchPoints: nav.maxTouchPoints,
        
        // Battery (will be updated)
        batteryLevel: null,
        batteryCharging: null,
        
        // Network
        connectionType: nav.connection?.effectiveType || null,
        downlink: nav.connection?.downlink || null,
        rtt: nav.connection?.rtt || null,
        saveData: nav.connection?.saveData || null,
        
        // WebGL (will be updated)
        webglVendor: null,
        webglRenderer: null,
        
        // Timezone
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        locale: Intl.DateTimeFormat().resolvedOptions().locale,
        
        // Location (will be updated)
        latitude: null,
        longitude: null,
        accuracy: null,
        locationError: null,
      }
      
      // Get WebGL info
      try {
        const canvas = document.createElement("canvas")
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        if (gl && gl instanceof WebGLRenderingContext) {
          const debugInfo = gl.getExtension("WEBGL_debug_renderer_info")
          if (debugInfo) {
            info.webglVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
            info.webglRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
          }
        }
      } catch {
        // WebGL not available
      }
      
      // Get Battery info
      if (nav.getBattery) {
        try {
          const battery = await nav.getBattery()
          info.batteryLevel = Math.round(battery.level * 100)
          info.batteryCharging = battery.charging
        } catch {
          // Battery API not available
        }
      }
      
      setDeviceInfo(info)
      setIsLoading(false)
    }
    
    getDeviceInfo()
  }, [])

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setDeviceInfo(prev => prev ? {
        ...prev,
        locationError: "Geolocation not supported"
      } : null)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setDeviceInfo(prev => prev ? {
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          locationError: null,
        } : null)
      },
      (error) => {
        setDeviceInfo(prev => prev ? {
          ...prev,
          locationError: error.message,
        } : null)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }

  return { deviceInfo, isLoading, requestLocation }
}

