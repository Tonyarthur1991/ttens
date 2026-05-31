export default function Topbar() {
  return (
    <div className="bg-navy-dark text-white/60 text-[13px] px-[72px] py-2.5 flex justify-between items-center">
      <span>
        Serving residential &amp; commercial clients across the UK —{' '}
        <a href="/contact" className="text-green-light font-bold hover:underline">
          Find your area →
        </a>
      </span>
      <div className="flex gap-7 items-center">
        <span>Mon–Sat: 7am–8pm</span>
        <a
          href="tel:07717375678"
          className="text-white font-extrabold text-sm flex items-center gap-1.5 hover:text-green-light transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1.5 2C1.5 2 3 0.5 5 3L4 4.5C4 4.5 5 6.5 7.5 7.5L9 6.5C11.5 8.5 10 10 10 10C7.5 12.5 1.5 6.5 1.5 2Z" fill="white"/>
          </svg>
          07717 375678
        </a>
      </div>
    </div>
  )
}
