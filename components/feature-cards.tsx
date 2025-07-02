import { Anchor, Lightbulb, Paintbrush } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="border-2 border-gray-800 hover:border-red-600 transition-colors bg-black">
        <CardHeader className="text-center">
          <div className="mx-auto bg-red-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Anchor className="h-8 w-8 text-red-500" />
          </div>
          <CardTitle className="text-xl text-red-500">Lekkość i wytrzymałość</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300 text-base">
            Nasze łodzie aluminiowe łączą w sobie niezwykłą lekkość z wyjątkową wytrzymałością. Odporne na korozję,
            uderzenia i ekstremalne warunki pogodowe, zapewniają bezpieczeństwo i długowieczność.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-800 hover:border-red-600 transition-colors bg-black">
        <CardHeader className="text-center">
          <div className="mx-auto bg-red-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Lightbulb className="h-8 w-8 text-red-500" />
          </div>
          <CardTitle className="text-xl text-red-500">Oświetlenie LED</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300 text-base">
            Nasze łodzie wyposażone są w nowoczesne oświetlenie LED, które nie tylko zapewnia doskonałą widoczność w
            nocy, ale także dodaje niepowtarzalnego charakteru i stylu każdemu modelowi.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="border-2 border-gray-800 hover:border-red-600 transition-colors bg-black">
        <CardHeader className="text-center">
          <div className="mx-auto bg-red-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Paintbrush className="h-8 w-8 text-red-500" />
          </div>
          <CardTitle className="text-xl text-red-500">Personalizacja grafiki</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300 text-base">
            Oferujemy możliwość personalizacji grafiki na burcie łodzi. Od prostych wzorów po złożone projekty
            artystyczne - twoja łódź może być tak wyjątkowa jak ty sam.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
