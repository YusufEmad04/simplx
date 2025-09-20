import { Users, BarChart3, Cog, Brain, Shield, Zap, MessageSquare, Eye, Target, TrendingUp, Search, UserCheck, Database, PieChart, Workflow, Cpu, Lock, Activity, Bot, FileText, Globe, Smartphone, AlertTriangle, Network, Layers, Code } from "lucide-react"

// Icon mapping for serialization
export const iconMap = {
    Users,
    BarChart3,
    Cog,
    Brain,
    Shield,
    Zap,
    MessageSquare,
    Eye,
    Target,
    TrendingUp,
    Search,
    UserCheck,
    Database,
    PieChart,
    Workflow,
    Cpu,
    Lock,
    Activity,
    Bot,
    FileText,
    Globe,
    Smartphone,
    AlertTriangle,
    Network,
    Layers,
    Code,
} as const

export type IconName = keyof typeof iconMap

// Product interface
export interface Product {
    id: string
    name: string
    tagline: string
    description: string
    longDescription: string
    features: string[]
    benefits: string[]
    useCases: string[]
    pricing: {
        startingPrice: string
        pricingModel: string
        features: string[]
    }
    iconName: IconName
    gradient: string
    category: string
    status: "available" | "coming-soon" | "beta"
    image?: string
    demoUrl?: string
    documentation?: string
}

// Sub-brand interface
export interface SubBrand {
    id: string
    name: string
    fullName: string
    tagline: string
    description: string
    gradient: string
    iconName: IconName
    slug: string
    products: Product[]
}

