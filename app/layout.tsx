import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Topbar from '@/components/layout/Topbar'
import Nav     from '@/components/layout/Nav'
import Footer  from '@/components/layout/Footer'

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets:  ['latin'],
  variable: '--font-jakarta',
  weight:   ['700', '800'],
})

export const metadata: Metadata = {
  title:       'TTens Cleaning Services — Exceptional Cleaning. Every Time.',
  description: 'Professional residential and commercial cleaning services across the UK. Get a free, no-obligation quote today.',
  openGraph: {
    title:       'TTens Cleaning Services',
    description: 'Professional cleaning for homes and businesses across the UK.',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <Topbar />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
