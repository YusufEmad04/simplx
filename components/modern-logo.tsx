"use client"

import { useState } from "react"
import { MouseHighlightText } from "./mouse-highlight-text"

export function ModernLogo() {
    const [isHovered, setIsHovered] = useState(false)

    // Create deterministic positions to avoid hydration mismatch
    const particlePositions = Array.from({ length: 12 }, (_, i) => {
        const positions = [
            { left: 25, top: 30 },
            { left: 70, top: 25 },
            { left: 15, top: 60 },
            { left: 85, top: 65 },
            { left: 40, top: 20 },
            { left: 60, top: 70 },
            { left: 10, top: 45 },
            { left: 90, top: 50 },
            { left: 50, top: 15 },
            { left: 30, top: 75 },
            { left: 75, top: 40 },
            { left: 45, top: 85 },
        ]
        return {
            left: positions[i]?.left || 50,
            top: positions[i]?.top || 50,
            delay: (i * 0.3) % 2,
            duration: 2 + (i % 3),
        }
    })

    return (
        <div
            className="cursor-pointer mb-8 sm:mb-12 md:mb-16 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1
                className={`text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight transition-all duration-500 ${isHovered ? "scale-105" : "scale-100"
                    }`}
                style={{ fontFamily: "var(--font-primary)" }}
            >
                <span className={`text-text-primary transition-all duration-300 ${isHovered ? "text-blue-100" : ""
                    }`}>
                    Simplx
                </span>
                <span className={`text-brand-primary transition-all duration-300 ${isHovered ? "text-brand-accent" : ""
                    }`}>
                    .tech
                </span>
            </h1>

            {/* Animated underline - positioned to extend beyond logo width */}
            <div className="relative flex justify-center">
                <div
                    className={`h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-purple-500 transition-all duration-700 rounded-full ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        width: isHovered ? "800px" : "0px", // Wider fixed width to extend beyond logo
                        maxWidth: "95vw", // Responsive fallback
                    }}
                />
            </div>

            {/* Floating particles around logo */}
            <div className="absolute inset-0 pointer-events-none">
                {particlePositions.map((particle, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 bg-brand-primary rounded-full transition-all duration-500 ${isHovered ? "opacity-100 animate-float" : "opacity-0"
                            }`}
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                            boxShadow: "0 0 8px hsl(var(--brand-primary) / 0.5)",
                        }}
                    />
                ))}
            </div>

            {/* Move text below the logo with more spacing */}
            <div className="mt-4 sm:mt-6 md:mt-8">
                <MouseHighlightText
                    className="text-text-secondary text-base sm:text-lg md:text-xl font-medium animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                >
                    Next-Generation AI Solutions
                </MouseHighlightText>
            </div>
        </div>
    )
}