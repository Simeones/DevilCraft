"use server"

// Ten plik korzysta z Resend API – dodaj RESEND_API_KEY w ustawieniach środowiska

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Wszystkie wymagane pola muszą być wypełnione.",
    }
  }

  try {
    // Treść emaila
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #991b1b); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🔧 RDM Custom</h1>
          <p style="color: #fecaca; margin: 5px 0 0 0;">Nowe zapytanie z formularza kontaktowego</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb; border-left: 4px solid #dc2626;">
          <h2 style="color: #1f2937; margin-top: 0;">Szczegóły zapytania:</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Imię i nazwisko:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            ${phone ? `<p><strong>📱 Telefon:</strong> ${phone}</p>` : ""}
            ${service ? `<p><strong>🔧 Interesująca usługa:</strong> ${service}</p>` : ""}
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <p><strong>💬 Wiadomość:</strong></p>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 4px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
        </div>
        
        <div style="padding: 20px; text-align: center; background: #1f2937; color: #9ca3af;">
          <p style="margin: 0;">RDM Custom - Profesjonalny Tuning Samochodowy</p>
        </div>
      </div>
    `

    // Wysyłanie e-maila przez Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "RDM Custom <no-reply@rdmcustom.pl>",
        to: ["szymonnl321@gmail.com"],
        reply_to: email,
        subject: `🚗 Nowe zapytanie od ${name} - RDM Custom`,
        html: htmlContent,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      throw new Error(err)
    }

    return {
      success: true,
      message: "Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24 godzin.",
    }
  } catch (error) {
    console.error("Błąd wysyłania emaila:", error)
    return {
      success: false,
      message: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.",
    }
  }
}
