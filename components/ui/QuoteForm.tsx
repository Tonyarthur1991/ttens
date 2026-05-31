'use client'

import { useState, FormEvent } from 'react'

const SERVICE_OPTIONS = [
  'Regular Clean',
  'Deep Clean',
  'Move In / Move Out',
  'Office & Commercial',
  'After Build / Renovation',
  'Carpet & Upholstery',
]

interface FormData {
  service:       string
  propertyType:  string
  propertySize:  string
  name:          string
  email:         string
  phone:         string
  frequency?:    string
  preferredDate?: string
  postcode?:     string
  notes?:        string
}

interface FormErrors {
  service?: string
  name?:    string
  email?:   string
  phone?:   string
}

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  if (!d.service)                              e.service = 'Please select a service'
  if (!d.name.trim() || d.name.trim().length < 2) e.name = 'Please enter your full name'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Please enter a valid email address'
  if (!d.phone.trim() || d.phone.trim().length < 7) e.phone = 'Please enter a valid phone number'
  return e
}

interface QuoteFormProps {
  expanded?:           boolean
  preselectedService?: string
}

const inputClass = 'w-full bg-brand-page border-[1.5px] border-brand-border rounded-lg px-3.5 py-3 text-[14px] text-brand-muted font-sans focus:outline-none focus:border-green'
const labelClass = 'block text-[11px] font-bold text-navy uppercase tracking-[0.8px] mb-1.5'
const errorClass = 'text-[12px] text-red-600 mt-1'

export default function QuoteForm({ expanded = false, preselectedService = '' }: QuoteFormProps) {
  const [data, setData] = useState<FormData>({
    service: preselectedService, propertyType: '', propertySize: '',
    name: '', email: '', phone: '',
    frequency: '', preferredDate: '', postcode: '', notes: '',
  })
  const [errors, setErrors]   = useState<FormErrors>({})
  const [status, setStatus]   = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function set(field: keyof FormData, value: string) {
    setData(p => ({ ...p, [field]: value }))
    if (errors[field as keyof FormErrors]) setErrors(p => ({ ...p, [field]: undefined }))
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(data)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('submitting')
    try {
      const res = await fetch('/api/quote', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8" role="alert">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="font-heading font-bold text-navy text-xl mb-2">Quote Request Sent!</h3>
        <p className="text-brand-muted text-sm">
          We&apos;ll be in touch within 2 hours. Thank you, {data.name.split(' ')[0]}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-0">

      <label htmlFor="service" className={labelClass}>Service Required</label>
      <select
        id="service"
        aria-label="Service Required"
        className={inputClass}
        value={data.service}
        onChange={e => set('service', e.target.value)}
      >
        <option value="">Select a service</option>
        {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {errors.service && <p className={errorClass}>{errors.service}</p>}

      <div className={`grid grid-cols-2 gap-3 ${expanded ? 'mt-3' : 'mt-3'}`}>
        <div>
          <label htmlFor="propertyType" className={labelClass}>Property Type</label>
          <select id="propertyType" className={inputClass} value={data.propertyType} onChange={e => set('propertyType', e.target.value)}>
            <option value="">Select type</option>
            <option>Home</option><option>Office</option><option>Commercial</option><option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="propertySize" className={labelClass}>Property Size</label>
          <select id="propertySize" className={inputClass} value={data.propertySize} onChange={e => set('propertySize', e.target.value)}>
            <option value="">Select size</option>
            <option>Studio / 1 bed</option><option>2 bedrooms</option><option>3 bedrooms</option>
            <option>4 bedrooms</option><option>5+ bedrooms</option><option>Small office</option><option>Large office</option>
          </select>
        </div>
      </div>

      {expanded && (
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <label htmlFor="frequency" className={labelClass}>Frequency</label>
            <select id="frequency" className={inputClass} value={data.frequency} onChange={e => set('frequency', e.target.value)}>
              <option value="">Select frequency</option>
              <option>One-off</option><option>Weekly</option><option>Fortnightly</option><option>Monthly</option>
            </select>
          </div>
          <div>
            <label htmlFor="preferredDate" className={labelClass}>Preferred Date</label>
            <input id="preferredDate" type="date" className={inputClass} value={data.preferredDate} onChange={e => set('preferredDate', e.target.value)} />
          </div>
        </div>
      )}

      <div className="mt-3">
        <label htmlFor="name" className={labelClass}>Your Name</label>
        <input id="name" type="text" placeholder="Full name" className={inputClass} value={data.name} onChange={e => set('name', e.target.value)} />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      <div className="mt-3">
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input id="email" type="email" placeholder="email@example.com" className={inputClass} value={data.email} onChange={e => set('email', e.target.value)} />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      <div className="mt-3">
        <label htmlFor="phone" className={labelClass}>Phone Number</label>
        <input id="phone" type="tel" placeholder="07700 000000" className={inputClass} value={data.phone} onChange={e => set('phone', e.target.value)} />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      {expanded && (
        <>
          <div className="mt-3">
            <label htmlFor="postcode" className={labelClass}>Postcode</label>
            <input id="postcode" type="text" placeholder="e.g. SW1A 1AA" className={inputClass} value={data.postcode} onChange={e => set('postcode', e.target.value)} />
          </div>
          <div className="mt-3">
            <label htmlFor="notes" className={labelClass}>Additional Notes</label>
            <textarea id="notes" rows={3} placeholder="Anything else we should know..." className={inputClass} value={data.notes} onChange={e => set('notes', e.target.value)} />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-4 w-full bg-green text-white rounded-lg py-3.5 text-[15px] font-bold flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(74,122,46,0.35)] hover:bg-green-light transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send My Quote Request'}
        {status !== 'submitting' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {status === 'error' && (
        <p className="text-[13px] text-red-600 text-center mt-3">
          Something went wrong. Please call us on 0800 123 4567.
        </p>
      )}

      <p className="text-[12px] text-brand-muted text-center mt-3">
        🔒 Your details are safe. We never share your information.
      </p>

    </form>
  )
}
