"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, Paintbrush, Send, Zap, Anchor, Ship, FileImage } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import RalColorPicker from "@/components/color-wheel-picker"
import GraphicsPicker, { type SelectedGraphic } from "@/components/graphics-picker"
import SeatPicker, { type SeatModel } from "@/components/seat-picker"

// Definicje typów
interface BoatModel {
  id: string
  name: string
  description: string
  basePrice: number
  image: string
}

interface ColorOption {
  id: string
  code: string
  name: string
  description: string
  price: number
  requiresColorPicker?: boolean
  multipleColors?: boolean
  requiresGraphicsPicker?: boolean
}

interface EquipmentOption {
  id: string
  code: string
  name: string
  description: string
  price: number
  category: "standard" | "optional"
}

interface ElectricalOption {
  id: string
  code: string
  name: string
  description: string
  price: number
}

interface SelectedColor {
  hex: string
  code: string
  name: string
  finish?: "mat" | "połysk"
}

export default function PersonalizationPage() {
  // Modele łodzi
  const boatModels: BoatModel[] = [
    {
      id: "420",
      name: "Model 420",
      description: "Kompaktowa łódź aluminiowa idealna dla wędkarzy poszukujących mobilności i łatwości transportu.",
      basePrice: 12000,
      image: "/boat-full-view.jpeg",
    },
    {
      id: "470",
      name: "Model 470",
      description:
        "Uniwersalna łódź aluminiowa o zwiększonej przestrzeni użytkowej, idealna zarówno dla wędkarzy, jak i miłośników rekreacji wodnej.",
      basePrice: 15000,
      image: "/model-470-interior.jpeg",
    },
    {
      id: "550",
      name: "Model 550",
      description: "Przestronna łódź aluminiowa zaprojektowana z myślą o komforcie i funkcjonalności.",
      basePrice: 19000,
      image: "/boat-angle-view.jpeg",
    },
    {
      id: "nomad",
      name: "Model NOMAD",
      description: "Flagowy model w ofercie DevilCraft, zaprojektowany dla najbardziej wymagających wędkarzy.",
      basePrice: 25000,
      image: "/boat-graphic-detail.jpeg",
    },
  ]

  // Opcje kolorów i grafiki
  const colorOptions: ColorOption[] = [
    {
      id: "oklejanie",
      code: "OKL",
      name: "Oklejanie łodzi",
      description: "Oklejanie łodzi folią 3M (standardowe wzory lub własny projekt)",
      price: 0, // Cena zależy od wybranego oklejenia
      requiresGraphicsPicker: true,
    },
    {
      id: "malowanie_single",
      code: "MAL1",
      name: "Malowanie jednokolorowe",
      description: "Malowanie na kolor RAL (dowolny)",
      price: 1200,
      requiresColorPicker: true,
      multipleColors: false,
    },
    {
      id: "malowanie_double",
      code: "MAL2",
      name: "Malowanie dwukolorowe",
      description: "Malowanie na dwa kolory RAL (dowolne)",
      price: 1700,
      requiresColorPicker: true,
      multipleColors: true,
    },
  ]

  // Opcje wyposażenia
  const equipmentOptions: EquipmentOption[] = [
    // Standardowe wyposażenie
    {
      id: "relingi",
      code: "BL",
      name: "Relingi",
      description: "Aluminiowe relingi 25x3mm (4 szt.)",
      price: 250, // Zmieniona cena za 1 sztukę
      category: "standard",
    },
    {
      id: "sterowka",
      code: "ST",
      name: "Sterówka",
      description: "Sterówka 90x45x40 z szybą (pleksi)",
      price: 1900,
      category: "standard",
    },
    {
      id: "fotel",
      code: "FT",
      name: "Fotel",
      description: "Składany fotel (czarny)",
      price: 850, // Cena bazowa, będzie zastąpiona ceną wybranego modelu
      category: "standard",
    },
    {
      id: "noga_fotela",
      code: "NFT",
      name: "Noga fotela",
      description: "Podstawa fotela (SPRINGFIELD)",
      price: 1150,
      category: "standard",
    },
    {
      id: "stolik",
      code: "ST",
      name: "Stolik",
      description: "Rozkładany stół mocowany do burty",
      price: 650,
      category: "standard",
    },

    // Opcjonalne wyposażenie
    {
      id: "zabudowa_tylna",
      code: "ZT",
      name: "Zabudowa tylna",
      description: "Chromowana zabudowa z lukami (niehermetyczna)",
      price: 1500,
      category: "optional",
    },
    {
      id: "luk_tylny",
      code: "LT",
      name: "Luk tylny",
      description: "Sucha zabudowa za ławką",
      price: 950,
      category: "optional",
    },
    {
      id: "luk_aluminiowy",
      code: "LA",
      name: "Luk aluminiowy",
      description: "Aluminiowy luk z zamkiem",
      price: 800,
      category: "optional",
    },
    {
      id: "baksztag_boczny",
      code: "BB",
      name: "Baksztag boczny",
      description: "Boczna podpora na wędki",
      price: 1900,
      category: "optional",
    },
    {
      id: "knaga",
      code: "KK",
      name: "Knaga",
      description: "Knaga opustowa (2 szt.)",
      price: 100,
      category: "optional",
    },
  ]

  // Opcje elektryki i oświetlenia
  const electricalOptions: ElectricalOption[] = [
    {
      id: "pakiet_elektryczny",
      code: "PEL",
      name: "Pakiet elektryczny",
      description: "Pełna instalacja: 3 obwody, sterowanie, oświetlenie, pompa, USB",
      price: 5500,
    },
    {
      id: "pompa_zezowa",
      code: "PZ",
      name: "Pompa zęzowa",
      description: "Pompa z panelem sterowania",
      price: 650,
    },
    {
      id: "reflektor_led",
      code: "RLED",
      name: "Reflektor LED",
      description: "Halogen LED wysokiej mocy",
      price: 1400,
    },
  ]

  // Stan personalizacji
  const [selectedModel, setSelectedModel] = useState<string>("470")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedStandardEquipment, setSelectedStandardEquipment] = useState<string[]>([])
  const [selectedOptionalEquipment, setSelectedOptionalEquipment] = useState<string[]>([])
  const [selectedElectrical, setSelectedElectrical] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [currentStep, setCurrentStep] = useState<number>(0)

  // Stan dla wyboru kolorów
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)
  const [colorPickerOption, setColorPickerOption] = useState<ColorOption | null>(null)
  const [selectedCustomColors, setSelectedCustomColors] = useState<{
    [key: string]: SelectedColor[]
  }>({})

  // Stan dla wyboru grafiki/oklejenia
  const [isGraphicsPickerOpen, setIsGraphicsPickerOpen] = useState(false)
  const [graphicsPickerMode, setGraphicsPickerMode] = useState<"oklejanie" | "grafika">("grafika")
  const [selectedGraphic, setSelectedGraphic] = useState<SelectedGraphic | null>(null)
  const [graphicPrice, setGraphicPrice] = useState<number>(0)

  // Stan dla liczby elementów
  const [relingCount, setRelingCount] = useState<number>(1)
  const [fotelCount, setFotelCount] = useState<number>(1)

  // Stan dla wyboru modelu fotela
  const [isSeatPickerOpen, setIsSeatPickerOpen] = useState(false)
  const [selectedSeat, setSelectedSeat] = useState<SeatModel | null>(null)

  // Efekt do obliczania ceny całkowitej
  useEffect(() => {
    const model = boatModels.find((m) => m.id === selectedModel)

    // Cena koloru/oklejenia
    let colorPrice = 0
    if (selectedColor === "oklejanie") {
      colorPrice = graphicPrice // Dla oklejania cena pochodzi z wybranej grafiki
    } else {
      const color = colorOptions.find((c) => c.id === selectedColor)
      colorPrice = color?.price || 0
    }

    let standardEquipmentPrice = 0
    selectedStandardEquipment.forEach((eqId) => {
      const equipment = equipmentOptions.find((e) => e.id === eqId)
      if (equipment) {
        // Specjalne traktowanie dla relingów i foteli
        if (equipment.id === "relingi") {
          // Promocja: 4 relingi za 850 zł, w przeciwnym razie 250 zł za sztukę
          standardEquipmentPrice += relingCount === 4 ? 850 : equipment.price * relingCount
        } else if (equipment.id === "fotel") {
          // Cena fotela z wybranego modelu
          const seatPrice = selectedSeat ? selectedSeat.price : equipment.price
          standardEquipmentPrice += seatPrice * fotelCount
        } else {
          standardEquipmentPrice += equipment.price
        }
      }
    })

    let optionalEquipmentPrice = 0
    selectedOptionalEquipment.forEach((eqId) => {
      const equipment = equipmentOptions.find((e) => e.id === eqId)
      if (equipment) {
        optionalEquipmentPrice += equipment.price
      }
    })

    let electricalPrice = 0
    selectedElectrical.forEach((elId) => {
      const electrical = electricalOptions.find((e) => e.id === elId)
      if (electrical) {
        electricalPrice += electrical.price
      }
    })

    const total =
      (model?.basePrice || 0) + colorPrice + standardEquipmentPrice + optionalEquipmentPrice + electricalPrice

    setTotalPrice(total)
  }, [
    selectedModel,
    selectedColor,
    graphicPrice,
    selectedStandardEquipment,
    selectedOptionalEquipment,
    selectedElectrical,
    relingCount,
    fotelCount,
    selectedSeat,
  ])

  // Funkcja do przełączania kroków
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Funkcja do dodawania/usuwania wyposażenia standardowego
  const toggleStandardEquipment = (id: string) => {
    if (selectedStandardEquipment.includes(id)) {
      setSelectedStandardEquipment(selectedStandardEquipment.filter((item) => item !== id))

      // Resetowanie wybranego fotela przy usunięciu
      if (id === "fotel") {
        setSelectedSeat(null)
      }
    } else {
      setSelectedStandardEquipment([...selectedStandardEquipment, id])

      // Otwieranie wyboru fotela
      if (id === "fotel") {
        setIsSeatPickerOpen(true)
      }
    }
  }

  // Funkcja do dodawania/usuwania wyposażenia opcjonalnego
  const toggleOptionalEquipment = (id: string) => {
    if (selectedOptionalEquipment.includes(id)) {
      setSelectedOptionalEquipment(selectedOptionalEquipment.filter((item) => item !== id))
    } else {
      setSelectedOptionalEquipment([...selectedOptionalEquipment, id])
    }
  }

  // Funkcja do dodawania/usuwania opcji elektrycznych
  const toggleElectrical = (id: string) => {
    if (selectedElectrical.includes(id)) {
      setSelectedElectrical(selectedElectrical.filter((item) => item !== id))
    } else {
      setSelectedElectrical([...selectedElectrical, id])
    }
  }

  // Funkcja do obsługi wyboru opcji koloru/oklejenia
  const handleColorOptionSelect = (option: ColorOption) => {
    if (option.requiresColorPicker) {
      setColorPickerOption(option)
      setIsColorPickerOpen(true)
    } else if (option.requiresGraphicsPicker) {
      setSelectedColor(option.id)
      setGraphicsPickerMode("oklejanie")
      setIsGraphicsPickerOpen(true)
    } else {
      setSelectedColor(option.id)
    }
  }

  // Funkcja do obsługi wyboru kolorów
  const handleColorSelect = (colors: SelectedColor[]) => {
    if (colorPickerOption) {
      setSelectedCustomColors({
        ...selectedCustomColors,
        [colorPickerOption.id]: colors,
      })
      setSelectedColor(colorPickerOption.id)
    }
  }

  // Funkcja do obsługi wyboru grafiki/oklejenia
  const handleGraphicSelect = (graphic: SelectedGraphic) => {
    setSelectedGraphic(graphic)

    // Ustawienie ceny grafiki
    if (graphic.type === "standard" && graphic.graphic) {
      setGraphicPrice(graphic.graphic.price)
    } else if (graphic.type === "custom") {
      // Dla własnych projektów cena jest szacunkowa
      if (graphicsPickerMode === "oklejanie") {
        setGraphicPrice(graphic.customFile ? 2400 : 3000) // Wyższe ceny dla oklejania
      } else {
        setGraphicPrice(graphic.customFile ? 500 : 800) // Niższe ceny dla grafiki
      }
    }
  }

  // Funkcja do obsługi wyboru modelu fotela
  const handleSeatSelect = (seat: SeatModel) => {
    setSelectedSeat(seat)
  }

  // Funkcja do formatowania ceny
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" }).format(price)
  }

  // Pobieranie aktualnego modelu
  const currentModel = boatModels.find((model) => model.id === selectedModel) || boatModels[0]

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center fade-in-element title-animation">
            Personalizacja łodzi
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center fade-in-element description-animation">
            Stwórz łódź idealnie dopasowaną do Twoich potrzeb. Wybierz model, kolor, wyposażenie i elektrykę, aby
            stworzyć unikalną łódź DevilCraft.
          </p>
        </ScrollAnimation>

        {/* Pasek postępu */}
        <ScrollAnimation delay={50}>
          <div className="mb-12 fade-in-element">
            <div className="flex justify-between mb-2">
              {["Wybór modelu", "Kolorystyka i grafika", "Wyposażenie", "Elektryka i podsumowanie"].map(
                (step, index) => (
                  <div
                    key={index}
                    className={`text-sm font-medium ${
                      index <= currentStep ? "text-red-500" : "text-gray-500"
                    } hidden md:block`}
                  >
                    {step}
                  </div>
                ),
              )}
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-red-600 h-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-2 md:hidden">
              Krok {currentStep + 1} z 4:{" "}
              {["Wybór modelu", "Kolorystyka i grafika", "Wyposażenie", "Elektryka i podsumowanie"][currentStep]}
            </div>
          </div>
        </ScrollAnimation>

        {/* Główny obszar personalizacji */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Podgląd łodzi */}
          <ScrollAnimation delay={75} className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 sticky top-24 fade-in-element">
              <h2 className="text-2xl font-bold text-white mb-4 title-animation">Podgląd</h2>
              <div className="relative h-[250px] rounded-lg overflow-hidden mb-6 image-hover-container">
                <Image
                  src={currentModel.image || "/placeholder.svg"}
                  alt={currentModel.name}
                  fill
                  className="object-cover image-hover-effect"
                />
                {/* Nakładka koloru */}
                {selectedColor && selectedColor !== "oklejanie" && selectedCustomColors[selectedColor]?.[0] && (
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay transition-colors duration-300"
                    style={{
                      backgroundColor: selectedCustomColors[selectedColor][0].hex,
                    }}
                  ></div>
                )}
                {selectedColor === "malowanie_double" && selectedCustomColors[selectedColor]?.[1] && (
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-overlay transition-colors duration-300 clip-diagonal"
                    style={{
                      backgroundColor: selectedCustomColors[selectedColor][1].hex,
                    }}
                  ></div>
                )}

                {/* Nakładka oklejenia/grafiki */}
                {selectedColor === "oklejanie" && selectedGraphic?.type === "standard" && selectedGraphic.graphic && (
                  <div className="absolute inset-0 opacity-80 mix-blend-normal">
                    <Image
                      src={selectedGraphic.graphic.previewImage || "/placeholder.svg"}
                      alt={selectedGraphic.graphic.name}
                      fill
                      className="object-cover opacity-90"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                )}
                {selectedColor === "oklejanie" && selectedGraphic?.type === "custom" && (
                  <div className="absolute inset-0 opacity-80 mix-blend-normal">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                      {selectedGraphic.customFile ? (
                        <>
                          <FileImage className="h-12 w-12 mr-2" />
                          <span className="text-lg font-medium">Własne oklejenie</span>
                        </>
                      ) : (
                        <>
                          <Paintbrush className="h-12 w-12 mr-2" />
                          <span className="text-lg font-medium">Projekt na zamówienie</span>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{currentModel.name}</h3>
                  <p className="text-gray-400 text-sm">{currentModel.description}</p>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Cena bazowa:</span>
                    <span className="text-white">{formatPrice(currentModel.basePrice)}</span>
                  </div>
                  {selectedColor && (
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">
                        {selectedColor === "oklejanie" ? "Oklejenie:" : "Kolorystyka:"}
                      </span>
                      <span className="text-white">
                        {selectedColor === "oklejanie"
                          ? formatPrice(graphicPrice)
                          : formatPrice(colorOptions.find((c) => c.id === selectedColor)?.price || 0)}
                      </span>
                    </div>
                  )}
                  {selectedStandardEquipment.length > 0 && (
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Wyposażenie standardowe:</span>
                      <span className="text-white">
                        {formatPrice(
                          selectedStandardEquipment.reduce((total, eqId) => {
                            const equipment = equipmentOptions.find((e) => e.id === eqId)
                            return total + (equipment?.price || 0)
                          }, 0),
                        )}
                      </span>
                    </div>
                  )}
                  {selectedOptionalEquipment.length > 0 && (
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Wyposażenie opcjonalne:</span>
                      <span className="text-white">
                        {formatPrice(
                          selectedOptionalEquipment.reduce((total, eqId) => {
                            const equipment = equipmentOptions.find((e) => e.id === eqId)
                            return total + (equipment?.price || 0)
                          }, 0),
                        )}
                      </span>
                    </div>
                  )}
                  {selectedElectrical.length > 0 && (
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Elektryka i oświetlenie:</span>
                      <span className="text-white">
                        {formatPrice(
                          selectedElectrical.reduce((total, elId) => {
                            const electrical = electricalOptions.find((e) => e.id === elId)
                            return total + (electrical?.price || 0)
                          }, 0),
                        )}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-800 mt-2">
                    <span className="text-white">Razem:</span>
                    <span className="text-red-500">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Opcje personalizacji */}
          <ScrollAnimation delay={100} className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 fade-in-element">
              {/* Krok 1: Wybór modelu */}
              {currentStep === 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 title-animation">Wybierz model łodzi</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {boatModels.map((model) => (
                      <div
                        key={model.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                          selectedModel === model.id
                            ? "border-red-600 bg-gray-800"
                            : "border-gray-700 hover:border-gray-500"
                        }`}
                        onClick={() => setSelectedModel(model.id)}
                      >
                        <div className="flex items-start">
                          <div
                            className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 mt-1 flex items-center justify-center ${
                              selectedModel === model.id ? "border-red-600 bg-red-600" : "border-gray-500"
                            }`}
                          >
                            {selectedModel === model.id && <Check className="h-3 w-3 text-white" />}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                            <p className="text-gray-400 text-sm mb-2">{model.description}</p>
                            <p className="text-red-500 font-bold">{formatPrice(model.basePrice)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Krok 2: Kolorystyka i grafika */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 title-animation">Kolorystyka i grafika</h2>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Paintbrush className="h-5 w-5 mr-2 text-red-500" /> Wybierz wykończenie
                    </h3>
                    <div className="space-y-4">
                      {colorOptions.map((color) => (
                        <div
                          key={color.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                            selectedColor === color.id
                              ? "border-red-600 bg-gray-800"
                              : "border-gray-700 hover:border-gray-500"
                          }`}
                          onClick={() => handleColorOptionSelect(color)}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 mt-1 flex items-center justify-center ${
                                selectedColor === color.id ? "border-red-600 bg-red-600" : "border-gray-500"
                              }`}
                            >
                              {selectedColor === color.id && <Check className="h-3 w-3 text-white" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-white">{color.name}</h3>
                                <span className="text-gray-400 text-sm">Kod: {color.code}</span>
                              </div>
                              <p className="text-gray-400 text-sm mb-2">{color.description}</p>

                              {/* Wyświetlanie wybranych kolorów */}
                              {selectedColor === color.id &&
                                color.id !== "oklejanie" &&
                                selectedCustomColors[color.id] && (
                                  <div className="flex items-center mt-2 mb-3">
                                    {selectedCustomColors[color.id].map((customColor, index) => (
                                      <div key={index} className="flex items-center mr-4">
                                        <div
                                          className="w-6 h-6 rounded mr-2"
                                          style={{
                                            backgroundColor: customColor.hex,
                                            border: "1px solid #333",
                                            filter:
                                              customColor.finish === "połysk"
                                                ? "brightness(1.1) contrast(1.1)"
                                                : "none",
                                          }}
                                        ></div>
                                        <span className="text-white text-sm">{customColor.code}</span>
                                        <span className="text-gray-400 text-xs ml-1">({customColor.finish})</span>
                                      </div>
                                    ))}
                                  </div>
                                )}

                              {/* Wyświetlanie wybranego oklejenia */}
                              {selectedColor === color.id && color.id === "oklejanie" && selectedGraphic && (
                                <div className="flex items-center mt-2 mb-3">
                                  {selectedGraphic.type === "standard" && selectedGraphic.graphic && (
                                    <div className="flex items-center">
                                      <div className="w-12 h-12 relative mr-2 rounded overflow-hidden">
                                        <Image
                                          src={selectedGraphic.graphic.previewImage || "/placeholder.svg"}
                                          alt={selectedGraphic.graphic.name}
                                          fill
                                          className="object-cover"
                                        />
                                      </div>
                                      <div>
                                        <span className="text-white text-sm">{selectedGraphic.graphic.name}</span>
                                        <p className="text-red-500 text-xs">
                                          +{formatPrice(selectedGraphic.graphic.price)}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                  {selectedGraphic.type === "custom" && (
                                    <div className="flex items-center">
                                      {selectedGraphic.customFile ? (
                                        <>
                                          <div className="w-12 h-12 relative mr-2 rounded overflow-hidden bg-gray-800 flex items-center justify-center">
                                            <FileImage className="h-6 w-6 text-gray-400" />
                                          </div>
                                          <div>
                                            <span className="text-white text-sm">
                                              Własny projekt: {selectedGraphic.customFile.name.substring(0, 20)}
                                              {selectedGraphic.customFile.name.length > 20 ? "..." : ""}
                                            </span>
                                            <p className="text-red-500 text-xs">+{formatPrice(2400)}</p>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          <div className="w-12 h-12 relative mr-2 rounded overflow-hidden bg-gray-800 flex items-center justify-center">
                                            <Paintbrush className="h-6 w-6 text-gray-400" />
                                          </div>
                                          <div>
                                            <span className="text-white text-sm">Zamówiony projekt oklejenia</span>
                                            <p className="text-red-500 text-xs">+{formatPrice(3000)}</p>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Przycisk wyboru dla oklejania */}
                              {color.id === "oklejanie" && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-2 border-red-600 text-white hover:bg-red-900/30"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleColorOptionSelect(color)
                                  }}
                                >
                                  {selectedColor === color.id && selectedGraphic
                                    ? "Zmień oklejenie"
                                    : "Wybierz oklejenie"}
                                </Button>
                              )}

                              {/* Cena */}
                              {color.id !== "oklejanie" && (
                                <p className="text-red-500">
                                  {color.price > 0 ? `+${formatPrice(color.price)}` : "W cenie"}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Krok 3: Wyposażenie */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 title-animation">Wybierz wyposażenie</h2>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Ship className="h-5 w-5 mr-2 text-red-500" /> Wyposażenie standardowe
                    </h3>
                    <div className="space-y-4 mb-8">
                      {equipmentOptions
                        .filter((eq) => eq.category === "standard")
                        .map((equipment) => (
                          <div
                            key={equipment.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                              selectedStandardEquipment.includes(equipment.id)
                                ? "border-red-600 bg-gray-800"
                                : "border-gray-700 hover:border-gray-500"
                            }`}
                            onClick={() => toggleStandardEquipment(equipment.id)}
                          >
                            <div className="flex items-start">
                              <div
                                className={`w-5 h-5 rounded-md border flex-shrink-0 mr-3 mt-1 flex items-center justify-center ${
                                  selectedStandardEquipment.includes(equipment.id)
                                    ? "border-red-600 bg-red-600"
                                    : "border-gray-500"
                                }`}
                              >
                                {selectedStandardEquipment.includes(equipment.id) && (
                                  <Check className="h-3 w-3 text-white" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h3 className="text-lg font-semibold text-white">{equipment.name}</h3>
                                  <span className="text-gray-400 text-sm">Kod: {equipment.code}</span>
                                </div>

                                {/* Opis z uwzględnieniem liczby sztuk dla relingów i foteli */}
                                <p className="text-gray-400 text-sm mb-1">
                                  {equipment.id === "relingi"
                                    ? `Aluminiowe relingi 25x3mm (${relingCount} szt.)`
                                    : equipment.id === "fotel"
                                      ? `${selectedSeat ? selectedSeat.name : "Składany fotel"} (${fotelCount} szt.)`
                                      : equipment.description}
                                </p>

                                {/* Wyświetlanie wybranego modelu fotela */}
                                {equipment.id === "fotel" &&
                                  selectedStandardEquipment.includes("fotel") &&
                                  selectedSeat && (
                                    <div className="flex items-center mt-2 mb-2">
                                      <div className="w-16 h-16 relative mr-2 rounded overflow-hidden bg-gray-800">
                                        <Image
                                          src={selectedSeat.image || "/placeholder.svg"}
                                          alt={selectedSeat.name}
                                          fill
                                          className="object-contain"
                                        />
                                      </div>
                                      <div>
                                        <p className="text-sm text-gray-300">{selectedSeat.description}</p>
                                      </div>
                                    </div>
                                  )}

                                {/* Wybór liczby dla relingów */}
                                {equipment.id === "relingi" && selectedStandardEquipment.includes("relingi") && (
                                  <div className="flex items-center mt-2 mb-2">
                                    <span className="text-gray-400 mr-3">Ilość:</span>
                                    <div className="flex space-x-2">
                                      {[1, 2, 3, 4].map((num) => (
                                        <button
                                          key={num}
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            setRelingCount(num)
                                          }}
                                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                            relingCount === num
                                              ? "bg-red-600 text-white"
                                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                          }`}
                                        >
                                          {num}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Wybór liczby dla foteli */}
                                {equipment.id === "fotel" && selectedStandardEquipment.includes("fotel") && (
                                  <div className="flex items-center mt-2 mb-2">
                                    <span className="text-gray-400 mr-3">Ilość:</span>
                                    <div className="flex space-x-2">
                                      {[1, 2, 3, 4].map((num) => (
                                        <button
                                          key={num}
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            setFotelCount(num)
                                          }}
                                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                            fotelCount === num
                                              ? "bg-red-600 text-white"
                                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                          }`}
                                        >
                                          {num}
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Przycisk wyboru modelu fotela */}
                                {equipment.id === "fotel" && selectedStandardEquipment.includes("fotel") && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-2 border-red-600 text-white hover:bg-red-900/30"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setIsSeatPickerOpen(true)
                                    }}
                                  >
                                    {selectedSeat ? "Zmień model fotela" : "Wybierz model fotela"}
                                  </Button>
                                )}

                                <p className="text-red-500 mt-2">
                                  {equipment.id === "relingi" && selectedStandardEquipment.includes("relingi")
                                    ? relingCount === 4
                                      ? `+${formatPrice(850)} (promocja!)`
                                      : `+${formatPrice(equipment.price * relingCount)}`
                                    : equipment.id === "fotel" && selectedStandardEquipment.includes("fotel")
                                      ? `+${formatPrice((selectedSeat?.price || equipment.price) * fotelCount)}`
                                      : equipment.price > 0
                                        ? `+${formatPrice(equipment.price)}`
                                        : "W cenie"}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Anchor className="h-5 w-5 mr-2 text-red-500" /> Wyposażenie opcjonalne
                    </h3>
                    <div className="space-y-4">
                      {equipmentOptions
                        .filter((eq) => eq.category === "optional")
                        .map((equipment) => (
                          <div
                            key={equipment.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                              selectedOptionalEquipment.includes(equipment.id)
                                ? "border-red-600 bg-gray-800"
                                : "border-gray-700 hover:border-gray-500"
                            }`}
                            onClick={() => toggleOptionalEquipment(equipment.id)}
                          >
                            <div className="flex items-start">
                              <div
                                className={`w-5 h-5 rounded-md border flex-shrink-0 mr-3 mt-1 flex items-center justify-center ${
                                  selectedOptionalEquipment.includes(equipment.id)
                                    ? "border-red-600 bg-red-600"
                                    : "border-gray-500"
                                }`}
                              >
                                {selectedOptionalEquipment.includes(equipment.id) && (
                                  <Check className="h-3 w-3 text-white" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h3 className="text-lg font-semibold text-white">{equipment.name}</h3>
                                  <span className="text-gray-400 text-sm">Kod: {equipment.code}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-1">{equipment.description}</p>
                                <p className="text-red-500">
                                  {equipment.price > 0 ? `+${formatPrice(equipment.price)}` : "W cenie"}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Krok 4: Elektryka i podsumowanie */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 title-animation">Elektryka i oświetlenie</h2>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-red-500" /> Instalacja elektryczna
                    </h3>
                    <div className="space-y-4 mb-8">
                      {electricalOptions.map((electrical) => (
                        <div
                          key={electrical.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                            selectedElectrical.includes(electrical.id)
                              ? "border-red-600 bg-gray-800"
                              : "border-gray-700 hover:border-gray-500"
                          }`}
                          onClick={() => toggleElectrical(electrical.id)}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-5 h-5 rounded-md border flex-shrink-0 mr-3 mt-1 flex items-center justify-center ${
                                selectedElectrical.includes(electrical.id)
                                  ? "border-red-600 bg-red-600"
                                  : "border-gray-500"
                              }`}
                            >
                              {selectedElectrical.includes(electrical.id) && <Check className="h-3 w-3 text-white" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h3 className="text-lg font-semibold text-white">{electrical.name}</h3>
                                <span className="text-gray-400 text-sm">Kod: {electrical.code}</span>
                              </div>
                              <p className="text-gray-400 text-sm mb-1">{electrical.description}</p>
                              <p className="text-red-500">
                                {electrical.price > 0 ? `+${formatPrice(electrical.price)}` : "W cenie"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">Podsumowanie personalizacji</h3>
                    <div className="space-y-6 mb-8">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-white mb-2">Model łodzi</h3>
                        <p className="text-gray-300">
                          {currentModel.name} - {formatPrice(currentModel.basePrice)}
                        </p>
                      </div>

                      {selectedColor && (
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {selectedColor === "oklejanie" ? "Oklejenie" : "Kolorystyka"}
                          </h3>

                          {selectedColor === "oklejanie" ? (
                            // Wyświetlanie informacji o oklejeniu
                            <>
                              {selectedGraphic?.type === "standard" && selectedGraphic.graphic && (
                                <div className="flex items-center">
                                  <div className="w-12 h-12 relative mr-2 rounded overflow-hidden">
                                    <Image
                                      src={selectedGraphic.graphic.previewImage || "/placeholder.svg"}
                                      alt={selectedGraphic.graphic.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div>
                                    <span className="text-white">{selectedGraphic.graphic.name}</span>
                                    <p className="text-gray-400">+{formatPrice(selectedGraphic.graphic.price)}</p>
                                  </div>
                                </div>
                              )}
                              {selectedGraphic?.type === "custom" && (
                                <div className="flex items-center">
                                  {selectedGraphic.customFile ? (
                                    <>
                                      <div className="w-12 h-12 relative mr-2 rounded overflow-hidden bg-gray-700 flex items-center justify-center">
                                        <FileImage className="h-6 w-6 text-gray-300" />
                                      </div>
                                      <div>
                                        <span className="text-white">Własny projekt oklejenia</span>
                                        <p className="text-gray-400">+{formatPrice(2400)}</p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className="w-12 h-12 relative mr-2 rounded overflow-hidden bg-gray-700 flex items-center justify-center">
                                        <Paintbrush className="h-6 w-6 text-gray-300" />
                                      </div>
                                      <div>
                                        <span className="text-white">Zamówiony projekt oklejenia</span>
                                        <p className="text-gray-400">+{formatPrice(3000)}</p>
                                      </div>
                                    </>
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            // Wyświetlanie informacji o kolorystyce
                            <>
                              <div className="text-gray-300">
                                {colorOptions.find((c) => c.id === selectedColor)?.name}
                                {` (+${formatPrice(colorOptions.find((c) => c.id === selectedColor)?.price || 0)})`}
                              </div>
                              {selectedCustomColors[selectedColor] && (
                                <div className="flex items-center mt-2">
                                  {selectedCustomColors[selectedColor].map((customColor, index) => (
                                    <div key={index} className="flex items-center mr-4">
                                      <div
                                        className="w-6 h-6 rounded mr-2"
                                        style={{
                                          backgroundColor: customColor.hex,
                                          border: "1px solid #333",
                                          filter:
                                            customColor.finish === "połysk" ? "brightness(1.1) contrast(1.1)" : "none",
                                        }}
                                      ></div>
                                      <span className="text-white text-sm">{customColor.code}</span>
                                      <span className="text-gray-400 text-xs ml-1">({customColor.finish})</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      )}

                      {(selectedStandardEquipment.length > 0 || selectedOptionalEquipment.length > 0) && (
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-white mb-2">Wyposażenie</h3>
                          {selectedStandardEquipment.length > 0 && (
                            <>
                              <h4 className="text-md font-medium text-white mt-2 mb-1">Standardowe:</h4>
                              <ul className="space-y-2">
                                {selectedStandardEquipment.map((eqId) => {
                                  const equipment = equipmentOptions.find((e) => e.id === eqId)
                                  return equipment ? (
                                    <li key={eqId} className="flex justify-between">
                                      <div>
                                        <span className="text-gray-300">
                                          {equipment.id === "relingi"
                                            ? `${equipment.name} (${relingCount} szt.)`
                                            : equipment.id === "fotel"
                                              ? `${selectedSeat ? selectedSeat.name : equipment.name} (${fotelCount} szt.)`
                                              : equipment.name}
                                        </span>
                                        {equipment.id === "fotel" && selectedSeat && (
                                          <div className="flex items-center mt-1">
                                            <div className="w-8 h-8 relative mr-2 rounded overflow-hidden bg-gray-700">
                                              <Image
                                                src={selectedSeat.image || "/placeholder.svg"}
                                                alt={selectedSeat.name}
                                                fill
                                                className="object-contain"
                                              />
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <span className="text-gray-400">
                                        {equipment.id === "relingi"
                                          ? relingCount === 4
                                            ? `+${formatPrice(850)} (promocja!)`
                                            : `+${formatPrice(equipment.price * relingCount)}`
                                          : equipment.id === "fotel"
                                            ? `+${formatPrice((selectedSeat?.price || equipment.price) * fotelCount)}`
                                            : equipment.price > 0
                                              ? `+${formatPrice(equipment.price)}`
                                              : "W cenie"}
                                      </span>
                                    </li>
                                  ) : null
                                })}
                              </ul>
                            </>
                          )}

                          {selectedOptionalEquipment.length > 0 && (
                            <>
                              <h4 className="text-md font-medium text-white mt-3 mb-1">Opcjonalne:</h4>
                              <ul className="space-y-2">
                                {selectedOptionalEquipment.map((eqId) => {
                                  const equipment = equipmentOptions.find((e) => e.id === eqId)
                                  return equipment ? (
                                    <li key={eqId} className="flex justify-between">
                                      <span className="text-gray-300">{equipment.name}</span>
                                      <span className="text-gray-400">
                                        {equipment.price > 0 ? `+${formatPrice(equipment.price)}` : "W cenie"}
                                      </span>
                                    </li>
                                  ) : null
                                })}
                              </ul>
                            </>
                          )}
                        </div>
                      )}

                      {selectedElectrical.length > 0 && (
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-white mb-2">Elektryka i oświetlenie</h3>
                          <ul className="space-y-2">
                            {selectedElectrical.map((elId) => {
                              const electrical = electricalOptions.find((e) => e.id === elId)
                              return electrical ? (
                                <li key={elId} className="flex justify-between">
                                  <span className="text-gray-300">{electrical.name}</span>
                                  <span className="text-gray-400">
                                    {electrical.price > 0 ? `+${formatPrice(electrical.price)}` : "W cenie"}
                                  </span>
                                </li>
                              ) : null
                            })}
                          </ul>
                        </div>
                      )}

                      <div className="bg-red-900/30 p-4 rounded-lg border border-red-800">
                        <h3 className="text-lg font-semibold text-white mb-2">Cena całkowita</h3>
                        <p className="text-2xl font-bold text-red-500">{formatPrice(totalPrice)}</p>
                        <p className="text-gray-400 text-sm mt-2">
                          * Cena zawiera podatek VAT. Termin realizacji: 8-12 tygodni od złożenia zamówienia.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Wyślij zapytanie
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Przyciski nawigacji */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="border-gray-700 text-white hover:bg-gray-800"
                >
                  Wstecz
                </Button>
                {currentStep < 3 ? (
                  <Button onClick={nextStep} className="bg-red-600 hover:bg-red-700 text-white">
                    Dalej <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                ) : null}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Modal wyboru kolorów */}
      {isColorPickerOpen && (
        <RalColorPicker
          isOpen={isColorPickerOpen}
          onClose={() => setIsColorPickerOpen(false)}
          onColorSelect={handleColorSelect}
          multiSelect={colorPickerOption?.multipleColors}
          title={colorPickerOption?.multipleColors ? "Wybierz dwa kolory" : "Wybierz kolor"}
          initialColors={colorPickerOption ? selectedCustomColors[colorPickerOption.id] || [] : []}
        />
      )}

      {/* Modal wyboru grafiki/oklejenia */}
      {isGraphicsPickerOpen && (
        <GraphicsPicker
          isOpen={isGraphicsPickerOpen}
          onClose={() => setIsGraphicsPickerOpen(false)}
          onGraphicSelect={handleGraphicSelect}
          initialSelection={selectedGraphic}
          mode={graphicsPickerMode}
          title={graphicsPickerMode === "oklejanie" ? "Wybierz oklejenie łodzi" : "Wybierz grafikę na burtę łodzi"}
        />
      )}

      {/* Modal wyboru fotela */}
      {isSeatPickerOpen && (
        <SeatPicker
          isOpen={isSeatPickerOpen}
          onClose={() => setIsSeatPickerOpen(false)}
          onSelect={handleSeatSelect}
          selectedSeatId={selectedSeat?.id || null}
        />
      )}

      {/* Style dla ukośnego podziału kolorów */}
      <style jsx global>{`
        .clip-diagonal {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </main>
  )
}
