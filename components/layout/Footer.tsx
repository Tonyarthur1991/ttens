import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const serviceLinks = [
  { label: 'Regular Clean',          href: '/services/regular-clean' },
  { label: 'Deep Clean',             href: '/services/deep-clean' },
  { label: 'Move In / Move Out',     href: '/services/move-in-move-out' },
  { label: 'Office & Commercial',    href: '/services/office-commercial' },
  { label: 'After Build / Renovation', href: '/services/after-build-renovation' },
  { label: 'Carpet & Upholstery',   href: '/services/carpet-upholstery' },
]

const companyLinks = [
  { label: 'About Us',          href: '/about' },
  { label: 'How It Works',      href: '/#how-it-works' },
  { label: 'Testimonials',      href: '/#reviews' },
  { label: 'Careers',           href: '/contact' },
  { label: 'Privacy Policy',    href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-footer pt-16 pb-9 px-[72px]">
      <div className="grid grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-12 pb-12 border-b border-white/[0.06] mb-7">

        {/* Brand */}
        <div>
          <div className="mb-4">
            <Logo variant="light" size="md" />
          </div>
          <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
            Professional cleaning for homes and businesses across the UK.
            Vetted staff, eco-friendly products, and results guaranteed.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className="text-[11px] font-extrabold text-white/90 uppercase tracking-[1.8px] mb-4">Services</div>
          <ul className="flex flex-col gap-2.5">
            {serviceLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/40 hover:text-green-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="text-[11px] font-extrabold text-white/90 uppercase tracking-[1.8px] mb-4">Company</div>
          <ul className="flex flex-col gap-2.5">
            {companyLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/40 hover:text-green-light transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[11px] font-extrabold text-white/90 uppercase tracking-[1.8px] mb-4">Contact</div>
          <div className="flex flex-col gap-3 text-sm text-white/40">
            <a href="tel:08001234567" className="hover:text-green-light transition-colors">📞 0800 123 4567</a>
            <a href="mailto:hello@ttens.co.uk" className="hover:text-green-light transition-colors">✉ hello@ttens.co.uk</a>
            <span>📍 Nationwide UK Coverage</span>
          </div>
          <div className="text-[11px] font-extrabold text-white/90 uppercase tracking-[1.8px] mt-5 mb-3">Hours</div>
          <div className="text-sm text-white/35 leading-relaxed">
            Mon–Fri: 7am – 8pm<br />
            Saturday: 8am – 6pm<br />
            Sunday: By appointment
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center">
        <span className="text-[13px] text-white/20">
          © {new Date().getFullYear()} TTens Cleaning Services Ltd. All rights reserved.
        </span>
        <div className="flex gap-5">
          {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
            <Link key={href} href={href} className="text-[13px] text-white/20 hover:text-white/50 transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
