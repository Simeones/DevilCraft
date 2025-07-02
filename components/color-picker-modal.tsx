"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Definicja typu dla koloru RAL
export interface RalColor {
  code: string
  name: string
  hex: string
}

// Właściwości komponentu
interface ColorPickerModalProps {
  isOpen: boolean
  onClose: () => void
  onColorSelect: (colors: RalColor[]) => void
  multiSelect?: boolean
  title?: string
}

// Popularne kolory RAL (skrócona lista)
const popularRalColors: RalColor[] = [
  { code: "RAL 9016", name: "Traffic White", hex: "#F6F6F6" },
  { code: "RAL 9010", name: "Pure White", hex: "#FFFFFF" },
  { code: "RAL 9005", name: "Jet Black", hex: "#0A0A0A" },
  { code: "RAL 7016", name: "Anthracite Grey", hex: "#293133" },
  { code: "RAL 7035", name: "Light Grey", hex: "#C5C7C4" },
  { code: "RAL 7040", name: "Window Grey", hex: "#9DA1AA" },
  { code: "RAL 5002", name: "Ultramarine Blue", hex: "#20214F" },
  { code: "RAL 5015", name: "Sky Blue", hex: "#2271B3" },
  { code: "RAL 5010", name: "Gentian Blue", hex: "#0E294B" },
  { code: "RAL 6005", name: "Moss Green", hex: "#2F4538" },
  { code: "RAL 6018", name: "Yellow Green", hex: "#57A639" },
  { code: "RAL 6029", name: "Mint Green", hex: "#20603D" },
  { code: "RAL 3000", name: "Flame Red", hex: "#AF2B1E" },
  { code: "RAL 3020", name: "Traffic Red", hex: "#CC0605" },
  { code: "RAL 3003", name: "Ruby Red", hex: "#9B111E" },
  { code: "RAL 1023", name: "Traffic Yellow", hex: "#FAD201" },
  { code: "RAL 1021", name: "Rape Yellow", hex: "#F3DA0B" },
  { code: "RAL 1003", name: "Signal Yellow", hex: "#E5BE01" },
  { code: "RAL 8017", name: "Chocolate Brown", hex: "#45322E" },
  { code: "RAL 8003", name: "Clay Brown", hex: "#734222" },
  { code: "RAL 9006", name: "White Aluminium", hex: "#A5A5A5" },
  { code: "RAL 9007", name: "Grey Aluminium", hex: "#8F8F8F" },
  { code: "RAL 2004", name: "Pure Orange", hex: "#E75B12" },
  { code: "RAL 4005", name: "Blue Lilac", hex: "#6C4675" },
]

// Kategorie kolorów
const colorCategories = [
  { name: "Białe i czarne", colors: popularRalColors.filter((c) => c.code.startsWith("RAL 9")) },
  { name: "Szare", colors: popularRalColors.filter((c) => c.code.startsWith("RAL 7")) },
  { name: "Niebieskie", colors: popularRalColors.filter((c) => c.code.startsWith("RAL 5")) },
  { name: "Zielone", colors: popularRalColors.filter((c) => c.code.startsWith("RAL 6")) },
  { name: "Czerwone", colors: popularRalColors.filter((c) => c.code.startsWith("RAL 3")) },
  { name: "Żółte", colors: popularRalColors.filter((c) => c.code.startsWith("RAL 1")) },
  { name: "Brązowe", colors: popularRalColors.filter((c) => c.code.startsWith("RAL 8")) },
  {
    name: "Inne",
    colors: popularRalColors.filter(
      (c) =>
        !c.code.startsWith("RAL 9") &&
        !c.code.startsWith("RAL 7") &&
        !c.code.startsWith("RAL 5") &&
        !c.code.startsWith("RAL 6") &&
        !c.code.startsWith("RAL 3") &&
        !c.code.startsWith("RAL 1") &&
        !c.code.startsWith("RAL 8"),
    ),
  },
]

export default function ColorPickerModal({
  isOpen,
  onClose,
  onColorSelect,
  multiSelect = false,
  title = "Wybierz kolor RAL",
}: ColorPickerModalProps) {
  const [selectedColors, setSelectedColors] = useState<RalColor[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Resetuj wybrane kolory przy otwarciu modalu
  useEffect(() => {
    if (isOpen) {
      setSelectedColors([])
      setSearchTerm("")
      setActiveCategory("Białe i czarne") // Domyślna kategoria
    }
  }, [isOpen])

  // Filtrowanie kolorów na podstawie wyszukiwania
  const filteredColors = searchTerm
    ? popularRalColors.filter(
        (color) =>
          color.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          color.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : activeCategory
      ? colorCategories.find((cat) => cat.name === activeCategory)?.colors || []
      : popularRalColors

  // Obsługa wyboru koloru
  const handleColorSelect = (color: RalColor) => {
    if (multiSelect) {
      // Dla trybu wielokrotnego wyboru (max 2 kolory)
      if (selectedColors.some((c) => c.code === color.code)) {
        // Jeśli kolor jest już wybrany, usuń go
        setSelectedColors(selectedColors.filter((c) => c.code !== color.code))
      } else if (selectedColors.length < 2) {
        // Jeśli można dodać kolejny kolor
        setSelectedColors([...selectedColors, color])
      }
    } else {
      // Dla trybu pojedynczego wyboru
      setSelectedColors([color])
    }
  }

  // Obsługa zatwierdzenia wyboru
  const handleConfirm = () => {
    if (selectedColors.length > 0) {
      onColorSelect(selectedColors)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 border-b border-gray-800">
          <input
            type="text"
            placeholder="Szukaj koloru po kodzie lub nazwie..."
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {!searchTerm && (
          <div className="flex overflow-x-auto p-2 border-b border-gray-800">
            {colorCategories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 whitespace-nowrap mx-1 rounded ${
                  activeCategory === category.name
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div className="p-4 overflow-y-auto" style={{ maxHeight: "50vh" }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredColors.map((color) => (
              <div
                key={color.code}
                className={`cursor-pointer p-2 rounded border ${
                  selectedColors.some((c) => c.code === color.code)
                    ? "border-red-500 bg-gray-800"
                    : "border-gray-700 hover:border-gray-500"
                }`}
                onClick={() => handleColorSelect(color)}
              >
                <div
                  className="w-full h-16 rounded mb-2"
                  style={{ backgroundColor: color.hex, border: "1px solid #333" }}
                ></div>
                <div className="text-center">
                  <div className="text-white font-medium">{color.code}</div>
                  <div className="text-gray-400 text-sm truncate">{color.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-800 flex justify-between items-center">
          <div className="flex items-center">
            {selectedColors.map((color, index) => (
              <div key={index} className="flex items-center mr-4">
                <div
                  className="w-6 h-6 rounded mr-2"
                  style={{ backgroundColor: color.hex, border: "1px solid #333" }}
                ></div>
                <span className="text-white">{color.code}</span>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={onClose} className="border-gray-700 text-white hover:bg-gray-800">
              Anuluj
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={selectedColors.length === 0 || (multiSelect && selectedColors.length < 2)}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {multiSelect && selectedColors.length < 2 ? "Wybierz 2 kolory" : "Zatwierdź"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
