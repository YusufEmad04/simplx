"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Globe, Award, Zap, Shield } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"
import { Container, Section, Stack, Grid } from "@/components/ui/layout"
import { Heading, Text, Card, IconWrapper, GradientBackground } from "@/components/ui/primitives"

const results = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Significant revenue increases through intelligent automation and process optimization",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Enhanced customer experiences leading to improved satisfaction and retention",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expanded market presence across multiple continents and industries",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning solutions recognized by industry leaders and organizations",
    gradient: "from-orange-500 to-red-400",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    description: "Streamlined operations with reduced costs and improved productivity",
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enhanced security measures and full compliance with industry standards",
    gradient: "from-red-500 to-rose-400",
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
    <Section id="results" spacing="3xl" background="primary" className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Animated background */}
      <GradientBackground
        variant="linear"
        animate="slow"
        className="absolute inset-0 opacity-5"
      />

      <Container className="relative z-10 px-4 sm:px-6">
        <Stack spacing="6xl">
          <Stack spacing="3xl" align="center" className="text-center">
            <div className="animate-fade-in">
              <Heading level={2}>
                <span className="text-text-primary">Proven</span>
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Results
                </span>
              </Heading>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <MouseHighlightText className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Our solutions deliver measurable impact across all aspects of your business.
              </MouseHighlightText>
            </div>
          </Stack>

          <Grid cols={1} colsMd={2} gap="xl" className="max-w-6xl mx-auto lg:grid-cols-3">
            {results.map((result, index) => (
              <Card
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                variant="glass"
                padding="lg"
                hover="lift"
                className={`group relative overflow-hidden border-border-primary hover:border-border-secondary transition-all duration-700 backdrop-blur-sm ${visibleItems.includes(index) ? "animate-slide-up opacity-100" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${result.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <Stack spacing="lg" className="relative z-10">
                  <IconWrapper
                    size="lg"
                    className={`bg-gradient-to-br ${result.gradient} text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <result.icon className="h-8 w-8" />
                  </IconWrapper>

                  <Heading
                    level={5}
                    className="text-text-primary group-hover:animate-title-wave transition-all duration-300"
                  >
                    {result.title}
                  </Heading>

                  <MouseHighlightText className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
                    {result.description}
                  </MouseHighlightText>

                  {/* Animated border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${result.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left w-full`}
                  />
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}