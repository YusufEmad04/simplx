"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"

const steps = [
  {
    icon: Search,
    title: "Business Assessment",
    description:
      "We analyze your current operations, identify profit leaks, and discover hidden opportunities for growth and automation.",
    details: ["Revenue analysis", "Cost assessment", "Growth opportunities", "ROI projections"],
    result: "Clear roadmap to 400% ROI",
  },
  {
    icon: Lightbulb,
    title: "Custom Strategy",
    description:
      "Our experts create a tailored growth strategy designed specifically for your industry, challenges, and business goals.",
    details: ["Growth strategy", "Solution design", "Success metrics", "Timeline planning"],
    result: "Guaranteed success plan",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description:
      "We build and deploy your custom solutions with minimal disruption to your operations, ensuring smooth integration.",
    details: ["Solution deployment", "Team training", "Process optimization", "Quality assurance"],
    result: "Live in 30-60 days",
  },
  {
    icon: TrendingUp,
    title: "Results & Growth",
    description:
      "Watch your revenue grow as we continuously optimize performance and scale your success across your entire organization.",
    details: ["Performance monitoring", "Continuous optimization", "Scale expansion", "Success reporting"],
    result: "Sustained 200-400% growth",
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const stepWidth = container.scrollWidth / steps.length
      const currentStep = Math.floor(scrollLeft / stepWidth)
      setActiveStep(Math.min(currentStep, steps.length - 1))
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">How We Deliver</span>
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                Results
              </span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MouseHighlightText className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Our proven 4-step process has helped 50+ CEOs achieve 200-400% revenue growth in just 90 days.
            </MouseHighlightText>
            <p className="text-slate-400 animate-bounce">Scroll horizontally to explore each step →</p>
          </div>
        </div>

        {/* Horizontal scroll container with enhanced animations */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-none w-80 md:w-96 p-8 rounded-2xl border transition-all duration-700 snap-center animate-slide-up ${
                activeStep === index
                  ? "bg-gradient-to-br from-blue-900/50 to-emerald-900/30 border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105"
                  : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:scale-102"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    activeStep === index
                      ? "bg-gradient-to-br from-blue-500 to-emerald-400 scale-110 animate-pulse"
                      : "bg-slate-800 group-hover:scale-105"
                  }`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="mb-2 flex items-center gap-3">
                <span
                  className={`text-sm font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? "bg-gradient-to-r from-blue-500 to-emerald-400 text-white animate-pulse"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  Step {index + 1}
                </span>
              </div>

              <h3
                className={`text-2xl font-bold mb-4 transition-colors ${
                  activeStep === index ? "text-white" : "text-slate-300"
                }`}
              >
                {step.title}
              </h3>

              <MouseHighlightText className="text-slate-300 mb-6 leading-relaxed">
                {step.description}
              </MouseHighlightText>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-3">What We Do:</h4>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3 text-sm text-slate-400">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeStep === index ? "bg-emerald-400 animate-pulse" : "bg-slate-600"
                        }`}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result highlight */}
              <div
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  activeStep === index
                    ? "bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border-emerald-400/50"
                    : "bg-slate-800/50 border-slate-700"
                }`}
              >
                <div className="text-emerald-400 font-semibold text-sm mb-1">Expected Outcome:</div>
                <div className="text-white font-bold">{step.result}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced progress indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer hover:scale-125 ${
                activeStep === index
                  ? "w-8 bg-gradient-to-r from-blue-500 to-emerald-400 animate-pulse"
                  : "w-2 bg-slate-700 hover:bg-slate-600"
              }`}
              onClick={() => {
                const container = containerRef.current
                if (container) {
                  const stepWidth = container.scrollWidth / steps.length
                  container.scrollTo({ left: stepWidth * index, behavior: "smooth" })
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
