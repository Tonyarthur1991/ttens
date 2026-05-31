import { notFound }      from 'next/navigation'
import Link              from 'next/link'
import Image             from 'next/image'
import { services, getService, getOtherServices } from '@/lib/services'
import QuoteForm         from '@/components/ui/QuoteForm'
import CtaBanner         from '@/components/home/CtaBanner'
import type { Metadata } from 'next'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title:       `${service.name} — TTens Cleaning Services`,
    description: service.shortDesc,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug)
  if (!service) notFound()

  const others = getOtherServices(params.slug)

  return (
    <>
      {/* Hero */}
      <div className="bg-navy-dark px-[72px] py-16">
        <Link href="/services" className="text-green-light text-[13px] font-semibold flex items-center gap-1.5 mb-6 hover:underline">
          ← All Services
        </Link>
        <h1 className="font-heading font-black text-[48px] text-white tracking-tight leading-[1.1] mb-4 max-w-2xl">
          {service.name}
        </h1>
        <p className="text-white/65 text-[17px] max-w-lg mb-8">{service.shortDesc}</p>
        <Link
          href="/quote"
          className="bg-green text-white rounded-[9px] px-7 py-[14px] text-[15px] font-bold inline-flex items-center gap-2 shadow-[0_6px_20px_rgba(74,122,46,0.4)] hover:bg-green-light transition-colors"
        >
          Get a Quote for This Service →
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative w-full h-[460px] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} — TTens Cleaning Services`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Body */}
      <div className="px-[72px] py-[72px] grid grid-cols-[1fr_400px] gap-[72px] items-start bg-brand-page">

        <div>
          <p className="text-[16px] text-brand-muted leading-relaxed mb-10">{service.longDesc}</p>

          {/* What's included */}
          <h2 className="font-heading font-extrabold text-[24px] text-navy mb-5">What&apos;s Included</h2>
          <ul className="flex flex-col gap-3 mb-10">
            {service.included.map(item => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-[#444]">
                <div className="w-6 h-6 rounded-full bg-green-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5L5 9.5L11 3.5" stroke="#4a7a2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>

          {/* Why TTens for this service */}
          <h2 className="font-heading font-extrabold text-[24px] text-navy mb-5">Why Choose TTens</h2>
          <ul className="flex flex-col gap-4 mb-10">
            {service.whyUs.map(item => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-brand-muted">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="8" fill="#edf5e5"/>
                  <path d="M5.5 9L7.5 11L12.5 6.5" stroke="#4a7a2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-green-bg border border-green/20 rounded-xl p-6 text-[14px] text-brand-muted">
            <strong className="text-navy">Pricing:</strong> Prices depend on property size, frequency, and access requirements.{' '}
            <Link href="/quote" className="text-green font-bold hover:underline">Request a free quote →</Link>
          </div>
        </div>

        {/* Sticky quote form */}
        <div className="sticky top-24 bg-white rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-brand-border">
          <h3 className="font-heading font-extrabold text-[17px] text-navy mb-1">Get a Quote</h3>
          <p className="text-[13px] text-brand-muted mb-5 pb-4 border-b-2 border-green">
            We respond within 2 hours.
          </p>
          <QuoteForm preselectedService={service.name} />
        </div>

      </div>

      {/* Related services */}
      <div className="px-[72px] pb-[72px] bg-brand-page">
        <h2 className="font-heading font-extrabold text-[24px] text-navy mb-6">Other Services</h2>
        <div className="grid grid-cols-3 gap-5">
          {others.slice(0, 3).map(s => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="bg-white border border-brand-border rounded-xl p-5 hover:border-green hover:shadow-md transition-all"
            >
              <div className="font-heading font-bold text-[16px] text-navy mb-1">{s.name}</div>
              <div className="text-[13px] text-brand-muted line-clamp-2">{s.shortDesc}</div>
            </Link>
          ))}
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
