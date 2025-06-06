"use client"

import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMediaButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* TikTok Button */}
      <a
        href="https://www.tiktok.com/@devilcatofficial?lang=pl-PL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Odwiedź nasz profil na TikToku"
      >
        <Button
          className="h-14 w-14 rounded-full bg-black hover:bg-gray-800 shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <div className="relative">
            {/* TikTok Icon - Custom SVG */}
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </div>
        </Button>
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/devilcat_aluboats/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Odwiedź nasz profil na Instagramie"
      >
        <Button
          className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <Instagram className="h-6 w-6 text-white" />
        </Button>
      </a>
    </div>
  )
}
