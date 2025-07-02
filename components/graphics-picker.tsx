"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { X, Upload, Check, FileUp, Paintbrush, FileImage } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Definicja typu dla grafiki
export interface BoatGraphic {
  id: string
  name: string
  description: string
  previewImage: string
  price: number
}

// Definicja typu dla wybranej grafiki
export interface SelectedGraphic {
  type: "standard" | "custom"
  graphic?: BoatGraphic
  customFile?: File
  customDescription?: string
}

// Właściwości komponentu
interface GraphicsPickerProps {
  isOpen: boolean
  onClose: () => void
  onGraphicSelect: (graphic: SelectedGraphic) => void
  initialSelection?: SelectedGraphic | null
  mode: "oklejanie" | "grafika"
  title?: string
}

// Standardowe grafiki dla oklejania
const standardWraps: BoatGraphic[] = [
  {
    id: "carbon-fiber",
    name: "Carbon Fiber",
    description: "Eleganckie oklejenie imitujące włókno węglowe, nadaje łodzi sportowy charakter.",
    previewImage: "/graphics/carbon-fiber.png",
    price: 2800,
  },
  {
    id: "brushed-metal",
    name: "Szczotkowane aluminium",
    description: "Nowoczesne wykończenie imitujące szczotkowane aluminium, podkreśla industrialny charakter łodzi.",
    previewImage: "/graphics/brushed-metal.png",
    price: 2600,
  },
  {
    id: "camo-military",
    name: "Kamuflaż wojskowy",
    description: "Klasyczny kamuflaż wojskowy, idealny dla miłośników militariów i wędkarzy.",
    previewImage: "/graphics/camo-military.png",
    price: 3200,
  },
  {
    id: "matte-black",
    name: "Matowa czerń",
    description: "Eleganckie matowe czarne wykończenie, uniwersalne i stylowe.",
    previewImage: "/graphics/matte-black.png",
    price: 2400,
  },
  {
    id: "blue-metallic",
    name: "Niebieski metalik",
    description: "Efektowne niebieskie wykończenie z metalicznym połyskiem, przyciąga wzrok na wodzie.",
    previewImage: "/graphics/blue-metallic.png",
    price: 2900,
  },
  // Dodane nowe okleiny (10 sztuk)
  {
    id: "red-chrome",
    name: "Czerwony chrom",
    description: "Luksusowe wykończenie w kolorze czerwonego chromu, przyciągające spojrzenia na każdym akwenie.",
    previewImage: "/graphics/red-chrome.png",
    price: 3500,
  },
  {
    id: "wood-grain",
    name: "Imitacja drewna",
    description:
      "Klasyczne wykończenie imitujące naturalne drewno, dodaje łodzi eleganckiego, tradycyjnego charakteru.",
    previewImage: "/graphics/wood-grain.png",
    price: 2700,
  },
  {
    id: "digital-camo",
    name: "Kamuflaż cyfrowy",
    description: "Nowoczesny wzór kamuflażu cyfrowego, popularny wśród miłośników nowoczesnych technologii i wędkarzy.",
    previewImage: "/graphics/digital-camo.png",
    price: 3100,
  },
  {
    id: "white-pearl",
    name: "Biała perła",
    description: "Eleganckie perłowe białe wykończenie, dodające łodzi luksusowego charakteru.",
    previewImage: "/graphics/white-pearl.png",
    price: 3300,
  },
  {
    id: "orange-matte",
    name: "Matowy pomarańcz",
    description: "Intensywny matowy pomarańcz, idealny dla osób ceniących widoczność i oryginalność na wodzie.",
    previewImage: "/graphics/orange-matte.png",
    price: 2800,
  },
  {
    id: "galaxy-pattern",
    name: "Wzór galaktyki",
    description: "Futurystyczny wzór kosmosu z gwiazdami i mgławicami, dla miłośników astronomii i sci-fi.",
    previewImage: "/graphics/galaxy-pattern.png",
    price: 3600,
  },
  {
    id: "silver-brushed",
    name: "Szczotkowane srebro",
    description: "Eleganckie wykończenie imitujące szczotkowane srebro, podkreślające linie łodzi.",
    previewImage: "/graphics/silver-brushed.png",
    price: 2900,
  },
  {
    id: "green-metallic",
    name: "Zielony metalik",
    description: "Głęboki zielony kolor z metalicznym połyskiem, idealny dla miłośników natury.",
    previewImage: "/graphics/green-metallic.png",
    price: 3000,
  },
  {
    id: "carbon-gold",
    name: "Carbon ze złotymi akcentami",
    description: "Luksusowe połączenie włókna węglowego ze złotymi akcentami, dla najbardziej wymagających klientów.",
    previewImage: "/graphics/carbon-gold.png",
    price: 4200,
  },
  {
    id: "urban-graffiti",
    name: "Miejskie graffiti",
    description: "Artystyczny wzór inspirowany sztuką uliczną, dla osób ceniących oryginalność i indywidualizm.",
    previewImage: "/graphics/urban-graffiti.png",
    price: 3400,
  },
]

