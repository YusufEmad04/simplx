import { Metadata } from "next"
import { Container, Section, Stack } from "@/components/ui/layout"
import { Heading, Text } from "@/components/ui/primitives"

export const metadata: Metadata = {
    title: "Contact Us - Simplx.tech | Get Started Today",
    description: "Ready to transform your business? Contact our team to discuss your AI and automation needs.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-surface-primary text-text-primary pt-16 lg:pt-20">
            <Section spacing="xl" background="primary">
                <Container>
                    <Stack spacing="lg" align="center" className="text-center">
                        <Heading level={1}>Contact Us</Heading>
                        <Text size="xl" variant="secondary" className="max-w-3xl">
                            Ready to transform your business with AI-powered solutions? Let's discuss how we can help.
                        </Text>
                        <Text variant="secondary" className="max-w-2xl">
                            This page is under construction. Please check back soon for our contact form and details.
                        </Text>
                    </Stack>
                </Container>
            </Section>
        </main>
    )
}