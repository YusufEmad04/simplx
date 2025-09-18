import { Container, Section, Grid, Stack } from "@/components/ui/layout"
import { BrandLogo, Heading, Text } from "@/components/ui/primitives"

export function Footer() {
  return (
    <Section
      as="footer"
      background="primary"
      spacing="xl"
      className="border-t border-border-primary py-12 sm:py-16 md:py-20"
    >
      <Container className="px-4 sm:px-6">
        <Stack spacing="6xl" align="center">
          <Stack spacing="lg" align="center" className="text-center">
            <BrandLogo size="xl" className="text-2xl sm:text-3xl" />
            <Text size="xl" variant="secondary" align="center" className="text-base sm:text-lg md:text-xl">
              Next-Gen AI & Software Agency
            </Text>
          </Stack>

          <Grid cols={1} colsMd={3} gap="3xl" className="w-full space-y-8 md:space-y-0">
            <Stack spacing="lg" align="center">
              <Heading level={4} className="text-text-primary">
                Services
              </Heading>
              <Stack spacing="md" align="center">
                <Text variant="tertiary">Revenue Growth Solutions</Text>
                <Text variant="tertiary">Business Automation</Text>
                <Text variant="tertiary">Process Optimization</Text>
                <Text variant="tertiary">Strategic Consulting</Text>
              </Stack>
            </Stack>

            <Stack spacing="lg" align="center">
              <Heading level={4} className="text-text-primary">
                Company
              </Heading>
              <Stack spacing="md" align="center">
                <Text variant="tertiary">About Us</Text>
                <Text variant="tertiary">Success Stories</Text>
                <Text variant="tertiary">Contact</Text>
                <Text variant="tertiary">Careers</Text>
              </Stack>
            </Stack>

            <Stack spacing="lg" align="center">
              <Heading level={4} className="text-text-primary">
                Global Presence
              </Heading>
              <Stack spacing="md" align="center">
                <Text variant="tertiary">🇦🇪 Dubai, UAE</Text>
                <Text variant="tertiary">🇩🇪 Berlin, Germany</Text>
                <Text variant="tertiary">🇺🇸 Boston, USA</Text>
              </Stack>
            </Stack>
          </Grid>

          <div className="w-full text-center border-t border-border-primary pt-8 sm:pt-12 md:pt-16">
            <Text size="lg" variant="secondary" className="text-sm sm:text-base md:text-lg">
              © 2025 Simplx.tech. All rights reserved.
            </Text>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
