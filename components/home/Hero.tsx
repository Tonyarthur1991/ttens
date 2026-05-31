import Link from 'next/link'
import QuoteForm from '@/components/ui/QuoteForm'

export default function Hero() {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* Radial green glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 70% at 85% 40%, rgba(74,122,46,0.13) 0%, transparent 65%), radial-gradient(ellipse 35% 50% at 5% 90%, rgba(74,122,46,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 grid grid-cols-[1fr_420px] gap-16 items-center px-[72px] py-[88px] min-h-[560px]">

        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-green/[0.18] border border-green/40 text-[#9dda65] rounded-full px-4 py-1.5 text-[13px] font-semibold mb-7">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M6.5 1L7.9 4.8H12L8.8 7.2L10.2 11L6.5 8.6L2.8 11L4.2 7.2L1 4.8H5.1Z" fill="#9dda65"/>
            </svg>
            Exceptional Cleaning. Every Time.
          </div>

          <h1 className="font-heading font-black text-[54px] text-white leading-[1.07] tracking-[-2px] mb-5">
            Your Space,<br />
            Perfectly{' '}
            <span className="text-[#7ec850]">Clean.</span>
          </h1>

          <p className="text-white/65 text-[17px] leading-[1.72] mb-9 max-w-[440px]">
            TTens delivers professional cleaning services for homes, offices, and commercial
            spaces across the UK. Vetted staff, eco-friendly products, and results you can see.
          </p>

          <div className="flex gap-3.5 items-center mb-11">
            <Link
              href="/quote"
              className="bg-green text-white rounded-[9px] px-7 py-[14px] text-[15px] font-bold flex items-center gap-2 shadow-[0_6px_20px_rgba(74,122,46,0.4)] hover:bg-green-light transition-colors"
            >
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/services"
              className="text-white/80 text-[15px] font-semibold flex items-center gap-1.5 hover:text-white transition-colors"
            >
              View Services
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M3 7.5H12M8 3.5L12 7.5L8 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="flex gap-4 flex-wrap">
            {[
              { icon: '✓', label: 'Fully Insured' },
              { icon: '🌿', label: 'Eco-Friendly' },
              { icon: '⚡', label: '2-hr Response' },
            ].map(b => (
              <div key={b.label} className="flex items-center gap-2 bg-white/[0.07] border border-white/[0.12] rounded-lg px-3.5 py-2">
                <span className="text-[15px]">{b.icon}</span>
                <span className="text-[13px] text-white/70 font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Quote form card */}
        <div className="bg-white rounded-[20px] p-9 shadow-[0_28px_72px_rgba(0,0,0,0.32)]">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-9 h-9 bg-green-bg rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 2L10.8 7.2H16L11.6 10.4L13.4 15.6L9 12.4L4.6 15.6L6.4 10.4L2 7.2H7.2Z" fill="#4a7a2e"/>
              </svg>
            </div>
            <h2 className="font-heading font-extrabold text-[17px] text-navy">Request a Free Quote</h2>
          </div>
          <p className="text-[13px] text-brand-muted mb-5 pb-4 border-b-2 border-green">
            No obligation. We respond within 2 hours.
          </p>
          <QuoteForm />
        </div>

      </div>
    </section>
  )
}
