import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LaTabolaRestaurant() {
  const menuItems = {
    appetizers: [
      {
        name: "Bruschetta Classica",
        description: "Grillowany chleb z pomidorami, bazylią i czosnkiem",
        price: "28 zł",
      },
      {
        name: "Antipasto Misto",
        description: "Wybór włoskich wędlin, serów i marynowanych warzyw",
        price: "45 zł",
      },
      {
        name: "Carpaccio di Manzo",
        description: "Cienkie plastry wołowiny z rukolą i parmezanem",
        price: "38 zł",
      },
    ],
    mains: [
      {
        name: "Spaghetti Carbonara",
        description: "Klasyczny makaron z boczkiem, jajkiem i parmezanem",
        price: "42 zł",
      },
      {
        name: "Risotto ai Funghi Porcini",
        description: "Kremowe risotto z prawdziwkami i truflą",
        price: "48 zł",
      },
      {
        name: "Osso Buco alla Milanese",
        description: "Duszona golonka cielęca z szafranowym risotto",
        price: "65 zł",
      },
      {
        name: "Branzino in Crosta di Sale",
        description: "Świeży okoń morski pieczony w skorupie solnej",
        price: "58 zł",
      },
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Klasyczny deser z mascarpone i kawą",
        price: "22 zł",
      },
      {
        name: "Panna Cotta ai Frutti di Bosco",
        description: "Kremowy deser z sosem z owoców leśnych",
        price: "20 zł",
      },
      {
        name: "Cannoli Siciliani",
        description: "Chrupiące rurki z kremem ricotta i pistacjami",
        price: "24 zł",
      },
    ],
    drinks: [
      {
        name: "Chianti Classico DOCG",
        description: "Czerwone wino z regionu Toskanii",
        price: "35 zł/kieliszek",
      },
      {
        name: "Prosecco di Valdobbiadene",
        description: "Musujące wino z północnych Włoch",
        price: "28 zł/kieliszek",
      },
      {
        name: "Espresso Romano",
        description: "Tradycyjna włoska kawa z cytryną",
        price: "12 zł",
      },
    ],
  }

  const reviews = [
    {
      name: "Anna Kowalska",
      rating: 5,
      comment: "Najlepsza włoska restauracja w mieście! Autentyczne smaki i wspaniała atmosfera.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marco Rossi",
      rating: 5,
      comment: "Jako Włoch mogę powiedzieć, że to prawdziwa cucina italiana. Complimenti!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Katarzyna Nowak",
      rating: 5,
      comment: "Romantyczne miejsce na kolację we dwoje. Obsługa na najwyższym poziomie.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const galleryImages = ["/restaurant-interior.jpg", "/spaghetti-dish.jpg", "/antipasto-board.jpg"]

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-terracotta/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-warmBrown">La Tavola</h1>
            <div className="hidden md:flex space-x-8">
              <Link href="#menu" className="text-stoneGray hover:text-warmBrown transition-colors">
                Menu
              </Link>
              <Link href="#reviews" className="text-stoneGray hover:text-warmBrown transition-colors">
                Opinie
              </Link>
              <Link href="#gallery" className="text-stoneGray hover:text-warmBrown transition-colors">
                Galeria
              </Link>
              <Link href="#contact" className="text-stoneGray hover:text-warmBrown transition-colors">
                Kontakt
              </Link>
            </div>
            <Button className="bg-terracotta hover:bg-terracotta/90 text-cream">Zarezerwuj stolik</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/restaurant-interior.jpg"
            alt="Beautiful brick vaulted restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-warmBrown/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 drop-shadow-lg">La Tavola</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Autentyczne smaki Włoch w sercu miasta
          </p>
          <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-cream text-lg px-8 py-4">
            Zarezerwuj stolik
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warmBrown mb-4">Nasze Menu</h2>
            <p className="text-lg text-stoneGray max-w-2xl mx-auto">
              Odkryj bogactwo smaków włoskiej kuchni przygotowanej z najświeższych składników
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Appetizers */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-warmBrown mb-6 border-b-2 border-terracotta pb-2">
                Przystawki
              </h3>
              <div className="space-y-6">
                {menuItems.appetizers.map((item, index) => (
                  <Card key={index} className="bg-white/90 border-terracotta/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-serif font-semibold text-warmBrown">{item.name}</h4>
                        <Badge variant="secondary" className="bg-terracotta text-cream">
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-stoneGray">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Main Dishes */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-warmBrown mb-6 border-b-2 border-terracotta pb-2">
                Dania Główne
              </h3>
              <div className="space-y-6">
                {menuItems.mains.map((item, index) => (
                  <Card key={index} className="bg-white/90 border-terracotta/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-serif font-semibold text-warmBrown">{item.name}</h4>
                        <Badge variant="secondary" className="bg-terracotta text-cream">
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-stoneGray">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-warmBrown mb-6 border-b-2 border-terracotta pb-2">
                Desery
              </h3>
              <div className="space-y-6">
                {menuItems.desserts.map((item, index) => (
                  <Card key={index} className="bg-white/90 border-terracotta/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-serif font-semibold text-warmBrown">{item.name}</h4>
                        <Badge variant="secondary" className="bg-terracotta text-cream">
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-stoneGray">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-warmBrown mb-6 border-b-2 border-terracotta pb-2">
                Napoje
              </h3>
              <div className="space-y-6">
                {menuItems.drinks.map((item, index) => (
                  <Card key={index} className="bg-white/90 border-terracotta/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-serif font-semibold text-warmBrown">{item.name}</h4>
                        <Badge variant="secondary" className="bg-terracotta text-cream">
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-stoneGray">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warmBrown mb-4">Opinie Gości</h2>
            <p className="text-lg text-stoneGray max-w-2xl mx-auto">Zobacz, co mówią o nas nasi zadowoleni goście</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/90 border-terracotta/20 shadow-lg">
                <CardContent className="p-8 text-center">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full mx-auto mb-4"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-goldAccent text-goldAccent" />
                    ))}
                  </div>
                  <p className="text-stoneGray italic mb-4">"{review.comment}"</p>
                  <h4 className="font-serif font-semibold text-warmBrown">{review.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warmBrown mb-4">Galeria</h2>
            <p className="text-lg text-stoneGray max-w-2xl mx-auto">
              Zajrzyj do wnętrza naszej restauracji i zobacz nasze przepiękne dania
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={
                    index === 0
                      ? "Wnętrze restauracji z ceglanymi sklepieniami"
                      : index === 1
                        ? "Spaghetti z sosem pomidorowym i bazylią"
                        : index === 2
                          ? "Deska antipasto z włoskimi przekąskami"
                          : index === 3
                            ? "Świeże pizze z rukolą i mozzarellą"
                            : `Gallery image ${index + 1}`
                  }
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warmBrown mb-4">Kontakt</h2>
            <p className="text-lg text-stoneGray max-w-2xl mx-auto">Zapraszamy do odwiedzenia naszej restauracji</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-white/90 border-terracotta/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-terracotta" />
                    <div>
                      <h3 className="font-serif font-semibold text-warmBrown mb-2">Godziny otwarcia</h3>
                      <div className="text-stoneGray space-y-1">
                        <p>Poniedziałek - Czwartek: 12:00 - 22:00</p>
                        <p>Piątek - Sobota: 12:00 - 23:00</p>
                        <p>Niedziela: 13:00 - 21:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-olive/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-burgundy" />
                    <div>
                      <h3 className="font-serif font-semibold text-burgundy mb-2">Telefon</h3>
                      <p className="text-olive">+48 12 345 67 89</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-olive/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-burgundy" />
                    <div>
                      <h3 className="font-serif font-semibold text-burgundy mb-2">E-mail</h3>
                      <p className="text-olive">info@latavolarestaurant.pl</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-olive/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-burgundy" />
                    <div>
                      <h3 className="font-serif font-semibold text-burgundy mb-2">Adres</h3>
                      <p className="text-olive">
                        ul. Włoska 15
                        <br />
                        00-001 Warszawa
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8!2d21.0122!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ3LjAiTiAyMcKwMDAnNDQuMCJF!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Tavola Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warmBrown text-cream py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">La Tavola</h2>
            <p className="text-cream/80 mb-8 max-w-md mx-auto">Autentyczne smaki Włoch w eleganckim otoczeniu</p>

            <div className="flex justify-center space-x-6 mb-8">
              <Link href="#" className="text-cream hover:text-cream/80 transition-colors">
                <Instagram className="w-8 h-8" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-cream hover:text-cream/80 transition-colors">
                <Facebook className="w-8 h-8" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>

            <div className="border-t border-cream/20 pt-8">
              <p className="text-cream/60">© 2024 La Tavola Restaurant. Wszystkie prawa zastrzeżone.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
