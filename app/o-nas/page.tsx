import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Award, Target, Heart, Anchor } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center fade-in-element title-animation">
            O nas
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center fade-in-element description-animation">
            Poznaj historię rodzinnej firmy DevilCraft - pasję do wędkarstwa, przyjaźń i rodzinne więzi, które stoją za
            naszymi aluminiowymi łodziami.
          </p>
        </ScrollAnimation>

        {/* Hero Section */}
        <ScrollAnimation delay={50}>
          <div className="relative h-[300px] md:h-[400px] mb-16 rounded-lg overflow-hidden image-hover-container fade-in-element">
            <Image
              src="/aluminum-boat-welding.png"
              alt="Warsztat produkcyjny DevilCraft"
              fill
              className="object-cover image-hover-effect"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center title-animation">
                Z pasji do wędkarstwa od 2005 roku
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl text-center description-animation">
                Historia przyjaźni, rodziny i wspólnej pasji, która przerodziła się w wyjątkowe łodzie
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Our Story */}
        <ScrollAnimation delay={100}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">Nasza historia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4 description-animation">
                  Historia DevilCraft rozpoczęła się w 2005 roku, kiedy to Marcin, zapalony wędkarz i miłośnik sportów
                  wodnych, postanowił stworzyć własną łódź idealnie dostosowaną do swoich potrzeb. Nie mając
                  doświadczenia w pracy z aluminium, zwrócił się do swojego wieloletniego przyjaciela Karola, który był
                  doświadczonym spawaczem.
                </p>
                <p className="text-gray-300 mb-4 description-animation">
                  To, co zaczęło się jako weekendowy projekt w garażu Karola, szybko przerodziło się w prawdziwą pasję.
                  Pierwsza łódź, którą wspólnie zbudowali, wzbudziła ogromne zainteresowanie wśród znajomych wędkarzy.
                  Wkrótce zaczęły napływać pierwsze zamówienia, a Marcin i Karol zdecydowali się założyć małą firmę.
                </p>
                <p className="text-gray-300 description-animation">
                  Nazwa DevilCraft została wymyślona przez synów Marcina - Szymona i Aleksa, którzy od najmłodszych lat
                  byli zaangażowani w rodzinny biznes. "Devil" symbolizowało wytrzymałość i odporność aluminium, a
                  "Craft" odnosiło się do rzemieślniczego charakteru produkcji. Z biegiem lat synowie dołączyli do firmy
                  na stałe, wnosząc świeże pomysły i energię.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden image-hover-container">
                <Image
                  src="/boat-side-view.jpeg"
                  alt="Pierwsza łódź DevilCraft"
                  fill
                  className="object-cover image-hover-effect"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Timeline */}
        <ScrollAnimation delay={150}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">Kamienie milowe</h2>
            <div className="space-y-12">
              <TimelineItem
                year="2005"
                title="Narodziny pomysłu"
                description="Marcin i Karol budują pierwszą łódź aluminiową w garażu, realizując wspólną pasję do wędkarstwa."
                icon={<Calendar className="h-8 w-8 text-red-500" />}
                delay={0}
              />
              <TimelineItem
                year="2007"
                title="Oficjalne założenie firmy"
                description="Marcin i Karol oficjalnie zakładają firmę DevilCraft, a synowie Marcina - Szymon i Aleks - wymyślają nazwę marki."
                icon={<Anchor className="h-8 w-8 text-red-500" />}
                delay={50}
                reverse
              />
              <TimelineItem
                year="2010"
                title="Pierwszy model seryjny"
                description="Wprowadzenie na rynek pierwszego seryjnie produkowanego modelu - DevilCraft 420, zaprojektowanego z myślą o wędkarzach."
                icon={<Target className="h-8 w-8 text-red-500" />}
                delay={100}
              />
              <TimelineItem
                year="2015"
                title="Dołączenie synów do firmy"
                description="Szymon i Aleks, po ukończeniu studiów, dołączają do firmy na pełen etat, wprowadzając innowacyjne rozwiązania i świeże spojrzenie."
                icon={<Users className="h-8 w-8 text-red-500" />}
                delay={150}
                reverse
              />
              <TimelineItem
                year="2018"
                title="Nagroda za innowacyjność"
                description="DevilCraft otrzymuje nagrodę za innowacyjność w dziedzinie konstrukcji łodzi aluminiowych na Międzynarodowych Targach Sportów Wodnych."
                icon={<Award className="h-8 w-8 text-red-500" />}
                delay={200}
              />
              <TimelineItem
                year="2023"
                title="Ekspansja międzynarodowa"
                description="Rozpoczęcie eksportu łodzi DevilCraft do krajów skandynawskich i Europy Zachodniej pod kierownictwem Szymona."
                icon={<Heart className="h-8 w-8 text-red-500" />}
                delay={250}
                reverse
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Family Values */}
        <ScrollAnimation delay={200}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">Nasze wartości</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors feature-card">
                <h3 className="text-xl font-bold text-center text-white mb-4 title-animation">Pasja</h3>
                <p className="text-gray-300 text-center description-animation">
                  Nasza praca to nasza pasja. Każda łódź, którą tworzymy, jest wyrazem naszego zamiłowania do wędkarstwa
                  i sportów wodnych. Rozumiemy potrzeby wędkarzy, bo sami nimi jesteśmy.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors feature-card">
                <h3 className="text-xl font-bold text-center text-white mb-4 title-animation">Przyjaźń</h3>
                <p className="text-gray-300 text-center description-animation">
                  Firma zrodziła się z przyjaźni Marcina i Karola, i ta wartość pozostaje fundamentem naszego biznesu.
                  Tworzymy przyjazne środowisko pracy i budujemy trwałe relacje z klientami.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors feature-card">
                <h3 className="text-xl font-bold text-center text-white mb-4 title-animation">Rodzina</h3>
                <p className="text-gray-300 text-center description-animation">
                  Jako firma rodzinna, cenimy więzi, które nas łączą. Wierzymy, że najlepsze pomysły rodzą się, gdy
                  łączymy doświadczenie starszego pokolenia z innowacyjnością młodszego.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Team */}
        <ScrollAnimation delay={250}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">Nasza załoga</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember
                name="Marcin"
                role="Założyciel i Dyrektor"
                description="Pasjonat wędkarstwa z ponad 30-letnim doświadczeniem. Wizjoner, który zapoczątkował DevilCraft z miłości do sportów wodnych."
                image="/placeholder.svg?key=xs2yh"
                delay={0}
              />
              <TeamMember
                name="Karol"
                role="Współzałożyciel i Główny Spawacz"
                description="Mistrz spawania aluminium z niezrównanym doświadczeniem. Jego precyzja i dbałość o detale są gwarancją najwyższej jakości każdej łodzi."
                image="/placeholder.svg?key=5dzzn"
                delay={50}
              />
              <TeamMember
                name="Szymon"
                role="Dyrektor ds. Rozwoju"
                description="Starszy syn Marcina, odpowiedzialny za ekspansję międzynarodową i innowacje produktowe. Wprowadził firmę na nowe rynki."
                image="/placeholder.svg?key=mkztt"
                delay={100}
              />
              <TeamMember
                name="Aleks"
                role="Dyrektor Kreatywny"
                description="Młodszy syn Marcina, odpowiedzialny za design i marketing. Jego kreatywne podejście nadało marce DevilCraft unikalny charakter."
                image="/placeholder.svg?key=pqrst"
                delay={150}
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Workshop */}
        <ScrollAnimation delay={300}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-8 text-center title-animation">Nasz warsztat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <p className="text-gray-300 mb-4 description-animation">
                  Z małego garażu Karola przenieśliśmy się do profesjonalnego zakładu produkcyjnego w Gdańsku, gdzie
                  łączymy tradycyjne rzemiosło z nowoczesnymi technologiami. Karol nadal osobiście nadzoruje każdy
                  proces spawania, zapewniając najwyższą jakość wykonania.
                </p>
                <p className="text-gray-300 mb-4 description-animation">
                  Szymon wprowadził nowoczesne metody projektowania wspomagane komputerowo, a Aleks stworzył
                  charakterystyczny styl wykończenia naszych łodzi, który jest rozpoznawalny na pierwszy rzut oka.
                </p>
                <p className="text-gray-300 description-animation">
                  Marcin, mimo rozwoju firmy, nadal regularnie testuje każdy model na wodzie, często zabierając ze sobą
                  klientów na wspólne wyprawy wędkarskie. To właśnie podczas tych wypraw rodzą się najlepsze pomysły na
                  udoskonalenie naszych łodzi.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2 image-hover-container">
                <Image
                  src="/aluminum-boat-welding.png"
                  alt="Warsztat DevilCraft"
                  fill
                  className="object-cover image-hover-effect"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation delay={350}>
          <div className="text-center mb-16 fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-6 title-animation">Dołącz do rodziny DevilCraft</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 description-animation">
              Nasza historia to opowieść o tym, jak pasja, przyjaźń i rodzinne więzi mogą stworzyć coś wyjątkowego.
              Zapraszamy Cię do odkrycia łodzi, które powstają z miłości do wędkarstwa i wody.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white button-animation">
                <Link href="/modele">Zobacz nasze modele</Link>
              </Button>
              <Button asChild variant="outline" className="border-red-600 text-white hover:bg-red-900 button-animation">
                <Link href="/kontakt">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  )
}

