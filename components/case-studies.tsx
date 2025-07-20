"use client"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MouseHighlightText } from "./mouse-highlight-text"

const caseStudies = [
  {
    title: "Gulf Bank Revenue Explosion",
    client: "Major Gulf Investment Bank",
    challenge: "Losing $2M monthly to manual decisions",
    result: "+340% ROI in 60 days",
    revenue: "$8M additional monthly revenue",
    testimonial: "Simplx.tech transformed our entire operation. We're now making $8M more per month.",
  },
  {
    title: "E-commerce Sales Breakthrough",
    client: "European Fashion Retailer",
    challenge: "Low conversion rates, customers leaving",
    result: "+280% ROI in 45 days",
    revenue: "$12M additional annual revenue",
    testimonial: "Our sales increased by 280% in just 45 days. Customers love the experience.",
  },
]

export function CaseStudies() {
  return (
    <section className="py-40 px-6 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
              <span className="text-white">Real CEOs,</span>
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                Real Results
              </span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MouseHighlightText className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              See how we've helped business leaders achieve extraordinary growth.
            </MouseHighlightText>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 rounded-3xl p-12 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-xl text-slate-400 mb-6">{study.client}</p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-300 mb-2">Challenge:</h4>
                  <p className="text-slate-400">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">Result:</h4>
                  <p className="text-white font-bold text-xl">{study.result}</p>
                  <p className="text-emerald-400 font-semibold">{study.revenue}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 mb-8">
                <p className="text-white italic text-lg">"{study.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Simplified CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 rounded-3xl p-16 border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-8">Ready to Join These Success Stories?</h3>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-12 py-6 text-xl font-semibold rounded-2xl"
            >
              Get Your Free Business Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
