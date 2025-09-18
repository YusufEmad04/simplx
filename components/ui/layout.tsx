import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type HTMLAttributes } from "react"

// Container Component
const containerVariants = cva(
    "mx-auto px-6",
    {
        variants: {
            size: {
                sm: "max-w-screen-sm",
                md: "max-w-screen-md",
                lg: "max-w-screen-lg",
                xl: "max-w-screen-xl",
                "2xl": "max-w-screen-2xl",
                "7xl": "max-w-7xl",
                full: "max-w-full",
            },
            padding: {
                none: "px-0",
                sm: "px-4",
                md: "px-6",
                lg: "px-8",
                xl: "px-12",
            },
        },
        defaultVariants: {
            size: "7xl",
            padding: "md",
        },
    }
)

export interface ContainerProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> { }

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size, padding, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(containerVariants({ size, padding }), className)}
                {...props}
            />
        )
    }
)
Container.displayName = "Container"

// Section Component
const sectionVariants = cva(
    "w-full",
    {
        variants: {
            spacing: {
                none: "",
                sm: "py-8",
                md: "py-12",
                lg: "py-16",
                xl: "py-20",
                "2xl": "py-24",
                "3xl": "py-32",
            },
            background: {
                none: "",
                primary: "bg-surface-primary",
                secondary: "bg-surface-secondary",
                tertiary: "bg-surface-tertiary",
                elevated: "bg-surface-elevated",
            },
        },
        defaultVariants: {
            spacing: "xl",
            background: "none",
        },
    }
)

export interface SectionProps
    extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
    as?: "section" | "div" | "header" | "footer" | "main"
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, spacing, background, as = "section", ...props }, ref) => {
        const Component = as as any

        return (
            <Component
                ref={ref}
                className={cn(sectionVariants({ spacing, background }), className)}
                {...props}
            />
        )
    }
)
Section.displayName = "Section"

// Stack Component (Flexbox vertical layout)
const stackVariants = cva(
    "flex flex-col",
    {
        variants: {
            spacing: {
                none: "gap-0",
                xs: "gap-xs",
                sm: "gap-sm",
                md: "gap-md",
                lg: "gap-lg",
                xl: "gap-xl",
                "2xl": "gap-2xl",
                "3xl": "gap-3xl",
                "4xl": "gap-4xl",
                "5xl": "gap-5xl",
                "6xl": "gap-6xl",
            },
            align: {
                start: "items-start",
                center: "items-center",
                end: "items-end",
                stretch: "items-stretch",
            },
            justify: {
                start: "justify-start",
                center: "justify-center",
                end: "justify-end",
                between: "justify-between",
                around: "justify-around",
                evenly: "justify-evenly",
            },
        },
        defaultVariants: {
            spacing: "md",
            align: "stretch",
            justify: "start",
        },
    }
)

export interface StackProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> { }

export const Stack = forwardRef<HTMLDivElement, StackProps>(
    ({ className, spacing, align, justify, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(stackVariants({ spacing, align, justify }), className)}
                {...props}
            />
        )
    }
)
Stack.displayName = "Stack"

// Inline Component (Flexbox horizontal layout)
const inlineVariants = cva(
    "flex flex-row",
    {
        variants: {
            spacing: {
                none: "gap-0",
                xs: "gap-xs",
                sm: "gap-sm",
                md: "gap-md",
                lg: "gap-lg",
                xl: "gap-xl",
                "2xl": "gap-2xl",
                "3xl": "gap-3xl",
                "4xl": "gap-4xl",
                "5xl": "gap-5xl",
                "6xl": "gap-6xl",
            },
            align: {
                start: "items-start",
                center: "items-center",
                end: "items-end",
                baseline: "items-baseline",
                stretch: "items-stretch",
            },
            justify: {
                start: "justify-start",
                center: "justify-center",
                end: "justify-end",
                between: "justify-between",
                around: "justify-around",
                evenly: "justify-evenly",
            },
            wrap: {
                nowrap: "flex-nowrap",
                wrap: "flex-wrap",
                "wrap-reverse": "flex-wrap-reverse",
            },
        },
        defaultVariants: {
            spacing: "md",
            align: "center",
            justify: "start",
            wrap: "nowrap",
        },
    }
)

export interface InlineProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inlineVariants> { }

export const Inline = forwardRef<HTMLDivElement, InlineProps>(
    ({ className, spacing, align, justify, wrap, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(inlineVariants({ spacing, align, justify, wrap }), className)}
                {...props}
            />
        )
    }
)
Inline.displayName = "Inline"

// Grid Component
const gridVariants = cva(
    "grid",
    {
        variants: {
            cols: {
                1: "grid-cols-1",
                2: "grid-cols-2",
                3: "grid-cols-3",
                4: "grid-cols-4",
                5: "grid-cols-5",
                6: "grid-cols-6",
                12: "grid-cols-12",
            },
            colsMd: {
                1: "md:grid-cols-1",
                2: "md:grid-cols-2",
                3: "md:grid-cols-3",
                4: "md:grid-cols-4",
                5: "md:grid-cols-5",
                6: "md:grid-cols-6",
                12: "md:grid-cols-12",
            },
            gap: {
                none: "gap-0",
                xs: "gap-xs",
                sm: "gap-sm",
                md: "gap-md",
                lg: "gap-lg",
                xl: "gap-xl",
                "2xl": "gap-2xl",
                "3xl": "gap-3xl",
                "4xl": "gap-4xl",
                "5xl": "gap-5xl",
                "6xl": "gap-6xl",
            },
        },
        defaultVariants: {
            cols: 1,
            gap: "md",
        },
    }
)

export interface GridProps
    extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> { }

export const Grid = forwardRef<HTMLDivElement, GridProps>(
    ({ className, cols, colsMd, gap, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(gridVariants({ cols, colsMd, gap }), className)}
                {...props}
            />
        )
    }
)
Grid.displayName = "Grid"

// Center Component (Centers content)
export interface CenterProps extends HTMLAttributes<HTMLDivElement> { }

export const Center = forwardRef<HTMLDivElement, CenterProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex items-center justify-center", className)}
                {...props}
            />
        )
    }
)
Center.displayName = "Center"

// Spacer Component (Flexible space)
export interface SpacerProps extends HTMLAttributes<HTMLDivElement> { }

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex-1", className)}
                {...props}
            />
        )
    }
)
Spacer.displayName = "Spacer"