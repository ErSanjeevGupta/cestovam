import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | Delhi I Technologies' },
      { name: 'description', content: 'Get in touch with Delhi I Technologies. Request a free quote for software development, cloud services, IT training, or any IT solution.' },
    ],
  }),
  component: ContactPage,
})

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
  botField: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

const serviceOptions = [
  'Software Development',
  'Website Design & Development',
  'Android App Development',
  'Server Monitoring & Cloud Support',
  'FinOps & Cloud Cost Optimization',
  'IT Training & Consultancy',
  'Trainer Provider',
  'Train & Deploy Talent',
  'Other / Not Sure',
]

function ContactPage() {
  const [fields, setFields] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    botField: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
    if (errors[e.target.name as keyof FormState]) {
      setErrors({ ...errors, [e.target.name]: undefined })
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!fields.name.trim()) newErrors.name = 'Full name is required.'
    if (!fields.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (fields.phone && !/^[+\d\s\-()]{7,15}$/.test(fields.phone)) {
      newErrors.phone = 'Please enter a valid phone number.'
    }
    if (!fields.service) newErrors.service = 'Please select a service of interest.'
    if (!fields.message.trim()) {
      newErrors.message = 'Please describe your requirements.'
    } else if (fields.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setServerError(false)

    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          service: fields.service,
          message: fields.message,
          'bot-field': fields.botField,
        }),
      })
      setSubmitted(true)
    } catch {
      setServerError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Page Hero */}
      <section className="section-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5">
            Let's Start Building<br />Something Great
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Reach out with your project details and get a free consultation and quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-[#0A1F44] mb-3">Get In Touch</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you have a project in mind, need a quote, or just want to explore how we can help — our team is ready to listen.
                </p>
              </div>

              {[
                { icon: '📍', label: 'Address', value: 'New Delhi, India – 110001', href: null },
                { icon: '✉️', label: 'Email', value: 'info@delhiitechnologies.com', href: 'mailto:info@delhiitechnologies.com' },
                { icon: '📞', label: 'Phone', value: '+91 12345 67890', href: 'tel:+911234567890' },
                { icon: '🕒', label: 'Business Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM IST', href: null },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100">
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-[#0A1F44] hover:text-[#1E90FF] font-medium transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#0A1F44] font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Trust Badges */}
              <div className="bg-[#0A1F44] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4 text-sm">Why Work With Us?</h3>
                <ul className="space-y-2.5 text-sm text-white/70">
                  {[
                    '✓ Free initial consultation',
                    '✓ Response within 24 hours',
                    '✓ No hidden costs or surprises',
                    '✓ NDA-protected engagements',
                    '✓ Dedicated project manager',
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-6xl mb-5">🎉</div>
                    <h3 className="text-2xl font-black text-[#0A1F44] mb-3">Message Received!</h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 hours with a personalized response.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFields({ name: '', email: '', phone: '', service: '', message: '', botField: '' })
                      }}
                      className="mt-6 px-6 py-2.5 text-sm font-semibold text-[#1E90FF] border border-[#1E90FF] rounded-lg hover:bg-[#1E90FF]/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-[#0A1F44] mb-1">Request a Free Quote</h2>
                    <p className="text-gray-500 text-sm mb-7">Fill out the form below and we'll get back to you within 24 hours.</p>

                    {serverError && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        Something went wrong. Please try again or email us directly at info@delhiitechnologies.com.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate>
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="bot-field"
                        value={fields.botField}
                        onChange={handleChange}
                        aria-hidden="true"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                      <input type="hidden" name="form-name" value="contact" />

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={fields.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/30 transition-all ${
                              errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-[#1E90FF]'
                            }`}
                          />
                          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={fields.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/30 transition-all ${
                              errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-[#1E90FF]'
                            }`}
                          />
                          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={fields.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/30 transition-all ${
                              errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-[#1E90FF]'
                            }`}
                          />
                          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
                        </div>

                        {/* Service */}
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="service">
                            Service of Interest <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={fields.service}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/30 transition-all bg-gray-50 ${
                              errors.service ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#1E90FF]'
                            }`}
                          >
                            <option value="">Select a service...</option>
                            {serviceOptions.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {errors.service && <p className="mt-1.5 text-xs text-red-600">{errors.service}</p>}
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                            Project Requirements <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={fields.message}
                            onChange={handleChange}
                            placeholder="Describe your project, goals, timeline, and any specific requirements..."
                            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/30 transition-all resize-none ${
                              errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:border-[#1E90FF]'
                            }`}
                          />
                          {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="mt-6 w-full py-3.5 bg-[#1E90FF] hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message & Get Free Quote'
                        )}
                      </button>
                      <p className="mt-3 text-center text-xs text-gray-400">
                        By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-48 bg-gradient-to-r from-[#0A1F44] to-[#1E90FF]/30 flex items-center justify-center">
        <div className="text-center text-white/60">
          <div className="text-4xl mb-2">📍</div>
          <p className="text-sm">New Delhi, India</p>
        </div>
      </section>
    </>
  )
}
