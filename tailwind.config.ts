import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#162358',
          dark:    '#0c1a45',
          deeper:  '#1e3070',
          footer:  '#07112e',
        },
        green: {
          DEFAULT: '#4a7a2e',
          dark:    '#3a6420',
          light:   '#5d9438',
          bg:      '#edf5e5',
        },
        brand: {
          border: '#e2e8f0',
          muted:  '#64748b',
          page:   '#f6f8fb',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
