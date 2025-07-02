"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface StaggeredContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  threshold?: number
  duration?: number
  cascade?: boolean
}

export default function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 50,
  initialDelay = 0,
  threshold = 0.1,
  duration = 250,
  cascade = false,
}: StaggeredContainerProps) {
  const adjustedInitialDelay = Math.max(0, initialDelay - 250)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: "0px 0px -50px 0px",
  })

  const [childrenArray] = useState(() => {
    return React.Children.toArray(children)
  })

  return (
    <div ref={ref} className={`${className} ${cascade ? "cascade-container" : ""}`}>
      {childrenArray.map((child, index) => {
        if (!React.isValidElement(child)) return child

        return (
          <StaggeredItem
            key={index}
            inView={inView}
            delay={adjustedInitialDelay + index * staggerDelay}
            duration={duration}
            index={index}
            cascade={cascade}
          >
            {child}
          </StaggeredItem>
        )
      })}
    </div>
  )
}

interface StaggeredItemProps {
  children: React.ReactElement
  inView: boolean
  delay: number
  duration: number
  index: number
  cascade: boolean
}

function StaggeredItem({ children, inView, delay, duration, index, cascade }: StaggeredItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        hasAnimated.current = true
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [inView, delay])

  const cascadeStyle = cascade
    ? {
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      }
    : {}

  return React.cloneElement(children, {
    className: `${children.props.className || ""} transition-all duration-500 ease-out ${
      isVisible ? "opacity-100 translate-y-0 filter brightness-100" : "opacity-0 translate-y-8 filter brightness-70"
    } ${cascade ? `cascade-item cascade-item-${index}` : ""}`,
    style: {
      ...children.props.style,
      willChange: "opacity, transform, filter",
      transitionDuration: `${duration}ms`,
      ...cascadeStyle,
    },
  })
}
