"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingDown, DollarSign, Clock, Users, Target, AlertTriangle } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"
import { Container, Section, Grid, Stack } from "@/components/ui/layout"
import { Heading, Text } from "@/components/ui/primitives"
import { Card, IconWrapper } from "@/components/ui/primitives"

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
  const [isMounted, setIsMounted] = useState(false)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

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
  }, [isMounted])

  return (
    <Section
      id="business-challenges"
      spacing="3xl"
      background="primary"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <Container className="relative z-10 px-4 sm:px-6">
        <Stack spacing="6xl">
          <Stack spacing="3xl" align="center" className="text-center">
            <div className="animate-fade-in">
              <Heading level={2}>
                <span className="text-text-primary">Business Challenges</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  We Transform
                </span>
              </Heading>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <MouseHighlightText className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Every business faces obstacles. We turn your biggest challenges into competitive advantages.
              </MouseHighlightText>
            </div>
          </Stack>

          <Grid cols={1} colsMd={3} gap="xl" className="max-w-6xl mx-auto gap-y-8 md:gap-y-12">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                data-index={index}
                variant="glass"
                padding="lg"
                hover="lift"
                className={`group border-border-primary hover:border-brand-primary/50 transition-all duration-700 backdrop-blur-sm ${visibleCards.includes(index) ? "animate-slide-up opacity-100" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Stack spacing="lg">
                  <IconWrapper
                    size="lg"
                    className="bg-gradient-to-br from-brand-primary via-brand-accent to-purple-500 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  >
                    <challenge.icon className="h-8 w-8" />
                  </IconWrapper>

                  <Heading
                    level={5}
                    className="text-text-primary group-hover:text-brand-primary transition-colors"
                  >
                    {challenge.title}
                  </Heading>

                  <MouseHighlightText className="text-text-secondary leading-relaxed">
                    {challenge.description}
                  </MouseHighlightText>

                  <div className="h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}