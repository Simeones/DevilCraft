"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export interface SeatModel {
  id: string
  name: string
  image: string
  price: number
  description: string
}

interface SeatPickerProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (seat: SeatModel) => void
  selectedSeatId: string | null
}

export default function SeatPicker({ isOpen, onClose, onSelect, selectedSeatId }: SeatPickerProps) {
  const seatModels: SeatModel[] = [
    {
      id: "msw-blue",
      name: "ManSeatWell Prestige Blue",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202025-05-19%20163521-MsZpO2b9mhCzwdu6vIMLJ6Rp5nnCfO.png",
      price: 1200,
      description: "Składany fotel w kolorystyce biało-niebieskiej z ergonomicznym oparciem",
    },
    {
      id: "msw-black",
      name: "ManSeatWell Elite Black",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202025-05-19%20163549-ZL01bwWBqxTCOiIItRrZUiKDmwfxeT.png",
      price: 1100,
      description: "Składany fotel w kolorystyce biało-czarnej z ergonomicznym oparciem",
    },
    {
      id: "sport-red",
      name: "Sport Red Edition",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202025-05-19%20163433-wmlOZUO9DBbEWVU6gmUVjzBf4bUxit.png",
      price: 950,
      description: "Sportowy fotel w kolorystyce czarno-czerwonej z ergonomicznym oparciem",
    },
    {
      id: "msw-red",
      name: "ManSeatWell Luxury Red",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202025-05-19%20163511-ms7Jw4s7fqxbgUaWzzzyCl0JZv4gaD.png",
      price: 1350,
      description: "Ekskluzywny fotel w kolorystyce biało-czerwonej z dodatkowym wsparciem lędźwiowym",
    },
    {
      id: "premium-gray",
      name: "Premium Comfort Gray",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202025-05-19%20163501-CtUGzEmciW8GwqYWtBUKhWHzpbaIq7.png",
      price: 1050,
      description: "Wygodny fotel w kolorystyce czarno-szarej z wodoodporną tapicerką",
    },
    {
      id: "classic-white",
      name: "Classic White Edition",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202025-05-19%20163627-iqEQ52o8BqAV6wYxsTwYBIV7808cvA.png",
      price: 950,
      description: "Klasyczny fotel w kolorystyce biało-czarnej z wodoodporną tapicerką",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-gray-900 border border-gray-700">
        <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Wybierz model fotela</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {seatModels.map((seat) => (
            <div
              key={seat.id}
              className={`border rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                selectedSeatId === seat.id
                  ? "border-red-600 ring-2 ring-red-600/50"
                  : "border-gray-700 hover:border-gray-500"
              }`}
              onClick={() => onSelect(seat)}
            >
              <div className="relative h-48 bg-gray-800">
                <Image src={seat.image || "/placeholder.svg"} alt={seat.name} fill className="object-contain" />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-white">{seat.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{seat.description}</p>
                <p className="text-red-500 font-semibold">
                  {new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(seat.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-gray-900 p-4 border-t border-gray-700 flex justify-end">
          <Button variant="outline" onClick={onClose} className="mr-2">
            Anuluj
          </Button>
          <Button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white" disabled={!selectedSeatId}>
            Zatwierdź wybór
          </Button>
        </div>
      </div>
    </div>
  )
}
