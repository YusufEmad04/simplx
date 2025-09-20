import React from "react"
import Link from "next/link"
import { ArrowLeft, Clock, CheckCircle } from "lucide-react"
import { SubBrand, Product, iconMap } from "@/lib/products-data"
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
    FeatureDot
} from "@/components/ui/primitives"
import {
    ExploreProductsButton,
    ExploreProductButton,
    GetStartedButton,
    GetStartedTodayButton,
    ScheduleConsultationButton,
    LearnMoreButton
} from "@/components/ui/cta-buttons"
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
    const IconComponent = iconMap[product.iconName]

    return (
        <Card
            variant="glass"
            padding="lg"
            hover="lift"
            className={cn(
                "group h-full transition-all duration-300 hover:shadow-2xl",
                featured && "ring-2 ring-brand-primary/20"
            )}
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
                <div className="mt-auto">
                    {featured ? (
                        <ExploreProductButton
                            href={`/${subBrand.slug}/${product.id}`}
                            className="w-full"
                        />
                    ) : (
                        <LearnMoreButton
                            href={`/${subBrand.slug}/${product.id}`}
                            className="w-full"
                        />
                    )}
                </div>
            </Stack>
        </Card>
    )
}

export function SubBrandPageContent({ subBrand }: SubBrandPageContentProps) {
    const featuredProduct = subBrand.products[0] // First product as featured
    const otherProducts = subBrand.products.slice(1)
    const SubBrandIconComponent = iconMap[subBrand.iconName]

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
                            <Breadcrumb>
                                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                                <BreadcrumbItem>/</BreadcrumbItem>
                                <BreadcrumbItem href="/products">Products</BreadcrumbItem>
                                <BreadcrumbItem>/</BreadcrumbItem>
                                <BreadcrumbItem active>{subBrand.name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>

                        {/* Hero Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Content */}
                            <Stack spacing="lg">
                                <div className="animate-fade-in">
                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                                        <IconWrapper
                                            size="xl"
                                            variant="primary"
                                            className={`bg-gradient-to-r ${subBrand.gradient} text-white self-start sm:self-center`}
                                        >
                                            {React.createElement(SubBrandIconComponent, { className: "w-10 h-10 lg:w-12 lg:h-12" })}
                                        </IconWrapper>
                                        <div className="min-w-0">
                                            <Heading level={1} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                                                {subBrand.fullName}
                                            </Heading>
                                            <Text size="xl" className={`bg-gradient-to-r ${subBrand.gradient} bg-clip-text text-transparent font-semibold text-lg sm:text-xl lg:text-2xl`}>
                                                {subBrand.tagline}
                                            </Text>
                                        </div>
                                    </div>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                                    <Text size="lg" variant="secondary" className="leading-relaxed mb-6 text-base sm:text-lg">
                                        {subBrand.description}
                                    </Text>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                                    <Stack spacing="sm">
                                        <Text size="sm" weight="medium" className="text-text-primary">
                                            Product Categories:
                                        </Text>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {subBrand.products.slice(0, 6).map((product, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <FeatureDot size="sm" gradient={subBrand.gradient} />
                                                    <Text size="sm" className="text-text-secondary">
                                                        {product.name}
                                                    </Text>
                                                </div>
                                            ))}
                                        </div>
                                    </Stack>
                                </div>

                                <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <ExploreProductsButton
                                            href="#products"
                                            className="w-full sm:w-auto"
                                        />
                                        <GetStartedButton
                                            href="/contact"
                                            variant="outline"
                                            className="w-full sm:w-auto"
                                        />
                                    </div>
                                </div>
                            </Stack>

                            {/* Right Visual */}
                            <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
                                <div className={`w-full h-80 lg:h-96 rounded-3xl bg-gradient-to-br ${subBrand.gradient} opacity-20`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {React.createElement(SubBrandIconComponent, {
                                        className: "w-32 h-32 lg:w-40 lg:h-40 text-white opacity-30 animate-float"
                                    })}
                                </div>
                                {/* Floating elements */}
                                <div className="absolute inset-0">
                                    {[...Array(8)].map((_, i) => {
                                        const positions = [
                                            { left: "15%", top: "20%" },
                                            { left: "80%", top: "10%" },
                                            { left: "10%", top: "60%" },
                                            { left: "85%", top: "70%" },
                                            { left: "40%", top: "15%" },
                                            { left: "20%", top: "80%" },
                                            { left: "70%", top: "85%" },
                                            { left: "60%", top: "25%" },
                                        ]
                                        return (
                                            <div
                                                key={i}
                                                className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${subBrand.gradient} opacity-60 animate-pulse`}
                                                style={{
                                                    left: positions[i].left,
                                                    top: positions[i].top,
                                                    animationDelay: `${i * 0.3}s`,
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

            {/* Featured Product Section */}
            {featuredProduct && (
                <Section spacing="xl" background="secondary" id="products">
                    <Container>
                        <Stack spacing="xl">
                            <div className="text-center">
                                <Heading level={2} className="mb-4">Featured Solution</Heading>
                                <Text size="lg" variant="secondary" className="max-w-3xl mx-auto">
                                    Discover our flagship {subBrand.name.toLowerCase()} solution designed to transform your business operations.
                                </Text>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <ProductCard product={featuredProduct} subBrand={subBrand} featured={true} />
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
                                <Heading level={2} className="mb-4">Complete {subBrand.name} Suite</Heading>
                                <Text size="lg" variant="secondary" className="max-w-3xl mx-auto">
                                    Explore our comprehensive range of {subBrand.name.toLowerCase()} products and find the perfect solution for your needs.
                                </Text>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {otherProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} subBrand={subBrand} />
                                ))}
                            </div>
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
                            <Stack spacing="md" align="center">
                                <Heading level={2}>Ready to Transform Your {subBrand.name}?</Heading>
                                <Text size="lg" variant="secondary" className="max-w-2xl">
                                    Join thousands of businesses already using our {subBrand.name.toLowerCase()} solutions to drive growth and operational excellence.
                                </Text>
                            </Stack>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-2 text-sm text-text-tertiary">
                                <div className="flex items-center justify-start sm:justify-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>Expert consultation</span>
                                </div>
                                <span className="hidden sm:inline">•</span>
                                <div className="flex items-center justify-start sm:justify-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>Custom implementation</span>
                                </div>
                                <span className="hidden sm:inline">•</span>
                                <div className="flex items-center justify-start sm:justify-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>Ongoing support</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <GetStartedTodayButton
                                    href="/contact"
                                    className="w-full sm:w-auto"
                                />
                                <ScheduleConsultationButton
                                    href="/contact"
                                    className="w-full sm:w-auto"
                                />
                            </div>

                            <Text size="sm" className="text-text-tertiary">
                                Have questions? <Link href="/contact" className="text-brand-primary hover:underline">Talk to our {subBrand.name.toLowerCase()} experts</Link>
                            </Text>
                        </Stack>
                    </Card>
                </Container>
            </Section>
        </main>
    )
}