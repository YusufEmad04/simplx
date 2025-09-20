"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Star, Clock, CheckCircle } from "lucide-react"
import { SubBrand, Product, iconMap } from "@/lib/products-data"
import { Container, Section, Stack, Grid, Inline } from "@/components/ui/layout"
import { Heading, Text, Card, IconWrapper, GradientBackground } from "@/components/ui/primitives"
import { Button } from "@/components/ui/enhanced-button"
import { cn } from "@/lib/utils"

interface SubBrandPageContentProps {
    subBrand: SubBrand
}

interface ProductCardProps {
    product: Product
    subBrand: SubBrand
    featured?: boolean
}

function ProductCard({ product, subBrand, featured = false }: ProductCardProps) {
    return (
        <Card
            variant="glass"
            padding={featured ? "xl" : "lg"}
            hover="lift"
            className={cn(
                "group h-full transition-all duration-300 hover:shadow-2xl relative overflow-hidden",
                featured && "border-2 border-gradient-to-r ring-1 ring-brand-primary/20"
            )}
        >
            {featured && (
                <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center space-x-1 bg-brand-primary/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-brand-primary" />
                        <Text size="xs" className="text-brand-primary font-medium">Featured</Text>
                    </div>
                </div>
            )}

            <Stack spacing="lg" className="h-full">
                {/* Product Header */}
                <div className="flex items-start space-x-4">
                    <IconWrapper
                        size={featured ? "lg" : "md"}
                        variant="primary"
                        className={`bg-gradient-to-r ${product.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                        {React.createElement(iconMap[product.iconName], { className: cn("text-white", featured ? "w-8 h-8" : "w-6 h-6") })}
                    </IconWrapper>
                    <div className="flex-1">
                        <Heading level={featured ? 3 : 4} className="text-text-primary group-hover:text-white transition-colors">
                            {product.name}
                        </Heading>
                        <Text size={featured ? "lg" : "base"} className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent font-medium`}>
                            {product.tagline}
                        </Text>
                        <div className="flex items-center space-x-2 mt-2">
                            <div
                                className={cn(
                                    "px-2 py-1 rounded-full text-xs font-medium",
                                    product.status === "available" && "bg-green-500/20 text-green-400",
                                    product.status === "beta" && "bg-yellow-500/20 text-yellow-400",
                                    product.status === "coming-soon" && "bg-blue-500/20 text-blue-400"
                                )}
                            >
                                {product.status === "available" && "Available"}
                                {product.status === "beta" && "Beta"}
                                {product.status === "coming-soon" && "Coming Soon"}
                            </div>
                            <Text size="xs" className="text-text-tertiary">
                                {product.category}
                            </Text>
                        </div>
                    </div>
                </div>

                {/* Product Description */}
                <Text variant="secondary" className={cn("line-clamp-3", featured && "text-lg")}>
                    {featured ? product.longDescription : product.description}
                </Text>

                {/* Product Features */}
                <div className="space-y-3">
                    <Text size="sm" weight="medium" className="text-text-primary">
                        Key Features:
                    </Text>
                    <div className={cn("grid gap-2", featured ? "grid-cols-1" : "grid-cols-2")}>
                        {product.features.slice(0, featured ? 6 : 4).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className={cn("text-green-400 flex-shrink-0", featured ? "w-4 h-4" : "w-3 h-3")} />
                                <Text size={featured ? "sm" : "xs"} className="text-text-secondary">
                                    {feature}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Section (for featured cards) */}
                {featured && (
                    <div className="space-y-3">
                        <Text size="sm" weight="medium" className="text-text-primary">
                            Key Benefits:
                        </Text>
                        <div className="grid grid-cols-1 gap-2">
                            {product.benefits.slice(0, 3).map((benefit, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
                                    <Text size="sm" className="text-text-secondary">
                                        {benefit}
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Pricing */}
                <div className="space-y-2 pt-2 border-t border-surface-tertiary/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <Text size={featured ? "lg" : "base"} weight="semibold" className="text-text-primary">
                                {product.pricing.startingPrice}
                            </Text>
                            <Text size="xs" className="text-text-tertiary">
                                {product.pricing.pricingModel}
                            </Text>
                        </div>
                        <Clock className="w-4 h-4 text-text-tertiary" />
                    </div>
                </div>

                {/* CTA Button */}
                <Button
                    variant={featured ? "primary" : "ghost"}
                    size={featured ? "lg" : "md"}
                    className={cn(
                        "w-full transition-all duration-300",
                        !featured && "group-hover:bg-brand-primary/10 group-hover:text-brand-primary"
                    )}
                    asChild
                >
                    <Link href={`/${subBrand.slug}/${product.id}`}>
                        <span>{featured ? "Explore Product" : "Learn More"}</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </Stack>
        </Card>
    )
}

export function SubBrandPageContent({ subBrand }: SubBrandPageContentProps) {
    const featuredProduct = subBrand.products[0] // First product as featured
    const otherProducts = subBrand.products.slice(1)

    return (
        <main className="min-h-screen bg-surface-primary text-text-primary pt-16 lg:pt-20">
            {/* Hero Section */}
            <Section spacing="xl" background="primary" className="relative overflow-hidden py-16 md:py-24">
                <GradientBackground
                    variant="mesh"
                    animate="pulse"
                    className="absolute inset-0 opacity-10"
                />

                <Container className="relative z-10">
                    <Stack spacing="xl">
                        {/* Breadcrumb */}
                        <div className="animate-fade-in">
                            <Inline spacing="sm" align="center" className="text-text-tertiary">
                                <Link
                                    href="/products"
                                    className="hover:text-text-primary transition-colors duration-200 flex items-center space-x-1"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>All Products</span>
                                </Link>
                                <span>/</span>
                                <span className="text-text-primary">{subBrand.name}</span>
                            </Inline>
                        </div>

                        {/* Header */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <Stack spacing="lg">
                                <div className="animate-fade-in">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <IconWrapper
                                            size="xl"
                                            variant="primary"
                                            className={`bg-gradient-to-r ${subBrand.gradient} text-white`}
                                        >
                                            {React.createElement(iconMap[subBrand.iconName], { className: "w-12 h-12" })}
                                        </IconWrapper>
                                        <div>
                                            <Heading level={1}>
                                                {subBrand.fullName}
                                            </Heading>
                                            <Text size="xl" className={`bg-gradient-to-r ${subBrand.gradient} bg-clip-text text-transparent font-semibold`}>
                                                {subBrand.tagline}
                                            </Text>
                                        </div>
                                    </div>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                    <Text size="lg" variant="secondary" className="leading-relaxed">
                                        {subBrand.description}
                                    </Text>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                                    <Inline spacing="md" className="flex-wrap">
                                        <Button variant="primary" size="lg" asChild>
                                            <Link href="#products">
                                                <span>Explore Products</span>
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </Link>
                                        </Button>
                                        <Button variant="outline" size="lg" asChild>
                                            <Link href="/contact">
                                                <span>Get Consultation</span>
                                                <ExternalLink className="w-5 h-5 ml-2" />
                                            </Link>
                                        </Button>
                                    </Inline>
                                </div>
                            </Stack>

                            {/* Right Visual */}
                            <div className="relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
                                <div className={`w-full h-80 rounded-3xl bg-gradient-to-br ${subBrand.gradient} opacity-20`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {React.createElement(iconMap[subBrand.iconName], { className: "w-32 h-32 text-white opacity-30" })}
                                </div>
                                {/* Floating elements */}
                                <div className="absolute inset-0">
                                    {[...Array(6)].map((_, i) => {
                                        const positions = [
                                            { left: 20, top: 25 },
                                            { left: 75, top: 15 },
                                            { left: 10, top: 65 },
                                            { left: 85, top: 75 },
                                            { left: 45, top: 10 },
                                            { left: 15, top: 85 },
                                        ]
                                        const pos = positions[i] || { left: 50, top: 50 }

                                        return (
                                            <div
                                                key={i}
                                                className={`absolute w-3 h-3 rounded-full bg-gradient-to-r ${subBrand.gradient} opacity-70`}
                                                style={{
                                                    left: `${pos.left}%`,
                                                    top: `${pos.top}%`,
                                                    animation: `float ${3 + (i % 3)}s ease-in-out infinite ${(i * 0.5) % 2}s`,
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
                            <Grid cols={3} gap="lg" className="text-center">
                                <div>
                                    <Text size="2xl" weight="bold" className="text-brand-primary">
                                        {subBrand.products.length}
                                    </Text>
                                    <Text variant="tertiary">Products</Text>
                                </div>
                                <div>
                                    <Text size="2xl" weight="bold" className="text-brand-accent">
                                        {subBrand.products.filter(p => p.status === "available").length}
                                    </Text>
                                    <Text variant="tertiary">Available</Text>
                                </div>
                                <div>
                                    <Text size="2xl" weight="bold" className="text-purple-400">
                                        {subBrand.products.filter(p => p.status === "beta").length}
                                    </Text>
                                    <Text variant="tertiary">In Beta</Text>
                                </div>
                            </Grid>
                        </div>
                    </Stack>
                </Container>
            </Section>

            {/* Featured Product Section */}
            {featuredProduct && (
                <Section spacing="xl" background="secondary" id="products">
                    <Container>
                        <Stack spacing="xl">
                            <div className="text-center">
                                <Heading level={2} className="mb-4">
                                    Featured Product
                                </Heading>
                                <Text size="lg" variant="secondary" className="max-w-2xl mx-auto">
                                    Our flagship {subBrand.name} solution designed to deliver maximum impact for your business.
                                </Text>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <ProductCard product={featuredProduct} subBrand={subBrand} featured />
                            </div>
                        </Stack>
                    </Container>
                </Section>
            )}

            {/* Other Products Section */}
            {otherProducts.length > 0 && (
                <Section spacing="xl" background="primary">
                    <Container>
                        <Stack spacing="xl">
                            <div className="text-center">
                                <Heading level={2} className="mb-4">
                                    Complete {subBrand.name} Suite
                                </Heading>
                                <Text size="lg" variant="secondary" className="max-w-2xl mx-auto">
                                    Explore our full range of {subBrand.name} solutions to find the perfect fit for your needs.
                                </Text>
                            </div>

                            <Grid cols={1} colsMd={2} gap="lg" className="lg:grid-cols-3">
                                {otherProducts.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="animate-fade-in"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <ProductCard product={product} subBrand={subBrand} />
                                    </div>
                                ))}
                            </Grid>
                        </Stack>
                    </Container>
                </Section>
            )}

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
                            <Heading level={2} className="max-w-3xl">
                                Ready to Transform Your Business with {subBrand.name}?
                            </Heading>
                            <Text size="lg" variant="secondary" className="max-w-2xl">
                                Get started with our {subBrand.name} solutions today and experience the power of intelligent automation.
                            </Text>
                            <Inline spacing="md" justify="center" className="flex-wrap">
                                <Button variant="primary" size="lg" asChild>
                                    <Link href="/contact">
                                        <span>Start Your Journey</span>
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/products">
                                        <span>Explore All Products</span>
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </Inline>
                        </Stack>
                    </Card>
                </Container>
            </Section>
        </main>
    )
}