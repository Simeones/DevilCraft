"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Globe, MessageSquare, CheckCircle, AlertCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ScrollAnimation from "@/components/scroll-animation"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const validateForm = () => {
    const newErrors = {
      name: formState.name ? "" : "Imię i nazwisko jest wymagane",
      email: formState.email
        ? /^\S+@\S+\.\S+$/.test(formState.email)
          ? ""
          : "Podaj poprawny adres email"
        : "Email jest wymagany",
      message: formState.message ? "" : "Wiadomość jest wymagana",
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== "")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      // Symulacja wysyłania formularza
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus({
        success: true,
        message: "Wiadomość została wysłana. Dziękujemy za kontakt!",
      })

      // Resetuj formularz po sukcesie
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Błąd podczas wysyłania wiadomości:", error)
      setSubmitStatus({
        success: false,
        message: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailClient = () => {
    try {
      // Sprawdź czy wymagane pola są wypełnione
      if (!formState.name || !formState.email || !formState.message) {
        alert("Proszę wypełnić wszystkie wymagane pola (Imię i nazwisko, Email, Wiadomość) przed otwarciem poczty.")
        return
      }

      // Przygotuj dane do emaila
      const subject = encodeURIComponent(`[DevilCat] ${formState.subject || "Zapytanie ze strony"}`)
      const body = encodeURIComponent(`
Imię i nazwisko: ${formState.name}
Email: ${formState.email}
Telefon: ${formState.phone || "Nie podano"}
Temat: ${formState.subject || "Zapytanie ze strony"}

Wiadomość:
${formState.message}

---
Wiadomość wysłana ze strony DevilCraft.pl
      `)

      // Otwórz domyślny klient email
      window.location.href = `mailto:4wieczorek2szymon0@gmail.com?subject=${subject}&body=${body}`
    } catch (error) {
      console.error("Błąd podczas otwierania klienta email:", error)
      alert("Wystąpił błąd podczas otwierania klienta email. Spróbuj ponownie.")
    }
  }

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center fade-in-element title-animation">
            Kontakt
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center fade-in-element description-animation">
            Skontaktuj się z nami, aby dowiedzieć się więcej o naszych łodziach, umówić się na prezentację lub
            indywidualną konsultację.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <ScrollAnimation delay={50}>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 fade-in-element">
              <h2 className="text-2xl font-bold text-white mb-6 title-animation">Dane kontaktowe</h2>
              <div className="space-y-6">
                <div className="flex items-start list-item-animation">
                  <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 title-animation">Adres</h3>
                    <p className="text-gray-300 description-animation">Juliusza Słowackiego 305/A</p>
                    <p className="text-gray-300 description-animation">26-604 Radom</p>
                  </div>
                </div>

                <div className="flex items-start list-item-animation">
                  <Phone className="h-6 w-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 title-animation">Telefon</h3>
                    <Link
                      href="tel:+48600354985"
                      className="text-gray-300 hover:text-red-400 transition-colors description-animation"
                    >
                      600 354 985
                    </Link>
                  </div>
                </div>

                <div className="flex items-start list-item-animation">
                  <Mail className="h-6 w-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 title-animation">Email</h3>
                    <Link
                      href="mailto:4wieczorek2szymon0@gmail.com"
                      className="text-gray-300 hover:text-red-400 transition-colors description-animation"
                    >
                      4wieczorek2szymon0@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start list-item-animation">
                  <Globe className="h-6 w-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 title-animation">Strona internetowa</h3>
                    <Link
                      href="https://devilcat.pl"
                      target="_blank"
                      className="text-gray-300 hover:text-red-400 transition-colors description-animation"
                    >
                      devilcat.pl
                    </Link>
                  </div>
                </div>
              </div>

              <ScrollAnimation delay={150}>
                <div className="mt-8 fade-in-element">
                  <h3 className="text-xl font-semibold text-white mb-4 title-animation">Godziny otwarcia</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-300 description-animation">Poniedziałek - Piątek:</div>
                    <div className="text-gray-300 description-animation">9:00 - 17:00</div>
                    <div className="text-gray-300 description-animation">Sobota:</div>
                    <div className="text-gray-300 description-animation">10:00 - 14:00</div>
                    <div className="text-gray-300 description-animation">Niedziela:</div>
                    <div className="text-gray-300 description-animation">Zamknięte</div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation delay={100}>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 fade-in-element">
              {submitStatus.success ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 title-animation">Wiadomość wysłana!</h3>
                  <p className="text-gray-300 description-animation">
                    Dziękujemy za kontakt. Odpowiemy na Twoją wiadomość najszybciej jak to możliwe.
                  </p>
                  <Button
                    className="mt-6 bg-red-600 hover:bg-red-700 text-white button-animation"
                    onClick={() => setSubmitStatus({})}
                  >
                    Wyślij kolejną wiadomość
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center title-animation">
                    <MessageSquare className="h-6 w-6 mr-2" /> Napisz do nas
                  </h2>

                  {submitStatus.success === false && (
                    <div className="bg-red-900/30 border border-red-800 text-white p-4 rounded-md mb-6 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p>{submitStatus.message}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ScrollAnimation delay={250}>
                        <div className="space-y-2 fade-in-element">
                          <Label htmlFor="name" className="text-white">
                            Imię i nazwisko <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Jan Kowalski"
                            className={`bg-gray-800 border-gray-700 text-white ${errors.name ? "border-red-500" : ""}`}
                          />
                          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                      </ScrollAnimation>

                      <ScrollAnimation delay={275}>
                        <div className="space-y-2 fade-in-element">
                          <Label htmlFor="email" className="text-white">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="jan.kowalski@example.com"
                            className={`bg-gray-800 border-gray-700 text-white ${errors.email ? "border-red-500" : ""}`}
                          />
                          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                      </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ScrollAnimation delay={300}>
                        <div className="space-y-2 fade-in-element">
                          <Label htmlFor="phone" className="text-white">
                            Telefon
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="123 456 789"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                      </ScrollAnimation>

                      <ScrollAnimation delay={325}>
                        <div className="space-y-2 fade-in-element">
                          <Label htmlFor="subject" className="text-white">
                            Temat
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            placeholder="Zapytanie o Model 470"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                      </ScrollAnimation>
                    </div>

                    <ScrollAnimation delay={350}>
                      <div className="space-y-2 fade-in-element">
                        <Label htmlFor="message" className="text-white">
                          Wiadomość <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Twoja wiadomość..."
                          className={`bg-gray-800 border-gray-700 text-white min-h-[150px] ${
                            errors.message ? "border-red-500" : ""
                          }`}
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                      </div>
                    </ScrollAnimation>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <ScrollAnimation delay={400}>
                        <Button
                          asChild
                          className="bg-green-600 hover:bg-green-700 text-white flex-1 button-animation fade-in-element"
                        >
                          <Link href="https://wa.me/48600354985?text=Cześć! Piszę ze strony DevilCraft. Chciałbym dowiedzieć się więcej o łodziach aluminiowych.">
                            <MessageSquare className="h-5 w-5 mr-2" />
                            Napisz na WhatsApp
                          </Link>
                        </Button>
                      </ScrollAnimation>

                      <ScrollAnimation delay={425}>
                        <Button
                          type="button"
                          variant="outline"
                          className="border-red-600 text-white hover:bg-red-900 button-animation fade-in-element"
                          onClick={handleEmailClient}
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          Otwórz pocztę
                        </Button>
                      </ScrollAnimation>
                    </div>

                    <ScrollAnimation delay={450}>
                      <div className="bg-gray-800/50 p-3 rounded-md border border-gray-700 flex items-start fade-in-element">
                        <Info className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-400 description-animation">
                          Wypełnij formularz, aby wysłać wiadomość bezpośrednio do nas. Wiadomość zostanie wysłana na
                          adres 4wieczorek2szymon0@gmail.com. Jeśli masz problemy z wysłaniem formularza, możesz
                          skorzystać z przycisku "Otwórz pocztę".
                        </p>
                      </div>
                    </ScrollAnimation>
                  </form>
                </>
              )}
            </div>
          </ScrollAnimation>
        </div>

        {/* Map */}
        <ScrollAnimation delay={250}>
          <div className="mb-16 fade-in-element">
            <h2 className="text-2xl font-bold text-white mb-6 text-center title-animation">Znajdź nas</h2>
            <div className="rounded-lg overflow-hidden h-[400px] border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.0741638106416!2d21.18321051579946!3d51.31390923157312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718f63dbc28577f%3A0x2121ba783f8b0b48!2sJuliusza%20S%C5%82owackiego%2C%20Radom!5e0!3m2!1spl!2spl!4v1650000000000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja DevilCraft"
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation delay={275}>
          <div className="text-center fade-in-element">
            <h2 className="text-3xl font-bold text-white mb-6 title-animation">Zapraszamy do współpracy</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 description-animation">
              Jesteśmy otwarci na wszelkie formy współpracy. Skontaktuj się z nami, aby omówić szczegóły.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ScrollAnimation delay={600}>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white button-animation fade-in-element">
                  <Link href="tel:+48600354985">
                    <Phone className="h-5 w-5 mr-2" />
                    Zadzwoń teraz
                  </Link>
                </Button>
              </ScrollAnimation>
              <ScrollAnimation delay={625}>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-white hover:bg-red-900 button-animation fade-in-element"
                >
                  <Link href="mailto:4wieczorek2szymon0@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Wyślij email
                  </Link>
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  )
}
