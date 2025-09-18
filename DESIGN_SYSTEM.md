# Simplx.tech Design System

## Overview
This document outlines the visual design system and brand guidelines for Simplx.tech. This system ensures consistency across all pages and components while providing scalable patterns for future development.

## Brand Identity

### Core Values
- **Innovation**: Cutting-edge AI and automation solutions
- **Simplicity**: Complex problems, simple solutions
- **Technology**: Modern, forward-thinking approach
- **Trust**: Reliable and professional service

### Brand Name
**Simplx.tech** - The ".tech" portion is always styled in brand primary blue to emphasize our technology focus.

## Color System

### Brand Colors
Our color system is built around a sophisticated dark theme with bright accent colors:

```css
/* Primary Brand Colors */
--brand-primary: 217.2 91.2% 59.8%     /* Blue #3B82F6 - Primary CTA, links, emphasis */
--brand-secondary: 217.2 32.6% 17.5%   /* Dark Blue #1E293B - Secondary actions */
--brand-accent: 142 76% 36%             /* Green #22C55E - Success, growth, positive metrics */
```

### Surface Colors
```css
--surface-primary: 222.2 84% 4.9%      /* Slate-950 #020617 - Main background */
--surface-secondary: 215 28% 17%        /* Slate-800 #1E293B - Card backgrounds */
--surface-tertiary: 215 25% 27%         /* Slate-700 #334155 - Elevated elements */
--surface-elevated: 220 13% 18%         /* Subtle elevation with glass effect */
```

### Text Colors
```css
--text-primary: 210 40% 98%             /* White #FEFEFE - Headlines, important text */
--text-secondary: 215.4 16.3% 46.9%     /* Slate-400 #94A3B8 - Body text, descriptions */
--text-tertiary: 215 20.2% 65.1%        /* Slate-300 #CBD5E1 - Secondary info, captions */
```

### Interactive States
```css
--interactive-primary: var(--brand-primary)        /* Default primary state */
--interactive-primary-hover: 217.2 91.2% 65%       /* Hover state - slightly lighter */
--interactive-secondary: var(--brand-secondary)     /* Secondary elements */
--interactive-destructive: 0 62.8% 30.6%          /* Error/warning states */
```

## Typography

### Font Stack
- **Primary**: Space Grotesk - Headlines, brand text, buttons
- **Secondary**: Inter - Body text, UI elements
- **Monospace**: JetBrains Mono - Code, technical content

### Type Scale
```css
/* Display Sizes */
--font-size-7xl: 4.5rem    /* 72px - Hero headlines */
--font-size-6xl: 3.75rem   /* 60px - Page titles */
--font-size-5xl: 3rem      /* 48px - Section headers */

/* Heading Sizes */
--font-size-4xl: 2.25rem   /* 36px - H1 */
--font-size-3xl: 1.875rem  /* 30px - H2 */
--font-size-2xl: 1.5rem    /* 24px - H3 */
--font-size-xl: 1.25rem    /* 20px - H4 */

/* Body Sizes */
--font-size-lg: 1.125rem   /* 18px - Large body text */
--font-size-base: 1rem     /* 16px - Default body text */
--font-size-sm: 0.875rem   /* 14px - Small text */
--font-size-xs: 0.75rem    /* 12px - Captions */
```

### Font Weights
```css
--font-weight-normal: 400     /* Body text */
--font-weight-medium: 500     /* Emphasized text */
--font-weight-semibold: 600   /* Secondary headings */
--font-weight-bold: 700       /* Primary headings */
--font-weight-extrabold: 800  /* Display text */
```

## Spacing System

Our spacing system follows a 4px base unit with consistent ratios:

```css
--space-xs: 0.25rem    /* 4px */
--space-sm: 0.5rem     /* 8px */
--space-md: 1rem       /* 16px */
--space-lg: 1.5rem     /* 24px */
--space-xl: 2rem       /* 32px */
--space-2xl: 3rem      /* 48px */
--space-3xl: 4rem      /* 64px */
--space-4xl: 5rem      /* 80px */
--space-5xl: 6rem      /* 96px */
--space-6xl: 8rem      /* 128px */
```

### Usage Guidelines
- **xs-sm**: Element padding, small gaps
- **md-lg**: Component spacing, typography margins
- **xl-2xl**: Component margins, section spacing
- **3xl-6xl**: Large section spacing, page layout

## Component System

### Layout Components

#### Container
Provides consistent max-width and padding across pages.
```tsx
<Container size="7xl" padding="md">
  {/* Content */}
</Container>
```

Variants:
- `size`: `sm` | `md` | `lg` | `xl` | `2xl` | `7xl` | `full`
- `padding`: `none` | `sm` | `md` | `lg` | `xl`

#### Section
Semantic page sections with consistent spacing.
```tsx
<Section spacing="xl" background="primary">
  {/* Section content */}
</Section>
```

