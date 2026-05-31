interface SectionHeaderProps {
  eyebrow:  string
  title:    string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <div className={`inline-flex items-center gap-2.5 text-[12px] font-extrabold text-green uppercase tracking-[2px] mb-3 ${centered ? 'justify-center' : ''}`}>
        {!centered && <span className="w-7 h-0.5 bg-green rounded-full" aria-hidden="true" />}
        {eyebrow}
      </div>
      <h2 className="font-heading font-black text-[36px] text-navy leading-[1.1] tracking-tight mb-2.5">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[16px] text-brand-muted ${centered ? 'mx-auto max-w-lg' : 'max-w-lg'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
