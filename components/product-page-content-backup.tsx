"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle, Star, Clock, Users, TrendingUp, Shield, Zap, ChevronRight } from "lucide-react"
import { Product, SubBrand, iconMap } from "@/lib/products-data"
import { Container, Section, Stack, Grid, Inline } from "@/components/ui/layout"
import { Heading, Text, Card, IconWrapper, GradientBackground, StatusBadge, Breadcrumb, BreadcrumbItem, NumberedItem } from "@/components/ui/primitives"
import { Button } from "@/components/ui/enhanced-button"
import { cn } from "@/lib/utils"

interface ProductPageContentProps {
    product: Product
    subBrand: SubBrand
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <Card variant="glass" padding="lg" hover="lift" className="group h-full">
            <Stack spacing="md">
                <IconWrapper size="md" variant="primary" className="group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                </IconWrapper>
                <div>
                    <Heading level={5} className="text-text-primary group-hover:text-white transition-colors">
                        {title}
                    </Heading>
                    <Text variant="secondary" className="mt-2">
                        {description}
                    </Text>
                </div>
            </Stack>
        </Card>
    )
}

function BenefitCard({ benefit, index }: { benefit: string, index: number }) {
    return (
        <NumberedItem number={index + 1}>
            <Text variant="secondary" className="leading-relaxed">
                {benefit}
            </Text>
        </NumberedItem>
    )
}

function UseCaseCard({ useCase, index }: { useCase: string, index: number }) {
    const icons = [Users, TrendingUp, Shield, Zap, CheckCircle, Star]
    const Icon = icons[index % icons.length]

    return (
        <Card variant="glass" padding="md" className="group hover:border-brand-primary/20 transition-all duration-300">
            <Inline spacing="sm" align="center">
                <Icon className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                <Text variant="secondary" className="group-hover:text-text-primary transition-colors">
                    {useCase}
                </Text>
            </Inline>
        </Card>
    )
}

