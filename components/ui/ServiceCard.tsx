import Link from 'next/link'
import type { Service } from '@/lib/services'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-white border-[1.5px] border-brand-border rounded-2xl p-8 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-green hover:shadow-[0_8px_32px_rgba(74,122,46,0.1)]">
      {/* Green bottom accent on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green to-green-light scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />

      {/* Icon wrapper */}
      <div className="w-14 h-14 rounded-[14px] bg-green-bg flex items-center justify-center mb-5">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <path d="M14 4L16 10.5H23L17.5 14.5L19.5 21L14 17L8.5 21L10.5 14.5L5 10.5H12Z"
            fill="#4a7a2e" opacity=".2"/>
          <path d="M14 4L16 10.5H23L17.5 14.5L19.5 21L14 17L8.5 21L10.5 14.5L5 10.5H12Z"
            stroke="#4a7a2e" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      </div>

      <h3 className="font-heading font-extrabold text-[18px] text-navy mb-2.5">{service.name}</h3>
      <p className="text-[14px] text-brand-muted leading-relaxed">{service.shortDesc}</p>

      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 mt-5 text-[13px] font-bold text-green hover:gap-2.5 transition-all"
      >
        Learn more
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="#4a7a2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  )
}
