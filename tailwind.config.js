/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#09284C',
          ocean: '#164B73',
          orange: '#F4A261',
          'orange-hover': '#E76F51',
          'orange-light': '#FDF1E7',
          cream: '#FAFBFC',
          'cream-light': '#FFFFFF',
          text: '#0F172A',
          muted: '#64748B',
          border: 'rgba(9, 40, 76, 0.08)',
          card: '#FFFFFF',
          dark: '#081E38',
          success: '#16A34A',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Anek Bangla"', 'sans-serif'],
        heading: ['"Outfit"', '"Plus Jakarta Sans"', '"Anek Bangla"', 'sans-serif'],
        serif: ['"Outfit"', '"Plus Jakarta Sans"', '"Anek Bangla"', 'sans-serif'],
        bangla: ['"Anek Bangla"', '"Noto Sans Bengali"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card': '0 2px 12px -2px rgba(9, 40, 76, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 16px 36px -4px rgba(9, 40, 76, 0.09), 0 2px 6px rgba(0, 0, 0, 0.04)',
        'glow-orange': '0 0 25px rgba(244, 162, 97, 0.35)',
        'glow-blue': '0 0 25px rgba(22, 75, 115, 0.25)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}
