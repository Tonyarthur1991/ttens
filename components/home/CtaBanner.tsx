import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden text-center px-[72px] py-[88px]" style={{ background: 'linear-gradient(145deg, #3a6420 0%, #4a7a2e 55%, #4f8a33 100%)' }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 90% at 50% 110%, rgba(255,255,255,0.09) 0%, transparent 65%)' }}
      />
      <h2 className="relative font-heading font-black text-[44px] text-white tracking-[-1.5px] mb-3.5">
        Ready for a spotless space?
      </h2>
      <p className="relative text-white/75 text-[17px] mb-9">
        Get your free, no-obligation quote today. We respond within 2 hours.
      </p>
      <div className="relative flex gap-3.5 justify-center">
        <Link
          href="/quote"
          className="bg-white text-green font-extrabold text-[15px] rounded-[9px] px-8 py-4 flex items-center gap-2 shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:shadow-xl transition-shadow"
        >
          Get a Free Quote
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M3 7.5H12M8 3.5L12 7.5L8 11.5" stroke="#4a7a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <a
          href="tel:07717375678"
          className="border-2 border-white/40 text-white font-bold text-[15px] rounded-[9px] px-8 py-4 flex items-center gap-2 hover:border-white/70 transition-colors"
        >
          Call 07717 375678
        </a>
      </div>
    </section>
  )
}
