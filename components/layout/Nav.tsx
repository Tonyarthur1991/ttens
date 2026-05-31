'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from '@/components/ui/Logo'

const links = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-brand-border sticky top-0 z-50 shadow-[0_2px_16px_rgba(12,26,69,0.07)]">
      <div className="px-[72px] h-[76px] flex items-center justify-between">
        <a href="/" aria-label="TTens logo">
          <Logo size="md" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-9">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[14px] font-semibold pb-0.5 border-b-2 transition-colors ${
                pathname === l.href
                  ? 'text-navy border-green'
                  : 'text-brand-muted border-transparent hover:text-navy hover:border-green'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/quote"
          className="hidden md:block bg-green text-white rounded-lg px-6 py-[11px] text-[14px] font-bold shadow-[0_4px_14px_rgba(74,122,46,0.3)] hover:bg-green-light transition-colors"
        >
          Get a Free Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open
              ? <path d="M6 6L18 18M6 18L18 6" stroke="#162358" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M4 7H20M4 12H20M4 17H20" stroke="#162358" strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brand-border bg-white px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-semibold text-navy py-2"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="bg-green text-white rounded-lg px-5 py-3 text-[14px] font-bold text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  )
}
