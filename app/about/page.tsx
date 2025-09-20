import { Metadata } from "next"
import { Container, Section, Stack } from "@/components/ui/layout"
import { Heading, Text } from "@/components/ui/primitives"

export const metadata: Metadata = {
    title: "About Us - Simplx.tech | AI & Software Agency",
    description: "Learn about Simplx.tech, our mission to transform businesses with AI-powered solutions, and our expert team.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-surface-primary text-text-primary pt-16 lg:pt-20">
            <Section spacing="xl" background="primary">
                <Container>
                    <Stack spacing="lg" align="center" className="text-center">
                        <Heading level={1}>About Simplx.tech</Heading>
                        <Text size="xl" variant="secondary" className="max-w-3xl">
                            We're building the future of business automation with AI-powered solutions that drive real growth and efficiency.
                        </Text>
                        <Text variant="secondary" className="max-w-2xl">
                            This page is under construction. Please visit our contact page to learn more about our services.
                        </Text>
                    </Stack>
                </Container>
            </Section>
        </main>
    )
}