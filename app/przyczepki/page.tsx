import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import StaggeredContainer from "@/components/staggered-container"
import { Phone, Mail, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Przyczepki | DevilCraft Boats",
  description:
    "Wysokiej jakości przyczepki ocynkowane, malowane proszkowo, na amortyzatorach do łodzi aluminiowych DevilCraft.",
}

export default function PrzyczepkiPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <div className="w-full bg-black/60 py-20 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Przyczepki</h1>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-300">
          Wysokiej jakości przyczepki ocynkowane, malowane proszkowo, na amortyzatorach
        </p>
      </div>

      <StaggeredContainer className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold">Nasza przyczepka</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Oferujemy jeden, sprawdzony model przyczepki wykonanej z najwyższej jakości materiałów. Każda przyczepka
            jest ocynkowana, malowana proszkowo i wyposażona w amortyzatory dla maksymalnego komfortu transportu.
          </p>
        </div>

        {/* Główna karta przyczepki */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Przyczepka DevilCraft"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[140px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=140&width=240"
                  alt="Przyczepka - widok z boku"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[140px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=140&width=240"
                  alt="Przyczepka - detale"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Przyczepka DevilCraft</h3>
              <p className="mb-6 text-lg text-gray-300">
                Nasza przyczepka to idealne rozwiązanie do transportu łodzi aluminiowych DevilCraft. Wykonana z
                najwyższej jakości materiałów, zapewnia bezpieczny i komfortowy transport.
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h4 className="mb-4 text-xl font-semibold">Specyfikacja techniczna:</h4>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Nośność:</span>
                  <span className="font-semibold">750-1200 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Konstrukcja:</span>
                  <span className="font-semibold">Ocynkowana</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Malowanie:</span>
                  <span className="font-semibold">Proszkowe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Amortyzatory:</span>
                  <span className="font-semibold">Tak</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Hamulce:</span>
                  <span className="font-semibold">Najazdowe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Oświetlenie:</span>
                  <span className="font-semibold">LED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Koło podporowe:</span>
                  <span className="font-semibold">Tak</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wciągarka:</span>
                  <span className="font-semibold">Ręczna</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-red-600 p-6 text-center">
              <h4 className="mb-2 text-xl font-bold text-white">Cena</h4>
              <p className="text-3xl font-bold text-white">Od 4 500 zł</p>
              <p className="mt-2 text-sm text-red-100">*Cena zależy od rozmiaru i wyposażenia</p>
            </div>
          </div>
        </div>

        {/* Zalety przyczepki */}
        <div className="mb-16 rounded-lg bg-gray-900 p-8">
          <h2 className="mb-8 text-center text-2xl font-bold">Dlaczego nasza przyczepka?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-800 p-6 text-center">
              <h3 className="mb-3 text-xl font-semibold text-red-500">Ocynkowanie</h3>
              <p className="text-gray-300">
                Konstrukcja ocynkowana zapewnia długotrwałą ochronę przed korozją i wpływami atmosferycznymi. Gwarancja
                na ocynkowanie - 10 lat.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 text-center">
              <h3 className="mb-3 text-xl font-semibold text-red-500">Malowanie proszkowe</h3>
              <p className="text-gray-300">
                Wysokiej jakości malowanie proszkowe w kolorze czarnym zapewnia estetyczny wygląd i dodatkową ochronę
                przed uszkodzeniami mechanicznymi.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 text-center">
              <h3 className="mb-3 text-xl font-semibold text-red-500">Amortyzatory</h3>
              <p className="text-gray-300">
                Wysokiej jakości amortyzatory zapewniają płynną jazdę i ochronę łodzi przed wstrząsami podczas
                transportu po nierównych drogach.
              </p>
            </div>
          </div>
        </div>

        {/* Wyposażenie standardowe */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Wyposażenie standardowe</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-900 p-6 text-center">
              <h3 className="mb-2 font-semibold">Hamulce najazdowe</h3>
              <p className="text-sm text-gray-400">Automatyczne hamowanie przy cofaniu</p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6 text-center">
              <h3 className="mb-2 font-semibold">Oświetlenie LED</h3>
              <p className="text-sm text-gray-400">Energooszczędne i trwałe</p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6 text-center">
              <h3 className="mb-2 font-semibold">Koło podporowe</h3>
              <p className="text-sm text-gray-400">Ułatwia manewrowanie</p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6 text-center">
              <h3 className="mb-2 font-semibold">Wciągarka ręczna</h3>
              <p className="text-sm text-gray-400">Niezawodna i prosta w obsłudze</p>
            </div>
          </div>
        </div>

        {/* Dostępne rozmiary */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Dostępne rozmiary</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gray-900">
              <CardContent className="p-6 text-center">
                <h3 className="mb-4 text-xl font-bold">Mała</h3>
                <p className="mb-4 text-gray-300">Do łodzi do 4,5m</p>
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Nośność:</span>
                    <span>750 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Długość:</span>
                    <span>5,5 m</span>
                  </div>
                </div>
                <p className="text-xl font-bold text-red-500">4 500 zł</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900">
              <CardContent className="p-6 text-center">
                <h3 className="mb-4 text-xl font-bold">Średnia</h3>
                <p className="mb-4 text-gray-300">Do łodzi do 5,5m</p>
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Nośność:</span>
                    <span>900 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Długość:</span>
                    <span>6,5 m</span>
                  </div>
                </div>
                <p className="text-xl font-bold text-red-500">5 200 zł</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900">
              <CardContent className="p-6 text-center">
                <h3 className="mb-4 text-xl font-bold">Duża</h3>
                <p className="mb-4 text-gray-300">Do łodzi powyżej 5,5m</p>
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Nośność:</span>
                    <span>1200 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Długość:</span>
                    <span>7,5 m</span>
                  </div>
                </div>
                <p className="text-xl font-bold text-red-500">6 100 zł</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Często zadawane pytania</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-xl font-semibold">Czy przyczepka wymaga rejestracji?</h3>
              <p className="text-gray-300">
                Tak, przyczepki o masie całkowitej powyżej 750 kg wymagają rejestracji. Dostarczamy wszystkie niezbędne
                dokumenty.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-xl font-semibold">Jaki jest czas realizacji?</h3>
              <p className="text-gray-300">
                Standardowy czas realizacji to 2-3 tygodnie od momentu złożenia zamówienia i wpłaty zaliczki.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-xl font-semibold">Czy oferujecie dostawę?</h3>
              <p className="text-gray-300">
                Tak, oferujemy dostawę na terenie całej Polski. Koszt dostawy ustalany jest indywidualnie w zależności
                od odległości.
              </p>
            </div>
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-xl font-semibold">Jaka jest gwarancja?</h3>
              <p className="text-gray-300">
                Oferujemy 3-letnią gwarancję na konstrukcję oraz 10-letnią gwarancję na ocynkowanie.
              </p>
            </div>
          </div>
        </div>

        {/* Kontakt */}
        <div className="rounded-lg bg-white border-2 border-black p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-black">Zainteresowany naszą przyczepką?</h2>
          <p className="mb-6 text-lg text-black">
            Skontaktuj się z nami, aby uzyskać szczegółową wycenę i umówić się na prezentację.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <a href="tel:600354985">
                <Phone className="mr-2 h-4 w-4" />
                Zadzwoń: 600 354 985
              </a>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <a href="https://wa.me/48600354985?text=Cześć! Piszę ze strony DevilCraft. Chciałbym dowiedzieć się więcej o przyczepkach.">
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <a href="mailto:4wieczorek2szymon0@gmail.com?subject=Zapytanie o przyczepkę DevilCraft">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </StaggeredContainer>
    </main>
  )
}
