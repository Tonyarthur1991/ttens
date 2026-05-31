import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/ui/ServiceCard'

const mockService = {
  slug:      'regular-clean',
  name:      'Regular Clean',
  shortDesc: 'Keep your home consistently fresh.',
  longDesc:  'Full long description.',
  included:  ['Vacuuming', 'Mopping'],
  whyUs:     ['Same cleaner every visit'],
}

test('renders service name and description', () => {
  render(<ServiceCard service={mockService} />)
  expect(screen.getByText('Regular Clean')).toBeInTheDocument()
  expect(screen.getByText('Keep your home consistently fresh.')).toBeInTheDocument()
})

test('links to the correct service page', () => {
  render(<ServiceCard service={mockService} />)
  const link = screen.getByRole('link', { name: /learn more/i })
  expect(link).toHaveAttribute('href', '/services/regular-clean')
})
