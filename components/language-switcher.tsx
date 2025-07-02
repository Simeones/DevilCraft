"use client"

import { useState, useEffect } from "react"
import { Globe, Check } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Lista głównych języków europejskich
const languages = [
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "cs", name: "Čeština", flag: "🇨🇿" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  { code: "hu", name: "Magyar", flag: "🇭🇺" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "sk", name: "Slovenčina", flag: "🇸🇰" },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷" },
  { code: "bg", name: "Български", flag: "🇧🇬" },
  { code: "lt", name: "Lietuvių", flag: "🇱🇹" },
  { code: "lv", name: "Latviešu", flag: "🇱🇻" },
  { code: "et", name: "Eesti", flag: "🇪🇪" },
  { code: "sl", name: "Slovenščina", flag: "🇸🇮" },
  { code: "sr", name: "Српски", flag: "🇷🇸" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "is", name: "Íslenska", flag: "🇮🇸" },
]

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]) // Polski domyślnie

  // Załaduj zapisany język przy montowaniu komponentu
  useEffect(() => {
    const savedLang = localStorage.getItem("language")
    if (savedLang) {
      const lang = languages.find((l) => l.code === savedLang)
      if (lang) setCurrentLanguage(lang)
    }
  }, [])

  // Zmień język i zapisz wybór
  const changeLanguage = (lang: (typeof languages)[0]) => {
    setCurrentLanguage(lang)
    localStorage.setItem("language", lang.code)
    // Tutaj można by dodać faktyczną zmianę języka w aplikacji
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors">
          <Globe className="h-4 w-4" />
          <span>{currentLanguage.flag}</span>
          <span>{currentLanguage.name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 max-h-80 overflow-y-auto">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => changeLanguage(lang)}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
            {currentLanguage.code === lang.code && <Check className="h-4 w-4 text-green-500" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
