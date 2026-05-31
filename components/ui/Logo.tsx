interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { svg: 36, text: 'text-xl',  sub: 'text-[8px]' },
  md: { svg: 48, text: 'text-2xl', sub: 'text-[9.5px]' },
  lg: { svg: 60, text: 'text-3xl', sub: 'text-[11px]' },
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const s = sizes[size]
  const ttColor  = variant === 'dark' ? '#162358' : '#ffffff'
  const ensColor = variant === 'dark' ? '#4a7a2e' : '#4a7a2e'
  const subColor = variant === 'dark' ? '#94a3b8' : 'rgba(255,255,255,0.4)'

  return (
    <div className="flex items-center gap-2.5">
      {/* SVG mark: two slab-T shapes + sparkle */}
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left T — navy */}
        <rect x="2"  y="5"  width="19" height="7" rx="1" fill={ttColor} />
        <rect x="8"  y="12" width="7"  height="24" rx="1" fill={ttColor} />
        {/* Right T — green */}
        <rect x="21" y="9"  width="18" height="7" rx="1" fill={ensColor} />
        <rect x="26" y="16" width="7"  height="20" rx="1" fill={ensColor} />
        {/* Large sparkle */}
        <path
          d="M17 37 L18.3 33.2 L22.1 31.9 L18.3 30.6 L17 26.8 L15.7 30.6 L11.9 31.9 L15.7 33.2 Z"
          fill={ttColor}
        />
        {/* Small sparkle */}
        <path
          d="M23 43 L23.8 40.8 L26 40 L23.8 39.2 L23 37 L22.2 39.2 L20 40 L22.2 40.8 Z"
          fill={ensColor}
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className={`${s.text} font-heading font-black leading-none tracking-tight`}>
          <span style={{ color: ttColor }}>TT</span>
          <span style={{ color: ensColor }}>ens</span>
        </div>
        <div
          className={`${s.sub} font-bold uppercase tracking-[2.5px] mt-0.5`}
          style={{ color: subColor }}
        >
          Cleaning Services
        </div>
      </div>
    </div>
  )
}
