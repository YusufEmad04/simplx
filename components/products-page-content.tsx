"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Search, Filter, ArrowRight, ExternalLink, ChevronDown } from "lucide-react"
import { subBrandsData, getAllProducts, searchProducts, Product, SubBrand, iconMap } from "@/lib/products-data"
import { Container, Section, Stack, Grid, Inline } from "@/components/ui/layout"
import {
    Heading,
    Text,
    Card,
    IconWrapper,
    GradientBackground,
    StatusBadge,
    FeatureDot
} from "@/components/ui/primitives"
import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface ProductCardProps {
    product: Product
    subBrand: SubBrand
}

function ProductCard({ product, subBrand }: ProductCardProps) {
    const IconComponent = iconMap[product.iconName]

    return (
        <Card
            variant="glass"
            padding="lg"
            hover="lift"
            className="group h-full transition-all duration-300 hover:shadow-2xl"
        >
            <Stack spacing="sm" className="h-full">
                {/* Product Header */}
                <div className="flex items-start justify-between space-x-3 mb-1">
                    <div className="flex items-start space-x-3 min-w-0 flex-1">
                        <IconWrapper
                            size="md"
                            variant="primary"
                            className={`bg-gradient-to-r ${subBrand.gradient} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                        >
                            {React.createElement(IconComponent, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
                        </IconWrapper>
                        <div className="min-w-0 flex-1">
                            <Heading
                                level={6}
                                className="text-text-primary group-hover:text-white transition-colors mb-1 text-base sm:text-lg leading-tight"
                                style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical' as any,
                                    overflow: 'hidden',
                                    lineHeight: '1.3'
                                }}
                            >
                                {product.name}
                            </Heading>
                            <Text
                                size="sm"
                                className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent font-medium overflow-hidden line-clamp-1`}
                                style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical' as any,
                                    overflow: 'hidden'
                                }}
                            >
                                {product.tagline}
                            </Text>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <StatusBadge status={product.status} size="sm" />
                    </div>
                </div>

                {/* Product Description */}
                <Text
                    variant="secondary"
                    className="flex-1 overflow-hidden"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical' as any,
                        overflow: 'hidden'
                    }}
                >
                    {product.description}
                </Text>

                {/* Product Features */}
                <div className="space-y-2">
                    <Text size="sm" weight="medium" className="text-text-primary">
                        Key Features:
                    </Text>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {product.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-1.5 min-w-0">
                                <FeatureDot size="xs" gradient={product.gradient} className="flex-shrink-0" />
                                <Text size="xs" className="text-text-secondary truncate">
                                    {feature}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing and Category */}
                <div className="flex items-center justify-between pt-2 border-t border-surface-tertiary/20">
                    <div>
                        <Text size="sm" weight="medium" className="text-text-primary">
                            {product.pricing.startingPrice}
                        </Text>
                        <Text size="xs" className="text-text-tertiary">
                            {product.pricing.pricingModel}
                        </Text>
                    </div>
                    <Text size="xs" className="text-text-tertiary bg-surface-tertiary/20 px-2 py-1 rounded-full">
                        {product.category}
                    </Text>
                </div>

                {/* CTA Button */}
                <Button
                    variant="ghost"
                    size="md"
                    className="w-full group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all duration-300 mt-auto"
                    asChild
                >
                    <Link href={`/${subBrand.slug}/${product.id}`} className="inline-flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </Stack>
        </Card>
    )
}

interface SubBrandSectionProps {
    subBrand: SubBrand
}

