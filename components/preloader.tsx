"use client"

import { useState, useEffect } from "react"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Wyświetlaj preloader przez 5 sekund zamiast 3
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="w-96 h-96 md:w-[512px] md:h-[512px] relative">
        {/* Zwiększony rozmiar GIFa o 100% */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3dgifmaker66686-IW1D7raXvHqzgfsAMY9jMhDrTFGHtd.gif"
          alt="DevilCraft Logo"
          className="w-full h-full"
          style={{ transform: "scale(1)", transformOrigin: "center" }}
        />
      </div>
    </div>
  )
}