// Complete products and sub-brands data
export const subBrandsData: SubBrand[] = [
    {
        id: "cx",
        name: "CX",
        fullName: "Simplx CX",
        tagline: "Customer Experience Revolution",
        description: "Transform customer interactions with AI-powered solutions that create memorable experiences and drive loyalty.",
        gradient: "from-blue-500 to-cyan-400",
        iconName: "Users",
        slug: "cx",
        products: [
            {
                id: "ai-chatbot",
                name: "AI Chatbot Pro",
                tagline: "Intelligent Customer Support",
                description: "24/7 AI-powered customer support that understands context and provides human-like responses.",
                longDescription: "Our AI Chatbot Pro leverages advanced natural language processing to understand customer queries and provide accurate, contextual responses. It integrates seamlessly with your existing systems and learns from every interaction to continuously improve.",
                features: [
                    "Natural Language Processing",
                    "Multi-language Support",
                    "24/7 Availability",
                    "Human Handoff",
                    "Analytics Dashboard",
                    "CRM Integration"
                ],
                benefits: [
                    "Reduce support costs by 60%",
                    "Improve response time to seconds",
                    "Handle unlimited concurrent conversations",
                    "Increase customer satisfaction scores"
                ],
                useCases: [
                    "E-commerce customer support",
                    "SaaS product assistance",
                    "Lead qualification",
                    "FAQ automation"
                ],
                pricing: {
                    startingPrice: "$99/month",
                    pricingModel: "Per conversation",
                    features: ["Unlimited conversations", "CRM integration", "Analytics", "24/7 support"]
                },
                iconName: "MessageSquare",
                gradient: "from-blue-500 to-cyan-400",
                category: "Customer Support",
                status: "available"
            },
            {
                id: "sentiment-analyzer",
                name: "Sentiment Analyzer",
                tagline: "Real-time Emotion Intelligence",
                description: "Monitor customer sentiment across all touchpoints and respond proactively to improve satisfaction.",
                longDescription: "Our Sentiment Analyzer uses advanced machine learning to analyze customer emotions in real-time across all communication channels. Get actionable insights to improve customer experience and prevent churn.",
                features: [
                    "Real-time Analysis",
                    "Multi-channel Monitoring",
                    "Emotion Detection",
                    "Trend Analytics",
                    "Alert System",
                    "API Integration"
                ],
                benefits: [
                    "Prevent customer churn",
                    "Improve product quality",
                    "Enhance team training",
                    "Increase retention rates"
                ],
                useCases: [
                    "Social media monitoring",
                    "Support ticket analysis",
                    "Product feedback review",
                    "Brand reputation management"
                ],
                pricing: {
                    startingPrice: "$149/month",
                    pricingModel: "Per data source",
                    features: ["5 data sources", "Real-time alerts", "Custom reports", "API access"]
                },
                iconName: "Eye",
                gradient: "from-blue-500 to-cyan-400",
                category: "Analytics",
                status: "available"
            },
            {
                id: "personalization-engine",
                name: "Personalization Engine",
                tagline: "Tailored Customer Experiences",
                description: "Create unique, personalized experiences for every customer based on their behavior and preferences.",
                longDescription: "Our Personalization Engine analyzes customer data to deliver tailored experiences across all touchpoints. Increase engagement and conversions with AI-powered personalization.",
                features: [
                    "Behavioral Analysis",
                    "Content Personalization",
                    "Product Recommendations",
                    "A/B Testing",
                    "Real-time Optimization",
                    "Cross-platform Sync"
                ],
                benefits: [
                    "Increase conversion rates by 40%",
                    "Improve customer engagement",
                    "Boost average order value",
                    "Enhance user experience"
                ],
                useCases: [
                    "E-commerce recommendations",
                    "Content personalization",
                    "Email marketing",
                    "Website optimization"
                ],
                pricing: {
                    startingPrice: "$199/month",
                    pricingModel: "Per active user",
                    features: ["10K active users", "A/B testing", "Custom algorithms", "Analytics"]
                },
                iconName: "Target",
                gradient: "from-blue-500 to-cyan-400",
                category: "Personalization",
                status: "available"
            }
        ]
    },
    {
        id: "data",
        name: "Data",
        fullName: "Simplx Data",
        tagline: "Intelligence from Information",
        description: "Turn raw data into actionable insights with advanced analytics and machine learning solutions.",
        gradient: "from-emerald-500 to-teal-400",
        iconName: "BarChart3",
        slug: "data",
        products: [
            {
                id: "predictive-analytics",
                name: "Predictive Analytics Suite",
                tagline: "Future-Ready Insights",
                description: "Forecast trends, predict outcomes, and make data-driven decisions with advanced predictive models.",
                longDescription: "Our Predictive Analytics Suite combines machine learning algorithms with your business data to provide accurate forecasts and insights. Anticipate market changes, customer behavior, and business opportunities before they happen.",
                features: [
                    "Machine Learning Models",
                    "Time Series Forecasting",
                    "Anomaly Detection",
                    "Custom Algorithms",
                    "Real-time Predictions",
                    "Data Visualization"
                ],
                benefits: [
                    "Reduce forecasting errors by 75%",
                    "Identify opportunities early",
                    "Optimize inventory management",
                    "Improve business planning"
                ],
                useCases: [
                    "Sales forecasting",
                    "Demand planning",
                    "Risk assessment",
                    "Market analysis"
                ],
                pricing: {
                    startingPrice: "$299/month",
                    pricingModel: "Per model deployed",
                    features: ["5 models", "Real-time updates", "Custom training", "API access"]
                },
                iconName: "TrendingUp",
                gradient: "from-emerald-500 to-teal-400",
                category: "Analytics",
                status: "available"
            },
            {
                id: "data-discovery",
                name: "Data Discovery Platform",
                tagline: "Uncover Hidden Insights",
                description: "Automatically discover patterns, relationships, and insights in your data with AI-powered analysis.",
                longDescription: "Our Data Discovery Platform uses advanced AI to automatically analyze your data, identify patterns, and surface actionable insights. No data science expertise required.",
                features: [
                    "Automated Analysis",
                    "Pattern Recognition",
                    "Correlation Discovery",
                    "Visual Insights",
                    "Data Profiling",
                    "Smart Recommendations"
                ],
                benefits: [
                    "Discover insights 10x faster",
                    "No technical expertise required",
                    "Automated data quality checks",
                    "Actionable recommendations"
                ],
                useCases: [
                    "Business intelligence",
                    "Market research",
                    "Operational optimization",
                    "Customer analysis"
                ],
                pricing: {
                    startingPrice: "$199/month",
                    pricingModel: "Per data source",
                    features: ["10 data sources", "Automated insights", "Custom reports", "Collaboration tools"]
                },
                iconName: "Search",
                gradient: "from-emerald-500 to-teal-400",
                category: "Data Analysis",
                status: "available"
            },
            {
                id: "realtime-dashboard",
                name: "Real-time Dashboard",
                tagline: "Live Business Intelligence",
                description: "Monitor your business metrics in real-time with customizable, interactive dashboards.",
                longDescription: "Our Real-time Dashboard provides instant visibility into your key business metrics. Create custom visualizations, set up alerts, and share insights across your organization.",
                features: [
                    "Real-time Updates",
                    "Custom Visualizations",
                    "Interactive Charts",
                    "Alert System",
                    "Mobile Responsive",
                    "Team Collaboration"
                ],
                benefits: [
                    "Make faster decisions",
                    "Improve operational efficiency",
                    "Reduce time to insight",
                    "Enhance team alignment"
                ],
                useCases: [
                    "Executive reporting",
                    "Operations monitoring",
                    "Sales tracking",
                    "Performance management"
                ],
                pricing: {
                    startingPrice: "$149/month",
                    pricingModel: "Per dashboard",
                    features: ["5 dashboards", "Real-time data", "Custom alerts", "Team sharing"]
                },
                iconName: "PieChart",
                gradient: "from-emerald-500 to-teal-400",
                category: "Visualization",
                status: "available"
            }
        ]
    },
    {
        id: "ops",
        name: "Ops",
        fullName: "Simplx Ops",
        tagline: "Operational Excellence",
        description: "Streamline operations with intelligent automation and process optimization solutions.",
        gradient: "from-purple-500 to-pink-400",
        iconName: "Cog",
        slug: "ops",
        products: [
            {
                id: "workflow-automation",
                name: "Workflow Automation",
                tagline: "Intelligent Process Automation",
                description: "Automate complex business processes with AI-powered workflow optimization and execution.",
                longDescription: "Our Workflow Automation platform eliminates manual work by intelligently automating your business processes. Create, deploy, and manage automated workflows that adapt and improve over time.",
                features: [
                    "Visual Workflow Designer",
                    "AI-powered Optimization",
                    "Integration Hub",
                    "Error Handling",
                    "Performance Analytics",
                    "Compliance Tracking"
                ],
                benefits: [
                    "Reduce operational costs by 50%",
                    "Eliminate human errors",
                    "Improve process efficiency",
                    "Ensure compliance"
                ],
                useCases: [
                    "Invoice processing",
                    "Employee onboarding",
                    "Quality assurance",
                    "Compliance monitoring"
                ],
                pricing: {
                    startingPrice: "$249/month",
                    pricingModel: "Per workflow",
                    features: ["10 workflows", "Unlimited executions", "Analytics", "Priority support"]
                },
                iconName: "Workflow",
                gradient: "from-purple-500 to-pink-400",
                category: "Automation",
                status: "available"
            },
            {
                id: "resource-optimizer",
                name: "Resource Optimizer",
                tagline: "Smart Resource Management",
                description: "Optimize resource allocation and utilization with AI-driven insights and recommendations.",
                longDescription: "Our Resource Optimizer uses machine learning to analyze your resource usage patterns and provide intelligent recommendations for optimal allocation and cost reduction.",
                features: [
                    "Resource Tracking",
                    "Usage Analytics",
                    "Cost Optimization",
                    "Capacity Planning",
                    "Automated Scaling",
                    "Predictive Insights"
                ],
                benefits: [
                    "Reduce resource costs by 35%",
                    "Improve utilization rates",
                    "Prevent resource bottlenecks",
                    "Optimize capacity planning"
                ],
                useCases: [
                    "Cloud infrastructure",
                    "Workforce management",
                    "Equipment utilization",
                    "Budget optimization"
                ],
                pricing: {
                    startingPrice: "$179/month",
                    pricingModel: "Per resource type",
                    features: ["5 resource types", "Real-time monitoring", "Cost analysis", "Optimization recommendations"]
                },
                iconName: "Activity",
                gradient: "from-purple-500 to-pink-400",
                category: "Optimization",
                status: "available"
            },
            {
                id: "performance-monitor",
                name: "Performance Monitor",
                tagline: "Continuous Performance Insights",
                description: "Monitor and optimize system and business performance with comprehensive analytics and alerts.",
                longDescription: "Our Performance Monitor provides 360-degree visibility into your systems and processes. Track KPIs, identify bottlenecks, and receive intelligent recommendations for improvement.",
                features: [
                    "Real-time Monitoring",
                    "KPI Tracking",
                    "Bottleneck Detection",
                    "Performance Alerts",
                    "Trend Analysis",
                    "Custom Metrics"
                ],
                benefits: [
                    "Improve system reliability",
                    "Reduce downtime by 80%",
                    "Optimize performance",
                    "Enhance user experience"
                ],
                useCases: [
                    "Application monitoring",
                    "Business process tracking",
                    "Service level management",
                    "Quality assurance"
                ],
                pricing: {
                    startingPrice: "$129/month",
                    pricingModel: "Per monitored system",
                    features: ["10 systems", "Real-time alerts", "Custom dashboards", "Historical data"]
                },
                iconName: "Activity",
                gradient: "from-purple-500 to-pink-400",
                category: "Monitoring",
                status: "available"
            }
        ]
    },
    {
        id: "ai",
        name: "AI",
        fullName: "Simplx AI",
        tagline: "Artificial Intelligence Core",
        description: "Custom AI solutions including natural language processing and computer vision applications.",
        gradient: "from-orange-500 to-red-400",
        iconName: "Brain",
        slug: "ai",
        products: [
            {
                id: "custom-ai-models",
                name: "Custom AI Models",
                tagline: "Tailored Intelligence Solutions",
                description: "Build and deploy custom AI models specifically designed for your unique business challenges.",
                longDescription: "Our Custom AI Models service provides end-to-end development of AI solutions tailored to your specific needs. From data preparation to model deployment and maintenance.",
                features: [
                    "Custom Model Development",
                    "Data Preprocessing",
                    "Model Training",
                    "API Deployment",
                    "Performance Monitoring",
                    "Continuous Learning"
                ],
                benefits: [
                    "Solve unique business problems",
                    "Achieve competitive advantage",
                    "Improve decision accuracy",
                    "Automate complex tasks"
                ],
                useCases: [
                    "Fraud detection",
                    "Quality control",
                    "Price optimization",
                    "Content generation"
                ],
                pricing: {
                    startingPrice: "$999/month",
                    pricingModel: "Custom pricing",
                    features: ["Custom development", "Training data support", "Model optimization", "Dedicated support"]
                },
                iconName: "Cpu",
                gradient: "from-orange-500 to-red-400",
                category: "AI Development",
                status: "available"
            },
            {
                id: "nlp-suite",
                name: "NLP Processing Suite",
                tagline: "Advanced Language Understanding",
                description: "Extract insights from text data with our comprehensive natural language processing toolkit.",
                longDescription: "Our NLP Processing Suite provides state-of-the-art natural language processing capabilities including sentiment analysis, entity extraction, topic modeling, and text classification.",
                features: [
                    "Text Classification",
                    "Entity Recognition",
                    "Sentiment Analysis",
                    "Topic Modeling",
                    "Language Detection",
                    "Text Summarization"
                ],
                benefits: [
                    "Process unstructured data",
                    "Extract valuable insights",
                    "Automate content analysis",
                    "Improve customer understanding"
                ],
                useCases: [
                    "Document processing",
                    "Social media analysis",
                    "Customer feedback analysis",
                    "Content categorization"
                ],
                pricing: {
                    startingPrice: "$199/month",
                    pricingModel: "Per 1M tokens",
                    features: ["1M tokens/month", "Multiple languages", "API access", "Custom models"]
                },
                iconName: "FileText",
                gradient: "from-orange-500 to-red-400",
                category: "NLP",
                status: "available"
            },
            {
                id: "computer-vision",
                name: "Computer Vision Platform",
                tagline: "Visual Intelligence Solutions",
                description: "Analyze and understand images and videos with advanced computer vision algorithms.",
                longDescription: "Our Computer Vision Platform provides comprehensive image and video analysis capabilities including object detection, image classification, and visual quality control.",
                features: [
                    "Object Detection",
                    "Image Classification",
                    "Face Recognition",
                    "Quality Control",
                    "Video Analysis",
                    "Custom Training"
                ],
                benefits: [
                    "Automate visual inspection",
                    "Improve quality control",
                    "Enhance security systems",
                    "Reduce manual work"
                ],
                useCases: [
                    "Manufacturing QC",
                    "Security monitoring",
                    "Medical imaging",
                    "Retail analytics"
                ],
                pricing: {
                    startingPrice: "$299/month",
                    pricingModel: "Per 1K images",
                    features: ["10K images/month", "Multiple models", "API access", "Custom training"]
                },
                iconName: "Eye",
                gradient: "from-orange-500 to-red-400",
                category: "Computer Vision",
                status: "available"
            }
        ]
    },
    {
        id: "security",
        name: "Security",
        fullName: "Simplx Security",
        tagline: "AI-Powered Protection",
        description: "Advanced cybersecurity solutions using AI to detect, prevent, and respond to threats.",
        gradient: "from-red-500 to-rose-400",
        iconName: "Shield",
        slug: "security",
        products: [
            {
                id: "threat-detection",
                name: "AI Threat Detection",
                tagline: "Intelligent Security Monitoring",
                description: "Detect and respond to security threats in real-time using advanced AI algorithms.",
                longDescription: "Our AI Threat Detection system continuously monitors your digital infrastructure for security threats, using machine learning to identify patterns and anomalies that traditional security tools miss.",
                features: [
                    "Real-time Monitoring",
                    "Anomaly Detection",
                    "Behavioral Analysis",
                    "Threat Intelligence",
                    "Automated Response",
                    "Forensic Analysis"
                ],
                benefits: [
                    "Detect threats 10x faster",
                    "Reduce false positives",
                    "Prevent data breaches",
                    "Minimize security incidents"
                ],
                useCases: [
                    "Network security",
                    "Endpoint protection",
                    "Cloud security",
                    "Data loss prevention"
                ],
                pricing: {
                    startingPrice: "$399/month",
                    pricingModel: "Per endpoint",
                    features: ["100 endpoints", "24/7 monitoring", "Threat intelligence", "Incident response"]
                },
                iconName: "AlertTriangle",
                gradient: "from-red-500 to-rose-400",
                category: "Threat Detection",
                status: "available"
            },
            {
                id: "vulnerability-scanner",
                name: "Smart Vulnerability Scanner",
                tagline: "Proactive Security Assessment",
                description: "Automatically identify and prioritize security vulnerabilities across your infrastructure.",
                longDescription: "Our Smart Vulnerability Scanner uses AI to continuously assess your systems for security weaknesses, providing intelligent prioritization and remediation guidance.",
                features: [
                    "Continuous Scanning",
                    "Risk Prioritization",
                    "Automated Assessment",
                    "Compliance Checking",
                    "Remediation Guidance",
                    "Integration APIs"
                ],
                benefits: [
                    "Identify vulnerabilities early",
                    "Prioritize critical risks",
                    "Ensure compliance",
                    "Reduce attack surface"
                ],
                useCases: [
                    "Infrastructure scanning",
                    "Application security",
                    "Compliance auditing",
                    "Risk management"
                ],
                pricing: {
                    startingPrice: "$249/month",
                    pricingModel: "Per asset",
                    features: ["500 assets", "Weekly scans", "Risk scoring", "Compliance reports"]
                },
                iconName: "Lock",
                gradient: "from-red-500 to-rose-400",
                category: "Vulnerability Management",
                status: "available"
            },
            {
                id: "compliance-monitor",
                name: "Compliance Monitor",
                tagline: "Automated Compliance Management",
                description: "Ensure continuous compliance with industry standards and regulations using AI-powered monitoring.",
                longDescription: "Our Compliance Monitor automatically tracks your compliance status across multiple frameworks, providing real-time insights and automated reporting for audits.",
                features: [
                    "Multi-framework Support",
                    "Continuous Monitoring",
                    "Automated Reporting",
                    "Risk Assessment",
                    "Audit Trail",
                    "Remediation Tracking"
                ],
                benefits: [
                    "Ensure continuous compliance",
                    "Reduce audit preparation time",
                    "Minimize compliance risks",
                    "Automate reporting"
                ],
                useCases: [
                    "GDPR compliance",
                    "HIPAA monitoring",
                    "SOC 2 audits",
                    "Industry regulations"
                ],
                pricing: {
                    startingPrice: "$199/month",
                    pricingModel: "Per framework",
                    features: ["3 frameworks", "Monthly reports", "Risk tracking", "Audit support"]
                },
                iconName: "UserCheck",
                gradient: "from-red-500 to-rose-400",
                category: "Compliance",
                status: "available"
            }
        ]
    },
    {
        id: "automation",
        name: "Automation",
        fullName: "Simplx Automation",
        tagline: "Intelligent Process Automation",
        description: "End-to-end automation solutions that eliminate manual work and optimize workflows.",
        gradient: "from-yellow-500 to-orange-400",
        iconName: "Zap",
        slug: "automation",
        products: [
            {
                id: "rpa-platform",
                name: "RPA Platform",
                tagline: "Robotic Process Automation",
                description: "Automate repetitive tasks with intelligent bots that work 24/7 without errors.",
                longDescription: "Our RPA Platform enables you to create, deploy, and manage software robots that automate repetitive, rule-based tasks across your applications and systems.",
                features: [
                    "Visual Bot Designer",
                    "Cross-platform Automation",
                    "Intelligent OCR",
                    "Exception Handling",
                    "Performance Analytics",
                    "Centralized Management"
                ],
                benefits: [
                    "Reduce processing time by 90%",
                    "Eliminate human errors",
                    "Lower operational costs",
                    "Improve accuracy"
                ],
                useCases: [
                    "Data entry automation",
                    "Invoice processing",
                    "Report generation",
                    "System integration"
                ],
                pricing: {
                    startingPrice: "$199/month",
                    pricingModel: "Per bot",
                    features: ["5 bots", "Unlimited automation", "Analytics", "Support"]
                },
                iconName: "Bot",
                gradient: "from-yellow-500 to-orange-400",
                category: "RPA",
                status: "available"
            },
            {
                id: "smart-workflows",
                name: "Smart Workflows",
                tagline: "Adaptive Business Processes",
                description: "Create intelligent workflows that adapt and optimize themselves based on performance data.",
                longDescription: "Our Smart Workflows platform uses AI to continuously optimize your business processes, learning from execution patterns to improve efficiency and outcomes.",
                features: [
                    "Adaptive Optimization",
                    "Process Mining",
                    "Smart Routing",
                    "Performance Learning",
                    "Exception Management",
                    "Integration Hub"
                ],
                benefits: [
                    "Improve process efficiency",
                    "Reduce cycle times",
                    "Enhance quality",
                    "Optimize resource usage"
                ],
                useCases: [
                    "Order processing",
                    "Customer onboarding",
                    "Approval workflows",
                    "Quality control"
                ],
                pricing: {
                    startingPrice: "$299/month",
                    pricingModel: "Per workflow",
                    features: ["10 workflows", "AI optimization", "Process analytics", "Custom integrations"]
                },
                iconName: "Network",
                gradient: "from-yellow-500 to-orange-400",
                category: "Workflow",
                status: "available"
            },
            {
                id: "integration-hub",
                name: "Integration Hub",
                tagline: "Seamless System Integration",
                description: "Connect all your systems and applications with intelligent, no-code integration platform.",
                longDescription: "Our Integration Hub provides a comprehensive platform for connecting disparate systems, with pre-built connectors and intelligent data transformation capabilities.",
                features: [
                    "Pre-built Connectors",
                    "No-code Integration",
                    "Data Transformation",
                    "Real-time Sync",
                    "Error Handling",
                    "Monitoring Dashboard"
                ],
                benefits: [
                    "Eliminate data silos",
                    "Improve data accuracy",
                    "Reduce integration time",
                    "Enable real-time insights"
                ],
                useCases: [
                    "CRM integration",
                    "ERP connectivity",
                    "API management",
                    "Data synchronization"
                ],
                pricing: {
                    startingPrice: "$149/month",
                    pricingModel: "Per connection",
                    features: ["20 connections", "Real-time sync", "Monitoring", "Support"]
                },
                iconName: "Layers",
                gradient: "from-yellow-500 to-orange-400",
                category: "Integration",
                status: "available"
            }
        ]
    }
]

