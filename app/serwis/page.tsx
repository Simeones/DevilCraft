import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Wrench,
  Clock,
  Shield,
  Calendar,
  CheckCircle,
  AlertTriangle,
  LifeBuoy,
  PenToolIcon as Tool,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function ServicePage() {
  const servicePackages = [
    {
      name: "Przegląd podstawowy",
      icon: <Wrench className="h-10 w-10 text-red-500" />,
      description: "Podstawowy przegląd techniczny łodzi, sprawdzenie stanu kadłuba i instalacji.",
      includes: [
        "Inspekcja kadłuba",
        "Sprawdzenie instalacji elektrycznej",
        "Kontrola układu sterowania",
        "Podstawowe czyszczenie",
      ],
      price: "od 350 zł",
    },
    {
      name: "Przegląd rozszerzony",
      icon: <Tool className="h-10 w-10 text-red-500" />,
      description: "Kompleksowy przegląd wszystkich systemów łodzi z drobnymi naprawami.",
      includes: [
        "Wszystko z przeglądu podstawowego",
        "Kontrola i konserwacja silnika",
        "Sprawdzenie szczelności kadłuba",
        "Konserwacja elementów aluminiowych",
        "Drobne naprawy",
      ],
      price: "od 650 zł",
    },
    {
      name: "Serwis posezonowy",
      icon: <Calendar className="h-10 w-10 text-red-500" />,
      description: "Kompleksowe przygotowanie łodzi do zimowania po sezonie.",
      includes: [
        "Wszystko z przeglądu rozszerzonego",
        "Zabezpieczenie antykorozyjne",
        "Konserwacja tapicerki",
        "Przygotowanie do zimowania",
        "Zabezpieczenie elektroniki",
      ],
      price: "od 950 zł",
    },
    {
      name: "Serwis przedsezonowy",
      icon: <Clock className="h-10 w-10 text-red-500" />,
      description: "Przygotowanie łodzi do sezonu po zimowaniu.",
      includes: [
        "Sprawdzenie wszystkich systemów",
        "Uruchomienie i test silnika",
        "Czyszczenie i polerowanie kadłuba",
        "Sprawdzenie i uzupełnienie płynów",
        "Test na wodzie",
      ],
      price: "od 850 zł",
    },
  ]

  const additionalServices = [
    {
      name: "Naprawa kadłuba",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      description: "Profesjonalne naprawy uszkodzeń kadłuba aluminiowego, spawanie i wzmacnianie konstrukcji.",
    },
    {
      name: "Instalacja wyposażenia",
      icon: <Tool className="h-8 w-8 text-red-500" />,
      description: "Montaż dodatkowego wyposażenia, echosond, systemów nawigacyjnych i oświetlenia.",
    },
    {
      name: "Serwis silników",
      icon: <Wrench className="h-8 w-8 text-red-500" />,
      description: "Kompleksowy serwis silników zaburtowych różnych marek, wymiana części i regulacja.",
    },
    {
      name: "Renowacja łodzi",
      icon: <CheckCircle className="h-8 w-8 text-red-500" />,
      description: "Pełna renowacja starszych modeli łodzi, odświeżenie wyglądu i modernizacja systemów.",
    },
    {
      name: "Serwis mobilny",
      icon: <LifeBuoy className="h-8 w-8 text-red-500" />,
      description: "Usługi serwisowe wykonywane w miejscu cumowania łodzi lub w dowolnej lokalizacji klienta.",
    },
    {
      name: "Diagnostyka",
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      description: "Profesjonalna diagnostyka problemów technicznych z wykorzystaniem specjalistycznego sprzętu.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center fade-in-element title-animation">
            Serwis łodzi
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center fade-in-element description-animation">
            Oferujemy profesjonalne usługi serwisowe dla łodzi aluminiowych wszystkich marek. Nasz doświadczony zespół
            techników zapewnia najwyższą jakość obsługi, dbając o każdy detal Twojej łodzi.
          </p>
        </ScrollAnimation>

        {/* Hero Image */}
        <ScrollAnimation delay={50}>
          <div className="relative h-[300px] md:h-[400px] mb-16 rounded-lg overflow-hidden image-hover-container fade-in-element">
            <Image
              src="/aluminum-boat-welding.png"
              alt="Serwis łodzi aluminiowych"
              fill
              className="object-cover image-hover-effect"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 title-animation">Profesjonalny serwis</h2>
              <p className="text-lg text-gray-300 description-animation">Dbamy o Twoją łódź jak o własną</p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Service Packages */}
        <ScrollAnimation delay={75}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center fade-in-element title-animation">
            Pakiety serwisowe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {servicePackages.map((pkg, index) => (
              <ScrollAnimation key={index} delay={100 + index * 25}>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors flex flex-col h-full feature-card fade-in-element">
                  <div className="flex justify-center mb-4">{pkg.icon}</div>
                  <h3 className="text-xl font-bold text-center text-white mb-3 title-animation">{pkg.name}</h3>
                  <p className="text-gray-300 text-center mb-4 description-animation">{pkg.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start list-item-animation">
                        <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0 list-dot-animation">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </span>
                        <span className="text-gray-300 description-animation">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-auto">
                    <p className="text-xl font-bold text-white mb-4">{pkg.price}</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white w-full button-animation">Zamów</Button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>

        {/* Additional Services */}
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center fade-in-element title-animation">
            Dodatkowe usługi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {additionalServices.map((service, index) => (
              <ScrollAnimation key={index} delay={225 + index * 20}>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors feature-card fade-in-element">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold text-white ml-3 title-animation">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 description-animation">{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>

        {/* Warranty Section */}
        <ScrollAnimation delay={300}>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-16 fade-in-element">
            <h2 className="text-2xl font-bold text-white mb-6 text-center title-animation">
              Gwarancja i obsługa pogwarancyjna
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation delay={650}>
                <div className="fade-in-element">
                  <h3 className="text-xl font-semibold text-white mb-4 title-animation">Gwarancja producenta</h3>
                  <p className="text-gray-300 mb-4 description-animation">
                    Wszystkie nasze łodzie objęte są pełną gwarancją producenta. Oferujemy:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">2 lata gwarancji na kadłub</span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        1 rok gwarancji na instalacje i wyposażenie
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">Bezpłatne przeglądy gwarancyjne</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={700}>
                <div className="fade-in-element">
                  <h3 className="text-xl font-semibold text-white mb-4 title-animation">Obsługa pogwarancyjna</h3>
                  <p className="text-gray-300 mb-4 description-animation">
                    Po okresie gwarancyjnym nadal zapewniamy pełne wsparcie techniczne i serwisowe:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Dostęp do oryginalnych części zamiennych
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Preferencyjne stawki serwisowe dla stałych klientów
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Program lojalnościowy z dodatkowymi korzyściami
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        {/* Maintenance Tips */}
        <ScrollAnimation delay={350}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center fade-in-element title-animation">
            Porady serwisowe
          </h2>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-16 fade-in-element">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation delay={800}>
                <div className="fade-in-element">
                  <h3 className="text-xl font-semibold text-white mb-4 title-animation">Codzienna pielęgnacja</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Po każdym użyciu przepłucz łódź słodką wodą, szczególnie po pływaniu w wodzie słonej
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Regularnie sprawdzaj stan anod ochronnych i wymieniaj je w razie potrzeby
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Utrzymuj czystość wnętrza łodzi, usuwając zanieczyszczenia i wilgoć
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={850}>
                <div className="fade-in-element">
                  <h3 className="text-xl font-semibold text-white mb-4 title-animation">Sezonowa konserwacja</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Przed zimowaniem zabezpiecz wszystkie elementy elektroniczne przed wilgocią
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Sprawdzaj regularnie stan spawów i połączeń aluminiowych, szczególnie w miejscach narażonych na
                        naprężenia
                      </span>
                    </li>
                    <li className="flex items-start list-item-animation">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mr-2 mt-1 list-dot-animation">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-gray-300 description-animation">
                        Wykonuj przegląd przedsezonowy, aby cieszyć się bezpiecznym pływaniem przez cały sezon
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation delay={400}>
          <div className="text-center mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-6 title-animation">Potrzebujesz serwisu?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 description-animation">
              Skontaktuj się z nami, aby umówić się na przegląd lub naprawę. Nasz zespół serwisowy jest do Twojej
              dyspozycji.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ScrollAnimation delay={950}>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white button-animation">
                  <Link href="/kontakt">Umów serwis</Link>
                </Button>
              </ScrollAnimation>
              <ScrollAnimation delay={1000}>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-white hover:bg-red-900 button-animation"
                >
                  <a href="tel:+48123456789">+48 123 456 789</a>
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  )
}
