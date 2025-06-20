"use server"

import nodemailer from "nodemailer"

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
    // Konfiguracja transportera SMTP
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

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

    // Wysłanie emaila
    await transporter.sendMail({
      from: `"RDM Custom - Formularz" <${process.env.SMTP_USER}>`,
      to: "szymonnl321@gmail.com", // Zmieniony adres docelowy
      subject: `🚗 Nowe zapytanie od ${name} - RDM Custom`,
      html: htmlContent,
      replyTo: email,
    })

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
