"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

interface DirectEmailFormProps {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function DirectEmailForm({ name, email, phone, subject, message }: DirectEmailFormProps) {
  const [isSending, setIsSending] = useState(false)

  const handleSendDirectEmail = () => {
    setIsSending(true)

    const emailSubject = encodeURIComponent(
      subject ? `[DevilCraft] ${subject}` : "[DevilCraft] Nowa wiadomość ze strony",
    )
    const emailBody = encodeURIComponent(`
Nowa wiadomość ze strony DevilCraft:

Od: ${name}
Email: ${email}
Telefon: ${phone || "Nie podano"}

Wiadomość:
${message}
    `)

    // Krótkie opóźnienie, aby pokazać stan ładowania
    setTimeout(() => {
      window.location.href = `mailto:4wieczorek2szymon0@gmail.com?subject=${emailSubject}&body=${emailBody}`
      setIsSending(false)
    }, 500)
  }

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-2">Alternatywna metoda kontaktu</h3>
      <p className="text-gray-300 text-sm mb-3">
        Jeśli formularz nie działa, możesz wysłać wiadomość bezpośrednio przez swojego klienta pocztowego:
      </p>
      <Button
        onClick={handleSendDirectEmail}
        className="w-full bg-red-600 hover:bg-red-700 text-white"
        disabled={isSending}
      >
        {isSending ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2" />
            Otwieranie klienta pocztowego...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Mail className="h-4 w-4 mr-2" />
            Wyślij przez klienta pocztowego
          </div>
        )}
      </Button>
    </div>
  )
}