export function ProductPageContent({ product, subBrand }: ProductPageContentProps) {
    const IconComponent = iconMap[product.iconName]
    const SubBrandIconComponent = iconMap[subBrand.iconName]

    return (
        <main className="min-h-screen bg-surface-primary text-text-primary pt-16 lg:pt-20">
            {/* Hero Section */}
            <Section spacing="xl" background="primary" className="relative overflow-hidden py-16 md:py-24">
                <GradientBackground
                    variant="radial"
                    animate="pulse"
                    className="absolute inset-0 opacity-10"
                />

                <Container className="relative z-10">
                    <Stack spacing="xl">
                        {/* Breadcrumb */}
                        <div className="animate-fade-in">
                            <Breadcrumb>
                                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                                <BreadcrumbItem>/</BreadcrumbItem>
                                <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                                <BreadcrumbItem>/</BreadcrumbItem>
                                <BreadcrumbItem href={`/${subBrand.slug}`}>{subBrand.name}</BreadcrumbItem>
                                <BreadcrumbItem>/</BreadcrumbItem>
                                <BreadcrumbItem active>{product.name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>

                        {/* Product Header */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <Stack spacing="lg">
                                <div className="animate-fade-in">
                                    <Inline spacing="sm" align="center" className="mb-4">
                                        <StatusBadge status={product.status} />
                                        <Text size="sm" className="text-text-tertiary">
                                            {product.category}
                                        </Text>
                                    </Inline>

                                    <Stack spacing="md">
                                        <div className="flex items-center space-x-4">
                                            <IconWrapper
                                                size="xl"
                                                variant="primary"
                                                className={`bg-gradient-to-r ${product.gradient} text-white`}
                                            >
                                                {React.createElement(IconComponent, { className: "w-12 h-12" })}
                                            </IconWrapper>
                                            <div>
                                                <Heading level={1} className="mb-2">
                                                    {product.name}
                                                </Heading>
                                                <Text size="xl" className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent font-semibold`}>
                                                    {product.tagline}
                                                </Text>
                                            </div>
                                        </div>
                                    </Stack>
                                </div>

                                    <Text size="xl" className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent font-semibold mb-6`}>
                                        {product.tagline}
                                    </Text>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                    <Text size="lg" variant="secondary" className="leading-relaxed">
                                        {product.longDescription}
                                    </Text>
                                </div>

                                {/* Pricing */}
                                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                                    <Card variant="outlined" padding="lg" className="bg-surface-secondary/30">
                                        <Stack spacing="md">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <Text size="2xl" weight="bold" className="text-text-primary">
                                                        {product.pricing.startingPrice}
                                                    </Text>
                                                    <Text variant="tertiary">
                                                        {product.pricing.pricingModel}
                                                    </Text>
                                                </div>
                                                <Clock className="w-6 h-6 text-text-tertiary" />
                                            </div>

                                            <div className="space-y-2">
                                                <Text size="sm" weight="medium" className="text-text-primary">
                                                    Included Features:
                                                </Text>
                                                <div className="grid grid-cols-1 gap-1">
                                                    {product.pricing.features.map((feature, index) => (
                                                        <div key={index} className="flex items-center space-x-2">
                                                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                            <Text size="sm" className="text-text-secondary">
                                                                {feature}
                                                            </Text>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Stack>
                                    </Card>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                                    <Inline spacing="md" className="flex-wrap">
                                        <Button variant="primary" size="lg" asChild>
                                            <Link href="/contact">
                                                <span>Get Started</span>
                                                <ExternalLink className="w-5 h-5 ml-2" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" size="lg" asChild>
                                            <Link href={`/${subBrand.slug}`}>
                                                <ArrowLeft className="w-5 h-5 mr-2" />
                                                <span>Back to {subBrand.name}</span>
                                            </Link>
                                        </Button>
                                    </Inline>
                                </div>
                            </Stack>

                            {/* Right Visual */}
                            <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
                                <div className="relative">
                                    <IconWrapper
                                        size="xl"
                                        variant="primary"
                                        className={`bg-gradient-to-r ${product.gradient} text-white mx-auto mb-8 transform hover:scale-110 transition-transform duration-300`}
                                    >
                                        <IconComponent className="w-16 h-16" />
                                    </IconWrapper>

                                    <div className={`w-full h-64 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-20 mb-6`} />

                                    {/* Feature highlights floating around */}
                                    <div className="absolute inset-0">
                                        {product.features.slice(0, 6).map((feature, i) => {
                                            const positions = [
                                                { left: 15, top: 20 },
                                                { left: 75, top: 15 },
                                                { left: 10, top: 70 },
                                                { left: 80, top: 75 },
                                                { left: 45, top: 10 },
                                                { left: 20, top: 85 },
                                            ]
                                            const pos = positions[i] || { left: 50, top: 50 }

                                            return (
                                                <div
                                                    key={i}
                                                    className="absolute group cursor-help"
                                                    style={{
                                                        left: `${pos.left}%`,
                                                        top: `${pos.top}%`,
                                                        animation: `float ${3 + (i % 3)}s ease-in-out infinite ${(i * 0.5) % 2}s`,
                                                    }}
                                                >
                                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
                                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-surface-secondary/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                                        {feature}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Stack>
                </Container>
            </Section>

            {/* Features Section */}
            <Section spacing="xl" background="secondary">
                <Container>
                    <Stack spacing="xl">
                        <div className="text-center">
                            <Heading level={2} className="mb-4">
                                Powerful Features
                            </Heading>
                            <Text size="lg" variant="secondary" className="max-w-2xl mx-auto">
                                Discover the comprehensive features that make {product.name} the perfect solution for your business needs.
                            </Text>
                        </div>

                        <Grid cols={1} colsMd={2} gap="lg" className="lg:grid-cols-3">
                            {product.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <FeatureCard
                                        icon={IconComponent}
                                        title={feature}
                                        description={`Advanced ${feature.toLowerCase()} capabilities designed to enhance your workflow and productivity.`}
                                    />
                                </div>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Section>

            {/* Benefits Section */}
            <Section spacing="xl" background="primary">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Benefits */}
                        <Stack spacing="lg">
                            <div>
                                <Heading level={2} className="mb-4">
                                    Key Benefits
                                </Heading>
                                <Text size="lg" variant="secondary" className="leading-relaxed">
                                    Experience transformative results with {product.name} and see the positive impact on your business operations.
                                </Text>
                            </div>

                            <div className="space-y-4">
                                {product.benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="animate-fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <BenefitCard benefit={benefit} index={index} />
                                    </div>
                                ))}
                            </div>
                        </Stack>

                        {/* Right: Use Cases */}
                        <Stack spacing="lg">
                            <div>
                                <Heading level={2} className="mb-4">
                                    Use Cases
                                </Heading>
                                <Text size="lg" variant="secondary" className="leading-relaxed">
                                    See how {product.name} can be applied across different scenarios and industries to drive success.
                                </Text>
                            </div>

                            <div className="space-y-3">
                                {product.useCases.map((useCase, index) => (
                                    <div
                                        key={index}
                                        className="animate-fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <UseCaseCard useCase={useCase} index={index} />
                                    </div>
                                ))}
                            </div>
                        </Stack>
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section spacing="xl" background="tertiary" className="relative overflow-hidden">
                <GradientBackground
                    variant="linear"
                    animate="pulse"
                    className="absolute inset-0 opacity-5"
                />

                <Container className="relative z-10">
                    <Card variant="glass" padding="xl" className="text-center">
                        <Stack spacing="lg" align="center">
                            <IconWrapper
                                size="xl"
                                variant="primary"
                                className={`bg-gradient-to-r ${product.gradient} text-white`}
                            >
                                <IconComponent className="w-12 h-12" />
                            </IconWrapper>

                            <Heading level={2} className="max-w-3xl">
                                Ready to Get Started with {product.name}?
                            </Heading>

                            <Text size="lg" variant="secondary" className="max-w-2xl">
                                Join thousands of businesses already using {product.name} to transform their operations and drive growth.
                            </Text>

                            <Inline spacing="md" justify="center" className="flex-wrap">
                                <Button variant="primary" size="lg" asChild>
                                    <Link href="/contact">
                                        <span>Start Free Trial</span>
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href={`/${subBrand.slug}`}>
                                        <span>Explore More {subBrand.name}</span>
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </Inline>

                            <Text size="sm" variant="tertiary" className="mt-4">
                                No credit card required • Setup in minutes • 24/7 support
                            </Text>
                        </Stack>
                    </Card>
                </Container>
            </Section>
        </main>
    )
}