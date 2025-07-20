"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingDown, DollarSign, Clock, Users, Target, AlertTriangle } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"

const challenges = [
  {
    icon: TrendingDown,
    title: "Stagnant Growth",
    description:
      "Business growth has plateaued and competitors are gaining ground. We help unlock new revenue streams through intelligent automation.",
  },
  {
    icon: DollarSign,
    title: "High Operational Costs",
    description:
      "Manual processes and inefficiencies drain resources. We streamline operations through smart automation solutions.",
  },
  {
    icon: Clock,
    title: "Slow Decision Making",
    description:
      "Critical decisions take too long, missing opportunities. Our AI provides real-time insights for faster, smarter choices.",
  },
  {
    icon: Users,
    title: "Customer Experience Gaps",
    description:
      "Customer satisfaction declining due to poor experiences. We create personalized, AI-powered customer journeys.",
  },
  {
    icon: Target,
    title: "Market Opportunities",
    description:
      "Missing market trends and opportunities. Our predictive analytics help you stay ahead of the competition.",
  },
  {
    icon: AlertTriangle,
    title: "Scaling Limitations",
    description: "Growth limited by manual processes. We build systems that scale automatically with your business.",
  },
]

export function BusinessChallenges() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="business-challenges" className="py-40 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
              <span className="text-white">Business Challenges</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                We Transform
              </span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MouseHighlightText className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Every business faces obstacles. We turn your biggest challenges into competitive advantages.
            </MouseHighlightText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm ${
                visibleCards.includes(index) ? "animate-slide-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-emerald-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <challenge.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {challenge.title}
              </h3>

              <MouseHighlightText className="text-slate-300 leading-relaxed">
                {challenge.description}
              </MouseHighlightText>

              <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
