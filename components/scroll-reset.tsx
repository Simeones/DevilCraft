"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollReset() {
  const pathname = usePathname()

  useEffect(() => {
    // Przewiń stronę do góry przy każdej zmianie ścieżki
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
