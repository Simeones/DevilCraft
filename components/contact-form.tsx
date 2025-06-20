"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendContactEmail } from "@/app/actions/contact"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await sendContactEmail(formData)
      setResult(response)

      if (response.success) {
        // Reset formularza po udanym wysłaniu
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setResult({
        success: false,
        message: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-black/60 backdrop-blur-sm border-red-500/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Send className="mr-2 h-5 w-5 text-red-500" />
          Wyślij zapytanie
        </h3>

        <form id="contact-form" action={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Imię i nazwisko *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                className="bg-black/40 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                placeholder="Jan Kowalski"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="bg-black/40 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                placeholder="jan@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Telefon
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="bg-black/40 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                placeholder="+48 123 456 789"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                Interesująca usługa
              </label>
              <Select name="service">
                <SelectTrigger className="bg-black/40 border-gray-600 text-white focus:border-red-500">
                  <SelectValue placeholder="Wybierz usługę" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="chip-tuning" className="text-white hover:bg-gray-700">
                    Chip Tuning
                  </SelectItem>
                  <SelectItem value="modyfikacje-mechaniczne" className="text-white hover:bg-gray-700">
                    Modyfikacje Mechaniczne
                  </SelectItem>
                  <SelectItem value="tuning-wizualny" className="text-white hover:bg-gray-700">
                    Tuning Wizualny
                  </SelectItem>
                  <SelectItem value="kompleksowy-tuning" className="text-white hover:bg-gray-700">
                    Kompleksowy Tuning
                  </SelectItem>
                  <SelectItem value="inne" className="text-white hover:bg-gray-700">
                    Inne
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Wiadomość *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              className="bg-black/40 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 resize-none"
              placeholder="Opisz swoje potrzeby, model samochodu i oczekiwania dotyczące tuningu..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Wysyłanie...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Wyślij zapytanie
              </>
            )}
          </Button>
        </form>

        {result && (
          <div
            className={`mt-4 p-4 rounded-lg flex items-center ${
              result.success
                ? "bg-green-500/20 border border-green-500/30 text-green-400"
                : "bg-red-500/20 border border-red-500/30 text-red-400"
            }`}
          >
            {result.success ? (
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            )}
            <p className="text-sm">{result.message}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
