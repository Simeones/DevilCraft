import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StaggeredContainer from "@/components/staggered-container"

export const metadata: Metadata = {
  title: "Przyczepki | DevilCraft Boats",
  description: "Wysokiej jakości przyczepki do łodzi aluminiowych DevilCraft. Sprawdź nasze modele przyczepek.",
}

export default function PrzyczepkiPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <div className="w-full bg-black/60 py-20 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Przyczepki</h1>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-300">
          Wysokiej jakości przyczepki do łodzi aluminiowych DevilCraft
        </p>
      </div>

      <StaggeredContainer className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold">Nasze przyczepki</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Oferujemy szeroki wybór przyczepek dostosowanych do wszystkich naszych modeli łodzi. Każda przyczepka jest
            wykonana z najwyższej jakości materiałów i zaprojektowana z myślą o łatwym transporcie i wodowaniu łodzi.
          </p>
        </div>

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="standard">Standardowe</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="custom">Na zamówienie</TabsTrigger>
          </TabsList>
          <TabsContent value="standard" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <PrzyczepkaCard
                title="Model Basic"
                description="Podstawowy model przyczepki do łodzi do 4,5m. Wyposażona w regulowane podpory i uchwyty."
                price="3 500 zł"
                imageSrc="/placeholder.svg?height=300&width=500"
                features={["Nośność: 550 kg", "Hamulec najazdowy", "Ocynkowana konstrukcja", "Oświetlenie LED"]}
              />
              <PrzyczepkaCard
                title="Model Standard"
                description="Uniwersalna przyczepka do łodzi do 5m. Wzmocniona konstrukcja i dodatkowe wyposażenie."
                price="4 200 zł"
                imageSrc="/placeholder.svg?height=300&width=500"
                features={[
                  "Nośność: 750 kg",
                  "Hamulec najazdowy",
                  "Ocynkowana konstrukcja",
                  "Oświetlenie LED",
                  "Koło podporowe",
                ]}
              />
              <PrzyczepkaCard
                title="Model Plus"
                description="Rozbudowana przyczepka do łodzi do 5,5m. Idealna dla większych łodzi DevilCraft."
                price="5 100 zł"
                imageSrc="/placeholder.svg?height=300&width=500"
                features={[
                  "Nośność: 900 kg",
                  "Hamulec najazdowy",
                  "Ocynkowana konstrukcja",
                  "Oświetlenie LED",
                  "Koło podporowe",
                  "Wciągarka ręczna",
                ]}
              />
            </div>
          </TabsContent>
          <TabsContent value="premium" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <PrzyczepkaCard
                title="Model Premium"
                description="Ekskluzywna przyczepka do łodzi do 5m. Najwyższa jakość wykonania i pełne wyposażenie."
                price="6 500 zł"
                imageSrc="/placeholder.svg?height=300&width=500"
                features={[
                  "Nośność: 800 kg",
                  "Hamulec najazdowy",
                  "Konstrukcja aluminiowa",
                  "Oświetlenie LED",
                  "Koło podporowe",
                  "Wciągarka elektryczna",
                  "Amortyzatory",
                ]}
              />
              <PrzyczepkaCard
                title="Model Premium Plus"
                description="Topowa przyczepka do łodzi do 6m. Najwyższa jakość i komfort użytkowania."
                price="7 800 zł"
                imageSrc="/placeholder.svg?height=300&width=500"
                features={[
                  "Nośność: 1100 kg",
                  "Hamulec najazdowy",
                  "Konstrukcja aluminiowa",
                  "Oświetlenie LED",
                  "Koło podporowe",
                  "Wciągarka elektryczna",
                  "Amortyzatory",
                  "System szybkiego spustu",
                ]}
              />
              <PrzyczepkaCard
                title="Model Exclusive"
                description="Ekskluzywna przyczepka do największych łodzi DevilCraft. Pełne wyposażenie i najwyższa jakość."
                price="9 200 zł"
                imageSrc="/placeholder.svg?height=300&width=500"
                features={[
                  "Nośność: 1300 kg",
                  "Hamulec najazdowy",
                  "Konstrukcja aluminiowa",
                  "Oświetlenie LED",
                  "Koło podporowe",
                  "Wciągarka elektryczna",
                  "Amortyzatory",
                  "System szybkiego spustu",
                  "Zdalny system kontroli",
                ]}
              />
            </div>
          </TabsContent>
          <TabsContent value="custom" className="mt-8">
            <div className="rounded-lg bg-gray-900 p-8">
              <h3 className="mb-4 text-2xl font-bold">Przyczepki na zamówienie</h3>
              <p className="mb-6 text-lg text-gray-300">
                Oferujemy również przyczepki wykonywane na indywidualne zamówienie, dostosowane do specyficznych potrzeb
                klienta. Możemy zaprojektować i wykonać przyczepkę idealnie dopasowaną do Twojej łodzi DevilCraft,
                uwzględniając wszystkie Twoje wymagania.
              </p>
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-800 p-6">
                  <h4 className="mb-3 text-xl font-semibold">Dostępne opcje:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Różne materiały konstrukcyjne (stal ocynkowana, aluminium)</li>
                    <li>• Różne systemy hamulcowe</li>
                    <li>• Różne typy wciągarek (ręczne, elektryczne)</li>
                    <li>• Dodatkowe wyposażenie (pokrowce, zabezpieczenia)</li>
                    <li>• Specjalne systemy mocowania łodzi</li>
                    <li>• Niestandardowe wymiary i nośność</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-800 p-6">
                  <h4 className="mb-3 text-xl font-semibold">Proces zamawiania:</h4>
                  <ol className="space-y-2 text-gray-300">
                    <li>1. Konsultacja z naszym specjalistą</li>
                    <li>2. Określenie wymagań i specyfikacji</li>
                    <li>3. Przygotowanie projektu i wyceny</li>
                    <li>4. Akceptacja projektu przez klienta</li>
                    <li>5. Produkcja przyczepki</li>
                    <li>6. Dostawa i instruktaż</li>
                  </ol>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-4 text-lg font-semibold">Ceny przyczepek na zamówienie:</p>
                <p className="text-xl">Od 5 500 zł - w zależności od specyfikacji</p>
                <p className="mt-6 text-gray-400">
                  Skontaktuj się z nami, aby omówić szczegóły i otrzymać indywidualną wycenę.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 rounded-lg bg-gray-900 p-8">
          <h2 className="mb-6 text-2xl font-bold">Dlaczego warto wybrać nasze przyczepki?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Jakość</h3>
              <p className="text-gray-300">
                Wszystkie nasze przyczepki są wykonane z najwyższej jakości materiałów, zapewniających długą żywotność i
                niezawodność. Używamy ocynkowanej stali lub aluminium, które są odporne na korozję i uszkodzenia
                mechaniczne.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Dopasowanie</h3>
              <p className="text-gray-300">
                Nasze przyczepki są idealnie dopasowane do łodzi DevilCraft, co zapewnia bezpieczny transport i łatwe
                wodowanie. Każdy model przyczepki jest projektowany z myślą o konkretnym modelu łodzi.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="mb-3 text-xl font-semibold">Gwarancja</h3>
              <p className="text-gray-300">
                Oferujemy 3-letnią gwarancję na wszystkie nasze przyczepki, co świadczy o naszym zaufaniu do jakości
                naszych produktów. Zapewniamy również pełne wsparcie techniczne i serwis.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Często zadawane pytania</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-xl font-semibold">Czy przyczepka wymaga rejestracji?</h3>
              <p className="text-gray-300">
                Tak, przyczepki o masie całkowitej powyżej 750 kg wymagają rejestracji. Dostarczamy wszystkie niezbędne
                dokumenty do rejestracji przyczepki.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-xl font-semibold">Czy mogę kupić przyczepkę bez łodzi?</h3>
              <p className="text-gray-300">
                Tak, oferujemy sprzedaż przyczepek również bez zakupu łodzi. Nasze przyczepki mogą być używane do
                transportu różnych typów łodzi.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-xl font-semibold">Jaki jest czas realizacji zamówienia?</h3>
              <p className="text-gray-300">
                Standardowe modele przyczepek są dostępne od ręki lub z czasem oczekiwania do 2 tygodni. Przyczepki na
                zamówienie wymagają od 3 do 6 tygodni na realizację.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-xl font-semibold">Czy oferujecie dostawę przyczepek?</h3>
              <p className="text-gray-300">
                Tak, oferujemy dostawę przyczepek na terenie całej Polski. Koszt dostawy zależy od odległości i jest
                ustalany indywidualnie.
              </p>
            </div>
          </div>
        </div>
      </StaggeredContainer>
    </main>
  )
}

function PrzyczepkaCard({
  title,
  description,
  price,
  imageSrc,
  features,
}: {
  title: string
  description: string
  price: string
  imageSrc: string
  features: string[]
}) {
  return (
    <Card className="overflow-hidden bg-gray-900">
      <div className="relative h-[200px] w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-lg font-semibold text-red-500">{price}</span>
        </div>
        <p className="mb-4 text-gray-300">{description}</p>
        <div className="mt-4">
          <h4 className="mb-2 font-semibold">Wyposażenie:</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
