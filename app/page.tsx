import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Wrench, Zap, Settings, Star } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function RDMCustomPage() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/bmw-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-black/80 backdrop-blur-sm border-b border-red-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center space-x-2 mb-1">
                <Wrench className="h-8 w-8 text-red-500" />
                <span className="text-2xl font-bold text-white">RDM Custom</span>
              </div>
              <p className="text-sm text-gray-300 uppercase tracking-wider">Profesjonalny Tuning Samochodów</p>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-500/20 text-red-400 border-red-500/30">
              Profesjonalny Tuning Samochodowy
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              RDM <span className="text-red-500">Custom</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Przekształcamy Twój samochód w dzieło sztuki. Profesjonalny tuning, modyfikacje i personalizacja pojazdów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń teraz
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
              >
                Zobacz realizacje
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Nasze Usługi</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Oferujemy kompleksowe usługi tuningu i modyfikacji samochodów
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-black/60 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Chip Tuning</h3>
                  <p className="text-gray-300">
                    Zwiększenie mocy i momentu obrotowego silnika poprzez optymalizację oprogramowania ECU
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all">
                <CardContent className="p-6 text-center">
                  <Settings className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Modyfikacje Mechaniczne</h3>
                  <p className="text-gray-300">
                    Instalacja sportowych układów wydechowych, filtrów powietrza i innych modyfikacji
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Tuning Wizualny</h3>
                  <p className="text-gray-300">
                    Personalizacja wyglądu pojazdu - body kity, felgi, oklejanie i inne modyfikacje
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Nasze Realizacje</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Poznaj nasze najnowsze projekty i inspiracje tuningu BMW
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-black/60 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/bmw-m4-csl.jpg"
                    alt="BMW M4 CSL - Tuning sportowy"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">BMW M4 CSL</h3>
                    <p className="text-gray-200 text-sm">Sportowy tuning z elementami carbon fiber</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/bmw-i7-m70.jpg"
                    alt="BMW i7 M70 - Tuning luksusowy"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">BMW i7 M70</h3>
                    <p className="text-gray-200 text-sm">Luksusowy tuning elektrycznego sedana</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/60 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all group overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/bmw-m2-red.jpg"
                    alt="BMW M2 - Tuning torowy"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">BMW M2</h3>
                    <p className="text-gray-200 text-sm">Profesjonalny tuning do jazdy torowej</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
                Zobacz więcej realizacji
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">O RDM Custom</h2>
              <Card className="bg-black/60 backdrop-blur-sm border-red-500/20">
                <CardContent className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    RDM Custom to zespół pasjonatów motoryzacji z wieloletnim doświadczeniem w branży tuningu
                    samochodowego. Specjalizujemy się w kompleksowych modyfikacjach pojazdów, łącząc najnowsze
                    technologie z tradycyjnym rzemiosłem.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Nasze realizacje to nie tylko zwiększenie mocy, ale przede wszystkim stworzenie unikalnego
                    charakteru każdego pojazdu. Każdy projekt traktujemy indywidualnie, dostosowując rozwiązania do
                    potrzeb i oczekiwań klienta.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Kontakt</h2>
              <p className="text-gray-300 text-lg">Skontaktuj się z nami i rozpocznij transformację swojego pojazdu</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-black/60 backdrop-blur-sm border-red-500/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Informacje kontaktowe</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-red-500" />
                      <span className="text-gray-300">+48 123 456 789</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-red-500" />
                      <span className="text-gray-300">kontakt@rdmcustom.pl</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-red-500" />
                      <span className="text-gray-300">ul. Tuningowa 123, 00-000 Warszawa</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <h4 className="text-lg font-semibold text-white mb-4">Godziny otwarcia</h4>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div className="flex justify-between">
                        <span>Poniedziałek - Piątek:</span>
                        <span>8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sobota:</span>
                        <span>9:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Niedziela:</span>
                        <span>Zamknięte</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/80 backdrop-blur-sm border-t border-red-500/20 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Wrench className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-white">RDM Custom</span>
            </div>
            <p className="text-gray-400">
              © 2024 RDM Custom. Wszystkie prawa zastrzeżone. Profesjonalny tuning samochodowy.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
