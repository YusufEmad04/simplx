"use client"

import { useEffect, useRef, useState } from "react"
import { MouseHighlightText } from "./mouse-highlight-text"
import { Container, Section, Stack } from "@/components/ui/layout"
import { Text } from "@/components/ui/primitives"

const companies = ["Microsoft", "Google", "Amazon", "Meta", "Apple", "Tesla", "Netflix", "Spotify"]

export function TrustedBySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

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
  }, [isMounted])

  return (
    <Section
      id="trusted-by-section"
      spacing="xl"
      background="secondary"
      className="backdrop-blur-sm py-12 sm:py-16 md:py-20"
    >
      <Container className="px-4 sm:px-6">
        <Stack spacing="3xl" align="center">
          <Text
            size="lg"
            variant="secondary"
            weight="medium"
            align="center"
            className="px-4 text-sm sm:text-base md:text-lg"
          >
            Trusted by industry leaders worldwide
          </Text>

          <div
            ref={scrollRef}
            className="flex overflow-hidden whitespace-nowrap w-full"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate the array for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center min-w-[120px] sm:min-w-[200px] h-12 sm:h-16 mx-4 sm:mx-8"
              >
                <Text
                  size="lg"
                  weight="bold"
                  variant="tertiary"
                  className="hover:text-text-primary transition-colors duration-300 cursor-pointer text-center text-base sm:text-lg md:text-xl lg:text-2xl"
                >
                  {company}
                </Text>
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  )
}