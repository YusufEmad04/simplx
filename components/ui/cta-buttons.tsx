import React from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink, Calendar, ShoppingBag, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg" | "xl"
    href: string
    className?: string
    children?: React.ReactNode
    icon?: LucideIcon
    fullWidth?: boolean
}

function CTAButton({
    variant = "primary",
    size = "lg",
    href,
    className,
    children,
    icon: Icon,
    fullWidth = false
}: CTAButtonProps) {
    return (
        <Button
            variant={variant}
            size={size}
            asChild
            className={cn(fullWidth && "w-full", className)}
        >
            <Link href={href} className="inline-flex items-center justify-center space-x-2">
                <span>{children}</span>
                {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Link>
        </Button>
    )
}

// Pre-configured CTA buttons following design system patterns
export function GetStartedButton({
    variant = "primary",
    size = "lg",
    href = "/contact",
    className,
    fullWidth = false
}: Omit<CTAButtonProps, "children" | "icon">) {
    return (
        <CTAButton
            variant={variant}
            size={size}
            href={href}
            icon={ArrowRight}
            className={className}
            fullWidth={fullWidth}
        >
            Get Started
        </CTAButton>
    )
}

export function GetStartedTodayButton({
    variant = "primary",
    size = "lg",
    href = "/contact",
    className,
    fullWidth = false
}: Omit<CTAButtonProps, "children" | "icon">) {
    return (
        <CTAButton
            variant={variant}
            size={size}
            href={href}
            icon={ArrowRight}
            className={className}
            fullWidth={fullWidth}
        >
            Get Started Today
        </CTAButton>
    )
}

export function ScheduleConsultationButton({
    variant = "outline",
    size = "lg",
    href = "/contact",
    className,
    fullWidth = false
}: Omit<CTAButtonProps, "children" | "icon">) {
    return (
        <CTAButton
            variant={variant}
            size={size}
            href={href}
            icon={Calendar}
            className={className}
            fullWidth={fullWidth}
        >
            Schedule Consultation
        </CTAButton>
    )
}

export function ExploreProductsButton({
    variant = "primary",
    size = "lg",
    href = "/products",
    className,
    fullWidth = false
}: Omit<CTAButtonProps, "children" | "icon">) {
    return (
        <CTAButton
            variant={variant}
            size={size}
            href={href}
            icon={ShoppingBag}
            className={className}
            fullWidth={fullWidth}
        >
            Explore Products
        </CTAButton>
    )
}

export function ExploreProductButton({
    variant = "primary",
    size = "lg",
    href,
    className,
    fullWidth = false
}: Omit<CTAButtonProps, "children" | "icon">) {
    return (
        <CTAButton
            variant={variant}
            size={size}
            href={href}
            icon={ShoppingBag}
            className={className}
            fullWidth={fullWidth}
        >
            Explore Product
        </CTAButton>
    )
}

export function LearnMoreButton({
    variant = "outline",
    size = "md",
    href,
    className,
    fullWidth = false
}: Omit<CTAButtonProps, "children" | "icon"> & { href: string }) {
    return (
        <CTAButton
            variant={variant}
            size={size}
            href={href}
            icon={ExternalLink}
            className={className}
            fullWidth={fullWidth}
        >
            Learn More
        </CTAButton>
    )
}

// Generic CTA button for custom use cases
export { CTAButton }