# Simplx.tech Visual Brand Guidelines

## Overview
This document serves as the definitive guide for maintaining visual brand consistency across all Simplx.tech touchpoints. These guidelines ensure our brand identity remains cohesive, professional, and instantly recognizable across digital and print materials.

## Brand Identity

### Brand Story
Simplx.tech transforms complex business challenges into simple, elegant solutions through cutting-edge AI and automation. We bridge the gap between sophisticated technology and practical business outcomes.

### Brand Positioning
- **Innovative**: Leading-edge AI and automation solutions
- **Accessible**: Complex technology made simple
- **Trustworthy**: Reliable, professional, and results-driven
- **Future-focused**: Modern approach to business transformation

### Brand Voice & Tone
- **Professional yet approachable**: Expert without being intimidating
- **Clear and concise**: Direct communication, no unnecessary jargon
- **Confident**: Assured in our capabilities and solutions
- **Solution-oriented**: Focus on outcomes and benefits

## Logo & Brand Mark

### Primary Logo
The Simplx.tech logo consists of two distinct elements:
- **Simplx** - Primary wordmark in brand typography
- **.tech** - Technology emphasis in brand primary blue (#3B82F6)

### Logo Usage Rules
```
✅ DO:
- Always use the complete "Simplx.tech" format
- Maintain ".tech" in brand primary blue
- Ensure adequate white space (minimum 24px height)
- Use on high-contrast backgrounds
- Maintain aspect ratio when scaling

❌ DON'T:
- Separate "Simplx" from ".tech"
- Change the color of ".tech" portion
- Use on low-contrast backgrounds
- Stretch or distort the logo
- Use below minimum size requirements
```

### Logo Variations
- **Primary Logo**: Full color on light backgrounds
- **Reversed Logo**: White version for dark backgrounds
- **Monochrome**: Single color for limited color applications

### Clear Space
Maintain clear space equal to the height of the ".tech" portion around the entire logo on all sides.

### Minimum Sizes
- **Digital**: 120px width minimum
- **Print**: 1 inch (25.4mm) width minimum
- **Favicon**: 32px × 32px minimum

## Color Palette

### Primary Brand Colors

#### Brand Primary Blue
- **Hex**: #3B82F6
- **RGB**: 59, 130, 246
- **HSL**: 217.2°, 91.2%, 59.8%
- **Usage**: CTAs, links, ".tech" in logo, primary emphasis

#### Brand Secondary Blue
- **Hex**: #1E293B
- **RGB**: 30, 41, 59
- **HSL**: 217.2°, 32.6%, 17.5%
- **Usage**: Secondary buttons, supporting elements

#### Brand Accent Green
- **Hex**: #22C55E
- **RGB**: 34, 197, 94
- **HSL**: 142°, 76%, 36%
- **Usage**: Success states, growth metrics, positive indicators

### Surface Colors

#### Background Colors
- **Primary Surface**: #020617 (Slate-950) - Main backgrounds
- **Secondary Surface**: #1E293B (Slate-800) - Card backgrounds
- **Tertiary Surface**: #334155 (Slate-700) - Elevated elements
- **Elevated Surface**: #475569 (Slate-600) - Interactive elements

### Text Colors

#### Primary Text Hierarchy
- **Primary Text**: #FEFEFE - Headlines, important information
- **Secondary Text**: #94A3B8 - Body text, descriptions
- **Tertiary Text**: #CBD5E1 - Captions, supporting information

### Color Usage Guidelines

#### Primary Blue (#3B82F6)
```
✅ Use for:
- Call-to-action buttons
- Active states
- Links and navigation
- ".tech" in logo
- Primary emphasis elements

❌ Avoid for:
- Large background areas
- Body text
- Decorative elements
- Secondary actions
```

#### Accent Green (#22C55E)
```
✅ Use for:
- Success messages
- Growth indicators
- Positive metrics
- Completion states
- Achievement badges

❌ Avoid for:
- Primary CTAs
- Error states
- Navigation elements
- Brand typography
```

### Color Accessibility
All color combinations meet WCAG AA standards with a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.

---

## Gradient System

### Primary Gradients

#### Brand Gradients (Text Effects)
```css
/* Primary Brand Gradient */
bg-gradient-to-r from-text-primary to-brand-primary

/* Accent Brand Gradient */
bg-gradient-to-r from-brand-primary to-brand-accent

/* Glow Effect Gradient */
bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400
```

#### Background Gradients
```css
/* Radial Background */
bg-gradient-radial from-brand-primary/20 via-transparent to-transparent

/* Linear Background */
bg-gradient-to-r from-brand-primary/20 to-brand-accent/20

/* Conic Background */
bg-gradient-conic from-brand-primary/20 via-brand-accent/20 to-brand-primary/20

/* Mesh Background */
bg-gradient-to-br from-brand-primary/10 via-purple-500/10 to-brand-accent/10
```

### Sub-Brand Gradients

#### Product Category Gradients
```css
/* Tech/Blue Products */
from-blue-500 to-cyan-400

/* Growth/Green Products */
from-emerald-500 to-teal-400

/* Creative/Purple Products */
from-purple-500 to-pink-400

/* Marketing/Orange Products */
from-orange-500 to-red-400

/* Strategy/Red Products */
from-red-500 to-rose-400

/* Operations/Yellow Products */
from-yellow-500 to-orange-400
```

### Section-Specific Gradients

#### Dark Section Backgrounds
```css
/* Primary Dark Gradient */
bg-gradient-to-br from-slate-900 to-slate-950

/* Interactive Card Hover */
bg-gradient-to-br from-blue-900/50 to-emerald-900/30

/* Hover State Background */
bg-gradient-to-r from-emerald-500/20 to-blue-500/20
```

#### Interactive Element Gradients
```css
/* Primary Button Gradient */
bg-gradient-to-br from-blue-500 to-emerald-400

/* Icon Background Gradient */
bg-gradient-to-br from-blue-500 to-emerald-400

/* Outer Glow Ring */
bg-gradient-to-r from-brand-primary via-brand-accent to-purple-500
```

### Special Effect Gradients

#### Text Highlighting
```css
/* Multi-color Text Gradient */
bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400

/* Result Emphasis */
bg-gradient-to-r from-blue-400 to-emerald-400
```

#### UI Enhancement
```css
/* Inner Surface Gradient */
bg-gradient-to-br from-surface-tertiary to-surface-secondary

/* Progress/Accent Line */
bg-gradient-to-r from-brand-primary to-brand-accent
```

### Gradient Animation

#### Animated Gradients
- Use `animate-gradient-x` class for moving gradient effects
- Background size: 200% 200% for smooth transitions
- Animation duration: 3-4 seconds with ease-in-out timing
- Apply to background elements, not text gradients

### Gradient Usage Guidelines

```
✅ DO:
- Use gradients sparingly for maximum impact
- Maintain proper contrast ratios with overlaid text
- Combine with appropriate opacity levels (10-30% for backgrounds)
- Apply bg-clip-text text-transparent for text gradients
- Use blur effects (blur-sm, blur-3xl) for atmospheric gradients
- Test gradients across different devices and screens

❌ DON'T:
- Overuse gradients throughout the interface
- Apply gradients to body text for readability
- Use high-contrast gradients for large background areas
- Animate text gradients as it affects readability
- Mix too many gradient directions in one section
```

---

## Typography

### Primary Typeface: Space Grotesk
- **Usage**: Headlines, brand text, buttons, emphasis
- **Characteristics**: Modern, geometric, tech-forward
- **Weights Available**: 400, 500, 600, 700, 800

### Secondary Typeface: Inter
- **Usage**: Body text, UI elements, descriptions
- **Characteristics**: Highly legible, versatile, professional
- **Weights Available**: 400, 500, 600, 700

### Typography Hierarchy

#### Display Typography
- **7XL (72px)**: Hero headlines, major announcements
- **6XL (60px)**: Page titles, primary headlines
- **5XL (48px)**: Section headers, subheadings

#### Heading Typography
- **4XL (36px)**: H1 - Primary page headings
- **3XL (30px)**: H2 - Major section headings
- **2XL (24px)**: H3 - Subsection headings
- **XL (20px)**: H4 - Component headings

#### Body Typography
- **Large (18px)**: Large body text, introductions
- **Base (16px)**: Default body text
- **Small (14px)**: Supporting text, captions
- **Extra Small (12px)**: Fine print, metadata

### Typography Best Practices
```
✅ DO:
- Use Space Grotesk for headlines and brand elements
- Use Inter for body text and UI elements
- Maintain consistent line heights (1.4-1.6)
- Ensure proper contrast ratios
- Use appropriate font weights for hierarchy

❌ DON'T:
- Mix more than two typefaces
- Use decorative fonts for body text
- Set text below 14px for body content
- Use all caps for long text
- Ignore responsive typography scaling
```

## Iconography

### Icon Style
- **Style**: Outline/stroke-based icons
- **Weight**: 2px stroke weight
- **Corners**: Rounded (2px radius)
- **Size**: 16px, 20px, 24px, 32px, 48px
- **Color**: Inherit from context or brand colors

### Icon Usage Guidelines
```
✅ DO:
- Use consistent stroke weights
- Maintain pixel-perfect alignment
- Use appropriate sizes for context
- Ensure icons are accessible
- Use semantic, recognizable symbols

❌ DON'T:
- Mix different icon styles
- Use overly complex icons
- Make icons too small to recognize
- Use decorative icons for functional elements
```

### Icon Library
Primary icons from Lucide React:
- **Navigation**: ChevronRight, ArrowRight, ExternalLink
- **Actions**: Calendar, ShoppingBag, CheckCircle
- **Status**: Star, Clock, Users, TrendingUp
- **System**: Menu, X, Search, Filter

## Visual Elements

### Border Radius
- **Small (2px)**: Small UI elements, badges
- **Base (4px)**: Buttons, form elements
- **Large (8px)**: Cards, containers
- **Extra Large (12px)**: Large cards, modals
- **2XL (16px)**: Hero elements, feature cards
- **Full (999px)**: Circular elements, pills

### Shadows & Elevation
```css
/* Light Shadow */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Medium Shadow */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Large Shadow */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Glow Effect */
box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
```

### Spacing System
Based on 4px increments:
- **XS (4px)**: Tight spacing, small gaps
- **SM (8px)**: Related elements
- **MD (16px)**: Component spacing
- **LG (24px)**: Section spacing
- **XL (32px)**: Large section spacing
- **2XL (48px)**: Major section breaks
- **3XL (64px)**: Page-level spacing

## Layout & Grid

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1400px
- **Large Desktop**: > 1400px

### Container Sizes
- **SM**: 640px max-width
- **MD**: 768px max-width
- **LG**: 1024px max-width
- **XL**: 1280px max-width
- **2XL**: 1536px max-width
- **7XL**: 1920px max-width

### Grid Guidelines
- **Mobile**: Single column, stacked layout
- **Tablet**: 2-3 column layouts
- **Desktop**: 3-4 column layouts
- **Gaps**: 16px mobile, 24px tablet, 32px desktop

## Photography & Imagery

### Photography Style
- **Style**: Clean, modern, professional
- **Composition**: Minimal, focused subjects
- **Color**: Desaturated with brand color accents
- **Lighting**: Bright, even lighting
- **Context**: Technology, business, people working

### Image Guidelines
```
✅ DO:
- Use high-resolution images (2x for retina)
- Maintain consistent color treatment
- Focus on people and technology
- Use authentic, non-staged photography
- Optimize for web performance

❌ DON'T:
- Use overly saturated colors
- Include distracting backgrounds
- Use generic stock photography
- Forget alt text for accessibility
- Use images below 1200px width
```

### Image Dimensions
- **Hero Images**: 1920×1080px (16:9)
- **Card Images**: 800×600px (4:3)
- **Profile Images**: 400×400px (1:1)
- **Thumbnails**: 200×200px (1:1)

## Applications

### Digital Applications
- **Website**: Primary brand expression
- **Mobile App**: Simplified, touch-friendly
- **Email**: Simplified logo, web-safe fonts
- **Social Media**: Consistent profile imagery
- **Digital Ads**: High contrast, clear CTAs

### Print Applications
- **Business Cards**: Minimal, professional
- **Letterhead**: Subtle brand presence
- **Brochures**: Full brand expression
- **Signage**: High contrast, legible

### Brand Asset Locations
```
/assets/
  /logos/
    - logo-primary.svg
    - logo-white.svg
    - logo-monochrome.svg
    - favicon.ico
  /colors/
    - brand-palette.ase
    - web-colors.css
  /fonts/
    - SpaceGrotesk/
    - Inter/
  /icons/
    - icon-library.zip
```

## Quality Control

### Brand Compliance Checklist
- [ ] Logo used correctly with proper ".tech" styling
- [ ] Colors match exact brand specifications
- [ ] Typography follows established hierarchy
- [ ] Spacing follows 4px increment system
- [ ] Images meet quality and style standards
- [ ] Accessibility standards are met
- [ ] Mobile responsiveness is maintained

### Common Brand Violations
```
❌ Incorrect logo usage
❌ Wrong color values
❌ Inconsistent typography
❌ Poor image quality
❌ Inadequate contrast ratios
❌ Missing mobile optimization
❌ Inconsistent spacing
```

### Brand Review Process
1. **Design Review**: Check against guidelines
2. **Accessibility Audit**: Verify WCAG compliance
3. **Mobile Testing**: Test across devices
4. **Brand Approval**: Final brand team review

## Contact & Resources

### Brand Custodian
Design Team - design@simplx.tech

### Resource Downloads
- Brand Asset Library
- Logo Files (SVG, PNG, EPS)
- Color Palettes (ASE, CSS)
- Typography Files
- Icon Library

### Version Control
- **Document Version**: 1.0
- **Last Updated**: September 2025
- **Next Review**: December 2025

---

*These brand guidelines ensure Simplx.tech maintains a consistent, professional, and recognizable visual identity across all touchpoints. For questions or clarifications, contact the design team.*