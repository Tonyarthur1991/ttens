/**
 * @jest-environment node
 */
import { POST } from '@/app/api/quote/route'
import { NextRequest } from 'next/server'

jest.mock('@/lib/email', () => ({
  sendQuoteEmail: jest.fn().mockResolvedValue(undefined),
}))

function makeRequest(body: object) {
  return new NextRequest('http://localhost/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

test('returns 400 when required fields are missing', async () => {
  const res = await POST(makeRequest({ service: 'Regular Clean' }))
  expect(res.status).toBe(400)
})

test('returns 200 with valid payload', async () => {
  const res = await POST(makeRequest({
    service:      'Regular Clean',
    name:         'Jane Smith',
    email:        'jane@example.com',
    phone:        '07700123456',
    propertyType: 'Home',
    propertySize: '3 bedrooms',
  }))
  expect(res.status).toBe(200)
  const data = await res.json()
  expect(data.success).toBe(true)
})
