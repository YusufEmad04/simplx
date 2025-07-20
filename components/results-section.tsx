"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Globe, Award, Zap, Shield } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"

const results = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Significant revenue increases through intelligent automation and process optimization",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Enhanced customer experiences leading to improved satisfaction and retention",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expanded market presence across multiple continents and industries",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning solutions recognized by industry leaders and organizations",
    color: "from-orange-500 to-red-400",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    description: "Streamlined operations with reduced costs and improved productivity",
    color: "from-yellow-500 to-orange-400",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enhanced security measures and full compliance with industry standards",
    color: "from-red-500 to-rose-400",
  },
]

export function ResultsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-40 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 animate-gradient-x"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
              <span className="text-white">Proven</span>
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Results
              </span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MouseHighlightText className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our solutions deliver measurable impact across all aspects of your business.
            </MouseHighlightText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`group relative overflow-hidden bg-slate-900/50 rounded-2xl p-8 border border-slate-800 hover:border-slate-600 transition-all duration-700 backdrop-blur-sm ${
                visibleItems.includes(index) ? "animate-slide-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${result.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <result.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:animate-title-wave transition-all duration-300">
                  {result.title}
                </h3>

                <MouseHighlightText className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {result.description}
                </MouseHighlightText>

                {/* Animated border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${result.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
