export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-6xl font-bold mb-4">
            <span className="text-white">Simplx</span>
            <span className="text-blue-500">.tech</span>
          </h3>
          <p className="text-slate-400 text-xl">Next-Gen AI & Software Agency</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-slate-300">
              <li>Revenue Growth Solutions</li>
              <li>Business Automation</li>
              <li>Process Optimization</li>
              <li>Strategic Consulting</li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-slate-300">
              <li>About Us</li>
              <li>Success Stories</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-6">Global Presence</h4>
            <ul className="space-y-4 text-slate-300">
              <li>🇦🇪 Dubai, UAE</li>
              <li>🇩🇪 Berlin, Germany</li>
              <li>🇺🇸 Boston, USA</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-slate-400 text-lg border-t border-slate-800 pt-12">
          © 2025 Simplx.tech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
