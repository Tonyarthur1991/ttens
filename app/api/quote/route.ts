import { NextRequest, NextResponse } from 'next/server'
import { sendQuoteEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { service, name, email, phone } = body

  if (!service || !name || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await sendQuoteEmail(body)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quote email failed:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
