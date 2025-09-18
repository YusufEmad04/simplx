import { ArrowRight, CheckCircle } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"
import { Container, Section, Stack, Grid, Inline } from "@/components/ui/layout"
import { Heading, Text, Card, GradientBackground } from "@/components/ui/primitives"
import { CTAButton } from "@/components/ui/enhanced-button"

export function PricingCTA() {
  const benefits = [
    "Free consultation & business assessment",
    "Custom solution proposal within 48 hours",
    "Dedicated success manager & team",
    "Guaranteed ROI or money-back promise",
  ]

  return (
    <Section
      spacing="3xl"
      background="primary"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Background */}
      <GradientBackground
        variant="linear"
        animate="slow"
        className="absolute inset-0 opacity-20"
      />

      <Container className="relative z-10 px-4 sm:px-6">
        <Stack spacing="6xl" align="center" className="text-center">
          {/* Header */}
          <Stack spacing="3xl" align="center">
            <Heading level={2}>
              <span className="text-text-primary">Ready to Transform</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Your Business?
              </span>
            </Heading>
            <MouseHighlightText className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Join 50+ companies that have achieved 200-400% revenue growth.
            </MouseHighlightText>
          </Stack>

          {/* CTA Card */}
          <Card
            variant="glass"
            padding="xl"
            className="w-full max-w-4xl border-surface-secondary mx-4 sm:mx-0"
          >
            <Stack spacing="3xl" align="center">
              <Heading level={3} className="text-text-primary">
                Start Your AI Journey Today
              </Heading>

              <Grid cols={1} colsMd={2} gap="lg" className="w-full">
                {benefits.map((benefit, index) => (
                  <Inline
                    key={index}
                    spacing="md"
                    align="center"
                    className="text-left group cursor-default"
                  >
                    <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <Text size="xl" variant="secondary" className="group-hover:text-text-primary transition-colors duration-300">
                      {benefit}
                    </Text>
                  </Inline>
                ))}
              </Grid>

              <CTAButton
                size="xl"
                glow
                className="px-4 sm:px-8 md:px-16 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-semibold w-full max-w-sm sm:max-w-none sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 sm:ml-4 h-6 w-6 sm:h-8 sm:w-8" />
              </CTAButton>
            </Stack>
          </Card>

          {/* Contact Info */}
          <Stack spacing="md" align="center" className="text-text-tertiary text-xl">
            <Text className="flex items-center justify-center gap-2">
              <span>📧</span>
              <span>hello@simplx.tech</span>
            </Text>
            <Text className="flex items-center justify-center gap-2 max-w-4xl text-center">
              <span>📱</span>
              <span>+971 50 123 4567 (Gulf) • +49 30 1234 5678 (Europe) • +1 555 123 4567 (USA)</span>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Section>
  )
}