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
        'brand-neon': 'var(--brand-neon)',
        'bg-900': 'var(--bg-900)',
        'bg-800': 'var(--bg-800)',
        'text-300': 'var(--text-300)',
        'text-200': 'var(--text-200)',
        'text-100': 'var(--text-100)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        'scroll-mobile': 'scroll-mobile 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 24px))' },
        },
        'scroll-mobile': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 12px))' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

export default config


