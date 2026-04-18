import { Link } from '@tanstack/react-router'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1F44] text-white">
      {/* Newsletter Bar */}
      <div className="bg-[#1E90FF]/20 border-t border-[#1E90FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Stay Ahead with Tech Insights</h3>
              <p className="text-white/70 text-sm mt-1">Get the latest IT trends, cloud tips & company news.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#1E90FF] text-sm"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#1E90FF] hover:bg-blue-500 rounded-md text-sm font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/delhi-technologies-logo.jpg"
                alt="Delhi I Technologies Logo"
                className="w-9 h-9 rounded-lg object-contain"
              />
              <span className="font-bold text-base">Delhi I Technologies</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Innovating Your Digital Future. We deliver cutting-edge IT solutions that help businesses scale, grow, and succeed.
            </p>
            {/* LinkedIn Description (hidden) */}
            {/* Delhi I Technologies is a full-service IT company based in Delhi, India. We specialize in custom software development, web & mobile applications, cloud infrastructure, FinOps, and IT training. Our mission is to bridge the gap between business goals and technology excellence. */}
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E90FF] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E90FF] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1E90FF] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                'Software Development',
                'Website Design & Development',
                'Android App Development',
                'Server & Cloud Support',
                'FinOps & Cost Optimization',
                'IT Training & Consultancy',
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-[#1E90FF] transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Contact Us', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[#1E90FF] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-3">
                <span className="text-[#1E90FF] mt-0.5 shrink-0">📍</span>
                <span>New Delhi, India – 110001</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1E90FF] shrink-0">✉️</span>
                <a href="mailto:info@delhiitechnologies.com" className="hover:text-[#1E90FF] transition-colors">
                  info@delhiitechnologies.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1E90FF] shrink-0">📞</span>
                <a href="tel:+911234567890" className="hover:text-[#1E90FF] transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1E90FF] shrink-0">🕒</span>
                <span>Mon–Sat: 9:00 AM – 6:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© {currentYear} Delhi I Technologies. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
