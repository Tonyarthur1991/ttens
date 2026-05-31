const stats = [
  { num: '500', suffix: '+', label: 'Happy Clients Served' },
  { num: '4.9', suffix: '★', label: 'Average Customer Rating' },
  { num: '100', suffix: '%', label: 'Satisfaction Guarantee' },
]

export default function StatsBar() {
  return (
    <section className="bg-navy grid grid-cols-3 px-[72px] py-10" aria-label="Key stats">
      {stats.map((s, i) => (
        <div key={s.label} className={`text-center px-4 relative ${i > 0 ? "before:content-[''] before:absolute before:left-0 before:top-[15%] before:h-[70%] before:w-px before:bg-white/10" : ''}`}>
          <div className="font-heading font-black text-[44px] text-white leading-none mb-2">
            {s.num}<span className="text-[#7ec850]">{s.suffix}</span>
          </div>
          <div className="text-[13px] text-white/50 font-medium">{s.label}</div>
        </div>
      ))}
    </section>
  )
}
