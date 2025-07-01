"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
  once?: boolean
  darkEffect?: boolean
  duration?: number
  stagger?: boolean
  staggerChildren?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
  once = true,
  darkEffect = true,
  duration = 250,
  stagger = false,
  staggerChildren = 70,
}: ScrollAnimationProps) {
  // Przyspieszenie animacji o 0.5 sekundy (500ms) zamiast 0.7 sekundy
  const adjustedDelay = Math.max(0, delay - 250) // Nie pozwalamy na ujemne opóźnienia i przyspieszamy o połowę

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay
            setTimeout(() => {
              currentRef.classList.add("animate-in")
              currentRef.classList.remove("animate-out")

              // If stagger is enabled, animate children with staggered delays
              if (stagger) {
                const children = Array.from(currentRef.children)
                children.forEach((child, index) => {
                  setTimeout(() => {
                    child.classList.add("animate-in-child")
                    child.classList.remove("animate-out-child")
                  }, staggerChildren * index)
                })
              }
            }, adjustedDelay) // Używamy skorygowanego opóźnienia

            if (once) {
              observer.unobserve(currentRef)
            }
          } else if (!once) {
            currentRef.classList.remove("animate-in")
            currentRef.classList.add("animate-out")

            if (stagger) {
              const children = Array.from(currentRef.children)
              children.forEach((child) => {
                child.classList.remove("animate-in-child")
                child.classList.add("animate-out-child")
              })
            }
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element comes into view
      },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [adjustedDelay, once, threshold, stagger, staggerChildren])

  // Set initial and animation classes based on direction
  let initialClass = ""
  let animationClass = ""

  switch (direction) {
    case "up":
      initialClass = "translate-y-8 opacity-0"
      animationClass = "transition-all ease-out"
      break
    case "down":
      initialClass = "-translate-y-8 opacity-0"
      animationClass = "transition-all ease-out"
      break
    case "left":
      initialClass = "translate-x-8 opacity-0"
      animationClass = "transition-all ease-out"
      break
    case "right":
      initialClass = "-translate-x-8 opacity-0"
      animationClass = "transition-all ease-out"
      break
  }

  // Add dark effect class if enabled
  if (darkEffect) {
    initialClass += " dark-effect"
  }

  return (
    <div
      ref={ref}
      className={`${initialClass} ${animationClass} ${stagger ? "stagger-container" : ""} ${className}`}
      style={{
        willChange: "opacity, transform, filter",
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
