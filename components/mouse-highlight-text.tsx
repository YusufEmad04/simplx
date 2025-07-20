"use client"

import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"

interface MouseHighlightTextProps {
  children: string
  className?: string
  style?: React.CSSProperties
}

export function MouseHighlightText({ children, className = "", style }: MouseHighlightTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  useEffect(() => {
    const element = textRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove, { passive: true })
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  return (
    <p ref={textRef} className={`relative cursor-default ${className}`} style={style}>
      {children}
      
        <div
          className="absolute pointer-events-none rounded-full transition-opacity duration-950"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: 90,
            height: 90,
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%)",
            mixBlendMode: "screen",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            opacity: isHovering ? 1 : 0,
          }}
        />
    </p>
  )
}
