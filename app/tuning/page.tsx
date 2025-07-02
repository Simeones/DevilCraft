"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ScrollAnimation from "@/components/scroll-animation" // Poprawiony import
import StaggeredContainer from "@/components/staggered-container" // Poprawiony import
import { ChevronRight, Wrench, Zap, PaintBucket, Gauge, Lightbulb, Smartphone, Shield, Send } from "lucide-react"

export default function TuningPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    boatModel: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Symulacja wysyłania formularza
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      boatModel: "",
      message: "",
    })

    // Reset komunikatu po 5 sekundach
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <main className="pt-16 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/boat-angle-view.jpeg"
            alt="Tuning łodzi"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-red-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tuning Łodzi
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Przekształć swoją łódź w unikalne dzieło sztuki. Nasze usługi tuningu pozwolą Ci stworzyć łódź, której nikt
            nie przeoczy na wodzie.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md"
              onClick={() => {
                const element = document.getElementById("konsultacje")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Umów konsultację <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Możliwości Tuningu */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-16 text-center">Możliwości Tuningu</h2>
          </ScrollAnimation>

          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 bg-transparent">
              <TabsTrigger
                value="performance"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white py-3"
              >
                <Gauge className="mr-2 h-5 w-5" /> Wydajność
              </TabsTrigger>
              <TabsTrigger
                value="exterior"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white py-3"
              >
                <PaintBucket className="mr-2 h-5 w-5" /> Wygląd zewnętrzny
              </TabsTrigger>
              <TabsTrigger
                value="interior"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white py-3"
              >
                <Wrench className="mr-2 h-5 w-5" /> Wnętrze
              </TabsTrigger>
              <TabsTrigger
                value="electronics"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white py-3"
              >
                <Zap className="mr-2 h-5 w-5" /> Elektronika
              </TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="mt-0">
              <StaggeredContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Gauge className="mr-2 h-5 w-5" /> Modyfikacje silnika
                      </h3>
                      <p className="text-gray-300">
                        Zwiększenie mocy silnika, optymalizacja układu napędowego, instalacja wydajniejszych śrub
                        napędowych i poprawa osiągów.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Gauge className="mr-2 h-5 w-5" /> Hydrodynamika
                      </h3>
                      <p className="text-gray-300">
                        Modyfikacje kadłuba dla lepszej hydrodynamiki, redukcja oporu wody, zwiększenie stabilności i
                        poprawa zachowania łodzi na wodzie.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Gauge className="mr-2 h-5 w-5" /> Układ wydechowy
                      </h3>
                      <p className="text-gray-300">
                        Instalacja sportowych układów wydechowych, poprawa przepływu spalin, redukcja przeciwciśnienia i
                        charakterystyczny dźwięk silnika.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </StaggeredContainer>
            </TabsContent>

            <TabsContent value="exterior" className="mt-0">
              <StaggeredContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <PaintBucket className="mr-2 h-5 w-5" /> Niestandardowe malowanie
                      </h3>
                      <p className="text-gray-300">
                        Unikalne wzory, airbrush, efekty specjalne, wielowarstwowe lakiery i personalizowane grafiki na
                        kadłubie.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <PaintBucket className="mr-2 h-5 w-5" /> Oklejanie
                      </h3>
                      <p className="text-gray-300">
                        Profesjonalne oklejanie folią, efekty carbon, chrom, matowe wykończenia, kamuflażowe wzory i
                        pełna personalizacja.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <PaintBucket className="mr-2 h-5 w-5" /> Modyfikacje strukturalne
                      </h3>
                      <p className="text-gray-300">
                        Niestandardowe relingi, platformy, spoilery, dodatkowe schowki i modyfikacje pokładu dla
                        unikalnego wyglądu.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </StaggeredContainer>
            </TabsContent>

            <TabsContent value="interior" className="mt-0">
              <StaggeredContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Wrench className="mr-2 h-5 w-5" /> Tapicerka premium
                      </h3>
                      <p className="text-gray-300">
                        Luksusowa tapicerka ze skóry wodoodpornej, niestandardowe wzory przeszyć, personalizowane logo i
                        ergonomiczne fotele.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Wrench className="mr-2 h-5 w-5" /> Kokpit
                      </h3>
                      <p className="text-gray-300">
                        Niestandardowe konsole, ergonomiczne rozmieszczenie przyrządów, personalizowane panele
                        sterowania i luksusowe wykończenia.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Wrench className="mr-2 h-5 w-5" /> Podłogi i wykończenia
                      </h3>
                      <p className="text-gray-300">
                        Luksusowe podłogi z teku, niestandardowe wykończenia z włókna węglowego, aluminiowe akcenty i
                        personalizowane detale.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </StaggeredContainer>
            </TabsContent>

            <TabsContent value="electronics" className="mt-0">
              <StaggeredContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Lightbulb className="mr-2 h-5 w-5" /> Oświetlenie
                      </h3>
                      <p className="text-gray-300">
                        Zaawansowane systemy LED, podwodne oświetlenie, programowalne efekty świetlne i personalizowane
                        schematy kolorów.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Smartphone className="mr-2 h-5 w-5" /> Systemy audio
                      </h3>
                      <p className="text-gray-300">
                        Wysokiej klasy systemy audio, wodoodporne głośniki, potężne subwoofery, wzmacniacze i integracja
                        z urządzeniami mobilnymi.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center text-red-500">
                        <Shield className="mr-2 h-5 w-5" /> Nawigacja i bezpieczeństwo
                      </h3>
                      <p className="text-gray-300">
                        Zaawansowane systemy nawigacyjne, radary, kamery 360°, systemy monitorowania silnika i zdalne
                        sterowanie.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </StaggeredContainer>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Galeria Realizacji */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-16 text-center">Nasze Realizacje</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollAnimation>
              <div className="relative h-80 overflow-hidden rounded-lg group">
                <Image
                  src="/boat-side-view.jpeg"
                  alt="Tuning łodzi - realizacja 1"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Sportowy model 470</h3>
                    <p className="text-sm text-gray-300">
                      Pełna modyfikacja z niestandardowym malowaniem, systemem audio i oświetleniem LED
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <div className="relative h-80 overflow-hidden rounded-lg group">
                <Image
                  src="/boat-interior-led.jpeg"
                  alt="Tuning łodzi - realizacja 2"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Luksusowe wnętrze</h3>
                    <p className="text-sm text-gray-300">
                      Kompletna przebudowa wnętrza z niestandardową tapicerką i zaawansowanym oświetleniem
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="relative h-80 overflow-hidden rounded-lg group">
                <Image
                  src="/boat-graphic-detail.jpeg"
                  alt="Tuning łodzi - realizacja 3"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Artystyczne oklejenie</h3>
                    <p className="text-sm text-gray-300">Unikalne grafiki i wzory wykonane przez naszych artystów</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Proces Tuningu */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-16 text-center">Proces Tuningu</h2>
          </ScrollAnimation>

          <div className="relative">
            {/* Linia procesu */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600 hidden md:block"></div>

            <div className="space-y-24">
              <ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-4 text-red-500">1. Konsultacja</h3>
                    <p className="text-gray-300">
                      Spotykamy się, aby omówić Twoje potrzeby, preferencje i budżet. Analizujemy Twoją łódź i
                      proponujemy możliwości modyfikacji.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-600 z-10"></div>
                    <Image
                      src="/placeholder-9lj73.png"
                      alt="Konsultacja"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-red-500">2. Projektowanie</h3>
                    <p className="text-gray-300">
                      Nasz zespół projektantów tworzy szczegółowy projekt modyfikacji, wizualizacje 3D i plan
                      realizacji. Zatwierdzasz każdy element.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pr-12 relative">
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-600 z-10"></div>
                    <Image
                      src="/placeholder-4v5ws.png"
                      alt="Projektowanie"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-4 text-red-500">3. Realizacja</h3>
                    <p className="text-gray-300">
                      Nasi specjaliści przystępują do pracy, realizując projekt krok po kroku. Regularnie informujemy
                      Cię o postępach i konsultujemy ewentualne zmiany.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pl-12 relative">
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-600 z-10"></div>
                    <Image
                      src="/placeholder-65wdt.png"
                      alt="Realizacja"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-red-500">4. Przekazanie</h3>
                    <p className="text-gray-300">
                      Prezentujemy Ci gotową, zmodyfikowaną łódź. Omawiamy wszystkie zmiany, przekazujemy instrukcje
                      obsługi nowych systemów i gwarancję na wykonane prace.
                    </p>
                  </div>
                  <div className="md:w-1/2 md:pr-12 relative">
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-red-600 z-10"></div>
                    <Image
                      src="/placeholder-vh2qy.png"
                      alt="Przekazanie"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Konsultacje */}
      <section id="konsultacje" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-16 text-center">Umów Konsultację</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-500">Przebuduj swoją łódź nie do poznania</h3>
                <p className="text-gray-300 mb-6">
                  Nasz zespół ekspertów pomoże Ci przekształcić Twoją łódź w unikalne dzieło sztuki, które będzie
                  wyróżniać się na wodzie. Niezależnie od tego, czy marzysz o sportowych osiągach, luksusowym wnętrzu
                  czy futurystycznym wyglądzie - możemy to zrealizować.
                </p>
                <p className="text-gray-300 mb-6">
                  Wypełnij formularz, a nasz konsultant skontaktuje się z Tobą w ciągu 24 godzin, aby omówić Twoje
                  potrzeby i zaplanować spotkanie. Możemy przeprowadzić konsultację online lub osobiście w naszym
                  warsztacie.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4 mt-1">
                      <Wrench className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Indywidualne podejście</h4>
                      <p className="text-gray-400">
                        Każdy projekt traktujemy indywidualnie, dostosowując się do Twoich potrzeb i preferencji.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4 mt-1">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Gwarancja jakości</h4>
                      <p className="text-gray-400">
                        Wszystkie nasze modyfikacje objęte są gwarancją i wykonywane przez certyfikowanych specjalistów.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-4 mt-1">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Szybka realizacja</h4>
                      <p className="text-gray-400">
                        Dzięki doświadczeniu i profesjonalnemu zapleczu, realizujemy projekty w optymalnym czasie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Dziękujemy!</h3>
                      <p className="text-gray-300">
                        Twoje zgłoszenie zostało przyjęte. Nasz konsultant skontaktuje się z Tobą w ciągu 24 godzin.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Imię i nazwisko</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-gray-800 border-gray-700 mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-gray-800 border-gray-700 mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="bg-gray-800 border-gray-700 mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="boatModel">Model łodzi</Label>
                          <Input
                            id="boatModel"
                            name="boatModel"
                            value={formData.boatModel}
                            onChange={handleChange}
                            placeholder="Np. DevilCraft 470, Bayliner, itp."
                            className="bg-gray-800 border-gray-700 mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message">Opisz swoje potrzeby</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Opisz, jakie modyfikacje Cię interesują..."
                            className="bg-gray-800 border-gray-700 mt-1 h-32"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Wysyłanie...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Send className="mr-2 h-5 w-5" /> Wyślij zapytanie
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-16 text-center">Najczęściej Zadawane Pytania</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollAnimation>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-red-500">Ile kosztuje tuning łodzi?</h3>
                  <p className="text-gray-300">
                    Koszt tuningu zależy od zakresu modyfikacji. Małe zmiany zaczynają się od kilku tysięcy złotych,
                    podczas gdy kompleksowe przebudowy mogą kosztować kilkadziesiąt tysięcy. Podczas konsultacji
                    przedstawimy szczegółową wycenę.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-red-500">Jak długo trwa proces tuningu?</h3>
                  <p className="text-gray-300">
                    Czas realizacji zależy od zakresu prac. Proste modyfikacje mogą zająć kilka dni, podczas gdy
                    kompleksowe przebudowy mogą trwać od 2 do 8 tygodni. Zawsze ustalamy realistyczny harmonogram przed
                    rozpoczęciem prac.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-red-500">Czy modyfikacje wpływają na gwarancję łodzi?</h3>
                  <p className="text-gray-300">
                    Niektóre modyfikacje mogą wpływać na gwarancję producenta. Zawsze informujemy o tym przed
                    rozpoczęciem prac i oferujemy własną gwarancję na wykonane modyfikacje. W przypadku nowych łodzi,
                    możemy wykonać tuning w sposób, który nie narusza gwarancji producenta.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-red-500">Czy mogę zobaczyć przykłady waszych prac?</h3>
                  <p className="text-gray-300">
                    Oczywiście! Zapraszamy do naszej galerii na stronie, a podczas konsultacji możemy pokazać więcej
                    przykładów podobnych do Twojego projektu. Możesz również odwiedzić nasz warsztat, aby zobaczyć
                    aktualnie realizowane projekty.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
