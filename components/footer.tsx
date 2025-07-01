import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-red-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">DevilCraft</h3>
            <p className="text-gray-300">
              Projektujemy i produkujemy najwyższej jakości łodzie aluminiowe, łączące nowoczesny design z niezrównaną
              wytrzymałością i unikalnym stylem.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-red-400" />
                <span className="text-gray-300">ul. Stoczniowa 15, 80-001 Gdańsk</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-400" />
                <span className="text-gray-300">+48 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-400" />
                <span className="text-gray-300">kontakt@devilcraft.pl</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Śledź nas</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-red-500 hover:text-red-400 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-red-500 hover:text-red-400 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-red-500 hover:text-red-400 transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevilCraft. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
