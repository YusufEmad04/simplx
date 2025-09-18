"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { CTAButton, IconButton, ButtonGroup } from "@/components/ui/enhanced-button"
import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import type * as THREE from "three"
import { MouseHighlightText } from "./mouse-highlight-text"
import { ModernLogo } from "./modern-logo"
import { Container, Section, Stack, Inline, Grid } from "@/components/ui/layout"
import { Heading, Text, BrandLogo, Card, GradientBackground } from "@/components/ui/primitives"

function FloatingElements() {
  const group = useRef<THREE.Group>(null)
  const sphere1 = useRef<THREE.Mesh>(null)
  const sphere2 = useRef<THREE.Mesh>(null)
  const sphere3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (group.current) {
      group.current.rotation.y = time * 0.1
    }

    if (sphere1.current) {
      sphere1.current.position.x = Math.sin(time * 0.5) * 3
      sphere1.current.position.y = Math.cos(time * 0.3) * 2
      sphere1.current.rotation.x = time * 0.2
    }

    if (sphere2.current) {
      sphere2.current.position.x = Math.cos(time * 0.4) * 4
      sphere2.current.position.z = Math.sin(time * 0.6) * 3
      sphere2.current.rotation.z = time * 0.3
    }

    if (sphere3.current) {
      sphere3.current.position.y = Math.sin(time * 0.8) * 2.5
      sphere3.current.position.z = Math.cos(time * 0.5) * 2
      sphere3.current.rotation.y = time * 0.4
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphere1} args={[0.8, 64, 64]} position={[4, 2, -2]}>
          <MeshDistortMaterial
            color="#3B82F6"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0.1}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere ref={sphere2} args={[0.6, 64, 64]} position={[-4, -1, 1]}>
          <MeshDistortMaterial
            color="#2AF598"
            attach="material"
            distort={0.7}
            speed={1.5}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
        <Sphere ref={sphere3} args={[0.4, 64, 64]} position={[2, -3, -1]}>
          <MeshDistortMaterial
            color="#E11D48"
            attach="material"
            distort={0.9}
            speed={3}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
    </group>
  )
}

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background gradient */}
      <GradientBackground
        variant="mesh"
        animate="slow"
        className="absolute inset-0 transition-all duration-1000"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#2AF598" />
          <pointLight position={[0, 10, -10]} intensity={0.6} color="#E11D48" />
          <FloatingElements />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      <Container className="relative z-10 text-center px-4 sm:px-6">
        <Stack spacing="6xl" align="center">
          {/* Modern Logo with 3D surroundings */}
          <ModernLogo />

          {/* Clear messaging */}
          <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <MouseHighlightText className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-text-tertiary max-w-5xl mx-auto px-4 sm:px-0">
              We transform businesses with intelligent AI solutions that drive real growth and efficiency
            </MouseHighlightText>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <ButtonGroup orientation="horizontal" className="flex-col sm:flex-row gap-4">
              <CTAButton
                size="xl"
                glow={true}
                className="group w-full sm:w-auto"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CTAButton>

              <CTAButton
                variant="outline"
                size="xl"
                className="group w-full sm:w-auto"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </CTAButton>
            </ButtonGroup>
          </div>

          {/* Quick navigation cards */}
          <div className="animate-fade-in w-full relative z-10" style={{ animationDelay: "1.1s" }}>
            <Grid cols={2} colsMd={4} gap="sm" className="max-w-4xl mx-auto md:gap-md">
              {[
                {
                  label: "Business Challenges",
                  icon: "💼",
                  section: "business-challenges",
                  description: "Problems we solve",
                },
                {
                  label: "Our Results",
                  icon: "📈",
                  section: "results",
                  description: "Proven success metrics",
                },
                {
                  label: "Client Success",
                  icon: "⭐",
                  section: "testimonials",
                  description: "What clients say",
                },
                {
                  label: "Sub-Brands",
                  icon: "🚀",
                  section: "sub-brands",
                  description: "Discover our ecosystem",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  variant="glass"
                  padding="sm"
                  hover="lift"
                  className="group cursor-pointer transition-all duration-300 md:p-6"
                  onClick={() => {
                    const section = document.getElementById(stat.section)
                    section?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <div className="flex flex-col items-center space-y-1 md:space-y-3">
                    <div className="text-2xl md:text-4xl group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                      {stat.icon}
                    </div>
                    <Text
                      size="sm"
                      variant="secondary"
                      weight="semibold"
                      className="group-hover:text-text-primary transition-colors text-center leading-tight md:text-lg"
                    >
                      {stat.label}
                    </Text>
                    <Text
                      size="xs"
                      variant="tertiary"
                      className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 group-hover:text-brand-primary text-center leading-tight hidden md:block md:text-sm"
                    >
                      {stat.description}
                    </Text>

                    {/* Animated underline */}
                    <div className="h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center w-full" />
                  </div>
                </Card>
              ))}
            </Grid>
          </div>

          {/* Enhanced scroll indicator - moved below navigation cards */}
          <div
            className="animate-fade-in mt-xl sm:mt-2xl flex justify-center"
            style={{ animationDelay: "1.3s" }}
          >
            <div
              className="cursor-pointer group flex flex-col items-center relative z-10"
              onClick={() => {
                const nextSection = document.querySelector("#trusted-by-section")
                nextSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {/* Modern circular design with gradient border */}
              <div className="relative mb-md">
                {/* Outer glow ring */}
                <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm" />

                {/* Main button */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface-secondary/80 backdrop-blur-md border border-border-primary group-hover:border-brand-primary/50 transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
                  {/* Inner gradient background */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-surface-tertiary to-surface-secondary opacity-80" />

                  {/* Icon */}
                  <ChevronDown className="relative z-10 w-4 h-4 sm:w-6 sm:h-6 text-text-secondary group-hover:text-brand-primary transition-colors duration-300 group-hover:animate-pulse" />

                  {/* Animated dots around the circle */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500"
                        style={{
                          top: `${50 + 35 * Math.cos((i * Math.PI * 2) / 8 - Math.PI / 2)}%`,
                          left: `${50 + 35 * Math.sin((i * Math.PI * 2) / 8 - Math.PI / 2)}%`,
                          transform: "translate(-50%, -50%)",
                          transitionDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text label */}
              <Text
                size="sm"
                variant="secondary"
                weight="medium"
                className="group-hover:text-brand-primary transition-colors duration-300"
              >
                Discover More
              </Text>
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}