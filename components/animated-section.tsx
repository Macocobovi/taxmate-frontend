"use client"

import { motion } from "framer-motion"
import type { HTMLAttributes, ReactNode } from "react"
import { useEffect, useState } from "react"

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0, ...props }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1, rootMargin: "-100px" },
    )

    const element = document.getElementById(`animated-${delay}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  try {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  } catch (error) {
    console.log("[v0] Framer Motion not available, using CSS fallback")
    return (
      <div
        id={`animated-${delay}`}
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${className}`}
        style={{ transitionDelay: `${delay}s` }}
        {...props}
      >
        {children}
      </div>
    )
  }
}
