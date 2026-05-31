import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard   from '@/components/ui/ServiceCard'
import { services }  from '@/lib/services'

export default function ServicesSection() {
  return (
    <section className="bg-brand-page px-[72px] py-[72px]">
      <SectionHeader
        eyebrow="What We Offer"
        title="Our Cleaning Services"
        subtitle="From routine maintenance to specialist cleans — we cover it all for homes and businesses."
        centered
      />
      <div className="grid grid-cols-3 gap-6">
        {services.map(s => <ServiceCard key={s.slug} service={s} />)}
      </div>
    </section>
  )
}