Variants:
- `spacing`: `none` | `sm` | `md` | `lg` | `xl` | `2xl` | `3xl`
- `background`: `none` | `primary` | `secondary` | `tertiary` | `elevated`

#### Stack & Inline
Flexible layout components for vertical and horizontal layouts.
```tsx
<Stack spacing="lg" align="center">
  <Inline spacing="md" justify="between">
    {/* Content */}
  </Inline>
</Stack>
```

#### Grid
Responsive grid layouts with semantic breakpoints.
```tsx
<Grid cols={1} colsMd={3} gap="xl">
  {/* Grid items */}
</Grid>
```

### Typography Components

#### Heading
Semantic headings with consistent styling.
```tsx
<Heading level={1} gradient="primary">
  Business Growth
</Heading>
```

Variants:
- `level`: `1` | `2` | `3` | `4` | `5` | `6`
- `gradient`: `none` | `primary` | `accent` | `glow`

#### Text
Flexible text component for body content.
```tsx
<Text size="lg" variant="secondary" weight="medium">
  Body text content
</Text>
```

#### BrandLogo
Consistent brand representation.
```tsx
<BrandLogo size="lg" />
```

### UI Components

#### Card
Flexible container with elevation and hover effects.
```tsx
<Card variant="glass" padding="lg" hover="lift">
  {/* Card content */}
</Card>
```

Variants:
- `variant`: `default` | `elevated` | `outlined` | `glass`
- `padding`: `none` | `sm` | `md` | `lg` | `xl`
- `hover`: `none` | `lift` | `glow` | `scale`

#### Enhanced Button
Rich button component with multiple variants.
```tsx
<Button variant="primary" size="lg" fullWidth={false}>
  Get Started
</Button>
```

Variants:
- `variant`: `primary` | `secondary` | `accent` | `outline` | `ghost` | `glow`
- `size`: `sm` | `md` | `lg` | `xl` | `icon`

## Visual Effects

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3)
--shadow-glow-strong: 0 0 40px rgba(59, 130, 246, 0.6)
```

### Border Radius
```css
--radius-sm: 0.125rem     /* 2px - Small elements */
--radius-base: 0.25rem    /* 4px - Default */
--radius-lg: 0.5rem       /* 8px - Cards, buttons */
--radius-xl: 0.75rem      /* 12px - Large cards */
--radius-2xl: 1rem        /* 16px - Hero elements */
--radius-full: 9999px     /* Circular */
```

### Animations
Pre-defined animations for consistent motion:
- `animate-float`: Gentle floating motion
- `animate-slide-up`: Entrance animation
- `animate-fade-in`: Fade in animation
- `animate-gradient-x`: Animated gradients
- `animate-pulse-glow`: Glowing effect

## Brand Guidelines

### Logo Usage
- Always use the `BrandLogo` component
- Maintain proper contrast against backgrounds
- Ensure ".tech" portion is always in brand primary blue
- Minimum size: 24px height
- Provide adequate whitespace around logo

### Color Usage
- **Brand Primary Blue**: CTAs, links, active states, ".tech" in logo
- **Brand Accent Green**: Success states, growth metrics, positive indicators
- **Text Primary White**: Headlines, important information
- **Text Secondary Gray**: Body text, descriptions
- **Surface Colors**: Create depth and hierarchy

### Typography Guidelines
- Use Space Grotesk for headlines and brand text
- Use Inter for body text and UI elements
- Maintain proper contrast ratios (4.5:1 minimum)
- Use appropriate line heights for readability
- Limit font weights to maintain consistency

### Component Usage
- Use semantic HTML elements through our component system
- Maintain consistent spacing using design tokens
- Apply hover effects consistently across interactive elements
- Use loading states and micro-interactions
- Ensure accessibility with proper focus states

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1400px
- **Large Desktop**: > 1400px

### Mobile-First Approach
- Start with mobile layout
- Use `colsMd` props for responsive grids
- Stack elements vertically on mobile
- Reduce font sizes and spacing appropriately
- Maintain touch targets (44px minimum)

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 ratio)
- Interactive elements have sufficient contrast
- Focus states are clearly visible

### Focus Management
- Keyboard navigation supported
- Focus rings use brand primary color
- Logical tab order maintained

### Semantic HTML
- Use appropriate heading hierarchy
- Provide alt text for images
- Use ARIA labels where necessary

## Development Guidelines

### Component Creation
1. Use design tokens for all styling
2. Implement variants with class-variance-authority
3. Support all semantic props (size, variant, etc.)
4. Include proper TypeScript types
5. Document component API

### Styling Rules
1. Use semantic CSS custom properties
2. Avoid hardcoded values
3. Use Tailwind utility classes
4. Follow mobile-first responsive design
5. Include hover and focus states

### Testing Components
1. Test all variants and combinations
2. Verify responsive behavior
3. Check accessibility compliance
4. Validate TypeScript types
5. Document edge cases

This design system provides a comprehensive foundation for building consistent, scalable, and maintainable UI components while preserving the Simplx.tech brand identity.