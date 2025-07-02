import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import StaggeredContainer from "@/components/staggered-container"

// Define model data interface
interface ModelData {
  name: string
  description: string
  images: string[]
  specs: Record<string, string>
  additionalInfo?: Record<string, string>
}

// Define model data
const modelData: Record<string, ModelData> = {
  "420": {
    name: "Model 420",
    description:
      "Kompaktowa łódź aluminiowa idealna dla wędkarzy poszukujących mobilności i łatwości transportu. Model 420 łączy w sobie lekkość konstrukcji z wytrzymałością aluminium, oferując doskonałą stabilność na wodzie.",
    images: [
      "/boat-full-view.jpeg",
      "/boat-interior-led.jpeg",
      "/boat-side-view.jpeg",
      "/boat-angle-view.jpeg",
      "/boat-interior-wet.jpeg",
    ],
    specs: {
      "Długość całkowita": "4,20 m",
      "Szerokość całkowita": "1,70 m",
      "Wysokość burty": "0,65 m",
      "Waga łodzi": "około 150 kg",
      "Maksymalna moc silnika": "30 KM",
      "Maksymalna liczba osób": "4",
      "Kategoria projektowa": "C",
    },
  },
  "470": {
    name: "Model 470",
    description:
      "Uniwersalna łódź aluminiowa o zwiększonej przestrzeni użytkowej, idealna zarówno dla wędkarzy, jak i miłośników rekreacji wodnej. Model 470 oferuje doskonały balans między zwrotnością a stabilnością, zapewniając komfort podczas całodniowych wypraw.",
    images: [
      "/model-470-interior.jpeg",
      "/model-470-graphic.jpeg",
      "/boat-side-view.jpeg",
      "/boat-interior-wet.jpeg",
      "/boat-full-view.jpeg",
      "/boat-angle-view.jpeg",
      "/boat-interior-led.jpeg",
      "/model-boat-top-view.jpeg",
      "/model-boat-led-night.jpeg",
      "/model-boat-equipment.jpeg",
    ],
    specs: {
      "Długość całkowita": "472 cm",
      "Szerokość całkowita": "189 cm",
      "Szerokość dna": "135 cm",
      "Wysokość burty": "50 cm",
      "Waga łodzi": "145 kg",
      "Ilość wręg": "9 szt.",
      "Przetłoczenia dna": "6 szt.",
      "Sposób wykonania": "W całości spawana",
      "Ilość komór wypornościowych": "2 szt. + podłoga (razem 430l)",
      Pawęż: "Pod stopę S lub L",
      "Maksymalna moc silnika": "40 KM",
      "Maksymalne obciążenie": "590 kg",
      Zanurzenie: "11 cm (przy obciążeniu 430 kg)",
      "Kolor malowania": "Do wyboru z palety kolorów RAL",
    },
    additionalInfo: {
      Pokrycie: "Podkład – farba epoksydowa, nawierzchniowo – farba poliuretanowa",
      "Wyposażenie dodatkowe":
        "Na życzenie uzbrajamy łodzie we wszystkie niezbędne elementy wyposażenia – zabudowy / relingi / bakisty / fotele / oświetlenie kabinowe, nawigacyjne / pompa zęzowa / pełna elektryka / wszystkie elementy stalowe, okucia – stal nierdzewna / oklejanie.",
      Personalizacja:
        "Możliwość wykonania indywidualnych grafik na burtach łodzi, dostosowanych do preferencji klienta.",
    },
  },
  "550": {
    name: "Model 550",
    description:
      "Przestronna łódź aluminiowa zaprojektowana z myślą o komforcie i funkcjonalności. Model 550 oferuje rozszerzoną przestrzeń użytkową, doskonałą stabilność i możliwość montażu zaawansowanego wyposażenia wędkarskiego oraz efektownego oświetlenia LED.",
    images: [
      "/model-550-trailer-night.jpeg",
      "/model-550-led-lighting.jpeg",
      "/model-550-equipment.jpeg",
      "/model-550-neon.png",
    ],
    specs: {
      "Długość całkowita": "5,50 m",
      "Szerokość całkowita": "2,10 m",
      "Wysokość burty": "0,80 m",
      "Waga łodzi": "około 250 kg",
      "Maksymalna moc silnika": "70 KM",
      "Maksymalna liczba osób": "6",
      "Kategoria projektowa": "C",
      Oświetlenie: "System LED z możliwością personalizacji kolorów",
      "Wyposażenie dodatkowe": "Fotele premium, stolik, uchwyt na wędki, echosonda",
    },
    additionalInfo: {
      "Oświetlenie LED":
        "Model 550 może być wyposażony w zaawansowany system oświetlenia LED, który nie tylko poprawia widoczność podczas nocnych wypraw, ale również nadaje łodzi unikalny, sportowy charakter.",
      "Personalizacja kolorystyczna":
        "Możliwość wyboru koloru łodzi oraz oświetlenia LED według preferencji klienta. Dostępne są różne warianty kolorystyczne, w tym efektowne neony.",
      "Komfort i funkcjonalność":
        "Przestronna konstrukcja pozwala na montaż wygodnych foteli, stolika oraz dodatkowego wyposażenia wędkarskiego, co czyni model 550 idealnym wyborem zarówno dla wędkarzy, jak i miłośników rekreacji wodnej.",
    },
  },
  nomad: {
    name: "Model NOMAD",
    description:
      "Flagowy model w ofercie DevilCraft, zaprojektowany dla najbardziej wymagających wędkarzy. NOMAD łączy w sobie najwyższą jakość wykonania, zaawansowane rozwiązania techniczne i możliwość pełnej personalizacji. Doskonały wybór na dalekie wyprawy i ekstremalne warunki.",
    images: [
      "/boat-graphic-detail.jpeg",
      "/boat-side-view.jpeg",
      "/boat-full-view.jpeg",
      "/boat-angle-view.jpeg",
      "/boat-interior-led.jpeg",
      "/boat-interior-wet.jpeg",
      "/model-470-graphic.jpeg",
    ],
    specs: {
      "Długość całkowita": "5,20 m",
      "Szerokość całkowita": "2,00 m",
      "Wysokość burty": "0,85 m",
      "Waga łodzi": "około 220 kg",
      "Maksymalna moc silnika": "90 KM",
      "Maksymalna liczba osób": "5",
      "Kategoria projektowa": "C",
      "Specjalne wyposażenie": "Oświetlenie LED, system live-well, personalizowana grafika",
    },
  },
}

