"use client"

import { useState } from "react"
import { Shield, Award, Clock, TrendingUp, Users, CheckCircle } from "lucide-react"
import { MouseHighlightText } from "./mouse-highlight-text"

const guarantees = [
  {
    category: "Revenue Guarantee",
    icon: TrendingUp,
    promises: [
      "200-400% ROI within 90 days",
      "Revenue growth or money back",
      "Measurable results tracking",
      "Performance benchmarking",
      "Success milestone rewards",
    ],
    color: "from-emerald-500 to-teal-400",
  },
  {
    category: "Time Guarantee",
    icon: Clock,
    promises: [
      "Results visible in 30 days",
      "Full implementation in 60-90 days",
      "24/7 priority support",
      "Rapid response team",
      "No delays, no excuses",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Quality Guarantee",
    icon: Award,
    promises: [
      "Enterprise-grade solutions",
      "99.9% uptime guarantee",
      "Security & compliance assured",
      "Scalable architecture",
      "Future-proof technology",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    category: "Support Guarantee",
    icon: Users,
    promises: [
      "Dedicated success manager",
      "Weekly progress reviews",
      "Unlimited consultations",
      "Team training included",
      "Ongoing optimization",
    ],
    color: "from-orange-500 to-red-400",
  },
]

export function TechStack() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Revenue Guarantee"])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <section className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-transparent to-emerald-500 animate-gradient-x"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our Success</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                Guarantees
              </span>
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MouseHighlightText className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're so confident in our ability to transform your business that we back every project with ironclad
              guarantees.
            </MouseHighlightText>
          </div>
        </div>

        <div className="space-y-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden transition-all duration-500 hover:border-slate-700 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleCategory(guarantee.category)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${guarantee.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <guarantee.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {guarantee.category}
                  </h3>
                </div>
                <div
                  className={`transform transition-transform duration-300 ${
                    expandedCategories.includes(guarantee.category) ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedCategories.includes(guarantee.category) && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {guarantee.promises.map((promise, promiseIndex) => (
                      <div
                        key={promiseIndex}
                        className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group cursor-pointer"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                        <span className="text-slate-300 group-hover:text-white transition-colors">{promise}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-white mb-8">Why CEOs Choose Us</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Shield, label: "Risk-Free", desc: "Money-back guarantee" },
                { icon: Award, label: "Proven Results", desc: "50+ success stories" },
                { icon: Clock, label: "Fast Results", desc: "30-day visibility" },
                { icon: TrendingUp, label: "High ROI", desc: "200-400% average" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-300" />
                  <div className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
