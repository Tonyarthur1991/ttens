import SectionHeader from '@/components/ui/SectionHeader'

const steps = [
  {
    n:    '1',
    title: 'Request a Quote',
    desc:  "Fill in our simple form with your service needs. We'll respond with a tailored, no-obligation quote within 2 hours.",
  },
  {
    n:    '2',
    title: 'We Handle Everything',
    desc:  "Our vetted, trained team arrives on schedule with all equipment and eco-friendly products. You don't need to lift a finger.",
  },
  {
    n:    '3',
    title: 'Enjoy the Results',
    desc:  "Walk into a spotless space. Not satisfied with anything? We'll come back and fix it — that's our guarantee.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-[72px] py-[72px]">
      <SectionHeader
        eyebrow="How It Works"
        title="Three Simple Steps"
        subtitle="Getting your space cleaned by TTens is straightforward from start to finish."
        centered
      />

      <div className="relative grid grid-cols-3 gap-6">
        {/* Connector line */}
        <div
          aria-hidden="true"
          className="absolute top-10 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-[3px]"
          style={{ background: 'linear-gradient(90deg, #e2e8f0 0%, #4a7a2e 50%, #e2e8f0 100%)' }}
        />

        {steps.map((step, i) => (
          <div key={step.n} className="text-center px-5">
            <div className={`w-20 h-20 rounded-full mx-auto mb-7 flex items-center justify-center font-heading font-black text-[28px] relative z-10 shadow-[0_4px_20px_rgba(12,26,69,0.1)] ${
              i === 1
                ? 'bg-green text-white border-[3px] border-green shadow-[0_6px_24px_rgba(74,122,46,0.35)]'
                : 'bg-white text-navy border-[3px] border-brand-border'
            }`}>
              {step.n}
            </div>
            <h3 className="font-heading font-extrabold text-[19px] text-navy mb-2.5">{step.title}</h3>
            <p className="text-[14px] text-brand-muted leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
