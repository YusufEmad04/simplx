"use client"

import { useEffect, useRef } from "react"
import { MouseHighlightText } from "./mouse-highlight-text"

const companies = ["Microsoft", "Google", "Amazon", "Meta", "Apple", "Tesla", "Netflix", "Spotify"]

export function TrustedBySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="trusted-by-section" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <MouseHighlightText className="text-center text-slate-400 text-lg mb-12 font-medium">
          Trusted by industry leaders worldwide
        </MouseHighlightText>

        <div ref={scrollRef} className="flex overflow-hidden whitespace-nowrap" style={{ scrollBehavior: "auto" }}>
          {/* Duplicate the array for seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center min-w-[200px] h-16 mx-8 text-2xl font-bold text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
