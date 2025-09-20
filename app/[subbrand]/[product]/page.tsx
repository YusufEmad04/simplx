import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProduct, getSubBrand, subBrandsData } from "@/lib/products-data"
import { ProductPageContent } from "@/components/product-page-content"

interface ProductPageProps {
    params: {
        subbrand: string
        product: string
    }
}

export async function generateStaticParams() {
    const params = []

    for (const subBrand of subBrandsData) {
        for (const product of subBrand.products) {
            params.push({
                subbrand: subBrand.slug,
                product: product.id,
            })
        }
    }

    return params
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { subbrand, product: productId } = await params
    const product = getProduct(subbrand, productId)
    const subBrand = getSubBrand(subbrand)

    if (!product || !subBrand) {
        return {
            title: "Product Not Found - Simplx.tech",
        }
    }

    return {
        title: `${product.name} - ${product.tagline} | ${subBrand.name} | Simplx.tech`,
        description: product.longDescription,
        keywords: [
            product.name.toLowerCase(),
            ...product.features.map(f => f.toLowerCase()),
            product.category.toLowerCase(),
            subBrand.name.toLowerCase(),
            "AI solution",
            "business automation"
        ]
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { subbrand, product: productId } = await params
    const product = getProduct(subbrand, productId)
    const subBrand = getSubBrand(subbrand)

    if (!product || !subBrand) {
        notFound()
    }

    return <ProductPageContent product={product} subBrand={subBrand} />
}