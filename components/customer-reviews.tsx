"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"

// Funkcja generująca inicjały z imienia i nazwiska
const getInitials = (name) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
}

// Funkcja generująca kolor na podstawie imienia
const getAvatarColor = (name) => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F033FF",
    "#FF33A8",
    "#33FFF5",
    "#FFD133",
    "#33FFBD",
    "#FF3333",
    "#8C33FF",
  ]

  // Używamy sumy kodów ASCII liter imienia jako prostego hashu
  const hash = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
  return colors[hash % colors.length]
}

// Dane opinii klientów - 8 mężczyzn i 2 kobiety
const reviews = [
  {
    id: 1,
    name: "Marek Kowalski",
    content:
      "Łódź DevilCraft 520 to najlepszy zakup w moim życiu! Używam jej do wędkowania i nigdy mnie nie zawiodła, nawet podczas sztormu.",
    rating: 5,
  },
  {
    id: 2,
    name: "Piotr Wiśniewski",
    content:
      "Kupiłem model 470 i jestem mega zadowolony. Lekka, zwrotna i nie trzeba jej ciągle malować jak drewnianej. Polecam każdemu wędkarzowi!",
    rating: 5,
  },
  {
    id: 3,
    name: "Tomasz Zieliński",
    content:
      "Płozorolki od DevilCraft to rewelacja! Wodowanie łodzi zajmuje teraz minutę, a nie godzinę jak kiedyś. Warto było dopłacić.",
    rating: 4,
  },
  {
    id: 4,
    name: "Krzysztof Woźniak",
    content:
      "Jako doświadczony wędkarz polecam te łodzie każdemu. Stabilne, ciche i nie płoszą ryb. Mój sum 2,5m złowiony z DevilCraft 600!",
    rating: 5,
  },
  {
    id: 5,
    name: "Michał Kaczmarek",
    content:
      "Serwis na medal! Panowie naprawili uszkodzenie po kolizji w 2 dni. Łódź jak nowa, a cena naprawy bardzo przystępna.",
    rating: 5,
  },
  {
    id: 6,
    name: "Jan Kowalczyk",
    content:
      "Łódź idealna na ryby i na grilla ze znajomymi. Pomieści 6 osób bez problemu, a silnik 15KM daje radę. Polecam szczerze.",
    rating: 4,
  },
  {
    id: 7,
    name: "Adam Nowicki",
    content:
      "Jako właściciel ośrodka wędkarskiego zakupiłem 5 łodzi DevilCraft. Klienci są zachwyceni, a ja nie muszę martwić się o konserwację.",
    rating: 5,
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    content:
      "Najlepsza łódź do sportowego wędkarstwa! Stabilna nawet podczas dynamicznych ruchów. Polecam model 520 z dodatkowym schowkiem na sprzęt.",
    rating: 5,
  },
  {
    id: 9,
    name: "Anna Nowak",
    content:
      "Namówiłam męża na zakup łodzi DevilCraft i teraz cała rodzina korzysta. Dzieci uwielbiają wycieczki po jeziorze, a ja odpoczynek od męża-wędkarza.",
    rating: 4,
  },
  {
    id: 10,
    name: "Katarzyna Lewandowska",
    content:
      "W końcu łódź, którą sama mogę zwodować! Lekka, ale solidna. Używam do rekreacji i obserwacji ptaków na rozlewiskach. Polecam paniom!",
    rating: 5,
  },
]

export default function CustomerReviews() {
  const [currentReview, setCurrentReview] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [reviewsDisabled, setReviewsDisabled] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const initialTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Funkcja wybierająca losową opinię
  const selectRandomReview = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length)
    setCurrentReview(randomIndex)
  }

  // Funkcja wyłączająca opinie
  const disableReviews = () => {
    setIsVisible(false)
    setReviewsDisabled(true)

    // Czyszczenie interwałów
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (initialTimeoutRef.current) {
      clearTimeout(initialTimeoutRef.current)
      initialTimeoutRef.current = null
    }
  }

  useEffect(() => {
    if (reviewsDisabled) return

    // Początkowe opóźnienie przed pokazaniem pierwszej opinii
    initialTimeoutRef.current = setTimeout(() => {
      selectRandomReview()
      setIsVisible(true)
    }, 5000)

    // Interwał zmieniający opinie
    intervalRef.current = setInterval(() => {
      setIsVisible(false)

      // Opóźnienie przed pokazaniem nowej opinii
      setTimeout(() => {
        selectRandomReview()
        setIsVisible(true)
      }, 500)
    }, 8000)

    return () => {
      if (initialTimeoutRef.current) {
        clearTimeout(initialTimeoutRef.current)
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [reviewsDisabled])

  if (currentReview === null || reviewsDisabled) return null

  const review = reviews[currentReview]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed left-4 bottom-4 z-50 max-w-xs bg-black/80 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-gray-700"
        >
          <div className="flex items-start gap-3">
            <div className="relative h-12 w-12 flex-shrink-0">
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-white font-medium"
                style={{ backgroundColor: getAvatarColor(review.name) }}
              >
                {getInitials(review.name)}
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-white">{review.name}</h4>
              <div className="flex items-center mt-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-200">{review.content}</p>
            </div>
          </div>
          <button
            onClick={disableReviews}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            aria-label="Zamknij opinię"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
