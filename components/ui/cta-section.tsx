import React from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react"
import { Container, Section, Stack, Inline } from "@/components/ui/layout"
import { Heading, Text, Card, GradientBackground } from "@/components/ui/primitives"
import { Button } from "@/components/ui/enhanced-button"
import { cn } from "@/lib/utils"

interface CTAAction {
    label: string
    href: string
    variant: "primary" | "outline"
    icon?: React.ComponentType<{ className?: string }>
}

interface CTAFeature {
    text: string
    icon?: React.ComponentType<{ className?: string }>
}

interface CTASectionProps {
    title: string
    description: string
    actions: CTAAction[]
    features?: CTAFeature[]
    stats?: {
        value: string
        label: string
    }[]
    footerText?: string
    footerLink?: {
        text: string
        href: string
    }
    background?: "primary" | "secondary" | "tertiary"
    className?: string
}

export function CTASection({
    title,
    description,
    actions,
    features = [],
    stats = [],
    footerText,
    footerLink,
    background = "tertiary",
    className
}: CTASectionProps) {
    return (
        <Section
            spacing="xl"
            background={background}
            className={cn("relative overflow-hidden", className)}
        >
            <GradientBackground
                variant="linear"
                animate="pulse"
                className="absolute inset-0 opacity-5"
            />

            <Container className="relative z-10">
                <Card variant="glass" padding="xl" className="text-center">
                    <Stack spacing="lg" align="center">
                        {/* Main Content */}
                        <Stack spacing="md" align="center">
                            <Heading level={2}>{title}</Heading>
                            <Text size="lg" variant="secondary" className="max-w-2xl">
                                {description}
                            </Text>
                        </Stack>

                        {/* Features */}
                        {features.length > 0 && (
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-tertiary">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        {feature.icon ? (
                                            <feature.icon className="w-4 h-4 text-green-400" />
                                        ) : (
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                        )}
                                        <span>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Stats */}
                        {stats.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <Text size="2xl" weight="bold" className="text-brand-primary">
                                            {stat.value}
                                        </Text>
                                        <Text size="sm" className="text-text-tertiary">
                                            {stat.label}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Actions */}
                        <Inline spacing="md" className="flex-wrap justify-center">
                            {actions.map((action, index) => (
                                <Button
                                    key={index}
                                    variant={action.variant}
                                    size="lg"
                                    asChild
                                >
                                    <Link href={action.href}>
                                        {action.label}
                                        {action.icon ? (
                                            <action.icon className="w-5 h-5 ml-2" />
                                        ) : (
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        )}
                                    </Link>
                                </Button>
                            ))}
                        </Inline>

                        {/* Footer */}
                        {footerText && (
                            <Text size="sm" className="text-text-tertiary">
                                {footerText} {footerLink && (
                                    <Link href={footerLink.href} className="text-brand-primary hover:underline">
                                        {footerLink.text}
                                    </Link>
                                )}
                            </Text>
                        )}
                    </Stack>
                </Card>
            </Container>
        </Section>
    )
}