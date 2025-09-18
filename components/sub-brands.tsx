"use client"

import { useState } from "react"
import { Users, BarChart3, Cog, Brain, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"
import { Container, Section, Stack, Grid, Inline } from "@/components/ui/layout"
import { Heading, Text, Card, IconWrapper, GradientBackground } from "@/components/ui/primitives"
import { Button, ButtonGroup } from "@/components/ui/enhanced-button"

const subBrands = [
  {
    id: "cx",
    name: "CX",
    fullName: "Simplx CX",
    tagline: "Customer Experience Revolution",
    description:
      "Transform customer interactions with AI-powered solutions that create memorable experiences and drive loyalty.",
    gradient: "from-blue-500 to-cyan-400",
    icon: Users,
    features: ["AI Chatbots", "Sentiment Analysis", "Personalization", "Omnichannel Support"],
  },
  {
    id: "data",
    name: "Data",
    fullName: "Simplx Data",
    tagline: "Intelligence from Information",
    description: "Turn raw data into actionable insights with advanced analytics and machine learning solutions.",
    gradient: "from-emerald-500 to-teal-400",
    icon: BarChart3,
    features: ["Data Analytics", "Predictive Models", "Real-time Insights", "Custom Dashboards"],
  },
  {
    id: "ops",
    name: "Ops",
    fullName: "Simplx Ops",
    tagline: "Operational Excellence",
    description: "Streamline operations with intelligent automation and process optimization solutions.",
    gradient: "from-purple-500 to-pink-400",
    icon: Cog,
    features: ["Process Automation", "Workflow Optimization", "Resource Management", "Performance Monitoring"],
  },
  {
    id: "ai",
    name: "AI",
    fullName: "Simplx AI",
    tagline: "Artificial Intelligence Core",
    description: "Custom AI solutions including natural language processing and computer vision applications.",
    gradient: "from-orange-500 to-red-400",
    icon: Brain,
    features: ["Custom AI Models", "NLP Solutions", "Computer Vision", "Machine Learning"],
  },
  {
    id: "security",
    name: "Security",
    fullName: "Simplx Security",
    tagline: "AI-Powered Protection",
    description: "Advanced cybersecurity solutions using AI to detect, prevent, and respond to threats.",
    gradient: "from-red-500 to-rose-400",
    icon: Shield,
    features: ["Threat Detection", "AI Security", "Risk Assessment", "Compliance Monitoring"],
  },
  {
    id: "automation",
    name: "Automation",
    fullName: "Simplx Automation",
    tagline: "Intelligent Process Automation",
    description: "End-to-end automation solutions that eliminate manual work and optimize workflows.",
    gradient: "from-yellow-500 to-orange-400",
    icon: Zap,
    features: ["RPA Solutions", "Smart Workflows", "Integration Hub", "Performance Analytics"],
  },
]

export function SubBrands() {
  const [activeTab, setActiveTab] = useState("cx")
  const [selectedTab, setSelectedTab] = useState("cx") // Immediate selection for button UI
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const activeBrand = subBrands.find((brand) => brand.id === activeTab) || subBrands[0]
  const currentIndex = subBrands.findIndex((brand) => brand.id === activeTab)

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab || isTransitioning) return

    setSelectedTab(newTab) // Set selected immediately for button UI
    setIsTransitioning(true)

    setTimeout(() => {
      setActiveTab(newTab)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 600)
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
    <Section
      id="sub-brands"
      spacing="xl"
      background="primary"
      className="relative overflow-hidden py-8 sm:py-12 md:py-16"
    >
      {/* Background */}
      <GradientBackground
        variant="radial"
        animate="pulse"
        className="absolute inset-0 opacity-10"
      />

      <Container className="relative z-10 px-4 sm:px-6">
        <Stack spacing="xl" className="space-y-2 md:space-y-8">
          {/* Header */}
          <Stack spacing="lg" align="center" className="text-center">
            <div className="animate-fade-in">
              <Heading level={2}>
                <span className="text-text-primary">Our</span>
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Ecosystem
                </span>
              </Heading>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <MouseHighlightText className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Specialized solutions for every aspect of your business transformation journey.
              </MouseHighlightText>
            </div>
          </Stack>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-md">
            {subBrands.map((brand) => (
              <Button
                key={brand.id}
                variant="ghost"
                size="lg"
                onClick={() => handleTabChange(brand.id)}
                disabled={isTransitioning}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
                className={`group relative overflow-hidden transition-all duration-500 ${hoveredBrand === brand.id && hoveredBrand !== selectedTab ? "scale-110" : ""
                  } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""} ${selectedTab === brand.id ? `text-white bg-gradient-to-r ${brand.gradient}` : ""}`}
              >
                {/* Gradient background for hovered states only (not selected) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${brand.gradient} opacity-0 transition-opacity duration-300 ${selectedTab !== brand.id && hoveredBrand === brand.id ? "opacity-20" : ""
                    }`}
                />

                <Inline spacing="sm" align="center" className="relative z-10">
                  <brand.icon className={`w-5 h-5 ${selectedTab === brand.id ? "text-white" : ""}`} />
                  <Text weight="semibold" className={selectedTab === brand.id ? "text-white" : ""}>{brand.name}</Text>
                </Inline>
              </Button>
            ))}
          </div>

          {/* Content Area */}
          <Card variant="glass" padding="xl" className="backdrop-blur-lg p-4 sm:p-6 md:p-8">
            <Grid cols={1} colsMd={2} gap="xl" className="items-center gap-y-4 md:gap-y-6">
              {/* Left Content */}
              <Stack spacing="md" className="space-y-3 sm:space-y-4">
                <Heading
                  level={3}
                  className={`transition-all duration-1000 ${isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
                    }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "200ms" }}
                >
                  {activeBrand.fullName}
                </Heading>

                <Text
                  size="xl"
                  weight="semibold"
                  className={`bg-gradient-to-r ${activeBrand.gradient} bg-clip-text text-transparent transition-all duration-1000 text-base sm:text-lg md:text-xl ${isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
                    }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "300ms" }}
                >
                  {activeBrand.tagline}
                </Text>

                <MouseHighlightText
                  className={`text-text-secondary leading-relaxed hoverable-text transition-all duration-1000 text-sm sm:text-base md:text-lg lg:text-xl ${isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
                    }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "400ms" }}
                >
                  {activeBrand.description}
                </MouseHighlightText>

                <Grid
                  cols={2}
                  gap="md"
                  className={`transition-all duration-1000 gap-y-2 sm:gap-y-4 ${isTransitioning ? "opacity-0 translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
                    }`}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "500ms" }}
                >
                  {activeBrand.features.map((feature, index) => (
                    <Inline
                      key={`${activeBrand.id}-feature-${index}`}
                      spacing="sm"
                      align="center"
                      className="group cursor-pointer transition-all duration-300"
                      style={{ transitionDelay: isTransitioning ? "0ms" : `${600 + index * 100}ms` }}
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeBrand.gradient} group-hover:scale-125 transition-all duration-300`}
                      />
                      <Text
                        variant="tertiary"
                        className="group-hover:text-text-primary transition-colors duration-300"
                      >
                        {feature}
                      </Text>
                    </Inline>
                  ))}
                </Grid>
              </Stack>

              {/* Right Visual */}
              <div className="relative">
                <div
                  className={`w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-3xl bg-gradient-to-br ${activeBrand.gradient} transition-all duration-1000 ${isTransitioning ? "opacity-0 scale-75 rotate-6" : "opacity-20 scale-100 rotate-0"
                    }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <activeBrand.icon
                    className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-white transition-all duration-1000 ${isTransitioning ? "opacity-0 scale-75 rotate-12" : "opacity-30 scale-100 rotate-0"
                      }`}
                    style={{
                      animation: isTransitioning ? "none" : "float 6s ease-in-out infinite",
                    }}
                  />
                </div>
                {/* Floating elements around the icon */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => {
                    // Create deterministic positions based on index
                    const positions = [
                      { left: 25, top: 30 },
                      { left: 70, top: 20 },
                      { left: 15, top: 60 },
                      { left: 80, top: 70 },
                      { left: 40, top: 15 },
                      { left: 85, top: 45 },
                      { left: 10, top: 80 },
                      { left: 60, top: 85 },
                    ]
                    const pos = positions[i] || { left: 50, top: 50 }

                    return (
                      <div
                        key={`${activeBrand.id}-particle-${i}`}
                        className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${activeBrand.gradient} opacity-60 transition-all duration-1000 ${isTransitioning ? "opacity-0 scale-50" : "opacity-60 scale-100"
                          }`}
                        style={{
                          left: `${pos.left}%`,
                          top: `${pos.top}%`,
                          transitionDelay: `${i * 100}ms`,
                          animation: isTransitioning
                            ? "none"
                            : `float ${3 + (i % 3)}s ease-in-out infinite ${(i * 0.3) % 2}s`,
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            </Grid>
          </Card>

          {/* Navigation */}
          <Inline spacing="lg" justify="center" align="center">
            <Button
              variant="ghost"
              size="lg"
              onClick={handlePrevious}
              disabled={isTransitioning}
              className={`group ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ChevronLeft className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
              <span>Previous</span>
            </Button>

            <Inline spacing="sm" align="center">
              {subBrands.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${currentIndex === index ? `bg-gradient-to-r ${activeBrand.gradient} scale-125` : "bg-text-tertiary/40 hover:bg-text-tertiary/60"
                    }`}
                />
              ))}
            </Inline>

            <Button
              variant="ghost"
              size="lg"
              onClick={handleNext}
              disabled={isTransitioning}
              className={`group ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-[2px] transition-transform" />
            </Button>
          </Inline>
        </Stack>
      </Container>
    </Section>
  )
}