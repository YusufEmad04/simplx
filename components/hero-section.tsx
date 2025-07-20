"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import type * as THREE from "three"
import { MouseHighlightText } from "./mouse-highlight-text"

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
            opacity={0.5}
          />
        </Sphere>
      </Float>

      {/* Floating rings */}
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-2, 3, 0]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[1, 0.1, 16, 100]} />
          <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[3, -2, 2]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.8, 0.08, 16, 100]} />
          <meshStandardMaterial color="#2AF598" transparent opacity={0.4} />
        </mesh>
      </Float>
    </group>
  )
}

function ModernLogo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="cursor-pointer mb-16 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1
        className={`text-7xl md:text-8xl lg:text-9xl font-black tracking-tight transition-all duration-500 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        style={{ fontFamily: "'Space Grotesk', 'Inter', monospace" }}
      >
        <span className={`text-white transition-all duration-300 ${isHovered ? "text-blue-100" : ""}`}>Simplx</span>
        <span className={`text-blue-500 transition-all duration-300 ${isHovered ? "text-emerald-400" : ""}`}>
          .tech
        </span>
      </h1>

      {/* Animated underline */}
      <div
        className={`h-1 bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-500 transition-all duration-700 mx-auto rounded-full ${
          isHovered ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      />

      {/* Floating particles around logo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400 rounded-full transition-all duration-500 ${
              isHovered ? "opacity-100 animate-float" : "opacity-0"
            }`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <MouseHighlightText
        className="text-slate-400 text-xl mt-6 font-medium animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        Next-Generation AI Solutions
      </MouseHighlightText>
    </div>
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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Dynamic background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/20 transition-all duration-1000"
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

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Modern Logo with 3D surroundings */}
        <ModernLogo />

        {/* Clear messaging */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <MouseHighlightText className="text-3xl md:text-5xl font-bold mb-8 leading-relaxed text-slate-300 max-w-5xl mx-auto">
            We transform businesses with intelligent AI solutions that drive real growth and efficiency
          </MouseHighlightText>
        </div>

        {/* Enhanced CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 hover:from-blue-700 hover:via-emerald-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin" />
            Start Your Transformation
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-6 text-xl font-semibold rounded-2xl transition-all duration-500 hover:scale-105 bg-transparent backdrop-blur-sm"
          >
            <Play className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform" />
            Explore Solutions
          </Button>
        </div>

        {/* Interactive stats that link to actual sections */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-6xl mx-auto animate-fade-in mb-32"
          style={{ animationDelay: "1.1s" }}
        >
          {[
            {
              label: "Trusted Partners",
              icon: "🌍",
              section: "trusted-by-section",
              description: "See our partners",
            },
            {
              label: "Business Solutions",
              icon: "🏢",
              section: "business-challenges",
              description: "Explore challenges we solve",
            },
            {
              label: "Success Stories",
              icon: "⭐",
              section: "testimonials",
              description: "Read client testimonials",
            },
            {
              label: "Sub-Brands",
              icon: "🚀",
              section: "sub-brands",
              description: "Discover our ecosystem",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer py-8 px-4 rounded-2xl hover:bg-slate-800/30 transition-all duration-300 hover:scale-105"
              onClick={() => {
                const section = document.getElementById(stat.section)
                section?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div className="text-slate-400 text-lg group-hover:text-slate-300 transition-colors font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-slate-500 text-sm group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                {stat.description}
              </div>

              {/* Animated underline */}
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center mt-3" />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced scroll indicator with modern design and proper centering */}
      <div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group flex flex-col items-center"
        onClick={() => {
          const nextSection = document.querySelector("#trusted-by-section")
          nextSection?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        {/* Modern circular design with gradient border */}
        <div className="relative mb-3">
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>

          {/* Main button */}
          <div className="relative w-16 h-16 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 group-hover:border-blue-400/50 transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
            {/* Inner gradient background */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 opacity-80"></div>

            {/* Icon */}
            <ChevronDown className="relative z-10 w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 group-hover:animate-pulse" />

            {/* Animated dots around the circle */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500"
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

        {/* Text label - properly centered */}
        <p className="text-slate-400 text-sm group-hover:text-blue-400 transition-colors duration-300 font-medium text-center">
          Discover More
        </p>
      </div>
    </section>
  )
}
