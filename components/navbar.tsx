"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import LanguageSwitcher from "@/components/language-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(75, 85, 99, 0.3)",
      }}
    >
      <div className="w-full flex h-16 items-center px-4">
        <div className="flex items-center w-[180px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="DevilCraft Logo"
              width={150}
              height={60}
              style={{ height: "60px", width: "auto" }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between flex-1 px-8">
          <NavLink href="/" active={isActive("/")}>
            Strona Główna
          </NavLink>
          <NavLink href="/o-nas" active={isActive("/o-nas")}>
            O nas
          </NavLink>
          <NavLink href="/modele" active={isActive("/modele")}>
            Modele
          </NavLink>
          <NavLink href="/cechy" active={isActive("/cechy")}>
            Cechy
          </NavLink>
          <NavLink href="/personalizacja" active={isActive("/personalizacja")}>
            Personalizacja
          </NavLink>
          <NavLink href="/tuning" active={isActive("/tuning")}>
            Tuning
          </NavLink>
          <NavLink href="/galeria" active={isActive("/galeria")}>
            Galeria
          </NavLink>
          <NavLink href="/plozorolki" active={isActive("/plozorolki")}>
            Płozorolki
          </NavLink>
          <NavLink href="/przyczepki" active={isActive("/przyczepki")}>
            Przyczepki
          </NavLink>
          <NavLink href="/serwis" active={isActive("/serwis")}>
            Serwis
          </NavLink>
          <NavLink href="/kontakt" active={isActive("/kontakt")}>
            Kontakt
          </NavLink>
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-gray-800">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-gray-800 z-[10000]">
            <div className="flex justify-center mb-8 mt-4">
              <Image src="/logo.png" alt="DevilCraft Logo" width={150} height={40} priority />
            </div>
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/" active={isActive("/")} onClick={() => setIsOpen(false)}>
                Strona Główna
              </MobileNavLink>
              <MobileNavLink href="/o-nas" active={isActive("/o-nas")} onClick={() => setIsOpen(false)}>
                O nas
              </MobileNavLink>
              <MobileNavLink href="/modele" active={isActive("/modele")} onClick={() => setIsOpen(false)}>
                Modele
              </MobileNavLink>
              <MobileNavLink href="/cechy" active={isActive("/cechy")} onClick={() => setIsOpen(false)}>
                Cechy
              </MobileNavLink>
              <MobileNavLink
                href="/personalizacja"
                active={isActive("/personalizacja")}
                onClick={() => setIsOpen(false)}
              >
                Personalizacja
              </MobileNavLink>
              <MobileNavLink href="/tuning" active={isActive("/tuning")} onClick={() => setIsOpen(false)}>
                Tuning
              </MobileNavLink>
              <MobileNavLink href="/galeria" active={isActive("/galeria")} onClick={() => setIsOpen(false)}>
                Galeria
              </MobileNavLink>
              <MobileNavLink href="/plozorolki" active={isActive("/plozorolki")} onClick={() => setIsOpen(false)}>
                Płozorolki
              </MobileNavLink>
              <MobileNavLink href="/przyczepki" active={isActive("/przyczepki")} onClick={() => setIsOpen(false)}>
                Przyczepki
              </MobileNavLink>
              <MobileNavLink href="/serwis" active={isActive("/serwis")} onClick={() => setIsOpen(false)}>
                Serwis
              </MobileNavLink>
              <MobileNavLink href="/kontakt" active={isActive("/kontakt")} onClick={() => setIsOpen(false)}>
                Kontakt
              </MobileNavLink>
              <div className="mt-6 pt-4 border-t border-gray-700">
                <LanguageSwitcher />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white px-2 py-2 text-center whitespace-nowrap relative transition-all duration-300 hover:bg-black/80 flex-1",
        active && "border-b-2 border-red-600",
      )}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white font-medium text-lg p-2 block transition-colors duration-300 hover:bg-black/80 rounded-md",
        active && "border-b-2 border-red-600",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
