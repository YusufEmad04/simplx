import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type ButtonHTMLAttributes } from "react"

// Enhanced Button Component using design tokens
const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-primary",
    {
        variants: {
            variant: {
                primary: "bg-brand-primary text-brand-primary-foreground hover:bg-interactive-primary-hover shadow-md hover:shadow-lg",
                secondary: "bg-brand-secondary text-text-primary hover:bg-interactive-secondary-hover border border-border-primary",
                accent: "bg-brand-accent text-brand-accent-foreground hover:opacity-90 shadow-md hover:shadow-lg",
                outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-primary-foreground",
                ghost: "text-text-primary hover:bg-surface-tertiary hover:text-text-primary",
                link: "text-brand-primary hover:text-interactive-primary-hover underline-offset-4 hover:underline",
                destructive: "bg-interactive-destructive text-text-primary hover:bg-interactive-destructive-hover shadow-md",
                glow: "bg-gradient-to-r from-brand-primary to-brand-accent text-brand-primary-foreground shadow-glow hover:shadow-glow-strong animate-pulse-glow",
            },
            size: {
                sm: "h-9 px-3 text-sm",
                md: "h-11 px-6 text-base",
                lg: "h-12 px-8 text-lg",
                xl: "h-14 px-10 text-xl",
                icon: "h-11 w-11",
            },
            fullWidth: {
                true: "w-full",
                false: "",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            fullWidth: false,
        },
    }
)

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, fullWidth }), className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

// CTA Button with special styling
export interface CTAButtonProps extends ButtonProps {
    glow?: boolean
}

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
    ({ className, variant = "glow", glow = true, ...props }, ref) => {
        return (
            <Button
                className={cn(
                    glow && "relative overflow-hidden",
                    glow && "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:animate-shimmer",
                    className
                )}
                variant={variant}
                ref={ref}
                {...props}
            />
        )
    }
)
CTAButton.displayName = "CTAButton"

// Icon Button
export interface IconButtonProps extends ButtonProps {
    icon: React.ReactNode
    label?: string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className, icon, label, size = "icon", variant = "ghost", ...props }, ref) => {
        return (
            <Button
                className={cn("", className)}
                size={size}
                variant={variant}
                ref={ref}
                aria-label={label}
                {...props}
            >
                {icon}
            </Button>
        )
    }
)
IconButton.displayName = "IconButton"

// Floating Action Button
export interface FABProps extends ButtonProps {
    icon: React.ReactNode
    label?: string
}

export const FAB = forwardRef<HTMLButtonElement, FABProps>(
    ({ className, icon, label, variant = "primary", size = "lg", ...props }, ref) => {
        return (
            <Button
                className={cn(
                    "fixed bottom-6 right-6 rounded-full shadow-xl z-50 hover:scale-110 transition-transform",
                    className
                )}
                variant={variant}
                size={size}
                ref={ref}
                aria-label={label}
                {...props}
            >
                {icon}
            </Button>
        )
    }
)
FAB.displayName = "FAB"

// Button Group
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical"
    attached?: boolean
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
    ({ className, orientation = "horizontal", attached = false, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "inline-flex",
                    orientation === "horizontal" ? "flex-row" : "flex-col",
                    attached && orientation === "horizontal" && "[&>*:not(:first-child)]:ml-[-1px] [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:rounded-l-none",
                    attached && orientation === "vertical" && "[&>*:not(:first-child)]:mt-[-1px] [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)]:rounded-t-none",
                    !attached && (orientation === "horizontal" ? "gap-2" : "gap-1"),
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
ButtonGroup.displayName = "ButtonGroup"