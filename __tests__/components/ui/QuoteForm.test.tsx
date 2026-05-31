import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QuoteForm from '@/components/ui/QuoteForm'

beforeEach(() => {
  global.fetch = jest.fn()
})

test('renders all required fields', () => {
  render(<QuoteForm />)
  expect(screen.getByLabelText(/service required/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /send my quote/i })).toBeInTheDocument()
})

test('shows validation errors on empty submit', async () => {
  render(<QuoteForm />)
  fireEvent.click(screen.getByRole('button', { name: /send my quote/i }))
  await waitFor(() => {
    expect(screen.getByText(/please select a service/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument()
  })
})

test('calls /api/quote with form data on valid submit', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValue({
    ok: true,
    json: async () => ({ success: true }),
  })
  const user = userEvent.setup()
  render(<QuoteForm />)
  await user.selectOptions(screen.getByLabelText(/service required/i), 'Regular Clean')
  await user.type(screen.getByLabelText(/your name/i), 'Jane Smith')
  await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
  await user.type(screen.getByLabelText(/phone number/i), '07700123456')
  await user.click(screen.getByRole('button', { name: /send my quote/i }))
  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith('/api/quote', expect.objectContaining({ method: 'POST' }))
  })
})

test('shows success message after submission', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValue({
    ok: true,
    json: async () => ({ success: true }),
  })
  const user = userEvent.setup()
  render(<QuoteForm />)
  await user.selectOptions(screen.getByLabelText(/service required/i), 'Regular Clean')
  await user.type(screen.getByLabelText(/your name/i), 'Jane Smith')
  await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
  await user.type(screen.getByLabelText(/phone number/i), '07700123456')
  await user.click(screen.getByRole('button', { name: /send my quote/i }))
  await waitFor(() => {
    expect(screen.getByText(/quote request sent/i)).toBeInTheDocument()
  })
})