export default function ModelPage({ params }: { params: { model: string } }) {
  const model = params.model.toLowerCase()

  // Check if model exists
  if (!modelData[model as keyof typeof modelData]) {
    notFound()
  }

  const data = modelData[model as keyof typeof modelData]

  // Group specs into categories for better presentation
  const groupedSpecs = {
    dimensions: ["Długość całkowita", "Szerokość całkowita", "Szerokość dna", "Wysokość burty", "Waga łodzi"],
    construction: ["Ilość wręg", "Przetłoczenia dna", "Sposób wykonania", "Ilość komór wypornościowych", "Pawęż"],
    performance: [
      "Maksymalna moc silnika",
      "Maksymalne obciążenie",
      "Zanurzenie",
      "Maksymalna liczba osób",
      "Kategoria projektowa",
    ],
    other: ["Kolor malowania", "Specjalne wyposażenie", "Oświetlenie", "Wyposażenie dodatkowe"],
  }

  // Determine if we're on model 550 to apply special layout
  const isModel550 = model === "550"

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation delay={100}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 fade-in-element title-animation">
            {data.name}
          </h1>
        </ScrollAnimation>
        {/* Description */}
        <ScrollAnimation delay={100}>
          <div className="mb-12">
            <p className="text-lg text-gray-300 fade-in-element description-animation">{data.description}</p>
          </div>
        </ScrollAnimation>

        {/* Special layout for model 550 */}
        {isModel550 ? (
          <div className="mb-12">
            {/* Hero image - full width */}
            <ScrollAnimation delay={150}>
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-lg mb-8">
                <Image
                  src="/model-550-neon.png"
                  alt={`${data.name} - efektowne oświetlenie LED`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">DevilCraft 550</h2>
                  <p className="text-xl text-gray-200">Zaawansowana technologia oświetlenia LED</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Three column layout for other images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ScrollAnimation delay={200}>
                <div className="relative h-[250px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/model-550-trailer-night.jpeg"
                    alt={`${data.name} - widok z góry na przyczepie`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-30 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-sm text-white font-medium">Widok z góry z fotelami premium</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={250}>
                <div className="relative h-[250px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/model-550-led-lighting.jpeg"
                    alt={`${data.name} - oświetlenie LED nocą`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-30 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-sm text-white font-medium">Oświetlenie LED w kolorze niebieskim</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <div className="relative h-[250px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/model-550-equipment.jpeg"
                    alt={`${data.name} - wyposażenie wewnętrzne`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 hover:opacity-30 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-sm text-white font-medium">Wyposażenie wewnętrzne z fotelami</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        ) : (
          /* Standard layout for other models */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Images */}
            <StaggeredContainer className="space-y-6" staggerDelay={100} initialDelay={150} cascade={true}>
              {data.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[300px] overflow-hidden rounded-lg shadow-lg image-hover-container fade-in-element"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${data.name} - zdjęcie ${index + 1}`}
                    fill
                    className="object-cover image-hover-effect"
                  />
                  <div className="image-overlay"></div>
                </div>
              ))}
            </StaggeredContainer>

            {/* Right Column - Specifications */}
            <ScrollAnimation direction="right" delay={200}>
              <div className="fade-in-element">
                <h2 className="text-2xl font-bold mb-6 text-white title-animation">Specyfikacja techniczna</h2>

                {/* Dimensions */}
                <div className="mb-6 bg-gray-900 rounded-lg p-6 border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Wymiary i waga</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groupedSpecs.dimensions.map((key) => {
                      if (data.specs[key]) {
                        return (
                          <div key={key} className="flex items-center transition-all duration-300 hover:translate-x-2">
                            <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                            <div>
                              <span className="text-gray-400">{key}:</span>
                              <span className="ml-2 text-white font-medium">{data.specs[key]}</span>
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>

                {/* Construction */}
                <div className="mb-6 bg-gray-900 rounded-lg p-6 border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Konstrukcja</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groupedSpecs.construction.map((key) => {
                      if (data.specs[key]) {
                        return (
                          <div key={key} className="flex items-center transition-all duration-300 hover:translate-x-2">
                            <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                            <div>
                              <span className="text-gray-400">{key}:</span>
                              <span className="ml-2 text-white font-medium">{data.specs[key]}</span>
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>

                {/* Performance */}
                <div className="mb-6 bg-gray-900 rounded-lg p-6 border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Osiągi i parametry</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groupedSpecs.performance.map((key) => {
                      if (data.specs[key]) {
                        return (
                          <div key={key} className="flex items-center transition-all duration-300 hover:translate-x-2">
                            <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                            <div>
                              <span className="text-gray-400">{key}:</span>
                              <span className="ml-2 text-white font-medium">{data.specs[key]}</span>
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>

                {/* Other Specs */}
                <div className="mb-6 bg-gray-900 rounded-lg p-6 border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800">
                  <h3 className="text-xl font-semibold text-red-500 mb-4">Dodatkowe informacje</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {groupedSpecs.other.map((key) => {
                      if (data.specs[key]) {
                        return (
                          <div key={key} className="flex items-center transition-all duration-300 hover:translate-x-2">
                            <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                            <div>
                              <span className="text-gray-400">{key}:</span>
                              <span className="ml-2 text-white font-medium">{data.specs[key]}</span>
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )}

        {/* Specifications for model 550 */}
        {isModel550 && (
          <div className="mb-12">
            <ScrollAnimation delay={350}>
              <h2 className="text-2xl font-bold mb-6 text-white title-animation">Specyfikacja techniczna</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column specs */}
                <div className="space-y-6">
                  {/* Dimensions */}
                  <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800">
                    <h3 className="text-xl font-semibold text-red-500 mb-4">Wymiary i waga</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {groupedSpecs.dimensions.map((key) => {
                        if (data.specs[key]) {
                          return (
                            <div
                              key={key}
                              className="flex items-center transition-all duration-300 hover:translate-x-2"
                            >
                              <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                              <div>
                                <span className="text-gray-400">{key}:</span>
                                <span className="ml-2 text-white font-medium">{data.specs[key]}</span>
                              </div>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  </div>

                  {/* Performance */}
                  <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800">
                    <h3 className="text-xl font-semibold text-red-500 mb-4">Osiągi i parametry</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {groupedSpecs.performance.map((key) => {
                        if (data.specs[key]) {
                          return (
                            <div
                              key={key}
                              className="flex items-center transition-all duration-300 hover:translate-x-2"
                            >
                              <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                              <div>
                                <span className="text-gray-400">{key}:</span>
                                <span className="ml-2 text-white font-medium">{data.specs[key]}</span>
                              </div>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  </div>
                </div>

                {/* Right column specs */}
                <div className="space-y-6">
                  {/* Construction */}
                  <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800">
                    <h3 className="text-xl font-semibold text-red-500 mb-4">Konstrukcja</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {groupedSpecs.construction.map((key) => {
                        if (data.specs[key]) {
                          return (
                            <div
                              key={key}
                              className="flex items-center transition-all duration-300 hover:translate-x-2"
                            >
                              <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                              <div>
                                <span className="text-gray-400">{key}:</span>
                                <span className="ml-2 text-white font-medium">{data.specs[key]}</span>
                              </div>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  </div>

                  {/* Other Specs */}
                  <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800">
                    <h3 className="text-xl font-semibold text-red-500 mb-4">Dodatkowe informacje</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {groupedSpecs.other.map((key) => {
                        if (data.specs[key]) {
                          return (
                            <div
                              key={key}
                              className="flex items-center transition-all duration-300 hover:translate-x-2"
                            >
                              <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                              <div>
                                <span className="text-gray-400">{key}:</span>
                                <span className="ml-2 text-white font-medium">{data.specs[key]}</span>
                              </div>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )}

        {/* Additional Information */}
        {data.additionalInfo && (
          <ScrollAnimation delay={400}>
            <StaggeredContainer className="space-y-4" staggerDelay={150} initialDelay={0} cascade={true}>
              {Object.entries(data.additionalInfo).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600 transition-all duration-300 hover:bg-gray-800 fade-in-element"
                >
                  <h3 className="text-xl font-semibold text-red-500 mb-2">{key}</h3>
                  <p className="text-gray-300 description-animation">{value}</p>
                </div>
              ))}
            </StaggeredContainer>
          </ScrollAnimation>
        )}

        {/* CTA Button */}
        <ScrollAnimation delay={450}>
          <div className="flex justify-center fade-in-element">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full button-animation">
              Zapytaj o ofertę
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  )
}
