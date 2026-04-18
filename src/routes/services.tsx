import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'IT Services | Cestovam Technologies' },
      { name: 'description', content: 'Explore our full range of IT services: software development, web design, Android apps, cloud & server support, FinOps, IT training, and more.' },
    ],
  }),
  component: ServicesPage,
})

const services = [
  {
    id: 'software-dev',
    icon: '💻',
    title: 'Software Development',
    tagline: 'Custom Solutions Built to Scale',
    description:
      'We design and build robust, scalable software tailored to your exact business needs — from complex enterprise systems to SaaS platforms and internal tools.',
    benefits: [
      'Full-cycle development from ideation to deployment',
      'Microservices & API-first architecture',
      'React, Node.js, Python, Java, and more',
      'Automated testing & CI/CD pipelines',
      'Post-launch maintenance & support',
    ],
    useCases: ['Enterprise Resource Planning (ERP)', 'SaaS Product Development', 'Legacy System Modernization', 'CRM & Workflow Automation'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'web-design',
    icon: '🌐',
    title: 'Website Design & Development',
    tagline: 'Websites That Convert & Perform',
    description:
      'We craft visually stunning, high-performance websites that reflect your brand and turn visitors into customers — fully responsive, SEO-optimized, and blazing fast.',
    benefits: [
      'Custom UI/UX design with brand alignment',
      'Performance-optimized (Core Web Vitals)',
      'SEO-ready semantic HTML structure',
      'CMS integration (WordPress, Contentful, etc.)',
      'E-commerce & payment gateway integration',
    ],
    useCases: ['Corporate & Portfolio Websites', 'E-Commerce Stores', 'Landing Pages & Campaigns', 'Web Portals & Dashboards'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'android-dev',
    icon: '📱',
    title: 'Android App Development',
    tagline: 'Apps Your Users Will Love',
    description:
      'Native and cross-platform Android applications that deliver seamless user experiences, high performance, and enterprise-grade security on every device.',
    benefits: [
      'Native Android (Kotlin/Java) development',
      'Cross-platform with React Native & Flutter',
      'Google Play Store publication support',
      'Offline capabilities & push notifications',
      'Integration with REST APIs & Firebase',
    ],
    useCases: ['Consumer Mobile Apps', 'Field Service & Logistics Apps', 'mCommerce & Fintech Apps', 'IoT & Device Integration'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'cloud-support',
    icon: '☁️',
    title: 'Server Monitoring & Cloud Support',
    tagline: '99.9% Uptime Guaranteed',
    description:
      'Proactive infrastructure management, 24/7 monitoring, and expert cloud support across AWS, Azure, and GCP to keep your systems running at peak performance.',
    benefits: [
      '24/7 real-time server & application monitoring',
      'Cloud migration planning & execution',
      'Auto-scaling & load balancing setup',
      'Security hardening & compliance checks',
      'Incident response with < 1hr SLA',
    ],
    useCases: ['Cloud Migration Projects', 'High-Availability Systems', 'DevOps & Infrastructure Automation', 'Disaster Recovery Planning'],
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 'finops',
    icon: '💰',
    title: 'FinOps — Cloud Cost Optimization',
    tagline: 'Cut Cloud Spend by Up to 40%',
    description:
      'Our FinOps specialists analyze your cloud spending, identify waste, and implement proven strategies to optimize costs without compromising performance or reliability.',
    benefits: [
      'Multi-cloud cost visibility & tagging',
      'Reserved instance & savings plan strategy',
      'Right-sizing & idle resource cleanup',
      'Cost anomaly detection & alerts',
      'Monthly FinOps reporting & governance',
    ],
    useCases: ['Enterprises Overspending on AWS/Azure/GCP', 'Startups Scaling on a Budget', 'Multi-Cloud Cost Governance', 'Cloud ROI Improvement'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'training',
    icon: '🎓',
    title: 'IT Training & Consultancy',
    tagline: 'Upskill Your Team. Accelerate Growth.',
    description:
      'Hands-on training programs and strategic IT consulting designed to upskill your workforce, modernize processes, and align technology with business goals.',
    benefits: [
      'Cloud certifications: AWS, Azure, GCP',
      'DevOps, CI/CD & Kubernetes training',
      'Software development best practices',
      'Technology strategy & architecture consulting',
      'Customized corporate training programs',
    ],
    useCases: ['Corporate Tech Upskilling', 'Cloud Migration Readiness', 'DevOps Transformation', 'Technology Strategy Workshops'],
    color: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'trainer-provider',
    icon: '👨‍🏫',
    title: 'Trainer Provider',
    tagline: 'Industry Experts, On Demand',
    description:
      'We connect organizations with vetted, certified industry trainers across all IT domains — enabling flexible, high-quality training delivery for your workforce.',
    benefits: [
      'Network of 50+ certified IT trainers',
      'Domain experts: Cloud, DevOps, AI/ML, Security',
      'On-site, virtual, or hybrid delivery',
      'Background-verified professionals',
      'Trainer performance monitoring',
    ],
    useCases: ['Corporate Training Programs', 'Bootcamp Facilitation', 'University Workshops', 'Government & PSU Training'],
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 'train-deploy',
    icon: '🚀',
    title: 'Train & Deploy Talent',
    tagline: 'Ready-to-Work Engineers, Fast',
    description:
      'Our flagship talent pipeline: we train, certify, and deploy job-ready IT professionals to your organization — reducing hiring time and onboarding costs significantly.',
    benefits: [
      '3–6 month intensive training programs',
      'Domain-specific: Cloud, DevOps, Full-Stack, QA',
      'Project-based learning on real use cases',
      'Background verification included',
      'Replacement guarantee in first 90 days',
    ],
    useCases: ['Tech Team Scaling', 'IT Bench Strength Building', 'Fresher Hiring & Onboarding', 'Project-Based Resource Augmentation'],
    color: 'from-indigo-500 to-violet-600',
  },
]

function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="section-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5">
            Complete IT Solutions<br />Under One Roof
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            From development to deployment, training to talent — we cover everything your business needs to stay ahead in the digital era.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 bg-[#1E90FF] hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Discuss Your Project →
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`grid lg:grid-cols-5 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Icon & Header Panel */}
                  <div className={`lg:col-span-2 bg-gradient-to-br ${service.color} p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="text-5xl mb-5">{service.icon}</div>
                    <h2 className="text-2xl font-black text-white mb-2">{service.title}</h2>
                    <p className="text-white/80 font-semibold text-sm mb-4">{service.tagline}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Details Panel */}
                  <div className={`lg:col-span-3 p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-[#0A1F44] mb-4 flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-[#1E90FF]/10 flex items-center justify-center text-[#1E90FF] text-xs">✓</span>
                          Key Benefits
                        </h3>
                        <ul className="space-y-2.5">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <span className="text-[#1E90FF] mt-0.5 shrink-0 font-bold">→</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A1F44] mb-4 flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-[#0A1F44]/10 flex items-center justify-center text-[#0A1F44] text-xs">⚡</span>
                          Use Cases
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.map((uc) => (
                            <span
                              key={uc}
                              className="px-3 py-1.5 bg-[#F5F7FA] border border-gray-200 rounded-full text-xs text-gray-700 font-medium"
                            >
                              {uc}
                            </span>
                          ))}
                        </div>
                        <div className="mt-8">
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A1F44] hover:bg-[#1E90FF] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                          >
                            Get a Quote →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#0A1F44] mb-4">Every Service, Backed by Expertise</h2>
          <p className="text-gray-600 mb-10">
            We don't just deliver services — we deliver outcomes. Every engagement is backed by certified professionals, proven methodologies, and a commitment to your success.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '8+', label: 'Years Experience' },
              { value: '40+', label: 'Certified Experts' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Retention' },
            ].map((s) => (
              <div key={s.label} className="p-5 rounded-xl bg-[#F5F7FA] border border-gray-100">
                <div className="text-2xl font-black text-[#1E90FF]">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pattern py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-white/70 mb-8">Talk to our experts. We'll analyze your requirements and recommend the best solution path.</p>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-[#1E90FF] hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 inline-block"
          >
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </>
  )
}
