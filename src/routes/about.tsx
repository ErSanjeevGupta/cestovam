import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | Cestovam Technologies' },
      { name: 'description', content: 'Learn about Cestovam Technologies — our mission, vision, values, and the team driving IT innovation in Delhi, India.' },
    ],
  }),
  component: AboutPage,
})

const values = [
  { icon: '🎯', title: 'Client-Centric', desc: 'Every decision we make starts with your business goals and outcomes.' },
  { icon: '🔬', title: 'Innovation', desc: 'We stay ahead of technology trends to give you a competitive edge.' },
  { icon: '🛡️', title: 'Integrity', desc: 'Transparent communication, honest timelines, and reliable delivery.' },
  { icon: '📈', title: 'Excellence', desc: 'We hold ourselves to the highest standards of code quality and design.' },
  { icon: '🤝', title: 'Collaboration', desc: 'We work as an extension of your team, not just an outside vendor.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Building technology that scales and remains maintainable long-term.' },
]

const team = [
  { name: 'Sanjeev Gupta', role: 'CEO & Founder', expertise: 'Cloud Architecture, Business Strategy', initials: 'AV' },
  // { name: 'Sneha Patel', role: 'CTO', expertise: 'Full-Stack Development, DevOps', initials: 'SP' },
  // { name: 'Rohit Kapoor', role: 'Head of FinOps', expertise: 'Cloud Cost Optimization, AWS, Azure', initials: 'RK' },
  // { name: 'Nisha Singh', role: 'Lead Mobile Developer', expertise: 'Android, React Native, Flutter', initials: 'NS' },
  // { name: 'Vijay Malhotra', role: 'Head of Training', expertise: 'IT Education, DevOps, Cloud', initials: 'VM' },
  // { name: 'Kavita Reddy', role: 'Project Manager', expertise: 'Agile, Scrum, Client Relations', initials: 'KR' },
]

const milestones = [
  // { year: '2016', event: 'Founded in Delhi with a team of 5 engineers' },
  // { year: '2018', event: 'Expanded to cloud services and FinOps practice' },
  // { year: '2020', event: 'Launched IT Training & Talent Development program' },
  // { year: '2022', event: 'Crossed 100+ enterprise clients milestone' },
  // { year: '2024', event: 'Launched Train & Deploy talent pipeline initiative' },
  // { year: '2025', event: 'Serving 50+ enterprise clients across India & abroad' },
]

function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="section-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5">
            Driven by Technology.<br />Defined by Results.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Cestovam Technologies was founded with a singular vision: to make enterprise-grade technology accessible to every business, regardless of size.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest"></span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A1F44] mt-2 mb-5">
                Driving Innovation in Cloud, DevOps & Software Development
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cestovam began with a simple belief — technology should not be complicated, expensive, or out of reach. It should empower businesses, not slow them down.
                </p>
                <p>
                  What started as a small initiative to help companies navigate cloud and modern development has grown into a full-service technology partner. From building scalable software to optimizing cloud infrastructure, we have worked with startups, growing businesses, and enterprises to turn ideas into reliable digital solutions.
                </p>
                <p>
                  At Cestovam, we don’t just deliver services — we solve real problems. Every project we take on is approached with a focus on performance, security, and scalability. Whether it’s designing a web application, automating infrastructure with DevOps, or reducing cloud costs through FinOps, our goal remains the same: create impact that lasts.
                </p>
                <p>
                  Our strength lies in combining technical expertise with practical experience. We believe in hands-on execution, continuous learning, and staying ahead of industry trends. This allows us to deliver solutions that are not only modern but also future-ready.
                </p>
                <p>
                  Beyond services, we are equally passionate about building talent. Through training, mentorship, and real-world projects, we help individuals and organizations grow stronger in cloud and DevOps technologies.
                </p>
                <p>
                  Today, Cestovam stands as a trusted partner for businesses looking to build, deploy, and scale with confidence.
                </p>
                <p>
                  Build. Deploy. Scale.
                </p>
              </div>
            </div>
            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-5 items-start">
                  <div className="shrink-0 w-16 text-right">
                    <span className="text-[#1E90FF] font-bold text-sm">{m.year}</span>
                  </div>
                  <div className="relative flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#1E90FF] mt-1 z-10" />
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 bg-[#1E90FF]/20 flex-1 mt-1 mb-0 h-8" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0A1F44] rounded-2xl p-10 text-white">
              <div className="text-4xl mb-5">🎯</div>
              <h3 className="text-2xl font-black mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To empower businesses of all sizes with cutting-edge technology solutions — delivering software, cloud, and digital products that create measurable value, foster growth, and solve real-world problems.
              </p>
            </div>
            <div className="bg-[#1E90FF] rounded-2xl p-10 text-white">
              <div className="text-4xl mb-5">🔭</div>
              <h3 className="text-2xl font-black mb-4">Our Vision</h3>
              <p className="text-white/100 leading-relaxed opacity-90">
                To be India's most trusted IT services partner — recognized for innovation, talent development, and delivering transformational digital experiences that shape industries and careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest">Our Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1F44] mt-2">
              The Principles That Guide Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl border border-gray-100 bg-[#F5F7FA] card-hover">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4 className="font-bold text-[#0A1F44] mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Expertise */}
<section className="py-20 bg-[#F5F7FA]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading */}
    <div className="text-center mb-14">
      <span className="text-[#1E90FF] font-semibold text-sm uppercase tracking-widest">
        Our Expertise
      </span>

      <h2 className="text-3xl sm:text-4xl font-black text-[#0A1F44] mt-2 mb-4">
        The People Behind Cestovam
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto">
        A passionate group of engineers and technology specialists focused on building scalable, secure, and high-performance digital solutions.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {team.map((member) => (
        <div
          key={member.name}
          className="bg-white rounded-2xl p-7 border border-gray-100 card-hover text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#0A1F44] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
            {member.initials}
          </div>

          <h4 className="font-bold text-[#0A1F44] text-lg mb-1">
            {member.name}
          </h4>

          <div className="text-[#1E90FF] text-sm font-semibold mb-2">
            {member.role}
          </div>

          <p className="text-gray-400 text-xs">
            {member.expertise}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CTA */}
      <section className="section-pattern py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Let's Work Together</h2>
          <p className="text-white/70 mb-8">Ready to bring your vision to life? Get in touch with our team today.</p>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-[#1E90FF] hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 inline-block"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  )
}
