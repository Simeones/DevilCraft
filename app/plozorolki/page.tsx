import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle, ExternalLink } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function HydrofoilsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center fade-in-element title-animation">
            D-ROLLS
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center fade-in-element description-animation">
            Innowacyjny system wspomagający wodowanie łodzi, zaprojektowany specjalnie dla łodzi DevilCraft.
          </p>
        </ScrollAnimation>

        {/* Hero Image */}
        <ScrollAnimation delay={100}>
          <div className="relative h-[300px] md:h-[400px] mb-16 rounded-lg overflow-hidden image-hover-container fade-in-element">
            <Image
              src="/plozorolki-red.jpeg"
              alt="System D-ROLLS w kolorze czerwonym"
              fill
              className="object-cover image-hover-effect"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center title-animation">
                Rewolucyjny system wodowania
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl text-center description-animation">
                D-ROLLS - zaprojektowany dla maksymalnej wygody i efektywności
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* What are D-ROLLS */}
        <ScrollAnimation delay={150}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">
              Czym jest system D-ROLLS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4 description-animation">
                  D-ROLLS to niezwykle pomysłowy system wspomagający wodowanie łodzi. Przy jego pomocy bez problemu
                  zwodujesz łódź z przyczepy jak i wciągniesz ją praktycznie bez żadnego wysiłku na każdym rodzaju
                  slipu.
                </p>
                <p className="text-gray-300 mb-4 description-animation">
                  Dzięki unikalnemu rozłożeniu rolek, proces wodowania z D-ROLLS staje się bardzo prosty i wygodny.
                  System mechanicznego podnoszenia pozwala już po kilku obrotach ponieść łódź na rolkach.
                </p>
                <p className="text-gray-300 description-animation">
                  Po wciągnięciu łodzi na przyczepę rolki należy opuścić do takiego momentu kiedy spocznie ona na
                  płozach. Płozorolki D-ROLLS przystosowane są do montażu na każdym rodzaju przyczepki.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden image-hover-container">
                <Image
                  src="/plozorolki-detail-2.jpeg"
                  alt="D-ROLLS - szczegóły konstrukcji"
                  fill
                  className="object-cover image-hover-effect"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Specifications */}
        <ScrollAnimation delay={200}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">Specyfikacja techniczna</h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Materiał</h3>
                      <p className="text-gray-300">Stal ocynkowana ogniowo / malowana proszkowo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Długość</h3>
                      <p className="text-gray-300">250 cm</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Ładowność</h3>
                      <p className="text-gray-300">3500 kg</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">System podnoszenia</h3>
                      <p className="text-gray-300">Mechaniczny</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Waga</h3>
                      <p className="text-gray-300">70 kg</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Montaż</h3>
                      <p className="text-gray-300">Produkt do samodzielnego montażu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Video Section */}
        <ScrollAnimation delay={300}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">Zobacz D-ROLLS w akcji</h2>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors">
              <div className="text-center">
                <p className="text-gray-300 mb-6">
                  Aby zobaczyć film prezentujący działanie systemu D-ROLLS, wyszukaj na YouTube:
                </p>
                <div className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg mb-6">
                  PŁOZOROLKI DEVILCAT
                </div>
                <Button className="flex items-center justify-center gap-2 mx-auto" variant="outline">
                  <ExternalLink className="h-5 w-5" />
                  <span>Przejdź do YouTube</span>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Delivery Info */}
        <ScrollAnimation delay={400}>
          <div className="mb-16 fade-in-element">
            <div className="bg-red-900/30 p-6 rounded-lg border border-red-800">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Informacja o dostawie</h3>
              <p className="text-gray-300 text-center font-semibold">
                ZE WZGLĘDU NA GABARYT, KOSZT DOSTAWY TOWARU
                <br />
                JEST USTALANY INDYWIDUALNIE
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Installation */}
        <ScrollAnimation delay={450}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">Instalacja</h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-red-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 title-animation">Prosty montaż</h3>
                  <p className="text-gray-300 mb-4 description-animation">
                    System D-ROLLS jest zaprojektowany z myślą o łatwym montażu na każdym rodzaju przyczepy. Wszystkie
                    niezbędne elementy montażowe są dołączone do zestawu.
                  </p>
                  <p className="text-gray-300 mb-4 description-animation">
                    Dla klientów preferujących profesjonalny montaż, oferujemy usługę instalacji w naszym serwisie lub u
                    autoryzowanych partnerów.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center list-item-animation">
                      <ArrowUpRight className="h-5 w-5 text-red-500 mr-2 list-dot-animation" />
                      <span className="text-gray-300 description-animation">Kompatybilny z większością przyczep</span>
                    </div>
                    <div className="flex items-center list-item-animation">
                      <ArrowUpRight className="h-5 w-5 text-red-500 mr-2 list-dot-animation" />
                      <span className="text-gray-300 description-animation">Szczegółowa instrukcja montażu</span>
                    </div>
                    <div className="flex items-center list-item-animation">
                      <ArrowUpRight className="h-5 w-5 text-red-500 mr-2 list-dot-animation" />
                      <span className="text-gray-300 description-animation">Wsparcie techniczne w razie pytań</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden image-hover-container">
                  <Image
                    src="/plozorolki-detail-1.jpeg"
                    alt="Instalacja systemu D-ROLLS - szczegóły montażu"
                    fill
                    className="object-cover image-hover-effect"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Transport Section */}
        <ScrollAnimation delay={500}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">
              Transport i przechowywanie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-lg overflow-hidden order-2 md:order-1 image-hover-container">
                <Image
                  src="/plozorolki-trailer.jpeg"
                  alt="Przyczepa z systemem D-ROLLS"
                  fill
                  className="object-cover image-hover-effect"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold text-white mb-4 title-animation">Bezpieczny transport</h3>
                <p className="text-gray-300 mb-4 description-animation">
                  System D-ROLLS znacząco ułatwia transport łodzi. Dzięki unikalnemu mechanizmowi podnoszenia, załadunek
                  i rozładunek łodzi staje się prostszy niż kiedykolwiek wcześniej.
                </p>
                <p className="text-gray-300 mb-4 description-animation">
                  Po wciągnięciu łodzi na przyczepę, rolki należy opuścić do momentu, kiedy łódź spocznie na płozach, co
                  zapewnia stabilność podczas transportu.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center list-item-animation">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 list-dot-animation" />
                    <span className="text-gray-300 description-animation">Łatwy załadunek i rozładunek</span>
                  </div>
                  <div className="flex items-center list-item-animation">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 list-dot-animation" />
                    <span className="text-gray-300 description-animation">
                      Stabilny transport na każdej nawierzchni
                    </span>
                  </div>
                  <div className="flex items-center list-item-animation">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-2 list-dot-animation" />
                    <span className="text-gray-300 description-animation">Minimalne ryzyko uszkodzenia łodzi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation delay={550}>
          <div className="text-center mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-6 title-animation">Zainteresowany systemem D-ROLLS?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 description-animation">
              Skontaktuj się z nami, aby uzyskać więcej informacji lub złożyć zamówienie. Nasi specjaliści pomogą dobrać
              odpowiedni system do Twojej łodzi i przyczepy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ScrollAnimation delay={600}>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white button-animation">
                  <Link href="/kontakt">Zapytaj o produkt</Link>
                </Button>
              </ScrollAnimation>
              <ScrollAnimation delay={650}>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-white hover:bg-red-900 button-animation"
                >
                  <Link href="/kontakt">Zamów online</Link>
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  )
}
