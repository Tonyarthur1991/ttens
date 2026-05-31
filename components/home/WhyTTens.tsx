import SectionHeader from '@/components/ui/SectionHeader'

const features = [
  {
    title: 'Vetted & DBS Checked Staff',
    desc:  'Every cleaner passes a full background check and completes our professional training programme before their first job.',
  },
  {
    title: 'Eco-Friendly Products Only',
    desc:  'We use non-toxic, biodegradable products that are safe for children, pets, and the planet.',
  },
  {
    title: '100% Satisfaction Guarantee',
    desc:  "Not happy with any aspect of your clean? We'll return within 24 hours and put it right at no extra cost.",
  },
  {
    title: 'Flexible Scheduling',
    desc:  'Weekdays, evenings, or weekends — we work around your schedule, not the other way around.',
  },
]

const reviews = [
  { initials: 'SM', bg: '#162358', name: 'Sarah M.',  role: 'Office Manager, London',    text: "TTens has transformed our office environment completely. They're reliable, thorough, and always professional." },
  { initials: 'JT', bg: '#4a7a2e', name: 'James T.',  role: 'Tenant, Manchester',         text: "The end of tenancy clean was absolutely spotless. Got my full deposit back with no questions asked." },
  { initials: 'PK', bg: '#3a6420', name: 'Priya K.',  role: 'Homeowner, Birmingham',      text: "After our kitchen renovation the place was a mess. TTens had it showroom-ready within hours. Exceptional." },
]

export default function WhyTTens() {
  return (
    <section id="reviews" className="bg-brand-page px-[72px] py-[72px]">
      <div className="grid grid-cols-2 gap-[72px] items-start">

        {/* Left — features */}
        <div>
          <SectionHeader eyebrow="Why Choose TTens" title={"Professional cleaning\nyou can trust"} />
          <div className="flex flex-col gap-7">
            {features.map(f => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-green-bg flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10L8 14L16 6" stroke="#4a7a2e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-navy mb-1">{f.title}</div>
                  <div className="text-[14px] text-brand-muted leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — reviews */}
        <div>
          <div className="text-[12px] font-extrabold text-green uppercase tracking-[2px] flex items-center gap-2.5 mb-5">
            <span className="w-7 h-0.5 bg-green rounded-full" aria-hidden="true" />
            Customer Reviews
          </div>
          <div className="flex flex-col gap-4">
            {reviews.map(r => (
              <div key={r.name} className="bg-white border-[1.5px] border-brand-border rounded-[14px] p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-[15px] text-white flex-shrink-0"
                      style={{ background: r.bg }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-navy">{r.name}</div>
                      <div className="text-[12px] text-brand-muted">{r.role}</div>
                    </div>
                  </div>
                  <div className="text-[#f59e0b] tracking-wider text-[14px]">★★★★★</div>
                </div>
                <p className="text-[14px] text-[#444] leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
