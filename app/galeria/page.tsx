"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Expand, X } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

// Definicja typów dla zdjęć
interface GalleryImage {
  src: string
  alt: string
  category: string
}

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Wszystkie zdjęcia z projektu
  const images: GalleryImage[] = [
    {
      src: "/boat-full-view.jpeg",
      alt: "Widok z góry na łódź aluminiową",
      category: "modele",
    },
    {
      src: "/boat-side-view.jpeg",
      alt: "Widok z boku na łódź aluminiową",
      category: "modele",
    },
    {
      src: "/boat-interior-led.jpeg",
      alt: "Wnętrze łodzi z oświetleniem LED",
      category: "detale",
    },
    {
      src: "/boat-graphic-detail.jpeg",
      alt: "Szczegół grafiki na burcie łodzi",
      category: "detale",
    },
    {
      src: "/boat-angle-view.jpeg",
      alt: "Widok pod kątem na łódź aluminiową",
      category: "modele",
    },
    {
      src: "/boat-interior-wet.jpeg",
      alt: "Wnętrze łodzi w warunkach mokrych",
      category: "detale",
    },
    {
      src: "/model-470-interior.jpeg",
      alt: "Wnętrze modelu 470",
      category: "modele",
    },
    {
      src: "/model-470-graphic.jpeg",
      alt: "Grafika na modelu 470",
      category: "detale",
    },
    {
      src: "/plozorolki-detail-1.jpeg",
      alt: "Szczegół płozorolek - zbliżenie",
      category: "plozorolki",
    },
    {
      src: "/plozorolki-red.jpeg",
      alt: "Czerwone płozorolki",
      category: "plozorolki",
    },
    {
      src: "/plozorolki-trailer.jpeg",
      alt: "Przyczepa z płozorolkami",
      category: "plozorolki",
    },
    {
      src: "/plozorolki-detail-2.jpeg",
      alt: "Szczegół płozorolek - montaż",
      category: "plozorolki",
    },
    {
      src: "/sleek-aluminum-vessel.png",
      alt: "Elegancka łódź aluminiowa",
      category: "modele",
    },
    {
      src: "/sleek-aluminum-angler.png",
      alt: "Łódź aluminiowa dla wędkarzy",
      category: "modele",
    },
    {
      src: "/aluminum-boat-welding.png",
      alt: "Spawanie łodzi aluminiowej",
      category: "produkcja",
    },
  ]

  // Unikalne kategorie
  const categories = ["all", ...Array.from(new Set(images.map((img) => img.category)))]

  // Filtrowanie zdjęć według kategorii
  const filteredImages = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory)

  // Otwieranie lightboxa
  const openLightbox = (src: string) => {
    setLightboxImage(src)
    document.body.style.overflow = "hidden" // Blokowanie przewijania strony
  }

  // Zamykanie lightboxa
  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = "auto" // Przywracanie przewijania strony
  }

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center fade-in-element title-animation">
            Galeria
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center fade-in-element description-animation">
            Odkryj nasze aluminiowe łodzie wędkarskie w pełnej krasie. Przeglądaj zdjęcia według kategorii, aby zobaczyć
            detale, modele i więcej.
          </p>
        </ScrollAnimation>

        {/* Filtry kategorii */}
        <ScrollAnimation delay={50}>
          <div className="mb-8 flex justify-center fade-in-element">
            <Tabs
              defaultValue="all"
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full max-w-3xl"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-gray-900 border border-gray-800">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                  >
                    {category === "all"
                      ? "Wszystkie"
                      : category === "modele"
                        ? "Modele"
                        : category === "detale"
                          ? "Detale"
                          : category === "plozorolki"
                            ? "Płozorolki"
                            : category === "produkcja"
                              ? "Produkcja"
                              : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </ScrollAnimation>

        {/* Galeria zdjęć */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <ScrollAnimation key={image.src} delay={75 + index * 25}>
              <div
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group fade-in-element"
                onClick={() => openLightbox(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-10 w-10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-red-900/50 z-10"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Zamknij</span>
            </Button>
            <div className="relative w-full max-w-5xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxImage || "/placeholder.svg"}
                alt="Powiększone zdjęcie"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}

        {/* Informacja o pustej galerii */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">Brak zdjęć w wybranej kategorii.</p>
          </div>
        )}
      </div>
    </main>
  )
}