// Standardowe grafiki na burtę
const standardGraphics: BoatGraphic[] = [
  {
    id: "flames-red",
    name: "Płomienie Czerwone",
    description: "Klasyczny wzór płomieni w kolorze czerwonym, idealny dla dynamicznych łodzi.",
    previewImage: "/graphics/flames-red.png",
    price: 1200,
  },
  {
    id: "tribal-black",
    name: "Tribal Czarny",
    description: "Elegancki wzór tribal w kolorze czarnym, dodający charakteru każdej łodzi.",
    previewImage: "/graphics/tribal-black.png",
    price: 1400,
  },
  {
    id: "waves-blue",
    name: "Fale Niebieskie",
    description: "Dynamiczny wzór fal w odcieniach niebieskiego, idealny na wodę.",
    previewImage: "/graphics/waves-blue.png",
    price: 1100,
  },
  {
    id: "camo-green",
    name: "Kamuflaż Leśny",
    description: "Wzór kamuflażu w odcieniach zieleni, idealny dla wędkarzy.",
    previewImage: "/graphics/camo-green.png",
    price: 1600,
  },
  {
    id: "anime-girl",
    name: "Anime Girl",
    description: "Stylizowana grafika w stylu anime, popularna wśród młodszych klientów.",
    previewImage: "/graphics/anime-girl.png",
    price: 1800,
  },
]

