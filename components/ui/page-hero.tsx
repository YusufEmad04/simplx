import React from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink, ChevronRight } from "lucide-react"
import { Container, Section, Stack, Inline } from "@/components/ui/layout"
import {
    Heading,
    Text,
    IconWrapper,
    GradientBackground,
    Breadcrumb,
    BreadcrumbItem
} from "@/components/ui/primitives"
import { Button } from "@/components/ui/enhanced-button"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
    label: string
    href?: string
    active?: boolean
}

interface HeroAction {
    label: string
    href: string
    variant: "primary" | "outline"
    icon?: React.ComponentType<{ className?: string }>
}

interface PageHeroProps {
    breadcrumbs?: BreadcrumbItem[]
    badge?: {
        text: string
        variant?: "primary" | "secondary" | "accent"
    }
    title: string
    subtitle?: string
    description: string
    actions?: HeroAction[]
    icon?: {
        component: React.ComponentType<{ className?: string }>
        gradient: string
    }
    visual?: {
        gradient: string
        floatingElements?: boolean
    }
    className?: string
}

export function PageHero({
    breadcrumbs,
    badge,
    title,
    subtitle,
    description,
    actions = [],
    icon,
    visual,
    className
}: PageHeroProps) {
    return (
        <Section
            spacing="xl"
            background="primary"
            className={cn("relative overflow-hidden py-16 md:py-24", className)}
        >
            <GradientBackground
                variant="radial"
                animate="pulse"
                className="absolute inset-0 opacity-10"
            />

            <Container className="relative z-10">
                <Stack spacing="xl">
                    {/* Breadcrumbs */}
                    {breadcrumbs && (
                        <div className="animate-fade-in">
                            <Breadcrumb>
                                {breadcrumbs.map((crumb, index) => (
                                    <React.Fragment key={index}>
                                        <BreadcrumbItem
                                            href={crumb.href}
                                            active={crumb.active}
                                        >
                                            {crumb.label}
                                        </BreadcrumbItem>
                                        {index < breadcrumbs.length - 1 && (
                                            <BreadcrumbItem>/</BreadcrumbItem>
                                        )}
                                    </React.Fragment>
                                ))}
                            </Breadcrumb>
                        </div>
                    )}

                    {/* Hero Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <Stack spacing="lg">
                            <div className="animate-fade-in">
                                {badge && (
                                    <div className="mb-4">
                                        <span className={cn(
                                            "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
                                            badge.variant === "primary" && "bg-brand-primary/20 text-brand-primary",
                                            badge.variant === "secondary" && "bg-surface-tertiary/30 text-text-secondary",
                                            badge.variant === "accent" && "bg-brand-accent/20 text-brand-accent"
                                        )}>
                                            {badge.text}
                                        </span>
                                    </div>
                                )}

                                <Stack spacing="md">
                                    {icon ? (
                                        <Inline spacing="md" align="center">
                                            <IconWrapper
                                                size="xl"
                                                variant="primary"
                                                className={`bg-gradient-to-r ${icon.gradient} text-white`}
                                            >
                                                <icon.component className="w-12 h-12" />
                                            </IconWrapper>
                                            <div>
                                                <Heading level={1} className="mb-2">
                                                    {title}
                                                </Heading>
                                                {subtitle && (
                                                    <Text size="xl" className={`bg-gradient-to-r ${icon.gradient} bg-clip-text text-transparent font-semibold`}>
                                                        {subtitle}
                                                    </Text>
                                                )}
                                            </div>
                                        </Inline>
                                    ) : (
                                        <div>
                                            <Heading level={1} className="mb-2">
                                                {title}
                                            </Heading>
                                            {subtitle && (
                                                <Text size="xl" className="text-brand-primary font-semibold">
                                                    {subtitle}
                                                </Text>
                                            )}
                                        </div>
                                    )}
                                </Stack>
                            </div>

                            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                <Text size="lg" variant="secondary" className="leading-relaxed">
                                    {description}
                                </Text>
                            </div>

                            {actions.length > 0 && (
                                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                                    <Inline spacing="md" className="flex-wrap">
                                        {actions.map((action, index) => (
                                            <Button
                                                key={index}
                                                variant={action.variant}
                                                size="lg"
                                                asChild
                                            >
                                                <Link href={action.href}>
                                                    {action.label}
                                                    {action.icon && (
                                                        <action.icon className="w-5 h-5 ml-2" />
                                                    )}
                                                </Link>
                                            </Button>
                                        ))}
                                    </Inline>
                                </div>
                            )}
                        </Stack>

                        {/* Right Visual */}
                        {visual && (
                            <div className="relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
                                <div className={`w-full h-80 lg:h-96 rounded-3xl bg-gradient-to-br ${visual.gradient} opacity-20`} />
                                {icon && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <icon.component className="w-32 h-32 lg:w-40 lg:h-40 text-white opacity-30 animate-float" />
                                    </div>
                                )}
                                {visual.floatingElements && (
                                    <div className="absolute inset-0">
                                        {[...Array(6)].map((_, i) => {
                                            const positions = [
                                                { left: "20%", top: "25%" },
                                                { left: "75%", top: "15%" },
                                                { left: "10%", top: "65%" },
                                                { left: "85%", top: "75%" },
                                                { left: "45%", top: "10%" },
                                                { left: "15%", top: "85%" },
                                            ]
                                            return (
                                                <div
                                                    key={i}
                                                    className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                                                    style={{
                                                        left: positions[i].left,
                                                        top: positions[i].top,
                                                        animationDelay: `${i * 0.5}s`,
                                                    }}
                                                />
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </Stack>
            </Container>
        </Section>
    )
}