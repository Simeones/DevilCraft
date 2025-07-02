import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSlider from "@/components/hero-slider"
import ScrollAnimation from "@/components/scroll-animation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 text-center">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in-element">
            Aluminiowe łodzie wędkarskie klasy premium
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 fade-in-element description-animation">
            Poznaj naszą ofertę solidnych, bezpiecznych i nowoczesnych łodzi aluminiowych. Produkty zaprojektowane z
            myślą o pasjonatach wędkarstwa i profesjonalistach.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollAnimation delay={50}>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 transition-all duration-500 hover:border-red-600 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 hover:transform hover:-translate-y-1 feature-card fade-in-element">
              <h3 className="text-xl font-bold text-white mb-4 title-animation">Najwyższa jakość</h3>
              <p className="text-gray-300 description-animation">
                Nasze łodzie wykonane są z wysokiej jakości aluminium, zapewniającego trwałość i odporność na
                uszkodzenia.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={75}>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 transition-all duration-500 hover:border-red-600 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 hover:transform hover:-translate-y-1 feature-card fade-in-element">
              <h3 className="text-xl font-bold text-white mb-4 title-animation">Personalizacja</h3>
              <p className="text-gray-300 description-animation">
                Oferujemy szerokie możliwości personalizacji, od układu wnętrza po unikalną grafikę na burcie.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 transition-all duration-500 hover:border-red-600 hover:bg-gray-800 hover:shadow-lg hover:shadow-red-900/20 hover:transform hover:-translate-y-1 feature-card fade-in-element">
              <h3 className="text-xl font-bold text-white mb-4 title-animation">Nowoczesny design</h3>
              <p className="text-gray-300 description-animation">
                Łączymy funkcjonalność z nowoczesną estetyką, tworząc łodzie, które wyróżniają się na wodzie.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={150}>
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md button-animation fade-in-element"
            >
              <Link href="/modele">Zobacz nasze modele</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </section>

      {/* Featured Model */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ScrollAnimation direction="left" delay={0}>
              <div className="relative h-[400px] overflow-hidden rounded-lg image-hover-container fade-in-element">
                <Image src="/boat-side-view.jpeg" alt="DevilCraft NOMAD" fill className="image-hover-effect" />
                <div className="image-overlay"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={50}>
              <h2 className="text-3xl font-bold text-white mb-4 title-animation fade-in-element">Model NOMAD</h2>
              <p className="text-gray-300 mb-6 description-animation fade-in-element">
                Flagowy model w ofercie DevilCraft, zaprojektowany dla najbardziej wymagających wędkarzy. NOMAD łączy w
                sobie najwyższą jakość wykonania, zaawansowane rozwiązania techniczne i możliwość pełnej personalizacji.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-center list-item-animation fade-in-element">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2 list-dot-animation"></span>
                  <span className="text-gray-300 description-animation">Długość: 5,20 m</span>
                </div>
                <div className="flex items-center list-item-animation fade-in-element">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2 list-dot-animation"></span>
                  <span className="text-gray-300 description-animation">Szerokość: 2,00 m</span>
                </div>
                <div className="flex items-center list-item-animation fade-in-element">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2 list-dot-animation"></span>
                  <span className="text-gray-300 description-animation">Maksymalna moc silnika: 90 KM</span>
                </div>
              </div>

              <Button asChild className="bg-red-600 hover:bg-red-700 text-white button-animation fade-in-element">
                <Link href="/modele/nomad">Zobacz szczegóły</Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-white mb-6 title-animation fade-in-element">
            Gotowy na nową przygodę?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 description-animation fade-in-element">
            Skontaktuj się z nami, aby dowiedzieć się więcej o naszych łodziach i znaleźć model idealnie dopasowany do
            Twoich potrzeb.
          </p>
        </ScrollAnimation>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ScrollAnimation delay={50}>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white button-animation fade-in-element">
              <Link href="/modele">Zobacz modele</Link>
            </Button>
          </ScrollAnimation>

          <ScrollAnimation delay={75}>
            <Button
              asChild
              variant="outline"
              className="border-red-600 text-white hover:bg-red-900 button-animation fade-in-element"
            >
              <Link href="/kontakt">Skontaktuj się z nami</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
