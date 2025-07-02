import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

// Define model data
const models = [
  {
    id: "420",
    name: "Model 420",
    description: "Kompaktowa łódź aluminiowa idealna dla wędkarzy poszukujących mobilności i łatwości transportu.",
    mainImage: "/boat-full-view.jpeg",
    images: ["/boat-full-view.jpeg", "/boat-interior-led.jpeg", "/boat-interior-wet.jpeg", "/boat-graphic-detail.jpeg"],
    specs: {
      Długość: "4,20 m",
      Szerokość: "1,70 m",
      "Moc silnika": "do 30 KM",
    },
  },
  {
    id: "470",
    name: "Model 470",
    description:
      "Uniwersalna łódź aluminiowa o zwiększonej przestrzeni użytkowej, idealna zarówno dla wędkarzy, jak i miłośników rekreacji wodnej.",
    mainImage: "/boat-side-view.jpeg",
    images: ["/boat-side-view.jpeg", "/model-470-interior.jpeg", "/model-470-graphic.jpeg", "/boat-angle-view.jpeg"],
    specs: {
      Długość: "4,70 m",
      Szerokość: "1,85 m",
      "Moc silnika": "do 50 KM",
    },
  },
  {
    id: "550",
    name: "Model 550",
    description: "Przestronna łódź aluminiowa zaprojektowana z myślą o komforcie i funkcjonalności.",
    mainImage: "/boat-angle-view.jpeg",
    images: ["/boat-angle-view.jpeg", "/boat-interior-led.jpeg", "/boat-side-view.jpeg", "/boat-graphic-detail.jpeg"],
    specs: {
      Długość: "5,50 m",
      Szerokość: "2,10 m",
      "Moc silnika": "do 70 KM",
    },
  },
  {
    id: "nomad",
    name: "Model NOMAD",
    description: "Flagowy model w ofercie DevilCraft, zaprojektowany dla najbardziej wymagających wędkarzy.",
    mainImage: "/boat-graphic-detail.jpeg",
    images: ["/boat-graphic-detail.jpeg", "/boat-full-view.jpeg", "/boat-interior-wet.jpeg", "/boat-side-view.jpeg"],
    specs: {
      Długość: "5,20 m",
      Szerokość: "2,00 m",
      "Moc silnika": "do 90 KM",
    },
  },
]

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation stagger={true} staggerChildren={200}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center fade-in-element title-animation">
            Nasze modele
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center fade-in-element description-animation">
            Odkryj naszą ofertę aluminiowych łodzi wędkarskich. Każdy model został zaprojektowany z myślą o najwyższej
            jakości, trwałości i funkcjonalności, aby spełnić oczekiwania najbardziej wymagających wędkarzy.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <ScrollAnimation key={model.id} delay={100 + index * 50}>
              <Card className="bg-black border border-gray-800 overflow-hidden hover:border-red-600 transition-colors fade-in-element feature-card">
                <div className="relative h-[250px] overflow-hidden">
                  <div className="flex transition-transform duration-500 ease-in-out hover:translate-x-[-75%] cursor-pointer">
                    {model.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="min-w-full h-[250px] relative">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${model.name} - zdjęcie ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md">
                    {model.images.length} zdjęć
                  </div>
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 title-animation">{model.name}</h2>
                  <p className="text-gray-300 mb-4 description-animation">{model.description}</p>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {Object.entries(model.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-2 bg-gray-900 rounded-md transition-all duration-300 hover:bg-gray-800 hover:shadow-md"
                      >
                        <p className="text-xs text-gray-400">{key}</p>
                        <p className="text-sm font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button asChild className="bg-red-600 hover:bg-red-700 text-white button-animation">
                      <Link href={`/modele/${model.id}`}>Zobacz szczegóły</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </main>
  )
}