// Helper functions for easy data access
export const getAllProducts = (): Product[] => {
    return subBrandsData.flatMap(subBrand => subBrand.products)
}

export const getProductsBySubBrand = (subBrandSlug: string): Product[] => {
    const subBrand = subBrandsData.find(sb => sb.slug === subBrandSlug)
    return subBrand?.products || []
}

export const getProduct = (subBrandSlug: string, productId: string): Product | undefined => {
    const subBrand = subBrandsData.find(sb => sb.slug === subBrandSlug)
    return subBrand?.products.find(product => product.id === productId)
}

export const getSubBrand = (slug: string): SubBrand | undefined => {
    return subBrandsData.find(sb => sb.slug === slug)
}

export const getProductsByCategoryFromSubBrand = (subBrandSlug: string, category: string): Product[] => {
    const products = getProductsBySubBrand(subBrandSlug)
    return products.filter(product => product.category === category)
}

export const searchProducts = (query: string): Product[] => {
    const allProducts = getAllProducts()
    const searchTerm = query.toLowerCase()

    return allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.tagline.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm))
    )
}

// Export the original subBrands data for backward compatibility
export const subBrands = subBrandsData.map((subBrand) => {
    const { products, ...rest } = subBrand
    return {
        ...rest,
        features: products.slice(0, 4).map((product: Product) => product.name) // Use first 4 product names as features
    }
})
