import { render, screen } from '@testing-library/react'
import Nav from '@/components/layout/Nav'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

test('renders all nav links', () => {
  render(<Nav />)
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
})

test('renders Get a Free Quote CTA', () => {
  render(<Nav />)
  expect(screen.getByRole('link', { name: /get a free quote/i })).toHaveAttribute('href', '/quote')
})
