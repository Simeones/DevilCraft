import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Strona nie znaleziona</h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
      </p>
      <Button asChild className="bg-red-600 hover:bg-red-700">
        <Link href="/">Wróć do strony głównej</Link>
      </Button>
    </div>
  )
}
