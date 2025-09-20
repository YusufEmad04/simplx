"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, ArrowRight, ExternalLink } from "lucide-react"
import { subBrandsData, getAllProducts, searchProducts, Product, SubBrand, iconMap } from "@/lib/products-data"
import { Container, Section, Stack, Grid, Inline } from "@/components/ui/layout"
import { Heading, Text, Card, IconWrapper, GradientBackground } from "@/components/ui/primitives"
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
            <Stack spacing="md" className="h-full">
                {/* Product Header */}
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                        <IconWrapper
                            size="md"
                            variant="primary"
                            className={`bg-gradient-to-r ${subBrand.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                            <IconComponent className="w-6 h-6" />
                        </IconWrapper>
                        <div className="flex-1">
                            <Heading level={4} className="text-text-primary group-hover:text-white transition-colors">
                                {product.name}
                            </Heading>
                            <Text size="sm" className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent font-medium`}>
                                {product.tagline}
                            </Text>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs px-2 py-1 rounded-full bg-surface-tertiary/30">
                        <span className="text-text-tertiary">{subBrand.name}</span>
                    </div>
                </div>

                {/* Product Description */}
                <Text variant="secondary" className="flex-1 line-clamp-3">
                    {product.description}
                </Text>

                {/* Product Features */}
                <div className="space-y-2">
                    <Text size="sm" weight="medium" className="text-text-primary">
                        Key Features:
                    </Text>
                    <div className="grid grid-cols-2 gap-1">
                        {product.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                                <Text size="xs" className="text-text-tertiary truncate">
                                    {feature}
                                </Text>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing and Status */}
                <div className="flex items-center justify-between pt-2 border-t border-surface-tertiary/20">
                    <div>
                        <Text size="sm" weight="semibold" className="text-text-primary">
                            {product.pricing.startingPrice}
                        </Text>
                        <Text size="xs" className="text-text-tertiary">
                            {product.pricing.pricingModel}
                        </Text>
                    </div>
                    <div className="flex items-center space-x-2">
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
                    </div>
                </div>

                {/* CTA Button */}
                <Button
                    variant="ghost"
                    size="md"
                    className="w-full group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-all duration-300"
                    asChild
                >
                    <Link href={`/${subBrand.slug}/${product.id}`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
    const SubBrandIconComponent = iconMap[subBrand.iconName]

    return (
        <div className="space-y-6">
            {/* Sub-brand Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <IconWrapper
                        size="lg"
                        variant="primary"
                        className={`bg-gradient-to-r ${subBrand.gradient} text-white`}
                    >
                        <SubBrandIconComponent className="w-8 h-8" />
                    </IconWrapper>
                    <div>
                        <Heading level={3} className="text-text-primary">
                            {subBrand.fullName}
                        </Heading>
                        <Text className={`bg-gradient-to-r ${subBrand.gradient} bg-clip-text text-transparent font-medium`}>
                            {subBrand.tagline}
                        </Text>
                        <Text variant="secondary" className="mt-1 max-w-2xl">
                            {subBrand.description}
                        </Text>
                    </div>
                </div>
                <Button variant="outline" size="md" asChild>
                    <Link href={`/${subBrand.slug}`}>
                        <span>View All</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>

            {/* Products Grid */}
            <Grid cols={1} colsMd={3} gap="lg" className="lg:grid-cols-3">
                {subBrand.products.map((product) => (
                    <ProductCard key={product.id} product={product} subBrand={subBrand} />
                ))}
            </Grid>
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

    const categories = ["all", "available", "beta", "coming-soon"]
    const categoryLabels = {
        all: "All Products",
        available: "Available",
        beta: "Beta",
        "coming-soon": "Coming Soon"
    }

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
                        {/* Header */}
                        <Stack spacing="lg" align="center">
                            <div className="animate-fade-in">
                                <Heading level={1} className="max-w-4xl">
                                    <span className="text-text-primary">Discover Our</span>
                                    <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                                        {" "}AI-Powered Solutions
                                    </span>
                                </Heading>
                            </div>
                            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                <Text size="xl" variant="secondary" className="max-w-3xl leading-relaxed">
                                    Transform your business with our comprehensive suite of AI-powered products designed to solve real-world challenges across every aspect of your operations.
                                </Text>
                            </div>
                        </Stack>

                        {/* Search and Filter */}
                        <div className="w-full max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                                <Input
                                    type="text"
                                    placeholder="Search products, features, or categories..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 py-3 text-lg bg-surface-secondary/50 backdrop-blur-lg border-surface-tertiary/30"
                                />
                            </div>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedFilter === category ? "primary" : "ghost"}
                                    size="md"
                                    onClick={() => setSelectedFilter(category)}
                                    className="min-w-[120px]"
                                >
                                    {categoryLabels[category as keyof typeof categoryLabels]}
                                </Button>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                            <div className="text-center">
                                <Text size="2xl" weight="bold" className="text-brand-primary">
                                    {allProducts.length}
                                </Text>
                                <Text variant="tertiary">Total Products</Text>
                            </div>
                            <div className="text-center">
                                <Text size="2xl" weight="bold" className="text-brand-accent">
                                    {subBrandsData.length}
                                </Text>
                                <Text variant="tertiary">Product Categories</Text>
                            </div>
                            <div className="text-center">
                                <Text size="2xl" weight="bold" className="text-purple-400">
                                    {allProducts.filter(p => p.status === "available").length}
                                </Text>
                                <Text variant="tertiary">Available Now</Text>
                            </div>
                        </div>
                    </Stack>
                </Container>
            </Section>

            {/* Products Content */}
            <Section spacing="xl" background="primary">
                <Container>
                    {searchQuery ? (
                        /* Search Results */
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Heading level={2}>
                                        Search Results for "{searchQuery}"
                                    </Heading>
                                    <Text variant="secondary">
                                        Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                                    </Text>
                                </div>
                                <Button
                                    variant="ghost"
                                    onClick={() => setSearchQuery("")}
                                    className="text-text-tertiary hover:text-text-primary"
                                >
                                    Clear Search
                                </Button>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <Grid cols={1} colsMd={3} gap="lg" className="lg:grid-cols-3">
                                    {filteredProducts.map((product) => {
                                        const subBrand = subBrandsData.find(sb => sb.products.includes(product))!
                                        return (
                                            <ProductCard key={product.id} product={product} subBrand={subBrand} />
                                        )
                                    })}
                                </Grid>
                            ) : (
                                <Card variant="glass" padding="xl" className="text-center">
                                    <Stack spacing="md" align="center">
                                        <Text size="lg" className="text-text-secondary">
                                            No products found matching "{searchQuery}"
                                        </Text>
                                        <Text variant="tertiary">
                                            Try searching for different keywords or browse our categories below.
                                        </Text>
                                        <Button variant="outline" onClick={() => setSearchQuery("")}>
                                            Browse All Products
                                        </Button>
                                    </Stack>
                                </Card>
                            )}
                        </div>
                    ) : (
                        /* Sub-brand Sections */
                        <Stack spacing="3xl">
                            {subBrandsData.map((subBrand, index) => (
                                <div
                                    key={subBrand.id}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <SubBrandSection subBrand={subBrand} />
                                </div>
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
                            <Heading level={2} className="max-w-3xl">
                                Ready to Transform Your Business?
                            </Heading>
                            <Text size="lg" variant="secondary" className="max-w-2xl">
                                Get started with our AI-powered solutions today and see the difference intelligent automation can make for your organization.
                            </Text>
                            <Inline spacing="md" justify="center" className="flex-wrap">
                                <Button variant="primary" size="lg" asChild>
                                    <Link href="/contact">
                                        <span>Get Started</span>
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="/about">
                                        Learn More About Us
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