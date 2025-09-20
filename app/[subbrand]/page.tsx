import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getSubBrand, subBrandsData } from "@/lib/products-data"
import { SubBrandPageContent } from "@/components/subbrand-page-content"

interface SubBrandPageProps {
    params: {
        subbrand: string
    }
}

export async function generateStaticParams() {
    return subBrandsData.map((subBrand) => ({
        subbrand: subBrand.slug,
    }))
}

export async function generateMetadata({ params }: SubBrandPageProps): Promise<Metadata> {
    const { subbrand } = await params
    const subBrand = getSubBrand(subbrand)

    if (!subBrand) {
        return {
            title: "Page Not Found - Simplx.tech",
        }
    }

    return {
        title: `${subBrand.fullName} - ${subBrand.tagline} | Simplx.tech`,
        description: `${subBrand.description} Explore our ${subBrand.name} products and solutions designed to transform your business.`,
        keywords: [
            subBrand.name.toLowerCase(),
            ...subBrand.products.map(p => p.name.toLowerCase()),
            "AI solutions",
            "business automation",
            "digital transformation"
        ]
    }
}

export default async function SubBrandPage({ params }: SubBrandPageProps) {
    const { subbrand } = await params
    const subBrand = getSubBrand(subbrand)

    if (!subBrand) {
        notFound()
    }

    return <SubBrandPageContent subBrand={subBrand} />
}