"use client"

import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InstagramButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://www.instagram.com/devilcat_aluboats/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Odwiedź nasz profil na Instagramie"
      >
        <Button
          className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 shadow-lg"
          size="icon"
        >
          <Instagram className="h-6 w-6 text-white" />
        </Button>
      </a>
    </div>
  )
}
