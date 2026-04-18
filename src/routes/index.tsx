import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Delhi I Technologies | Innovating Your Digital Future' },
      { name: 'description', content: 'Delhi I Technologies — Custom software development, cloud solutions, Android apps, FinOps, and IT training in Delhi, India.' },
    ],
  }),
  component: HomePage,
})

const services = [
  {
    icon: '💻',
    title: 'Software Development',
    desc: 'Custom web & enterprise solutions built to scale with your business.',
  },
  {
    icon: '🌐',
    title: 'Website Design & Dev',
    desc: 'Stunning, fast, SEO-optimized websites that convert visitors to customers.',
  },
  {
    icon: '📱',
    title: 'Android App Development',
    desc: 'Native & cross-platform mobile apps for Android devices.',
  },
  {
    icon: '☁️',
    title: 'Cloud & Server Support',
    desc: '24/7 monitoring, cloud migration, and infrastructure management.',
  },
  {
    icon: '💰',
    title: 'FinOps & Cost Optimization',
    desc: 'Reduce cloud spend by up to 40% with expert FinOps practices.',
  },
  {
    icon: '🎓',
    title: 'IT Training & Consultancy',
    desc: 'Industry-relevant training programs and strategic IT consulting.',
  },
]

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Years of Excellence' },
]

const whyUs = [
  {
    icon: '🏆',
    title: 'Proven Track Record',
    desc: '200+ successful projects across industries from startups to enterprises.',
  },
  {
    icon: '⚡',
    title: 'Agile & Fast Delivery',
    desc: 'Sprint-based delivery with transparent communication at every milestone.',
  },
  {
    icon: '🔒',
    title: 'Security-First Approach',
    desc: 'Enterprise-grade security baked into every solution we build.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    desc: '24/7 support with a dedicated account manager for every client.',
  },
  {
    icon: '🌍',
    title: 'Global Standards',
    desc: 'ISO-aligned processes and global best practices in software delivery.',
  },
  {
    icon: '💡',
    title: 'Innovation-Driven',
    desc: 'We stay ahead of the curve—AI, cloud-native, and DevOps excellence.',
  },
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CTO, FinVault Technologies',
    text: 'Delhi I Technologies transformed our cloud infrastructure, cutting our AWS bill by 38% with their FinOps expertise. Exceptional team!',
    initials: 'RS',
  },
  {
    name: 'Priya Mehta',
    role: 'Founder, ShopEase India',
    text: 'Their Android app development team delivered a world-class app in just 8 weeks. Our customer ratings went from 3.2 to 4.8 stars!',
    initials: 'PM',
  },
  {
    name: 'Amit Gupta',
    role: 'Director, LogiCorp Solutions',
    text: 'The IT training program they conducted upskilled our entire team. Best investment we made this year for our tech capabilities.',
    initials: 'AG',
  },
]

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative section-pattern min-h-[92vh] flex items-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1E90FF]/10 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#1E90FF]/8 blur-3xl" />
          {/* Grid dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(30,144,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E90FF]/20 border border-[#1E90FF]/30 text-[#1E90FF] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse" />
                Delhi's Trusted IT Partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Innovating Your<br />
                <span className="gradient-text">Digital Future</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                From custom software to cloud optimization — Delhi I Technologies delivers technology solutions that drive real business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-[#1E90FF] hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
                >
                  Get a Free Quote
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-10 text-white/50 text-sm">
                <span className="flex items-center gap-2">✓ <span>ISO Aligned Processes</span></span>
                <span className="flex items-center gap-2">✓ <span>NDA Protected</span></span>
                <span className="flex items-center gap-2">✓ <span>24/7 Support</span></span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-[#1E90FF]/30 to-[#0A1F44] border border-[#1E90FF]/30 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-7xl mb-4">🚀</div>
                    <p className="text-white font-bold text-xl">Build. Deploy. Grow.</p>
                    <p className="text-white/60 text-sm mt-1">Technology That Works For You</p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2 shadow-lg text-sm font-bold text-[#0A1F44]">
                  ⭐ 4.9/5 Rating
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#1E90FF] rounded-xl px-4 py-2 shadow-lg text-sm font-bold text-white">
                  200+ Projects Done
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1E90FF] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1F44] mt-2 mb-4">
              End-to-End IT Services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From ideation to deployment — we cover every technology need your business has.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 card-hover group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-2 group-hover:text-[#1E90FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0A1F44] hover:bg-[#1E90FF] text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest">Why Delhi I Technologies</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A1F44] mt-2 mb-5">
                The Technology Partner<br />You Can Trust
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We combine deep technical expertise with a client-first approach to deliver solutions that aren't just functional — they're transformative. Here's what sets us apart.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E90FF] hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
              >
                Our Story →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-[#F5F7FA] border border-gray-100 card-hover">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#0A1F44] text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest">Client Stories</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1F44] mt-2 mb-4">
              Trusted by Growing Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 card-hover">
                <div className="flex text-[#1E90FF] text-lg mb-4">★★★★★</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A1F44] flex items-center justify-center text-white text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A1F44] text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pattern py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Let's discuss your project. Get a free consultation and quote within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#1E90FF] hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+911234567890"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-5 py-3 bg-[#1E90FF] hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-500/40 font-semibold text-sm transition-all hover:scale-105"
          aria-label="Get a quote"
        >
          💬 Get Quote
        </Link>
      </div>
    </>
  )
}
