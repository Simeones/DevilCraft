import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    // Kontekst o firmie DevilCraft i łodziach aluminiowych
    const systemPrompt = `Jesteś asystentem firmy DevilCraft, która produkuje wysokiej jakości łodzie aluminiowe. 

INFORMACJE O FIRMIE:
- DevilCraft to polska firma specjalizująca się w produkcji łodzi aluminiowych
- Oferujemy modele: 420, 470, 550, NOMAD
- Wszystkie łodzie są wykonane z wysokiej jakości aluminium
- Oferujemy personalizację, tuning, oklejanie łodzi, fotele, relingi, płozorolki i przyczepki

MODELE ŁODZI:
1. Model 420 - kompaktowa łódź, idealna dla początkujących
2. Model 470 - uniwersalna łódź dla średnio zaawansowanych
3. Model 550 - większa łódź z zaawansowanym wyposażeniem i oświetleniem LED
4. Model NOMAD - flagowy model z najwyższej półki

USŁUGI:
- Personalizacja łodzi (wybór kolorów, grafik)
- Tuning i modyfikacje
- Oklejanie łodzi (standardowe wzory lub własne projekty)
- Fotele łodziowe (różne modele ManSeatWell i inne)
- Relingi (promocja: 4 relingi za 850 zł zamiast 1000 zł)
- Płozorolki do transportu
- Przyczepki do łodzi

KONTAKT:
- Telefon: 600 354 985
- Email: kontakt@devilcraft.pl
- WhatsApp: dostępny
- Adres: ul. Przykładowa 123, 00-000 Warszawa

Odpowiadaj w języku polskim, bądź pomocny i profesjonalny. Jeśli nie znasz odpowiedzi na konkretne pytanie techniczne, zaproponuj kontakt bezpośredni z firmą.`

    // Symulacja odpowiedzi AI (w rzeczywistej aplikacji użyłbyś prawdziwego API AI)
    const responses = [
      "Dziękuję za pytanie! Nasze łodzie aluminiowe DevilCraft są dostępne w czterech modelach: 420, 470, 550 i flagowy NOMAD. Każdy model ma swoje unikalne cechy. O którym modelu chciałbyś dowiedzieć się więcej?",

      "Oferujemy pełną personalizację naszych łodzi - od wyboru kolorów, przez oklejanie grafikami, po dodanie foteli i relingów. Ceny zależą od wybranego modelu i opcji. Czy masz na myśli konkretny model?",

      "Model 550 to nasza łódź z zaawansowanym oświetleniem LED i bogatym wyposażeniem. Jest idealna dla osób szukających komfortu i nowoczesnych rozwiązań. Czy chciałbyś poznać szczegóły techniczne?",

      "Aktualnie mamy promocję na relingi - 4 sztuki za 850 zł zamiast standardowych 1000 zł! To świetna okazja do wyposażenia łodzi. Czy jesteś zainteresowany?",

      "Nasze fotele łodziowe to wysokiej jakości produkty różnych producentów, w tym ManSeatWell. Mamy modele w różnych kolorach i konfiguracjach. Chciałbyś zobaczyć dostępne opcje?",

      "Dla dokładnych informacji technicznych i cenowych polecam kontakt bezpośredni: tel. 600 354 985 lub email kontakt@devilcraft.pl. Nasz zespół udzieli szczegółowych informacji!",
    ]

    // Prosta logika wyboru odpowiedzi na podstawie słów kluczowych
    let response = responses[0] // domyślna odpowiedź

    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("cena") || lowerMessage.includes("koszt") || lowerMessage.includes("ile kosztuje")) {
      response =
        "Ceny naszych łodzi zależą od modelu i wybranego wyposażenia. Model 420 to nasz najbardziej przystępny cenowo, podczas gdy NOMAD to flagowy model premium. Dla dokładnej wyceny skontaktuj się z nami: 600 354 985."
    } else if (lowerMessage.includes("550")) {
      response =
        "Model 550 to nasza łódź z zaawansowanym oświetleniem LED, która świetnie prezentuje się zarówno w dzień jak i w nocy. Ma bogate wyposażenie i możliwości personalizacji. Czy chciałbyś poznać szczegóły techniczne?"
    } else if (lowerMessage.includes("fotel") || lowerMessage.includes("fotele")) {
      response = responses[4]
    } else if (lowerMessage.includes("reling") || lowerMessage.includes("relingi")) {
      response = responses[3]
    } else if (
      lowerMessage.includes("personalizacja") ||
      lowerMessage.includes("tuning") ||
      lowerMessage.includes("oklejanie")
    ) {
      response = responses[1]
    } else if (lowerMessage.includes("kontakt") || lowerMessage.includes("telefon") || lowerMessage.includes("email")) {
      response = responses[5]
    } else if (
      lowerMessage.includes("model") ||
      lowerMessage.includes("420") ||
      lowerMessage.includes("470") ||
      lowerMessage.includes("nomad")
    ) {
      response = responses[0]
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Błąd API czatu:", error)
    return NextResponse.json({ error: "Wystąpił błąd podczas przetwarzania wiadomości" }, { status: 500 })
  }
}
