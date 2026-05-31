import Link from 'next/link'
import { services } from '@/lib/services'
import CtaBanner     from '@/components/home/CtaBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services — TTens Cleaning Services',
  description: 'Browse all TTens cleaning services — from regular home cleans to specialist commercial and post-build cleaning.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-navy-dark px-[72px] py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-green/[0.18] border border-green/40 text-[#9dda65] rounded-full px-4 py-1.5 text-[13px] font-semibold mb-6">
          Exceptional Cleaning. Every Time.
        </div>
        <h1 className="font-heading font-black text-[48px] text-white tracking-tight leading-[1.1] mb-4">
          Our Cleaning Services
        </h1>
        <p className="text-white/65 text-[17px] max-w-xl mx-auto">
          From routine home maintenance to specialist commercial and post-build cleans — we cover it all.
        </p>
      </div>

      {/* Services grid */}
      <section className="bg-brand-page px-[72px] py-[72px]">
        <div className="grid grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.slug} className="bg-white border-[1.5px] border-brand-border rounded-2xl p-8 flex flex-col">
              <h2 className="font-heading font-extrabold text-[20px] text-navy mb-3">{s.name}</h2>
              <p className="text-[14px] text-brand-muted leading-relaxed mb-4 flex-1">{s.shortDesc}</p>
              <ul className="mb-6 flex flex-col gap-1.5">
                {s.included.slice(0, 3).map(item => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-brand-muted">
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7L5.5 10.5L12 4" stroke="#4a7a2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${s.slug}`}
                className="w-full bg-green text-white rounded-lg py-3 text-[14px] font-bold text-center hover:bg-green-light transition-colors"
              >
                View Service →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