// Komponent dla elementu osi czasu
function TimelineItem({
  year,
  title,
  description,
  icon,
  reverse = false,
  delay = 0,
}: {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  reverse?: boolean
  delay?: number
}) {
  return (
    <ScrollAnimation delay={delay}>
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-4 fade-in-element`}
      >
        <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border-2 border-red-600">
          {icon}
        </div>
        <div className="hidden md:block w-24 h-0.5 bg-red-600"></div>
        <div className="flex-grow bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-colors">
          <div className="flex items-center mb-2">
            <span className="text-red-500 font-bold text-xl mr-3">{year}</span>
            <h3 className="text-xl font-bold text-white title-animation">{title}</h3>
          </div>
          <p className="text-gray-300 description-animation">{description}</p>
        </div>
      </div>
    </ScrollAnimation>
  )
}

// Komponent dla członka zespołu
function TeamMember({
  name,
  role,
  description,
  image,
  delay = 0,
}: {
  name: string
  role: string
  description: string
  image: string
  delay?: number
}) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-red-600 transition-colors fade-in-element">
        <div className="relative h-[250px] image-hover-container">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover image-hover-effect" />
          <div className="image-overlay"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1 title-animation">{name}</h3>
          <p className="text-red-500 font-medium mb-3">{role}</p>
          <p className="text-gray-300 description-animation">{description}</p>
        </div>
      </div>
    </ScrollAnimation>
  )
}