export default function GraphicsPicker({
  isOpen,
  onClose,
  onGraphicSelect,
  initialSelection = null,
  mode = "grafika",
  title = "Wybierz grafikę",
}: GraphicsPickerProps) {
  const [activeTab, setActiveTab] = useState<string>("standard")
  const [selectedGraphic, setSelectedGraphic] = useState<BoatGraphic | null>(
    initialSelection?.type === "standard" ? initialSelection.graphic || null : null,
  )
  const [customFile, setCustomFile] = useState<File | null>(
    initialSelection?.type === "custom" && initialSelection.customFile ? initialSelection.customFile : null,
  )
  const [customDescription, setCustomDescription] = useState<string>(
    initialSelection?.type === "custom" && initialSelection.customDescription ? initialSelection.customDescription : "",
  )
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    initialSelection?.type === "custom" && initialSelection.customFile
      ? URL.createObjectURL(initialSelection.customFile)
      : null,
  )
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Wybór odpowiedniej kolekcji grafik w zależności od trybu
  const graphics = mode === "oklejanie" ? standardWraps : standardGraphics

  // Obsługa wyboru grafiki standardowej
  const handleGraphicSelect = (graphic: BoatGraphic) => {
    setSelectedGraphic(graphic)
    setCustomFile(null)
    setPreviewUrl(null)
    setCustomDescription("")
  }

  // Obsługa przesyłania pliku
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Sprawdzenie typu pliku (tylko obrazy)
      if (!file.type.startsWith("image/")) {
        alert("Proszę wybrać plik graficzny (JPG, PNG, SVG)")
        return
      }

      // Sprawdzenie rozmiaru pliku (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("Plik jest zbyt duży. Maksymalny rozmiar to 10MB.")
        return
      }

      setCustomFile(file)
      setSelectedGraphic(null)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  // Obsługa kliknięcia przycisku przesyłania pliku
  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  // Obsługa usunięcia pliku
  const handleRemoveFile = () => {
    setCustomFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Obsługa zatwierdzenia wyboru
  const handleConfirm = () => {
    if (activeTab === "standard" && selectedGraphic) {
      onGraphicSelect({
        type: "standard",
        graphic: selectedGraphic,
      })
      onClose()
    } else if (activeTab === "custom") {
      if (customFile) {
        onGraphicSelect({
          type: "custom",
          customFile,
          customDescription,
        })
        onClose()
      } else if (customDescription.trim().length > 10) {
        // Jeśli nie ma pliku, ale jest opis projektu
        onGraphicSelect({
          type: "custom",
          customDescription,
        })
        onClose()
      } else {
        alert("Proszę przesłać plik lub podać szczegółowy opis projektu (min. 10 znaków)")
      }
    }
  }

  // Tytuł modalu w zależności od trybu
  const modalTitle = mode === "oklejanie" ? "Wybierz oklejenie łodzi" : title

  // Tekst dla zakładek w zależności od trybu
  const standardTabText = mode === "oklejanie" ? "Standardowe oklejenia" : "Standardowe grafiki"
  const customTabText = mode === "oklejanie" ? "Własny projekt oklejenia" : "Własny projekt grafiki"

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Przyciemnione tło */}
      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative z-[101] bg-gray-900 border-2 border-red-600 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-red-900/30 animate-fadeIn">
        <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
          <h2 className="text-2xl font-bold text-white flex items-center">
            {mode === "oklejanie" ? (
              <FileImage className="h-6 w-6 mr-2 text-red-500" />
            ) : (
              <Paintbrush className="h-6 w-6 mr-2 text-red-500" />
            )}
            {modalTitle}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-red-900/30 rounded-full p-1 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <div className="border-b border-gray-800">
            <TabsList className="bg-gray-900 p-2 w-full flex">
              <TabsTrigger
                value="standard"
                className="flex-1 data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                <FileImage className="h-4 w-4 mr-2" />
                {standardTabText}
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className="flex-1 data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                <Paintbrush className="h-4 w-4 mr-2" />
                {customTabText}
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
            <TabsContent value="standard" className="flex-1 flex flex-col overflow-hidden h-full">
              {/* Kontener z paskiem przewijania */}
              <div
                className="scrollable-container"
                style={{
                  height: "400px",
                  overflowY: "scroll",
                  padding: "16px",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#ef4444 #1f2937",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {graphics.map((graphic) => {
                    const isSelected = selectedGraphic?.id === graphic.id

                    return (
                      <div
                        key={graphic.id}
                        className={`cursor-pointer rounded-lg border transition-all duration-300 overflow-hidden ${
                          isSelected
                            ? "border-red-500 bg-gray-800 transform scale-[1.02] shadow-lg shadow-red-900/20"
                            : "border-gray-700 hover:border-gray-500"
                        }`}
                        onClick={() => handleGraphicSelect(graphic)}
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={
                              graphic.previewImage ||
                              "/placeholder.svg?height=300&width=400&query=" + encodeURIComponent(graphic.name) ||
                              "/placeholder.svg" ||
                              "/placeholder.svg"
                            }
                            alt={graphic.name}
                            fill
                            className="object-cover"
                          />
                          {isSelected && (
                            <div className="absolute top-2 right-2 bg-red-600 rounded-full p-1 animate-pulse">
                              <Check className="h-5 w-5 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-white">{graphic.name}</h3>
                            <span className="text-red-500 font-bold">{graphic.price} zł</span>
                          </div>
                          <p className="text-gray-400 text-sm mt-1">{graphic.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="flex-1 flex flex-col overflow-hidden">
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {mode === "oklejanie" ? "Prześlij własny projekt oklejenia" : "Prześlij własny projekt grafiki"}
                    </h3>

                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 transition-colors ${
                        customFile ? "border-green-500 bg-green-900/20" : "border-gray-700 hover:border-gray-500"
                      }`}
                    >
                      {previewUrl ? (
                        <div className="relative">
                          <div className="relative h-48 w-full mb-4">
                            <Image
                              src={previewUrl || "/placeholder.svg"}
                              alt="Podgląd przesłanego pliku"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-green-400 mb-2">Plik przesłany pomyślnie!</p>
                          <p className="text-gray-400 text-sm mb-4">
                            {customFile?.name} ({customFile?.size ? (customFile.size / 1024 / 1024).toFixed(2) : 0} MB)
                          </p>
                          <Button variant="destructive" size="sm" onClick={handleRemoveFile} className="mx-auto">
                            <X className="h-4 w-4 mr-2" /> Usuń plik
                          </Button>
                        </div>
                      ) : (
                        <>
                          <FileUp className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                          <h4 className="text-lg font-medium text-white mb-2">
                            Przeciągnij i upuść plik lub kliknij, aby przesłać
                          </h4>
                          <p className="text-gray-400 text-sm mb-4">Akceptowane formaty: JPG, PNG, SVG (max. 10MB)</p>
                          <Button onClick={handleUploadClick} className="bg-red-600 hover:bg-red-700">
                            <Upload className="h-4 w-4 mr-2" /> Wybierz plik
                          </Button>
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            accept="image/*"
                            className="hidden"
                          />
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Lub opisz swój pomysł</h3>
                    <p className="text-gray-400 mb-4">
                      {mode === "oklejanie"
                        ? "Jeśli nie masz gotowego projektu oklejenia, opisz nam swój pomysł, a nasz zespół grafików przygotuje dla Ciebie propozycję."
                        : "Jeśli nie masz gotowego projektu grafiki, opisz nam swój pomysł, a nasz zespół grafików przygotuje dla Ciebie propozycję."}
                    </p>

                    <Textarea
                      placeholder={
                        mode === "oklejanie"
                          ? "Opisz szczegółowo, jak ma wyglądać oklejenie Twojej łodzi. Podaj kolory, styl, motyw, elementy, które powinny się znaleźć na projekcie..."
                          : "Opisz szczegółowo, jak ma wyglądać grafika na Twojej łodzi. Podaj kolory, styl, motyw, elementy, które powinny się znaleźć na projekcie..."
                      }
                      className="min-h-[200px] bg-gray-800 border-gray-700 text-white mb-4"
                      value={customDescription}
                      onChange={(e) => setCustomDescription(e.target.value)}
                    />

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-2">
                        {mode === "oklejanie" ? "Cennik oklejenia indywidualnego:" : "Cennik projektów indywidualnych:"}
                      </h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex justify-between">
                          <span>Projekt na podstawie opisu:</span>
                          <span className="font-bold">od {mode === "oklejanie" ? "1000" : "800"} zł</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Adaptacja dostarczonego projektu:</span>
                          <span className="font-bold">od {mode === "oklejanie" ? "800" : "500"} zł</span>
                        </li>
                        <li className="flex justify-between">
                          <span>{mode === "oklejanie" ? "Wykonanie oklejenia:" : "Wykonanie grafiki:"}</span>
                          <span className="font-bold">od {mode === "oklejanie" ? "2400" : "1200"} zł</span>
                        </li>
                      </ul>
                      <p className="text-gray-400 text-sm mt-4">
                        * Dokładna wycena zostanie przygotowana po analizie projektu lub opisu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>

          {/* Pasek nawigacyjny na dół */}
          <div className="p-4 border-t border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-center sm:text-left w-full sm:w-auto">
                {activeTab === "standard"
                  ? selectedGraphic
                    ? `Wybrano: ${selectedGraphic.name} (${selectedGraphic.price} zł)`
                    : `Wybierz ${mode === "oklejanie" ? "oklejenie" : "grafikę"} z galerii`
                  : customFile
                    ? "Przesłano własny plik"
                    : customDescription.length > 10
                      ? "Opisano projekt"
                      : "Prześlij plik lub opisz swój projekt"}
              </div>
              <div className="flex space-x-4 w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="border-gray-700 text-white hover:bg-gray-800 flex-1 sm:flex-auto"
                >
                  Anuluj
                </Button>
                <Button
                  onClick={handleConfirm}
                  disabled={
                    (activeTab === "standard" && !selectedGraphic) ||
                    (activeTab === "custom" && !customFile && customDescription.trim().length <= 10)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white flex-1 sm:flex-auto text-lg py-4 px-8"
                >
                  Zatwierdź wybór
                </Button>
              </div>
            </div>
          </div>
        </Tabs>
      </div>

      {/* Style dla paska przewijania */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        /* Style dla paska przewijania w WebKit (Chrome, Safari, Edge) */
        .scrollable-container::-webkit-scrollbar {
          width: 12px;
        }
        
        .scrollable-container::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 6px;
        }
        
        .scrollable-container::-webkit-scrollbar-thumb {
          background-color: #ef4444;
          border-radius: 6px;
          border: 3px solid #1f2937;
        }
        
        .scrollable-container::-webkit-scrollbar-thumb:hover {
          background-color: #b91c1c;
        }
      `}</style>
    </div>
  )
}
