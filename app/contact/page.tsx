import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — TTens Cleaning Services',
  description: 'Get in touch with TTens. Call, email, or send us a message — we respond quickly.',
}

const hours = [
  { day: 'Monday – Friday', time: '7:00am – 8:00pm' },
  { day: 'Saturday',        time: '8:00am – 6:00pm' },
  { day: 'Sunday',          time: 'By appointment' },
]

export default function ContactPage() {
  return (
    <section className="bg-brand-page px-[72px] py-[72px]">
      <div className="grid grid-cols-2 gap-[72px] items-start">

        {/* Left — contact info */}
        <div>
          <div className="text-[12px] font-extrabold text-green uppercase tracking-[2px] flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-green rounded-full" aria-hidden="true" />
            Get In Touch
          </div>
          <h1 className="font-heading font-black text-[42px] text-navy tracking-tight leading-[1.1] mb-5">
            We&apos;re here to help
          </h1>
          <p className="text-[16px] text-brand-muted leading-relaxed mb-8">
            Have a question about a service, need a quick price estimate, or want to discuss a commercial contract? Reach out — we respond fast.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {[
              { label: 'Phone',   value: '0800 123 4567',    href: 'tel:08001234567' },
              { label: 'Email',   value: 'hello@ttens.co.uk', href: 'mailto:hello@ttens.co.uk' },
              { label: 'Coverage', value: 'Nationwide UK',   href: undefined },
            ].map(c => (
              <div key={c.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-green-bg rounded-lg flex items-center justify-center flex-shrink-0 text-green font-bold text-[13px]">
                  {c.label[0]}
                </div>
                <div>
                  <div className="text-[12px] font-bold text-brand-muted uppercase tracking-[1px] mb-0.5">{c.label}</div>
                  {c.href
                    ? <a href={c.href} className="text-[16px] font-bold text-navy hover:text-green transition-colors">{c.value}</a>
                    : <div className="text-[16px] font-bold text-navy">{c.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-brand-border rounded-xl p-6">
            <div className="text-[13px] font-extrabold text-navy uppercase tracking-[1.5px] mb-4">Opening Hours</div>
            <div className="flex flex-col gap-2">
              {hours.map(h => (
                <div key={h.day} className="flex justify-between text-[14px]">
                  <span className="text-brand-muted">{h.day}</span>
                  <span className="font-semibold text-navy">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — contact form (static HTML, no client state needed) */}
        <div className="bg-white rounded-2xl p-9 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-brand-border">
          <h2 className="font-heading font-extrabold text-[20px] text-navy mb-5">Send a Message</h2>
          <form className="flex flex-col gap-4" action="/api/contact" method="POST">
            {[
              { id: 'cname',  label: 'Full Name',     type: 'text',  placeholder: 'Your name' },
              { id: 'cemail', label: 'Email Address', type: 'email', placeholder: 'email@example.com' },
              { id: 'csubj',  label: 'Subject',       type: 'text',  placeholder: 'How can we help?' },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-[11px] font-bold text-navy uppercase tracking-[0.8px] mb-1.5">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  name={f.id}
                  placeholder={f.placeholder}
                  className="w-full bg-brand-page border-[1.5px] border-brand-border rounded-lg px-3.5 py-3 text-[14px] text-brand-muted focus:outline-none focus:border-green"
                />
              </div>
            ))}
            <div>
              <label htmlFor="cmsg" className="block text-[11px] font-bold text-navy uppercase tracking-[0.8px] mb-1.5">
                Message
              </label>
              <textarea
                id="cmsg"
                name="cmsg"
                rows={5}
                placeholder="Tell us what you need..."
                className="w-full bg-brand-page border-[1.5px] border-brand-border rounded-lg px-3.5 py-3 text-[14px] text-brand-muted focus:outline-none focus:border-green resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green text-white rounded-lg py-3.5 text-[15px] font-bold hover:bg-green-light transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
