"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"
import { Container, Section, Stack, Inline } from "@/components/ui/layout"
import { Heading, Text, Card, GradientBackground } from "@/components/ui/primitives"
import { IconButton } from "@/components/ui/enhanced-button"

const testimonials = [
  {
    name: "Sarah Al-Rashid",
    title: "CEO",
    company: "Gulf Financial Group",
    location: "Dubai, UAE",
    rating: 5,
    quote:
      "Simplx.tech transformed our operations completely. The AI solutions they implemented have revolutionized how we serve our customers.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Marcus Weber",
    title: "CTO",
    company: "TechInnovate GmbH",
    location: "Berlin, Germany",
    rating: 5,
    quote:
      "The level of expertise and innovation that Simplx.tech brings is unmatched. They delivered beyond our expectations.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Dr. Jennifer Chen",
    title: "Chief Innovation Officer",
    company: "MedTech Solutions",
    location: "Boston, USA",
    rating: 5,
    quote:
      "Working with Simplx.tech was a game-changer for our organization. Their solutions are both cutting-edge and practical.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ahmed Hassan",
    title: "Managing Director",
    company: "Future Enterprises",
    location: "Riyadh, Saudi Arabia",
    rating: 5,
    quote:
      "The transformation we achieved with Simplx.tech exceeded all our expectations. Truly exceptional service and results.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <Section
      id="testimonials"
      spacing="3xl"
      background="primary"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Background */}
      <GradientBackground
        variant="radial"
        animate="pulse"
        className="absolute inset-0 opacity-10"
      />

      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse opacity-10" style={{ animationDelay: "2s" }} />

      <Container className="relative z-10 px-4 sm:px-6">
        <Stack spacing="6xl">
          {/* Header */}
          <Stack spacing="3xl" align="center" className="text-center">
            <div className="animate-fade-in">
              <Heading level={2}>
                <span className="text-text-primary">Client</span>
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Success Stories
                </span>
              </Heading>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <MouseHighlightText className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Hear from industry leaders who have transformed their businesses with our solutions.
              </MouseHighlightText>
            </div>
          </Stack>

          {/* Testimonial Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <Card
              variant="glass"
              padding="xl"
              className="backdrop-blur-sm min-h-[400px] sm:h-[500px] flex items-center border-surface-secondary px-12 sm:px-20 py-6 sm:py-8"
            >
              <Stack spacing="lg" align="center" className="w-full text-center h-full justify-center space-y-3 sm:space-y-4">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary opacity-50 flex-shrink-0" />

                {/* Star Rating */}
                <Inline spacing="xs" justify="center" className="flex-shrink-0">
                  {[...Array(currentTestimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </Inline>

                {/* Quote */}
                <div className="flex-1 flex items-center justify-center min-h-0">
                  <MouseHighlightText className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl sm:max-w-3xl mx-auto italic px-2 sm:px-4 overflow-hidden">
                    {`"${currentTestimonial.quote}"`}
                  </MouseHighlightText>
                </div>

                {/* Author Info */}
                <Inline spacing="sm" align="center" className="flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0">
                  <img
                    src={currentTestimonial.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-brand-primary flex-shrink-0"
                  />
                  <Stack spacing="xs" align="center" className="text-center sm:text-left sm:items-start min-w-0">
                    <Text size="sm" weight="bold" className="text-text-primary truncate text-xs sm:text-sm">
                      {currentTestimonial.name}
                    </Text>
                    <Text size="xs" variant="secondary" className="truncate text-xs sm:text-sm">
                      {currentTestimonial.title}
                    </Text>
                    <Text size="xs" weight="semibold" className="text-brand-primary truncate text-xs sm:text-sm">
                      {currentTestimonial.company}
                    </Text>
                    <Text size="xs" variant="tertiary" className="truncate">
                      {currentTestimonial.location}
                    </Text>
                  </Stack>
                </Inline>
              </Stack>
            </Card>

            {/* Navigation Buttons */}
            <IconButton
              icon={<ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />}
              variant="ghost"
              size="md"
              onClick={prevTestimonial}
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 text-text-tertiary hover:text-brand-primary transition-colors duration-300 bg-transparent hover:bg-surface-secondary/20 backdrop-blur-none border-none shadow-none p-2 sm:p-3"
            />

            <IconButton
              icon={<ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />}
              variant="ghost"
              size="md"
              onClick={nextTestimonial}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 text-text-tertiary hover:text-brand-primary transition-colors duration-300 bg-transparent hover:bg-surface-secondary/20 backdrop-blur-none border-none shadow-none p-2 sm:p-3"
            />

            {/* Dots Indicator */}
            <Inline spacing="sm" justify="center" className="mt-2xl">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`rounded-full transition-all duration-300 ${currentIndex === index
                      ? "bg-brand-primary w-2 h-2 scale-110"
                      : "bg-text-tertiary/40 hover:bg-text-tertiary/60 w-1 h-1"
                    }`}
                  style={{
                    minWidth: currentIndex === index ? '8px' : '4px',
                    minHeight: currentIndex === index ? '8px' : '4px'
                  }}
                />
              ))}
            </Inline>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}