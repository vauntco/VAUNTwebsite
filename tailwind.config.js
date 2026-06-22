/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#05070A',
        elevated: '#0E1217',
        card: '#11151C',
        brand: {
          DEFAULT: '#1D9BF0',
          bright: '#45B6FF',
          deep: '#0B63B5',
          panel: '#1DA0F2',
        },
        ink: {
          primary: '#FFFFFF',
          secondary: '#9AA6B5',
          tertiary: '#5C6675',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        glass: '20px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(120,180,255,0.18), 0 8px 40px -8px rgba(29,155,240,0.45)',
        'glow-lg': '0 0 0 1px rgba(120,180,255,0.22), 0 24px 80px -16px rgba(29,155,240,0.55)',
        'glow-sm': '0 0 0 1px rgba(120,180,255,0.16), 0 4px 24px -6px rgba(29,155,240,0.40)',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 40s) linear infinite',
        float: 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
