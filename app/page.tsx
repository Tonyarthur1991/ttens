import Hero            from '@/components/home/Hero'
import StatsBar        from '@/components/home/StatsBar'
import ServicesSection from '@/components/home/ServicesSection'
import HowItWorks      from '@/components/home/HowItWorks'
import WhyTTens        from '@/components/home/WhyTTens'
import CtaBanner       from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <HowItWorks />
      <WhyTTens />
      <CtaBanner />
    </>
  )
}
