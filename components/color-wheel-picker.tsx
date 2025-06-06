"use client"

import { useState, useEffect } from "react"
import { X, Check, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Definicja typu dla koloru
export interface SelectedColor {
  hex: string
  code: string
  name: string
  finish?: "mat" | "połysk"
}

// Właściwości komponentu
interface RalColorPickerProps {
  isOpen: boolean
  onClose: () => void
  onColorSelect: (colors: SelectedColor[]) => void
  multiSelect?: boolean
  title?: string
  initialColors?: SelectedColor[]
}

// Kategorie kolorów RAL
const colorCategories = [
  {
    id: "yellow",
    name: "Żółty",
    colors: [
      "1000",
      "1001",
      "1002",
      "1003",
      "1004",
      "1005",
      "1006",
      "1007",
      "1011",
      "1012",
      "1013",
      "1014",
      "1015",
      "1016",
      "1017",
      "1018",
      "1019",
      "1020",
      "1021",
      "1023",
      "1024",
      "1026",
      "1027",
      "1028",
      "1032",
      "1033",
      "1034",
      "1035",
      "1036",
      "1037",
    ],
  },
  {
    id: "orange",
    name: "Pomarańczowy",
    colors: ["2000", "2001", "2002", "2003", "2004", "2005", "2007", "2008", "2009", "2010", "2011", "2012", "2013"],
  },
  {
    id: "red",
    name: "Czerwony",
    colors: [
      "3000",
      "3001",
      "3002",
      "3003",
      "3004",
      "3005",
      "3007",
      "3009",
      "3011",
      "3012",
      "3013",
      "3014",
      "3015",
      "3016",
      "3017",
      "3018",
      "3020",
      "3022",
      "3024",
      "3026",
      "3027",
      "3028",
      "3031",
      "3032",
      "3033",
    ],
  },
  {
    id: "purple",
    name: "Fioletowy",
    colors: ["4001", "4002", "4003", "4004", "4005", "4006", "4007", "4008", "4009", "4010", "4011", "4012"],
  },
  {
    id: "blue",
    name: "Niebieski",
    colors: [
      "5000",
      "5001",
      "5002",
      "5003",
      "5004",
      "5005",
      "5007",
      "5008",
      "5009",
      "5010",
      "5011",
      "5012",
      "5013",
      "5014",
      "5015",
      "5017",
      "5018",
      "5019",
      "5020",
      "5021",
      "5022",
      "5023",
      "5024",
      "5025",
      "5026",
    ],
  },
  {
    id: "green",
    name: "Zielony",
    colors: [
      "6000",
      "6001",
      "6002",
      "6003",
      "6004",
      "6005",
      "6006",
      "6007",
      "6008",
      "6009",
      "6010",
      "6011",
      "6012",
      "6013",
      "6014",
      "6015",
      "6016",
      "6017",
      "6018",
      "6019",
      "6020",
      "6021",
      "6022",
      "6024",
      "6025",
      "6026",
      "6027",
      "6028",
      "6029",
      "6032",
      "6033",
      "6034",
      "6035",
      "6036",
      "6037",
      "6038",
    ],
  },
  {
    id: "grey",
    name: "Szary",
    colors: [
      "7000",
      "7001",
      "7002",
      "7003",
      "7004",
      "7005",
      "7006",
      "7008",
      "7009",
      "7010",
      "7011",
      "7012",
      "7013",
      "7015",
      "7016",
      "7021",
      "7022",
      "7023",
      "7024",
      "7026",
      "7030",
      "7031",
      "7032",
      "7033",
      "7034",
      "7035",
      "7036",
      "7037",
      "7038",
      "7039",
      "7040",
      "7042",
      "7043",
      "7044",
      "7045",
      "7046",
      "7047",
      "7048",
    ],
  },
  {
    id: "brown",
    name: "Brązowy",
    colors: [
      "8000",
      "8001",
      "8002",
      "8003",
      "8004",
      "8007",
      "8008",
      "8011",
      "8012",
      "8014",
      "8015",
      "8016",
      "8017",
      "8019",
      "8022",
      "8023",
      "8024",
      "8025",
      "8028",
      "8029",
    ],
  },
  {
    id: "white",
    name: "Biały i czarny",
    colors: [
      "9001",
      "9002",
      "9003",
      "9004",
      "9005",
      "9006",
      "9007",
      "9010",
      "9011",
      "9012",
      "9016",
      "9017",
      "9018",
      "9022",
      "9023",
    ],
  },
]

// Baza kolorów RAL (kod: [hex, nazwa])
const ralColors: { [key: string]: [string, string] } = {
  "1000": ["#BEBD7F", "Beżowy"],
  "1001": ["#C2B078", "Beż"],
  "1002": ["#C6A664", "Piaskowy"],
  "1003": ["#E5BE01", "Żółty sygnałowy"],
  "1004": ["#CDA434", "Złoto żółty"],
  "1005": ["#A98307", "Miodowy"],
  "1006": ["#E4A010", "Kukurydziany"],
  "1007": ["#DC9D00", "Żółty narkizowy"],
  "1011": ["#8A6642", "Beżowy brąz"],
  "1012": ["#C7B446", "Żółty cytrynowy"],
  "1013": ["#EAE6CA", "Perłowy biały"],
  "1014": ["#E1CC4F", "Kość słoniowa"],
  "1015": ["#E6D690", "Jasna kość słoniowa"],
  "1016": ["#EDFF21", "Żółty siarkowy"],
  "1017": ["#F5D033", "Żółty szafranowy"],
  "1018": ["#F8F32B", "Żółty cynkowy"],
  "1019": ["#9E9764", "Beżowy szary"],
  "1020": ["#999950", "Oliwkowy"],
  "1021": ["#F3DA0B", "Żółty rzepakowy"],
  "1023": ["#FAD201", "Żółty drogowy"],
  "1024": ["#AEA04B", "Żółty ochrowy"],
  "1026": ["#FFFF00", "Żółty luminescencyjny"],
  "1027": ["#9D9101", "Żółty curry"],
  "1028": ["#F4A900", "Żółty melonowy"],
  "1032": ["#D6AE01", "Żółty janowcowy"],
  "1033": ["#F3A505", "Żółty daliowy"],
  "1034": ["#EFA94A", "Żółty pastelowy"],
  "1035": ["#6A5D4D", "Beżowy perłowy"],
  "1036": ["#705335", "Złoty perłowy"],
  "1037": ["#F39F18", "Żółty słoneczny"],
  "2000": ["#ED760E", "Żółty pomarańczowy"],
  "2001": ["#C93C20", "Czerwony pomarańczowy"],
  "2002": ["#CB2821", "Pomarańczowy krwisty"],
  "2003": ["#FF7514", "Pomarańczowy pastelowy"],
  "2004": ["#F44611", "Pomarańczowy czysty"],
  "2005": ["#FF2301", "Pomarańczowy luminescencyjny"],
  "2007": ["#FFA420", "Pomarańczowy jasny luminescencyjny"],
  "2008": ["#F75E25", "Czerwony jasny pomarańczowy"],
  "2009": ["#F54021", "Pomarańczowy drogowy"],
  "2010": ["#D84B20", "Pomarańczowy sygnałowy"],
  "2011": ["#EC7C26", "Pomarańczowy głęboki"],
  "2012": ["#E55137", "Łososiowy pomarańczowy"],
  "2013": ["#C35831", "Perłowy pomarańczowy"],
  "3000": ["#AF2B1E", "Czerwony ognisty"],
  "3001": ["#A52019", "Czerwony sygnałowy"],
  "3002": ["#A2231D", "Czerwony karminowy"],
  "3003": ["#9B111E", "Czerwony rubinowy"],
  "3004": ["#75151E", "Czerwony purpurowy"],
  "3005": ["#5E2129", "Czerwony winiowy"],
  "3007": ["#412227", "Czerwony czarny"],
  "3009": ["#642424", "Czerwony tlenkowy"],
  "3011": ["#781F19", "Czerwony brunatny"],
  "3012": ["#C1876B", "Czerwony beżowy"],
  "3013": ["#A12312", "Czerwony pomidorowy"],
  "3014": ["#D36E70", "Różowy stary"],
  "3015": ["#EA899A", "Różowy jasny"],
  "3016": ["#B32821", "Czerwony koralowy"],
  "3017": ["#E63244", "Różowy"],
  "3018": ["#D53032", "Czerwony truskawkowy"],
  "3020": ["#CC0605", "Czerwony drogowy"],
  "3022": ["#D95030", "Czerwony łososiowy"],
  "3024": ["#F80000", "Czerwony luminescencyjny"],
  "3026": ["#FE0000", "Czerwony jasny luminescencyjny"],
  "3027": ["#C51D34", "Czerwony malinowy"],
  "3028": ["#CB3234", "Czerwony czysty"],
  "3031": ["#B32428", "Czerwony orientalny"],
  "3032": ["#721422", "Czerwony perłowy"],
  "3033": ["#B44C43", "Różowy perłowy"],
  "4001": ["#6D3F5B", "Czerwony liliowy"],
  "4002": ["#922B3E", "Czerwony fioletowy"],
  "4003": ["#DE4C8A", "Różowy wrzosowy"],
  "4004": ["#641C34", "Fioletowy bordeaux"],
  "4005": ["#6C4675", "Fioletowy niebieski"],
  "4006": ["#A03472", "Fioletowy drogowy"],
  "4007": ["#4A192C", "Fioletowy purpurowy"],
  "4008": ["#924E7D", "Fioletowy sygnałowy"],
  "4009": ["#A18594", "Fioletowy pastelowy"],
  "4010": ["#CF3476", "Fioletowy telemagenta"],
  "4011": ["#8673A1", "Fioletowy perłowy"],
  "4012": ["#6C6874", "Fioletowy perłowy"],
  "5000": ["#354D73", "Niebieski fioletowy"],
  "5001": ["#1F3438", "Niebieski zielony"],
  "5002": ["#20214F", "Niebieski ultramaryna"],
  "5003": ["#1D1E33", "Niebieski szafirowy"],
  "5004": ["#18171C", "Niebieski czarny"],
  "5005": ["#1E2460", "Niebieski sygnałowy"],
  "5007": ["#3E5F8A", "Niebieski brylantowy"],
  "5008": ["#26252D", "Niebieski szary"],
  "5009": ["#025669", "Niebieski azurowy"],
  "5010": ["#0E294B", "Niebieski gencjanowy"],
  "5011": ["#231A24", "Niebieski stalowy"],
  "5012": ["#3B83BD", "Niebieski jasny"],
  "5013": ["#1E213D", "Niebieski kobaltowy"],
  "5014": ["#606E8C", "Niebieski gołębi"],
  "5015": ["#2271B3", "Niebieski niebieski"],
  "5017": ["#063971", "Niebieski drogowy"],
  "5018": ["#3F888F", "Niebieski turkusowy"],
  "5019": ["#1B5583", "Niebieski Capri"],
  "5020": ["#1D334A", "Niebieski oceaniczny"],
  "5021": ["#256D7B", "Niebieski wodny"],
  "5022": ["#252850", "Niebieski nocny"],
  "5023": ["#49678D", "Niebieski odległy"],
  "5024": ["#5D9B9B", "Niebieski pastelowy"],
  "5025": ["#2A6478", "Niebieski perłowy"],
  "5026": ["#102C54", "Niebieski perłowy"],
  "6000": ["#316650", "Zielony patynowy"],
  "6001": ["#287233", "Zielony szmaragdowy"],
  "6002": ["#2D572C", "Zielony liściasty"],
  "6003": ["#424632", "Zielony oliwkowy"],
  "6004": ["#1F3A3D", "Zielony niebieski"],
  "6005": ["#2F4538", "Zielony mchowy"],
  "6006": ["#3E3B32", "Zielony oliwkowy szary"],
  "6007": ["#343B29", "Zielony butelkowy"],
  "6008": ["#39352A", "Zielony brunatny"],
  "6009": ["#31372B", "Zielony jodłowy"],
  "6010": ["#35682D", "Zielony trawiasty"],
  "6011": ["#587246", "Zielony rezedowy"],
  "6012": ["#343E40", "Zielony czarny"],
  "6013": ["#6C7156", "Zielony trzcinowy"],
  "6014": ["#47402E", "Zielony oliwkowy żółty"],
  "6015": ["#3B3C36", "Zielony czarny oliwkowy"],
  "6016": ["#1E5945", "Zielony turkusowy"],
  "6017": ["#4C9141", "Zielony majowy"],
  "6018": ["#57A639", "Zielony żółty"],
  "6019": ["#BDECB6", "Zielony pastelowy"],
  "6020": ["#2E3A23", "Zielony chromowy"],
  "6021": ["#89AC76", "Zielony jasny"],
  "6022": ["#25221B", "Zielony oliwkowy brunatny"],
  "6024": ["#308446", "Zielony drogowy"],
  "6025": ["#3D642D", "Zielony paprociowy"],
  "6026": ["#015D52", "Zielony opalowy"],
  "6027": ["#84C3BE", "Zielony jasny"],
  "6028": ["#2C5545", "Zielony sosnowy"],
  "6029": ["#20603D", "Zielony miętowy"],
  "6032": ["#317F43", "Zielony sygnałowy"],
  "6033": ["#497E76", "Zielony miętowy turkusowy"],
  "6034": ["#7FB5B5", "Zielony pastelowy turkusowy"],
  "6035": ["#1C542D", "Zielony perłowy"],
  "6036": ["#193737", "Zielony perłowy"],
  "6037": ["#008F39", "Zielony czysty"],
  "6038": ["#00BB2D", "Zielony luminescencyjny"],
  "7000": ["#78858B", "Szary popielaty"],
  "7001": ["#8A9597", "Szary srebrny"],
  "7002": ["#7E7B52", "Szary oliwkowy"],
  "7003": ["#6C7059", "Szary mchowy"],
  "7004": ["#969992", "Szary sygnałowy"],
  "7005": ["#646B63", "Szary mysi"],
  "7006": ["#6D6552", "Szary beżowy"],
  "7008": ["#6A5F31", "Szary khaki"],
  "7009": ["#4D5645", "Szary zielony"],
  "7010": ["#4C514A", "Szary brezentowy"],
  "7011": ["#434B4D", "Szary żelazny"],
  "7012": ["#4E5754", "Szary bazaltowy"],
  "7013": ["#464531", "Szary brunatny"],
  "7015": ["#434750", "Szary łupkowy"],
  "7016": ["#293133", "Szary antracytowy"],
  "7021": ["#23282B", "Szary czarny"],
  "7022": ["#332F2C", "Szary umbra"],
  "7023": ["#686C5E", "Szary betonowy"],
  "7024": ["#474A51", "Szary grafitowy"],
  "7026": ["#2F353B", "Szary granit"],
  "7030": ["#8B8C7A", "Szary kamienny"],
  "7031": ["#474B4E", "Szary niebieski"],
  "7032": ["#B8B799", "Szary krzemowy"],
  "7033": ["#7D8471", "Szary cementowy"],
  "7034": ["#8F8B66", "Szary żółty"],
  "7035": ["#D7D7D7", "Szary jasny"],
  "7036": ["#7F7679", "Szary platynowy"],
  "7037": ["#7D7F7D", "Szary pyłowy"],
  "7038": ["#B5B8B1", "Szary agatowy"],
  "7039": ["#6C6960", "Szary kwarcowy"],
  "7040": ["#9DA1AA", "Szary okienny"],
  "7042": ["#8D948D", "Szary drogowy A"],
  "7043": ["#4E5452", "Szary drogowy B"],
  "7044": ["#CAC4B0", "Szary jedwabisty"],
  "7045": ["#909090", "Szary telegrey 1"],
  "7046": ["#82898F", "Szary telegrey 2"],
  "7047": ["#D0D0D0", "Szary telegrey 4"],
  "7048": ["#898176", "Szary perłowy mysi"],
  "8000": ["#826C34", "Brązowy zielony"],
  "8001": ["#955F20", "Brązowy ochra"],
  "8002": ["#6C3B2A", "Brązowy sygnałowy"],
  "8003": ["#734222", "Brązowy glina"],
  "8004": ["#8E402A", "Brązowy miedziany"],
  "8007": ["#59351F", "Brązowy sarni"],
  "8008": ["#6F4F28", "Brązowy oliwkowy"],
  "8011": ["#5B3A29", "Brązowy orzechowy"],
  "8012": ["#592321", "Brązowy czerwony"],
  "8014": ["#382C1E", "Brązowy sepia"],
  "8015": ["#633A34", "Brązowy kasztanowy"],
  "8016": ["#4C2F27", "Brązowy mahoniowy"],
  "8017": ["#45322E", "Brązowy czekoladowy"],
  "8019": ["#403A3A", "Brązowy szary"],
  "8022": ["#212121", "Brązowy czarny"],
  "8023": ["#A65E2E", "Brązowy pomarańczowy"],
  "8024": ["#79553D", "Brązowy beżowy"],
  "8025": ["#755C48", "Brązowy jasny"],
  "8028": ["#4E3B31", "Brązowy ziemisty"],
  "8029": ["#763C28", "Brązowy perłowy"],
  "9001": ["#FDF4E3", "Kremowy"],
  "9002": ["#E7EBDA", "Biały szary"],
  "9003": ["#F4F4F4", "Biały sygnałowy"],
  "9004": ["#282828", "Czarny sygnałowy"],
  "9005": ["#0A0A0A", "Czarny głęboki"],
  "9006": ["#A5A5A5", "Srebrny aluminiowy"],
  "9007": ["#8F8F8F", "Szary aluminiowy"],
  "9010": ["#FFFFFF", "Biały czysty"],
  "9011": ["#1C1C1C", "Czarny grafitowy"],
  "9012": ["#F6F6F6", "Biały czysty aluminiowy"],
  "9016": ["#F6F6F6", "Biały drogowy"],
  "9017": ["#1E1E1E", "Czarny drogowy"],
  "9018": ["#D7D7D7", "Biały papirus"],
  "9022": ["#9C9C9C", "Perłowy jasny szary"],
  "9023": ["#828282", "Perłowy ciemny szary"],
}

export default function RalColorPicker({
  isOpen,
  onClose,
  onColorSelect,
  multiSelect = false,
  title = "Wybierz kolor",
  initialColors = [],
}: RalColorPickerProps) {
  const [activeCategory, setActiveCategory] = useState<string>("yellow")
  const [selectedColors, setSelectedColors] = useState<SelectedColor[]>(initialColors)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filteredColors, setFilteredColors] = useState<string[]>([])
  const [finish, setFinish] = useState<"mat" | "połysk">("mat")
  const [currentPage, setCurrentPage] = useState<number>(0)
  const colorsPerPage = 30

  // Efekt do filtrowania kolorów na podstawie wyszukiwania
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredColors([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results: string[] = []

    Object.entries(ralColors).forEach(([code, [_, name]]) => {
      if (code.includes(query) || name.toLowerCase().includes(query)) {
        results.push(code)
      }
    })

    setFilteredColors(results)
  }, [searchQuery])

  // Obsługa wyboru koloru
  const handleColorSelect = (code: string) => {
    const [hex, name] = ralColors[code]

    if (multiSelect) {
      // Dla trybu wielokrotnego wyboru
      if (selectedColors.some((c) => c.code === code && c.finish === finish)) {
        // Jeśli kolor jest już wybrany, usuń go
        setSelectedColors(selectedColors.filter((c) => !(c.code === code && c.finish === finish)))
      } else {
        // Jeśli kolor nie jest wybrany, dodaj go (maksymalnie 2 kolory)
        if (selectedColors.length < 2) {
          setSelectedColors([...selectedColors, { hex, code, name, finish }])
        } else {
          // Jeśli już są 2 kolory, zastąp drugi
          setSelectedColors([selectedColors[0], { hex, code, name, finish }])
        }
      }
    } else {
      // Dla trybu pojedynczego wyboru
      setSelectedColors([{ hex, code, name, finish }])
    }
  }

  // Obsługa zatwierdzenia wyboru
  const handleConfirm = () => {
    if (selectedColors.length > 0) {
      onColorSelect(selectedColors)
      onClose()
    }
  }

  // Obsługa zmiany kategorii
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(0)
  }

  // Obsługa zmiany strony
  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1)
    } else if (direction === "next") {
      const maxPage = Math.ceil(
        (searchQuery
          ? filteredColors.length
          : colorCategories.find((c) => c.id === activeCategory)?.colors.length || 0) / colorsPerPage,
      )
      if (currentPage < maxPage - 1) {
        setCurrentPage(currentPage + 1)
      }
    }
  }

  // Pobieranie kolorów do wyświetlenia
  const getColorsToDisplay = () => {
    let colors: string[] = []

    if (searchQuery) {
      colors = filteredColors
    } else {
      const category = colorCategories.find((c) => c.id === activeCategory)
      if (category) {
        colors = category.colors
      }
    }

    const startIndex = currentPage * colorsPerPage
    return colors.slice(startIndex, startIndex + colorsPerPage)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Przyciemnione tło */}
      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative z-[101] bg-gray-900 border-2 border-red-600 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-red-900/30 animate-fadeIn">
        <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-red-900/30 rounded-full p-1 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Wybór wykończenia */}
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-3">Wybierz wykończenie:</h3>
            <div className="flex space-x-4">
              <div
                className={`flex-1 p-4 rounded-lg cursor-pointer transition-all ${
                  finish === "mat" ? "bg-red-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setFinish("mat")}
              >
                <div className="flex items-center justify-center">
                  {finish === "mat" && <Check className="h-5 w-5 mr-2" />}
                  <span className="font-medium">Mat</span>
                </div>
              </div>
              <div
                className={`flex-1 p-4 rounded-lg cursor-pointer transition-all ${
                  finish === "połysk" ? "bg-red-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setFinish("połysk")}
              >
                <div className="flex items-center justify-center">
                  {finish === "połysk" && <Check className="h-5 w-5 mr-2" />}
                  <span className="font-medium">Połysk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wyszukiwarka */}
          <div className="p-4 border-b border-gray-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Szukaj po kodzie RAL lub nazwie koloru..."
                className="pl-10 bg-gray-800 border-gray-700 text-white"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(0)
                }}
              />
            </div>
          </div>

          {/* Kategorie kolorów */}
          {!searchQuery && (
            <div className="p-2 border-b border-gray-800 overflow-x-auto">
              <div className="flex space-x-2">
                {colorCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-md whitespace-nowrap ${
                      activeCategory === category.id
                        ? "bg-red-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tabela kolorów */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {getColorsToDisplay().map((code) => {
                const [hex, name] = ralColors[code]
                const isSelected = selectedColors.some((c) => c.code === code && c.finish === finish)

                return (
                  <div
                    key={`${code}-${finish}`}
                    className={`cursor-pointer rounded-lg border transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? "border-red-500 transform scale-[1.02] shadow-lg shadow-red-900/20"
                        : "border-gray-700 hover:border-gray-500"
                    }`}
                    onClick={() => handleColorSelect(code)}
                  >
                    <div
                      className="h-24 w-full"
                      style={{
                        backgroundColor: hex,
                        filter: finish === "połysk" ? "brightness(1.1) contrast(1.1)" : "none",
                      }}
                    >
                      {isSelected && (
                        <div className="flex justify-end p-2">
                          <div className="bg-red-600 rounded-full p-1 animate-pulse">
                            <Check className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 bg-gray-800">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white">RAL {code}</span>
                        <span className="text-xs text-gray-400">{finish}</span>
                      </div>
                      <p className="text-sm text-gray-300 truncate">{name}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Paginacja */}
            {getColorsToDisplay().length > 0 && (
              <div className="flex justify-between items-center mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange("prev")}
                  disabled={currentPage === 0}
                  className="border-gray-700 text-white hover:bg-gray-800"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Poprzednia
                </Button>
                <span className="text-gray-400">
                  Strona {currentPage + 1} z{" "}
                  {Math.ceil(
                    (searchQuery
                      ? filteredColors.length
                      : colorCategories.find((c) => c.id === activeCategory)?.colors.length || 0) / colorsPerPage,
                  )}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange("next")}
                  disabled={
                    currentPage >=
                    Math.ceil(
                      (searchQuery
                        ? filteredColors.length
                        : colorCategories.find((c) => c.id === activeCategory)?.colors.length || 0) / colorsPerPage,
                    ) -
                      1
                  }
                  className="border-gray-700 text-white hover:bg-gray-800"
                >
                  Następna <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}

            {getColorsToDisplay().length === 0 && (
              <div className="flex flex-col items-center justify-center h-64">
                <p className="text-gray-400 text-lg">Nie znaleziono kolorów</p>
                <p className="text-gray-500 text-sm mt-2">Spróbuj zmienić kryteria wyszukiwania</p>
              </div>
            )}
          </div>

          {/* Wybrane kolory i przyciski */}
          <div className="p-4 border-t border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                {selectedColors.length > 0 ? (
                  selectedColors.map((color, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-8 h-8 rounded-md mr-2"
                        style={{
                          backgroundColor: color.hex,
                          filter: color.finish === "połysk" ? "brightness(1.1) contrast(1.1)" : "none",
                        }}
                      ></div>
                      <div>
                        <div className="text-white text-sm">RAL {color.code}</div>
                        <div className="text-gray-400 text-xs">{color.finish}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <span className="text-gray-400">Nie wybrano koloru</span>
                )}
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
                  disabled={selectedColors.length === 0}
                  className="bg-red-600 hover:bg-red-700 text-white flex-1 sm:flex-auto text-lg py-4 px-8"
                >
                  Zatwierdź wybór
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dodanie animacji */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
