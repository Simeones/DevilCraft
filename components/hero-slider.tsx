"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/boat-side-view.jpeg",
    alt: "DevilCraft łódź aluminiowa z grafiką anime i oświetleniem LED",
    title: "Nowoczesny design",
    subtitle: "Łodzie, które przyciągają spojrzenia",
  },
  {
    src: "/boat-full-view.jpeg",
    alt: "Widok z góry na łódź aluminiową z białymi siedzeniami",
    title: "Najwyższa jakość wykonania",
    subtitle: "Dbałość o każdy detal",
  },
  {
    src: "/boat-interior-led.jpeg",
    alt: "Wnętrze łodzi z niebieskim oświetleniem LED",
    title: "Zaawansowane wyposażenie",
    subtitle: "Komfort i funkcjonalność",
  },
  {
    src: "/boat-graphic-detail.jpeg",
    alt: "Szczegół grafiki anime na burcie łodzi",
    title: "Personalizacja",
    subtitle: "Twoja łódź, Twój styl",
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % images.length)
  }

  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 4000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="text-center max-w-3xl">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 opacity-0 translate-y-4 animate-fade-in-up"
                style={{
                  animationDelay: "0s", // Natychmiastowe pojawienie się
                  animationFillMode: "forwards",
                }}
              >
                {image.title}
              </h2>
              <p
                className="text-xl md:text-2xl text-gray-300 opacity-0 translate-y-4 animate-fade-in-up"
                style={{
                  animationDelay: "0.05s", // Zmniejszone o połowę opóźnienie dla efektu kaskadowego
                  animationFillMode: "forwards",
                }}
              >
                {image.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
        onClick={prev}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
        onClick={next}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}
