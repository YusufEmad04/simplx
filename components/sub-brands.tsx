"use client"

import { useState } from "react"
import { Users, BarChart3, Cog, Brain, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"

const subBrands = [
  {
    id: "cx",
    name: "CX",
    fullName: "Simplx CX",
    tagline: "Customer Experience Revolution",
    description:
      "Transform customer interactions with AI-powered solutions that create memorable experiences and drive loyalty.",
    color: "from-blue-500 to-cyan-400",
    icon: Users,
    features: ["AI Chatbots", "Sentiment Analysis", "Personalization", "Omnichannel Support"],
  },
  {
    id: "data",
    name: "Data",
    fullName: "Simplx Data",
    tagline: "Intelligence from Information",
    description: "Turn raw data into actionable insights with advanced analytics and machine learning solutions.",
    color: "from-emerald-500 to-teal-400",
    icon: BarChart3,
    features: ["Data Analytics", "Predictive Models", "Real-time Insights", "Custom Dashboards"],
  },
  {
    id: "ops",
    name: "Ops",
    fullName: "Simplx Ops",
    tagline: "Operational Excellence",
    description: "Streamline operations with intelligent automation and process optimization solutions.",
    color: "from-purple-500 to-pink-400",
    icon: Cog,
    features: ["Process Automation", "Workflow Optimization", "Resource Management", "Performance Monitoring"],
  },
  {
    id: "ai",
    name: "AI",
    fullName: "Simplx AI",
    tagline: "Artificial Intelligence Core",
    description: "Custom AI solutions including natural language processing and computer vision applications.",
    color: "from-orange-500 to-red-400",
    icon: Brain,
    features: ["Custom AI Models", "NLP Solutions", "Computer Vision", "Machine Learning"],
  },
  {
    id: "security",
    name: "Security",
    fullName: "Simplx Security",
    tagline: "AI-Powered Protection",
    description: "Advanced cybersecurity solutions using AI to detect, prevent, and respond to threats.",
    color: "from-red-500 to-rose-400",
    icon: Shield,
    features: ["Threat Detection", "AI Security", "Risk Assessment", "Compliance Monitoring"],
  },
  {
    id: "automation",
    name: "Automation",
    fullName: "Simplx Automation",
    tagline: "Intelligent Process Automation",
    description: "End-to-end automation solutions that eliminate manual work and optimize workflows.",
    color: "from-yellow-500 to-orange-400",
    icon: Zap,
    features: ["RPA Solutions", "Smart Workflows", "Integration Hub", "Performance Analytics"],
  },
]

export function SubBrands() {
  const [activeTab, setActiveTab] = useState("cx")
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const activeBrand = subBrands.find((brand) => brand.id === activeTab) || subBrands[0]
  const currentIndex = subBrands.findIndex((brand) => brand.id === activeTab)

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab || isTransitioning) return

    setIsTransitioning(true)

    // Longer transition with more visible stages
    setTimeout(() => {
      setActiveTab(newTab)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300) // Longer delay for content to settle
    }, 600) // Longer fade out duration
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % subBrands.length
    handleTabChange(subBrands[nextIndex].id)
  }

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + subBrands.length) % subBrands.length
    handleTabChange(subBrands[prevIndex].id)
  }

  return (
    <section
      id="sub-brands"
      className="py-40 px-6 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                background: `linear-gradient(45deg, ${["#3B82F6", "#2AF598", "#E11D48", "#F59E0B", "#8B5CF6", "#06B6D4"][i]})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${4 + Math.random() * 2}s ease-in-out infinite ${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
              <span className="text-white">Simplx</span>
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Ecosystem
              </span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MouseHighlightText className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed hoverable-text">
              Specialized solutions for every aspect of your business transformation journey.
            </MouseHighlightText>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {subBrands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => handleTabChange(brand.id)}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
              disabled={isTransitioning}
              className={`group px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform ${
                activeTab === brand.id
                  ? `bg-gradient-to-r ${brand.color} text-white shadow-2xl scale-105`
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:scale-105"
              } ${hoveredBrand === brand.id && activeTab !== brand.id ? "shadow-lg" : ""} ${
                isTransitioning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <brand.icon
                  className={`w-6 h-6 transition-transform duration-500 ${activeTab === brand.id ? "" : "group-hover:scale-110"}`}
                />
                <span className="text-lg">Simplx {brand.name}</span>
              </div>
            </button>
          ))}
        </div>


        {/* Active Brand Content with enhanced slower transitions */}
        <div className="perspective-1000">
          <div className="bg-slate-900/50 rounded-3xl p-12 border border-slate-800 backdrop-blur-sm transform transition-all duration-700 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            {/* Transition overlay for smoother color changes */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeBrand.color} opacity-0 transition-opacity duration-1000 ${
                isTransitioning ? "opacity-5" : "opacity-0"
              }`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r ${activeBrand.color} mb-8 animate-float transition-all duration-1000 ${
                    isTransitioning ? "opacity-0 scale-75 rotate-12" : "opacity-100 scale-100 rotate-0"
                  }`}
                >
                  <activeBrand.icon className="w-12 h-12 text-white transition-all duration-700" />
                </div>

                <h3
                  className={`text-4xl font-bold text-white mb-6 transition-all duration-1000 ${
                    isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
                  }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "200ms" }}
                >
                  {activeBrand.fullName}
                </h3>

                <p
                  className={`text-xl font-semibold mb-8 bg-gradient-to-r ${activeBrand.color} bg-clip-text text-transparent transition-all duration-1000 ${
                    isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
                  }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "300ms" }}
                >
                  {activeBrand.tagline}
                </p>

                <MouseHighlightText
                  className={`text-slate-300 text-xl leading-relaxed mb-10 hoverable-text transition-all duration-1000 ${
                    isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
                  }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "400ms" }}
                >
                  {activeBrand.description}
                </MouseHighlightText>

                <div
                  className={`grid grid-cols-2 gap-6 transition-all duration-1000 ${
                    isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
                  }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "500ms" }}
                >
                  {activeBrand.features.map((feature, index) => (
                    <div
                      key={`${activeBrand.id}-feature-${index}`}
                      className="flex items-center gap-3 group cursor-pointer transition-all duration-300"
                      style={{ transitionDelay: isTransitioning ? "0ms" : `${600 + index * 100}ms` }}
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeBrand.color} group-hover:scale-125 transition-all duration-300`}
                      />
                      <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div
                  className={`w-full h-96 rounded-3xl bg-gradient-to-br ${activeBrand.color} transition-all duration-1000 ${
                    isTransitioning ? "opacity-0 scale-75 rotate-6" : "opacity-20 scale-100 rotate-0"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <activeBrand.icon
                    className={`w-48 h-48 text-white transition-all duration-1000 ${
                      isTransitioning ? "opacity-0 scale-75 rotate-12" : "opacity-30 scale-100 rotate-0"
                    }`}
                    style={{
                      animation: isTransitioning ? "none" : "float 6s ease-in-out infinite",
                    }}
                  />
                </div>
                {/* Floating elements around the icon */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`${activeBrand.id}-particle-${i}`}
                      className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${activeBrand.color} opacity-60 transition-all duration-1000 ${
                        isTransitioning ? "opacity-0 scale-50" : "opacity-60 scale-100"
                      }`}
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        transitionDelay: `${i * 100}ms`,
                        animation: isTransitioning
                          ? "none"
                          : `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-16">
          <button
            onClick={handlePrevious}
            disabled={isTransitioning}
            className={`group flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-105 ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
            <span className="font-medium">Previous</span>
          </button>

          <div className="flex items-center gap-2 px-4">
            {subBrands.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  currentIndex === index ? `bg-gradient-to-r ${activeBrand.color} scale-125` : "bg-slate-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className={`group flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-105 ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="font-medium">Next</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-[2px] transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