function SubBrandSection({ subBrand }: SubBrandSectionProps) {
    const [isExpanded, setIsExpanded] = useState(true)
    const SubBrandIconComponent = iconMap[subBrand.iconName]

    return (
        <div className="space-y-6">
            {/* Sub-brand Header */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
                    <IconWrapper
                        size="lg"
                        variant="primary"
                        className={`bg-gradient-to-r ${subBrand.gradient} text-white self-start sm:self-center`}
                    >
                        {React.createElement(SubBrandIconComponent, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                    </IconWrapper>
                    <div className="min-w-0">
                        <Heading level={3} className="mb-1 text-xl sm:text-2xl lg:text-3xl">
                            {subBrand.fullName}
                        </Heading>
                        <Text size="lg" className={`bg-gradient-to-r ${subBrand.gradient} bg-clip-text text-transparent font-semibold text-base sm:text-lg`}>
                            {subBrand.tagline}
                        </Text>
                        <Text variant="secondary" className="mt-2 text-sm sm:text-base">
                            {subBrand.description}
                        </Text>
                        {/* Product count indicator when collapsed (mobile only) */}
                        {!isExpanded && (
                            <Text size="sm" className="text-text-tertiary mt-1 sm:hidden">
                                {subBrand.products.length} {subBrand.products.length === 1 ? 'product' : 'products'}
                            </Text>
                        )}
                    </div>
                </div>
                <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-4">
                    {/* Show/Hide Products Button - Visible on all devices */}
                    <Button
                        variant={isExpanded ? "ghost" : "outline"}
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center space-x-2 bg-surface-secondary/50 hover:bg-surface-secondary border-surface-tertiary/30 text-text-primary hover:text-brand-primary px-4 py-2 rounded-lg transition-all duration-200"
                        aria-label={isExpanded ? 'Hide products' : 'Show all products'}
                    >
                        <span className="text-sm font-medium">
                            {isExpanded ? 'Hide Products' : 'Show All Products'}
                        </span>
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                                }`}
                        />
                    </Button>
                    <div className="self-start sm:self-center flex-shrink-0">
                        <Button variant="outline" size="md" asChild>
                            <Link href={`/${subBrand.slug}`} className="inline-flex items-center space-x-2">
                                <span>View All</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Products Grid - Collapsible on all devices */}
            <div
                className={cn(
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-300 overflow-hidden pt-4",
                    isExpanded
                        ? "opacity-100 max-h-[2000px]"
                        : "opacity-0 max-h-0"
                )}
            >
                {subBrand.products.map((product) => (
                    <ProductCard key={product.id} product={product} subBrand={subBrand} />
                ))}
            </div>
        </div>
    )
}

export function ProductsPageContent() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedFilter, setSelectedFilter] = useState<string>("all")

    const allProducts = getAllProducts()
    const filteredProducts = searchQuery
        ? searchProducts(searchQuery)
        : selectedFilter === "all"
            ? allProducts
            : allProducts.filter((product) => product.status === selectedFilter)

    const categories = ["all", "available", "beta", "coming-soon"] as const
    const categoryLabels = {
        all: "All Products",
        available: "Available",
        beta: "Beta",
        "coming-soon": "Coming Soon"
    }

    // Group filtered products by sub-brand
    const filteredBySubBrand = subBrandsData.map(subBrand => ({
        ...subBrand,
        products: subBrand.products.filter(product =>
            searchQuery
                ? filteredProducts.some(fp => fp.id === product.id)
                : selectedFilter === "all" || product.status === selectedFilter
        )
    })).filter(subBrand => subBrand.products.length > 0)

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
                    <Stack spacing="xl" align="center" className="text-center">
                        <div className="animate-fade-in">
                            <Heading level={1} className="mb-6">
                                AI-Powered Business Solutions
                            </Heading>
                            <Text size="xl" variant="secondary" className="max-w-4xl leading-relaxed">
                                Discover our comprehensive suite of intelligent products designed to transform your business operations,
                                enhance customer experiences, and drive sustainable growth across every aspect of your organization.
                            </Text>
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <div className="max-w-2xl mx-auto px-4 sm:px-0">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                                    <Input
                                        placeholder="Search products, features, or solutions..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-12 pr-4 py-3 text-base sm:text-lg bg-surface-secondary/50 border-surface-tertiary/20 focus:border-brand-primary/50 rounded-xl w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                            <div className="flex flex-wrap justify-center gap-2 px-4 sm:px-0">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        variant={selectedFilter === category ? "primary" : "ghost"}
                                        size="sm"
                                        onClick={() => setSelectedFilter(category)}
                                        className="transition-all duration-200 text-xs sm:text-sm"
                                    >
                                        <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                        {categoryLabels[category]}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Stack>
                </Container>
            </Section>

            {/* Products Content */}
            <Section spacing="xl" background="primary">
                <Container>
                    {searchQuery ? (
                        <Stack spacing="xl">
                            <div className="text-center">
                                <Heading level={2} className="mb-4">
                                    Search Results for "{searchQuery}"
                                </Heading>
                                <Text variant="secondary">
                                    Found {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} matching your search
                                </Text>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {filteredProducts.map((product) => {
                                        const subBrand = subBrandsData.find(sb =>
                                            sb.products.some(p => p.id === product.id)
                                        )!
                                        return (
                                            <ProductCard key={product.id} product={product} subBrand={subBrand} />
                                        )
                                    })}
                                </div>
                            ) : (
                                <Card variant="glass" padding="xl" className="text-center">
                                    <Stack spacing="md" align="center">
                                        <Text size="lg" weight="medium">No products found</Text>
                                        <Text variant="secondary">
                                            Try adjusting your search terms or browse all products below.
                                        </Text>
                                        <Button
                                            variant="outline"
                                            onClick={() => setSearchQuery("")}
                                        >
                                            Clear Search
                                        </Button>
                                    </Stack>
                                </Card>
                            )}
                        </Stack>
                    ) : (
                        <Stack spacing="3xl">
                            {selectedFilter !== "all" && (
                                <div className="text-center">
                                    <Heading level={2} className="mb-4">
                                        {categoryLabels[selectedFilter as keyof typeof categoryLabels]} Products
                                    </Heading>
                                    <Text variant="secondary">
                                        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                                    </Text>
                                </div>
                            )}

                            {filteredBySubBrand.map((subBrand) => (
                                <SubBrandSection key={subBrand.id} subBrand={subBrand} />
                            ))}
                        </Stack>
                    )}
                </Container>
            </Section>

            {/* CTA Section */}
            <Section spacing="xl" background="secondary" className="relative overflow-hidden">
                <GradientBackground
                    variant="linear"
                    animate="pulse"
                    className="absolute inset-0 opacity-5"
                />

                <Container className="relative z-10">
                    <Card variant="glass" padding="xl" className="text-center">
                        <Stack spacing="lg" align="center">
                            <Stack spacing="md" align="center">
                                <Heading level={2}>Ready to Transform Your Business?</Heading>
                                <Text size="lg" variant="secondary" className="max-w-2xl">
                                    Join thousands of companies already using our AI-powered solutions to drive growth and operational excellence.
                                </Text>
                            </Stack>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl">
                                <div className="text-center">
                                    <Text size="2xl" weight="bold" className="text-brand-primary">500+</Text>
                                    <Text size="sm" className="text-text-tertiary">Active Customers</Text>
                                </div>
                                <div className="text-center">
                                    <Text size="2xl" weight="bold" className="text-brand-primary">99.9%</Text>
                                    <Text size="sm" className="text-text-tertiary">Uptime SLA</Text>
                                </div>
                                <div className="text-center">
                                    <Text size="2xl" weight="bold" className="text-brand-primary">24/7</Text>
                                    <Text size="sm" className="text-text-tertiary">Expert Support</Text>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full">
                                <Button variant="primary" size="lg" asChild className="w-full sm:w-auto">
                                    <Link href="/contact" className="inline-flex items-center justify-center space-x-2">
                                        <span>Start Your Journey</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                                    <Link href="/about" className="inline-flex items-center justify-center space-x-2">
                                        <span>Learn More About Us</span>
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </Stack>
                    </Card>
                </Container>
            </Section>
        </main>
    )
}