import { Resend } from 'resend'

export interface QuoteEmailData {
  service:      string
  propertyType: string
  propertySize: string
  name:         string
  email:        string
  phone:        string
  frequency?:   string
  preferredDate?: string
  postcode?:    string
  notes?:       string
}

export async function sendQuoteEmail(data: QuoteEmailData): Promise<void> {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const rows = [
    ['Service',        data.service],
    ['Property Type',  data.propertyType],
    ['Property Size',  data.propertySize],
    ['Frequency',      data.frequency  ?? '—'],
    ['Preferred Date', data.preferredDate ?? '—'],
    ['Postcode',       data.postcode   ?? '—'],
    ['Name',           data.name],
    ['Email',          data.email],
    ['Phone',          data.phone],
    ['Notes',          data.notes      ?? '—'],
  ]

  const html = `
    <h2 style="color:#162358;font-family:sans-serif;">New Quote Request — TTens</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      ${rows.map(([label, value]) => `
        <tr>
          <td style="padding:6px 16px 6px 0;font-weight:700;color:#162358;white-space:nowrap;">${label}</td>
          <td style="padding:6px 0;color:#444;">${value}</td>
        </tr>
      `).join('')}
    </table>
  `

  const { error } = await resend.emails.send({
    from:    process.env.RESEND_FROM    ?? 'TTens <noreply@ttens.co.uk>',
    to:      process.env.QUOTE_RECIPIENT ?? 'hello@ttens.co.uk',
    replyTo: data.email,
    subject: `New Quote Request — ${data.service}`,
    html,
  })

  if (error) throw new Error(error.message)
}
