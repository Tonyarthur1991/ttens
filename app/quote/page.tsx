import QuoteForm from '@/components/ui/QuoteForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Free Quote — TTens Cleaning Services',
  description: 'Request a free, no-obligation cleaning quote. We respond within 2 hours.',
}

const trustPoints = [
  'No obligation — free to request, no commitment',
  'We respond within 2 hours during business hours',
  'Transparent pricing, no hidden fees',
  'Fully insured and DBS checked staff',
  '100% satisfaction guarantee on every job',
]

export default function QuotePage() {
  return (
    <section className="bg-brand-page px-[72px] py-[72px]">
      <div className="grid grid-cols-[1fr_480px] gap-[72px] items-start">

        {/* Left — trust */}
        <div>
          <div className="text-[12px] font-extrabold text-green uppercase tracking-[2px] flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-green rounded-full" aria-hidden="true" />
            Free &amp; No Obligation
          </div>
          <h1 className="font-heading font-black text-[42px] text-navy tracking-tight leading-[1.1] mb-5">
            Get Your Free Quote
          </h1>
          <p className="text-[16px] text-brand-muted leading-relaxed mb-8">
            Fill in the form and we will send you a tailored quote within 2 hours. No pushy sales calls — just a clear, honest price.
          </p>
          <ul className="flex flex-col gap-3.5 mb-10">
            {trustPoints.map(p => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-brand-muted">
                <div className="w-6 h-6 rounded-full bg-green-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6L5 9L10 3" stroke="#4a7a2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {p}
              </li>
            ))}
          </ul>
          <div className="bg-white border border-brand-border rounded-xl p-6">
            <div className="text-[13px] font-bold text-navy mb-3">Prefer to talk?</div>
            <a href="tel:08001234567" className="text-[20px] font-extrabold text-green hover:underline">
              0800 123 4567
            </a>
            <div className="text-[13px] text-brand-muted mt-1">Mon–Fri: 7am–8pm · Sat: 8am–6pm</div>
          </div>
        </div>

        {/* Right — expanded form */}
        <div className="bg-white rounded-2xl p-9 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-brand-border">
          <h2 className="font-heading font-extrabold text-[20px] text-navy mb-1">Request a Quote</h2>
          <p className="text-[13px] text-brand-muted mb-5 pb-4 border-b-2 border-green">
            We respond within 2 hours.
          </p>
          <QuoteForm expanded />
        </div>

      </div>
    </section>
  )
}
