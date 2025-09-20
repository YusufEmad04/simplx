"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container, Inline } from "@/components/ui/layout"
import { Button } from "@/components/ui/enhanced-button"

// Navigation data structure
interface DropdownItem {
    label?: string
    href?: string
    description?: string
    type?: "separator"
}

interface NavigationItem {
    label: string
    href: string
    dropdown?: DropdownItem[]
}

const navigationItems: NavigationItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Products",
        href: "/products",
        dropdown: [
            {
                label: "All Products",
                href: "/products",
                description: "Browse all our solutions"
            },
            { type: "separator" },
            {
                label: "CX Solutions",
                href: "/cx",
                description: "Customer Experience Revolution"
            },
            {
                label: "Data Analytics",
                href: "/data",
                description: "Intelligence from Information"
            },
            {
                label: "Operations",
                href: "/ops",
                description: "Operational Excellence"
            },
            {
                label: "AI Solutions",
                href: "/ai",
                description: "Artificial Intelligence Core"
            },
            {
                label: "Security",
                href: "/security",
                description: "AI-Powered Protection"
            },
            {
                label: "Automation",
                href: "/automation",
                description: "Intelligent Process Automation"
            },
        ]
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
]

interface NavigationProps {
    className?: string
}

export function Navigation({ className }: NavigationProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
    }, [pathname])

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMobileMenuOpen(false)
                setActiveDropdown(null)
            }
        }

        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        setActiveDropdown(null)
    }

    const handleDropdownToggle = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label)
    }

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-surface-primary/80 backdrop-blur-xl border-b border-surface-tertiary/20 shadow-lg"
                    : "bg-transparent",
                className
            )}
        >
            <Container size="7xl" padding="md">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
                    >
                        {/* <div className="w-8 h-8 lg:w-10 lg:h-10">
                            <img
                                src="/placeholder-logo.svg"
                                alt="Simplx Logo"
                                className="w-full h-full object-contain"
                            />
                        </div> */}
                        <span className="text-xl lg:text-2xl font-bold font-space-grotesk">
                            <span className="text-text-primary">Simplx</span>
                            <span className="text-brand-primary">.tech</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <div key={item.label} className="relative group">
                                {item.dropdown ? (
                                    <div className="relative">
                                        <button
                                            className={cn(
                                                "flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                                "hover:bg-surface-secondary/50 hover:text-text-primary",
                                                pathname === item.href || pathname.startsWith(item.href.replace('/products', ''))
                                                    ? "text-brand-primary bg-brand-primary/10"
                                                    : "text-text-secondary"
                                            )}
                                            onMouseEnter={() => setActiveDropdown(item.label)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <span>{item.label}</span>
                                            <ChevronDown
                                                className={cn(
                                                    "w-4 h-4 transition-transform duration-200",
                                                    activeDropdown === item.label && "rotate-180"
                                                )}
                                            />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {activeDropdown === item.label && (
                                            <div
                                                className="absolute top-full left-0 mt-2 w-64 bg-surface-secondary/95 backdrop-blur-xl border border-surface-tertiary/20 rounded-xl shadow-2xl py-2 animate-in fade-in-0 zoom-in-95 duration-200"
                                                onMouseEnter={() => setActiveDropdown(item.label)}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                {item.dropdown.map((dropdownItem, index) => {
                                                    if (dropdownItem.type === "separator") {
                                                        return (
                                                            <div key={index} className="my-2 h-px bg-surface-tertiary/20" />
                                                        )
                                                    }

                                                    if (!dropdownItem.href) return null

                                                    return (
                                                        <Link
                                                            key={dropdownItem.href}
                                                            href={dropdownItem.href}
                                                            className={cn(
                                                                "flex items-start px-4 py-3 text-sm transition-colors duration-200",
                                                                "hover:bg-surface-tertiary/30 hover:text-text-primary",
                                                                pathname === dropdownItem.href
                                                                    ? "text-brand-primary bg-brand-primary/10"
                                                                    : "text-text-secondary"
                                                            )}
                                                        >
                                                            <div className="flex-1">
                                                                <div className="font-medium text-text-primary">
                                                                    {dropdownItem.label}
                                                                </div>
                                                                {dropdownItem.description && (
                                                                    <div className="text-xs text-text-tertiary mt-1">
                                                                        {dropdownItem.description}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                            "hover:bg-surface-secondary/50 hover:text-text-primary",
                                            pathname === item.href
                                                ? "text-brand-primary bg-brand-primary/10"
                                                : "text-text-secondary"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button variant="primary" size="md" asChild>
                            <Link href="/contact" className="inline-flex items-center space-x-2">
                                <span>Get Started</span>
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-surface-secondary/50 transition-colors duration-200"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-surface-primary/95 backdrop-blur-xl border-b border-surface-tertiary/20 shadow-2xl animate-in slide-in-from-top-2 duration-200">
                        <div className="px-6 py-4 space-y-2">
                            {navigationItems.map((item) => (
                                <div key={item.label} className="space-y-2">
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                className={cn(
                                                    "flex items-center justify-between w-full px-4 py-3 rounded-lg text-left transition-colors duration-200",
                                                    "hover:bg-surface-secondary/50",
                                                    pathname === item.href || pathname.startsWith(item.href.replace('/products', ''))
                                                        ? "text-brand-primary bg-brand-primary/10"
                                                        : "text-text-primary"
                                                )}
                                                onClick={() => handleDropdownToggle(item.label)}
                                            >
                                                <span className="font-medium">{item.label}</span>
                                                <ChevronDown
                                                    className={cn(
                                                        "w-4 h-4 transition-transform duration-200",
                                                        activeDropdown === item.label && "rotate-180"
                                                    )}
                                                />
                                            </button>

                                            {activeDropdown === item.label && (
                                                <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top-1 duration-200">
                                                    {item.dropdown.map((dropdownItem, index) => {
                                                        if (dropdownItem.type === "separator") {
                                                            return (
                                                                <div key={index} className="my-2 h-px bg-surface-tertiary/20" />
                                                            )
                                                        }

                                                        if (!dropdownItem.href) return null

                                                        return (
                                                            <Link
                                                                key={dropdownItem.href}
                                                                href={dropdownItem.href}
                                                                className={cn(
                                                                    "block px-4 py-2 rounded-lg text-sm transition-colors duration-200",
                                                                    "hover:bg-surface-secondary/50",
                                                                    pathname === dropdownItem.href
                                                                        ? "text-brand-primary bg-brand-primary/10"
                                                                        : "text-text-secondary"
                                                                )}
                                                            >
                                                                <div className="font-medium text-text-primary">
                                                                    {dropdownItem.label}
                                                                </div>
                                                                {dropdownItem.description && (
                                                                    <div className="text-xs text-text-tertiary mt-1">
                                                                        {dropdownItem.description}
                                                                    </div>
                                                                )}
                                                            </Link>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "block px-4 py-3 rounded-lg font-medium transition-colors duration-200",
                                                "hover:bg-surface-secondary/50",
                                                pathname === item.href
                                                    ? "text-brand-primary bg-brand-primary/10"
                                                    : "text-text-primary"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile CTA */}
                            <div className="pt-4 border-t border-surface-tertiary/20">
                                <Button variant="primary" size="lg" fullWidth asChild>
                                    <Link href="/contact" className="inline-flex items-center justify-center space-x-2">
                                        <span>Get Started</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    )
}