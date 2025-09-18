import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React, { forwardRef, type HTMLAttributes } from "react"

// Typography Components
const headingVariants = cva(
    "font-primary font-bold text-text-primary tracking-tight",
    {
        variants: {
            level: {
                1: "text-6xl lg:text-7xl",
                2: "text-5xl lg:text-6xl",
                3: "text-4xl lg:text-5xl",
                4: "text-3xl lg:text-4xl",
                5: "text-2xl lg:text-3xl",
                6: "text-xl lg:text-2xl",
            },
            gradient: {
                none: "",
                primary: "bg-gradient-to-r from-text-primary to-brand-primary bg-clip-text text-transparent",
                accent: "bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent",
                glow: "bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent",
            },
        },
        defaultVariants: {
            level: 1,
            gradient: "none",
        },
    }
)

export interface HeadingProps
    extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level = 1, gradient, ...props }, ref) => {
        switch (level) {
            case 1:
                return <h1 ref={ref} className={cn(headingVariants({ level, gradient }), className)} {...props} />
            case 2:
                return <h2 ref={ref} className={cn(headingVariants({ level, gradient }), className)} {...props} />
            case 3:
                return <h3 ref={ref} className={cn(headingVariants({ level, gradient }), className)} {...props} />
            case 4:
                return <h4 ref={ref} className={cn(headingVariants({ level, gradient }), className)} {...props} />
            case 5:
                return <h5 ref={ref} className={cn(headingVariants({ level, gradient }), className)} {...props} />
            case 6:
                return <h6 ref={ref} className={cn(headingVariants({ level, gradient }), className)} {...props} />
            default:
                return <h1 ref={ref} className={cn(headingVariants({ level, gradient }), className)} {...props} />
        }
    }
)
Heading.displayName = "Heading"

// Text Component
const textVariants = cva(
    "font-secondary",
    {
        variants: {
            size: {
                xs: "text-xs",
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl",
                "2xl": "text-2xl",
            },
            weight: {
                normal: "font-normal",
                medium: "font-medium",
                semibold: "font-semibold",
                bold: "font-bold",
            },
            variant: {
                primary: "text-text-primary",
                secondary: "text-text-secondary",
                tertiary: "text-text-tertiary",
                brand: "text-brand-primary",
                accent: "text-brand-accent",
                muted: "text-muted-foreground",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
                justify: "text-justify",
            },
        },
        defaultVariants: {
            size: "base",
            weight: "normal",
            variant: "secondary",
            align: "left",
        },
    }
)

export interface TextProps
    extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, size, weight, variant, align, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn(textVariants({ size, weight, variant, align }), className)}
                {...props}
            />
        )
    }
)
Text.displayName = "Text"

// Lead Text Component (Large body text)
export interface LeadTextProps extends HTMLAttributes<HTMLParagraphElement> { }

export const LeadText = forwardRef<HTMLParagraphElement, LeadTextProps>(
    ({ className, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn("text-xl text-text-secondary leading-relaxed", className)}
                {...props}
            />
        )
    }
)
LeadText.displayName = "LeadText"

// Caption Component (Small text)
export interface CaptionProps extends HTMLAttributes<HTMLParagraphElement> { }

export const Caption = forwardRef<HTMLParagraphElement, CaptionProps>(
    ({ className, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={cn("text-sm text-text-tertiary", className)}
                {...props}
            />
        )
    }
)
Caption.displayName = "Caption"

// Brand Logo Component
export interface BrandLogoProps extends HTMLAttributes<HTMLHeadingElement> {
    size?: "sm" | "md" | "lg" | "xl"
}

const brandLogoSizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl",
    xl: "text-6xl",
}

export const BrandLogo = forwardRef<HTMLHeadingElement, BrandLogoProps>(
    ({ className, size = "md", ...props }, ref) => {
        return (
            <h1
                ref={ref}
                className={cn(
                    "font-primary font-bold",
                    brandLogoSizes[size],
                    className
                )}
                {...props}
            >
                <span className="text-text-primary">Simplx</span>
                <span className="text-brand-primary">.tech</span>
            </h1>
        )
    }
)
BrandLogo.displayName = "BrandLogo"

// Card Component
const cardVariants = cva(
    "rounded-xl border bg-surface-elevated backdrop-blur-sm transition-all duration-300",
    {
        variants: {
            variant: {
                default: "border-border-primary shadow-md",
                elevated: "border-border-secondary shadow-lg",
                outlined: "border-border-primary bg-transparent",
                glass: "border-border-subtle bg-surface-primary/50 backdrop-blur-lg",
            },
            padding: {
                none: "",
                sm: "p-4",
                md: "p-6",
                lg: "p-8",
                xl: "p-12",
            },
            hover: {
                none: "",
                lift: "hover:translate-y-[-4px] hover:shadow-xl",
                glow: "hover:shadow-glow",
                scale: "hover:scale-[1.02]",
            },
        },
        defaultVariants: {
            variant: "default",
            padding: "md",
            hover: "none",
        },
    }
)

export interface CardProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> { }

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, padding, hover, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(cardVariants({ variant, padding, hover }), className)}
                {...props}
            />
        )
    }
)
Card.displayName = "Card"

// Gradient Background Component
const gradientVariants = cva(
    "absolute inset-0 opacity-30",
    {
        variants: {
            variant: {
                radial: "bg-gradient-radial from-brand-primary/20 via-transparent to-transparent",
                linear: "bg-gradient-to-r from-brand-primary/20 to-brand-accent/20",
                conic: "bg-gradient-conic from-brand-primary/20 via-brand-accent/20 to-brand-primary/20",
                mesh: "bg-gradient-to-br from-brand-primary/10 via-purple-500/10 to-brand-accent/10",
            },
            animate: {
                none: "",
                slow: "animate-gradient-x",
                pulse: "animate-pulse",
            },
        },
        defaultVariants: {
            variant: "radial",
            animate: "none",
        },
    }
)

export interface GradientBackgroundProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientVariants> { }

export const GradientBackground = forwardRef<HTMLDivElement, GradientBackgroundProps>(
    ({ className, variant, animate, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(gradientVariants({ variant, animate }), className)}
                {...props}
            />
        )
    }
)
GradientBackground.displayName = "GradientBackground"

// Icon Wrapper Component
const iconVariants = cva(
    "inline-flex items-center justify-center rounded-full",
    {
        variants: {
            size: {
                sm: "h-8 w-8",
                md: "h-12 w-12",
                lg: "h-16 w-16",
                xl: "h-20 w-20",
            },
            variant: {
                default: "bg-surface-tertiary text-text-primary",
                primary: "bg-brand-primary text-brand-primary-foreground",
                accent: "bg-brand-accent text-brand-accent-foreground",
                outline: "border-2 border-border-primary text-text-primary",
                ghost: "text-text-primary",
            },
        },
        defaultVariants: {
            size: "md",
            variant: "default",
        },
    }
)

export interface IconWrapperProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> { }

export const IconWrapper = forwardRef<HTMLDivElement, IconWrapperProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(iconVariants({ size, variant }), className)}
                {...props}
            />
        )
    }
)
IconWrapper.displayName = "IconWrapper"