import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"

export function PricingCTA() {
  return (
    <section className="py-40 px-6 bg-gradient-to-br from-blue-950 via-slate-950 to-emerald-950">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            <span className="text-white">Ready to Transform</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <MouseHighlightText className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join 50+ companies that have achieved 200-400% revenue growth.
          </MouseHighlightText>
        </div>

        <div className="bg-slate-900/50 rounded-3xl p-16 border border-slate-800 mb-16">
          <h3 className="text-4xl font-bold text-white mb-12">Start Your AI Journey Today</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              "Free consultation & business assessment",
              "Custom solution proposal within 48 hours",
              "Dedicated success manager & team",
              "Guaranteed ROI or money-back promise",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 text-left">
                <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <span className="text-xl text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-16 py-8 text-2xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight className="ml-4 h-8 w-8" />
          </Button>
        </div>

        {/* Contact info */}
        <div className="text-slate-400 text-xl space-y-4">
          <div>📧 hello@simplx.tech</div>
          <div>📱 +971 50 123 4567 (Gulf) • +49 30 1234 5678 (Europe) • +1 555 123 4567 (USA)</div>
        </div>
      </div>
    </section>
  )
}
