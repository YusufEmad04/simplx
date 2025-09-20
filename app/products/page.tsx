import { Metadata } from "next"
import { ProductsPageContent } from "@/components/products-page-content"

export const metadata: Metadata = {
    title: "Products - Simplx.tech | AI-Powered Business Solutions",
    description: "Explore our comprehensive suite of AI-powered products across CX, Data Analytics, Operations, AI Solutions, Security, and Automation. Transform your business with intelligent solutions.",
    keywords: ["AI products", "business automation", "data analytics", "customer experience", "cybersecurity", "workflow automation"]
}

export default function ProductsPage() {
    return <ProductsPageContent />
}