import type React from "react"
import "./globals.css"
import { Montserrat, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Preloader from "@/components/preloader"
import Navbar from "@/components/navbar"
import CustomerReviews from "@/components/customer-reviews"
import ScrollReset from "@/components/scroll-reset"
import InstagramButton from "@/components/instagram-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "DevilCraft - Aluminiowe łodzie najwyższej jakości",
  description: "Projektujemy i produkujemy najwyższej jakości łodzie aluminiowe.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollReset />
          <Preloader />
          <Navbar />
          <div className="pt-16">{children}</div>
          <CustomerReviews />
          <InstagramButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
