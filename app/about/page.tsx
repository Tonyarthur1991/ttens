import CtaBanner from '@/components/home/CtaBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — TTens Cleaning Services',
  description: 'Learn about TTens — our story, our values, and why thousands of UK homes and businesses trust us.',
}

const values = [
  { title: 'Reliability',      desc: 'We show up on time, every time. If plans change, we give you maximum notice.' },
  { title: 'Integrity',        desc: 'Vetted, background-checked staff you can trust in your home or workplace.' },
  { title: 'Quality',          desc: 'We do not cut corners. Every job is completed to the highest standard.' },
  { title: 'Sustainability',   desc: 'Eco-friendly products as standard — good for your family and the planet.' },
]

const stats = [
  { num: '500+', label: 'Happy Clients' },
  { num: '4.9★', label: 'Average Rating' },
  { num: '100%', label: 'Satisfaction Guarantee' },
  { num: '6',    label: 'Specialist Services' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy-dark px-[72px] py-16 text-center">
        <h1 className="font-heading font-black text-[48px] text-white tracking-tight leading-[1.1] mb-4">
          About TTens
        </h1>
        <p className="text-white/65 text-[17px] max-w-xl mx-auto">
          We started TTens with one goal: to provide cleaning services that people could genuinely rely on.
        </p>
      </div>

      {/* Story */}
      <section className="px-[72px] py-[72px] grid grid-cols-2 gap-[72px] items-center">
        <div>
          <div className="text-[12px] font-extrabold text-green uppercase tracking-[2px] flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-green rounded-full" aria-hidden="true" />
            Our Story
          </div>
          <h2 className="font-heading font-black text-[36px] text-navy tracking-tight leading-[1.1] mb-5">
            Built on trust,<br />driven by results
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-brand-muted leading-relaxed">
            <p>TTens was founded by people who had experienced first-hand how unreliable, inconsistent cleaning services could be. We set out to build something different — a company where every job is treated with the same care and attention, whether it is a weekly home clean or a full commercial contract.</p>
            <p>Today we serve hundreds of residential and commercial clients across the UK, with a team of fully vetted, trained professionals who take pride in the work they do.</p>
            <p>Our tagline — <strong className="text-navy">Exceptional Cleaning. Every Time.</strong> — is not just a slogan. It is the standard we hold ourselves to on every single visit.</p>
          </div>
        </div>
        <div className="bg-brand-page rounded-2xl p-10 grid grid-cols-2 gap-5">
          {stats.map(s => (
            <div key={s.label} className="bg-white rounded-xl p-6 text-center border border-brand-border">
              <div className="font-heading font-black text-[36px] text-navy mb-1">{s.num}</div>
              <div className="text-[13px] text-brand-muted font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-page px-[72px] py-[72px]">
        <div className="text-center mb-12">
          <div className="text-[12px] font-extrabold text-green uppercase tracking-[2px] mb-3">Our Values</div>
          <h2 className="font-heading font-black text-[36px] text-navy tracking-tight">What we stand for</h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {values.map(v => (
            <div key={v.title} className="bg-white rounded-xl p-6 border border-brand-border">
              <div className="w-10 h-10 rounded-lg bg-green-bg flex items-center justify-center mb-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 9L7.5 12.5L14 6" stroke="#4a7a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-[16px] text-navy mb-2">{v.title}</h3>
              <p className="text-[13px] text-brand-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
