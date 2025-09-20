"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink, CheckCircle, Star, Clock, Users, TrendingUp, Shield, Zap, ChevronRight } from "lucide-react"
import { Product, SubBrand, iconMap } from "@/lib/products-data"
import { Container, Section, Stack, Grid } from "@/components/ui/layout"
import {
    Heading,
    Text,
    Card,
    IconWrapper,
    GradientBackground,
    StatusBadge,
    Breadcrumb,
    BreadcrumbItem,
    NumberedItem,
    FeatureDot
} from "@/components/ui/primitives"
import { 
    GetStartedButton,
    ExploreProductsButton,
    ScheduleConsultationButton
} from "@/components/ui/cta-buttons"
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
            <div className="flex items-center space-x-2">
                <Icon className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                <Text variant="secondary" className="group-hover:text-text-primary transition-colors">
                    {useCase}
                </Text>
            </div>
        </Card>
    )
}

export function ProductPageContent({ product, subBrand }: ProductPageContentProps) {
    const IconComponent = iconMap[product.iconName]

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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Content */}
                            <Stack spacing="lg">
                                <div className="animate-fade-in">
                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                                        <StatusBadge status={product.status} />
                                        <Text size="sm" className="text-text-tertiary">
                                            {product.category}
                                        </Text>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                                        <IconWrapper
                                            size="xl"
                                            variant="primary"
                                            className={`bg-gradient-to-r ${product.gradient} text-white self-start sm:self-center`}
                                        >
                                            {React.createElement(IconComponent, { className: "w-10 h-10 lg:w-12 lg:h-12" })}
                                        </IconWrapper>
                                        <div className="min-w-0">
                                            <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2">
                                                {product.name}
                                            </Heading>
                                            <Text size="xl" className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent font-semibold text-lg sm:text-xl lg:text-2xl`}>
                                                {product.tagline}
                                            </Text>
                                        </div>
                                    </div>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                    <Text size="lg" variant="secondary" className="leading-relaxed text-base sm:text-lg">
                                        {product.longDescription}
                                    </Text>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <Text size="sm" weight="medium" className="text-text-tertiary mb-1">
                                                Pricing
                                            </Text>
                                            <Text size="lg" weight="bold" className="text-text-primary">
                                                {product.pricing.startingPrice}
                                            </Text>
                                        </div>
                                        <div>
                                            <Text size="sm" weight="medium" className="text-text-tertiary mb-1">
                                                Implementation
                                            </Text>
                                            <div className="flex items-center space-x-2">
                                                <Clock className="w-4 h-4 text-text-tertiary" />
                                                <Text size="sm" className="text-text-secondary">
                                                    2-4 weeks typical
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <GetStartedButton 
                                            href="/contact"
                                            className="w-full sm:w-auto"
                                        />
                                        <ExploreProductsButton 
                                            href={`/${subBrand.slug}`}
                                            variant="outline"
                                            className="w-full sm:w-auto"
                                        />
                                    </div>
                                </div>
                            </Stack>

                            {/* Right Visual */}
                            <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
                                <div className={`w-full h-80 lg:h-96 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-20`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {React.createElement(IconComponent, {
                                        className: "w-32 h-32 lg:w-40 lg:h-40 text-white opacity-30 animate-float"
                                    })}
                                </div>
                                {/* Floating elements */}
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
                            <Heading level={2} className="mb-4 text-2xl sm:text-3xl lg:text-4xl">Core Features</Heading>
                            <Text size="lg" variant="secondary" className="max-w-3xl mx-auto text-base sm:text-lg">
                                Discover the powerful capabilities that make {product.name} essential for your business operations.
                            </Text>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {product.features.slice(0, 6).map((feature, index) => {
                                const featureIcons = [Shield, Zap, TrendingUp, Users, CheckCircle, Star]
                                const FeatureIcon = featureIcons[index % featureIcons.length]
                                return (
                                    <FeatureCard
                                        key={index}
                                        icon={FeatureIcon}
                                        title={feature}
                                        description={`Advanced ${feature.toLowerCase()} capabilities designed to enhance your workflow and productivity.`}
                                    />
                                )
                            })}
                        </div>
                    </Stack>
                </Container>
            </Section>

            {/* Benefits Section */}
            <Section spacing="xl" background="primary">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Content */}
                        <Stack spacing="lg">
                            <div>
                                <Heading level={2} className="mb-4 text-2xl sm:text-3xl lg:text-4xl">Key Benefits</Heading>
                                <Text size="lg" variant="secondary" className="text-base sm:text-lg">
                                    Experience transformative improvements in efficiency, productivity, and business outcomes.
                                </Text>
                            </div>

                            <Stack spacing="md">
                                {product.benefits.map((benefit, index) => (
                                    <BenefitCard key={index} benefit={benefit} index={index} />
                                ))}
                            </Stack>
                        </Stack>

                        {/* Right Content */}
                        <Stack spacing="lg">
                            <div>
                                <Heading level={3} className="mb-4 text-xl sm:text-2xl lg:text-3xl">Use Cases</Heading>
                                <Text variant="secondary" className="mb-6 text-sm sm:text-base">
                                    Perfect for various business scenarios and industry applications.
                                </Text>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {product.useCases.map((useCase, index) => (
                                    <UseCaseCard key={index} useCase={useCase} index={index} />
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
                            <Stack spacing="md" align="center">
                                <Heading level={2} className="text-2xl sm:text-3xl lg:text-4xl">Ready to Get Started?</Heading>
                                <Text size="lg" variant="secondary" className="max-w-2xl text-base sm:text-lg text-center">
                                    Join thousands of businesses already using {product.name} to transform their operations and drive growth.
                                </Text>
                            </Stack>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-2 text-sm text-text-tertiary">
                                <div className="flex items-center justify-start sm:justify-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>Free setup consultation</span>
                                </div>
                                <span className="hidden sm:inline">•</span>
                                <div className="flex items-center justify-start sm:justify-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>30-day trial</span>
                                </div>
                                <span className="hidden sm:inline">•</span>
                                <div className="flex items-center justify-start sm:justify-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>Expert support</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <GetStartedButton 
                                    href="/contact"
                                    className="w-full sm:w-auto"
                                />
                                <ScheduleConsultationButton 
                                    href="/contact"
                                    className="w-full sm:w-auto"
                                />
                            </div>

                            <Text size="sm" className="text-text-tertiary">
                                Questions? <Link href="/contact" className="text-brand-primary hover:underline">Contact our sales team</Link>
                            </Text>
                        </Stack>
                    </Card>
                </Container>
            </Section>
        </main>
    )
}