"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"

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

  return (
    <section
      id="testimonials"
      className="py-40 px-6 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
              <span className="text-white">Client</span>
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Success Stories
              </span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MouseHighlightText className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Hear from industry leaders who have transformed their businesses with our solutions.
            </MouseHighlightText>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-slate-900/50 rounded-3xl p-12 border border-slate-800 backdrop-blur-sm min-h-[400px] flex items-center">
            <div className="w-full">
              <div className="text-center mb-8">
                <Quote className="w-16 h-16 text-blue-400 opacity-50 mx-auto mb-6" />

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <MouseHighlightText className="text-2xl text-slate-300 leading-relaxed mb-8 max-w-4xl mx-auto italic">
                  "{testimonials[currentIndex].quote}"
                </MouseHighlightText>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div className="text-left">
                    <div className="font-bold text-white text-xl">{testimonials[currentIndex].name}</div>
                    <div className="text-slate-400">{testimonials[currentIndex].title}</div>
                    <div className="text-blue-400 font-semibold">{testimonials[currentIndex].company}</div>
                    <div className="text-slate-500 text-sm">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
