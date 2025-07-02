import { Check, Shield, Zap, Compass, PenToolIcon as Tool, Paintbrush, Wrench, Anchor } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-red-500" />,
      title: "Wytrzymałość",
      description:
        "Nasze łodzie wykonane są z wysokiej jakości aluminium, które zapewnia niezrównaną trwałość i odporność na uszkodzenia mechaniczne, korozję oraz ekstremalne warunki pogodowe.",
    },
    {
      icon: <Zap className="h-10 w-10 text-red-500" />,
      title: "Lekkość",
      description:
        "Aluminium pozwala na stworzenie lekkiej konstrukcji, co przekłada się na mniejsze zużycie paliwa, łatwiejszy transport oraz możliwość używania silników o mniejszej mocy.",
    },
    {
      icon: <Compass className="h-10 w-10 text-red-500" />,
      title: "Stabilność",
      description:
        "Specjalnie zaprojektowany kształt kadłuba zapewnia wyjątkową stabilność na wodzie, nawet w trudnych warunkach, co jest kluczowe podczas wędkowania.",
    },
    {
      icon: <Tool className="h-10 w-10 text-red-500" />,
      title: "Bezobsługowość",
      description:
        "Aluminium nie wymaga regularnej konserwacji, malowania czy zabezpieczania przed korozją, co znacząco obniża koszty utrzymania łodzi.",
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-red-500" />,
      title: "Personalizacja",
      description:
        "Oferujemy szerokie możliwości personalizacji, od układu wnętrza, przez wyposażenie, aż po unikalną grafikę na burcie łodzi.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-red-500" />,
      title: "Modułowość",
      description:
        "Nasze łodzie posiadają modułową konstrukcję, która pozwala na łatwe dostosowanie przestrzeni do różnych aktywności - od wędkowania po rekreację rodzinną.",
    },
    {
      icon: <Check className="h-10 w-10 text-red-500" />,
      title: "Gwarancja jakości",
      description:
        "Każda łódź przechodzi rygorystyczne testy jakości i jest objęta pełną gwarancją producenta, co zapewnia spokój ducha i pewność zakupu.",
    },
    {
      icon: <Anchor className="h-10 w-10 text-red-500" />,
      title: "Wartość odsprzedaży",
      description:
        "Aluminiowe łodzie zachowują wysoką wartość odsprzedaży przez lata, co czyni je nie tylko doskonałym narzędziem do wędkowania, ale także mądrą inwestycją.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center fade-in-element title-animation">
            Cechy naszych łodzi
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center fade-in-element description-animation">
            Nasze aluminiowe łodzie wędkarskie wyróżniają się na tle konkurencji dzięki połączeniu nowoczesnej
            technologii, najwyższej jakości materiałów i dbałości o każdy detal. Poznaj kluczowe cechy, które sprawiają,
            że nasze produkty są wyborem profesjonalistów i pasjonatów wędkarstwa.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={100 + index * 35}>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors feature-card fade-in-element">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-center text-white mb-3 title-animation">{feature.title}</h3>
                <p className="text-gray-300 text-center description-animation">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="mt-16 bg-gray-900 p-8 rounded-lg border border-gray-800 fade-in-element">
            <h2 className="text-2xl font-bold text-white mb-4 text-center title-animation">Dlaczego aluminium?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation delay={450}>
                <div className="fade-in-element">
                  <h3 className="text-xl font-semibold text-white mb-2 text-center title-animation">
                    Przewaga nad łodziami z włókna szklanego:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Większa odporność na uderzenia i uszkodzenia mechaniczne
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Niższe koszty utrzymania i konserwacji
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Dłuższa żywotność w trudnych warunkach
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">Lepsza stabilność na wodzie</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={500}>
                <div className="fade-in-element">
                  <h3 className="text-xl font-semibold text-white mb-2 text-center title-animation">
                    Przewaga nad łodziami stalowymi:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Znacznie mniejsza waga przy zachowaniu wytrzymałości
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">Naturalna odporność na korozję</span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Niższe zużycie paliwa dzięki mniejszej masie
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">Łatwiejszy transport i wodowanie</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  )
}
