import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Leaf, TreePine, Mountain, BookOpen } from "lucide-react"

export default function MushroomPage() {
  const mushroomTypes = [
    {
      name: "Borowik Szlachetny",
      latin: "Boletus edulis",
      description: "Jeden z najcenniejszych grzybów jadalnych. Charakteryzuje się mięsistym kapeluszem i grubą nóżką.",
      season: "Lato-Jesień",
      habitat: "Lasy iglaste i mieszane",
    },
    {
      name: "Kurka Zwyczajna",
      latin: "Cantharellus cibarius",
      description: "Złocisty grzyb o charakterystycznym kształcie lejka z fałdami zamiast blaszek.",
      season: "Czerwiec-Październik",
      habitat: "Lasy liściaste",
    },
    {
      name: "Maślak Zwyczajny",
      latin: "Suillus luteus",
      description: "Grzyb o śliskim kapeluszu, łatwy do rozpoznania dzięki charakterystycznej skórce.",
      season: "Sierpień-Listopad",
      habitat: "Lasy sosnowe",
    },
    {
      name: "Podgrzybek Brunatny",
      latin: "Xerocomus badius",
      description: "Grzyb o brązowym kapeluszu, który sinieje po uszkodzeniu. Bardzo smaczny i aromatyczny.",
      season: "Lipiec-Październik",
      habitat: "Lasy iglaste",
    },
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TreePine className="h-8 w-8" />
              <h1 className="text-2xl font-bold tracking-wide">Świat Grzybów</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-amber-200 transition-colors">
                Strona Główna
              </a>
              <a href="#types" className="hover:text-amber-200 transition-colors">
                Rodzaje
              </a>
              <a href="#guide" className="hover:text-amber-200 transition-colors">
                Przewodnik
              </a>
              <a href="#contact" className="hover:text-amber-200 transition-colors">
                Kontakt
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-amber-900 mb-6 leading-tight">Odkryj Fascynujący Świat Grzybów</h2>
            <p className="text-xl text-amber-800 mb-8 leading-relaxed">
              Poznaj tajemnice polskich lasów i naucz się rozpoznawać najcenniejsze gatunki grzybów. Tradycja
              grzybobrania sięga wieków wstecz i jest nieodłączną częścią naszej kultury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Rozpocznij Naukę
              </Button>
              <Button
                variant="outline"
                className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-3 text-lg"
              >
                <Mountain className="mr-2 h-5 w-5" />
                Przewodnik Terenowy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">Tradycja Grzybobrania</h3>
              <Separator className="w-24 mx-auto bg-amber-600" />
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Grzybobranie to jedna z najstarszych tradycji polskich. Od pokoleń mieszkańcy naszego kraju wędrują po
                  lasach w poszukiwaniu tych cennych darów natury. Każdy gatunek ma swoje charakterystyczne cechy,
                  miejsca występowania i porę zbiorów.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Znajomość grzybów to nie tylko hobby, ale także umiejętność, która pozwala nam bezpiecznie korzystać z
                  bogactw polskiej przyrody. Pamiętaj jednak - nigdy nie zbieraj grzybów, których nie jesteś w stanie
                  pewnie zidentyfikować.
                </p>
              </div>
              <div className="relative">
                <div className="bg-amber-100 p-8 rounded-lg border-2 border-amber-200">
                  <Leaf className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-amber-900 text-center mb-3">Zasada Złota</h4>
                  <p className="text-center text-amber-800 italic">
                    "Nie znasz - nie zbieraj. Wątpisz - zostaw w lesie."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mushroom Types */}
      <section id="types" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Popularne Gatunki Grzybów</h3>
            <Separator className="w-24 mx-auto bg-amber-600" />
            <p className="text-lg text-amber-800 mt-4 max-w-2xl mx-auto">
              Poznaj najczęściej spotykane i najbardziej cenione grzyby w polskich lasach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mushroomTypes.map((mushroom, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-amber-200 hover:border-amber-400 transition-colors shadow-lg"
              >
                <CardHeader className="bg-amber-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-amber-900">{mushroom.name}</CardTitle>
                      <CardDescription className="text-amber-700 italic text-sm mt-1">{mushroom.latin}</CardDescription>
                    </div>
                    <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt={mushroom.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{mushroom.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-amber-800">Sezon:</span>
                      <Badge variant="outline" className="border-amber-600 text-amber-800">
                        {mushroom.season}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-amber-800">Siedlisko:</span>
                      <Badge variant="outline" className="border-green-600 text-green-800">
                        {mushroom.habitat}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guide */}
      <section id="guide" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">Bezpieczeństwo Grzybobrania</h3>
              <Separator className="w-24 mx-auto bg-amber-600" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800 text-center">⚠️ Uwaga</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Nigdy nie jedz grzybów surowych</li>
                    <li>• Unikaj grzybów rosnących przy drogach</li>
                    <li>• Nie zbieraj starych, robaczywionych okazów</li>
                    <li>• W razie wątpliwości skonsultuj się z ekspertem</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 text-center">✅ Dobre Praktyki</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Używaj kosza wiklinowego</li>
                    <li>• Wycinaj grzyby nożem</li>
                    <li>• Czyść grzyby już w lesie</li>
                    <li>• Szanuj przyrodę i inne gatunki</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 text-center">📚 Nauka</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Korzystaj z atlasów grzybów</li>
                    <li>• Ucz się od doświadczonych grzybiarzy</li>
                    <li>• Rób zdjęcia znaleziskom</li>
                    <li>• Prowadź dziennik obserwacji</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <TreePine className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Świat Grzybów</h4>
              </div>
              <p className="text-amber-200 text-sm leading-relaxed">
                Odkrywaj tajemnice polskich lasów i ucz się rozpoznawać grzyby w bezpieczny sposób. Tradycja
                grzybobrania przekazywana z pokolenia na pokolenie.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Przydatne Linki</h4>
              <ul className="space-y-2 text-amber-200 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Atlas Grzybów
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kalendarz Grzybobrania
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Przepisy Kulinarne
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Forum Grzybiarzy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="text-amber-200 text-sm space-y-2">
                <p>📧 info@swiatgrzybow.pl</p>
                <p>📱 +48 123 456 789</p>
                <p>🌍 www.swiatgrzybow.pl</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-amber-700" />

          <div className="text-center text-amber-200 text-sm">
            <p>&copy; 2024 Świat Grzybów. Wszystkie prawa zastrzeżone. Grzybobranie z pasją i odpowiedzialnością.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
