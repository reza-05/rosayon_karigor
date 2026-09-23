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
          cream: '#F7F5EF',
          'cream-light': '#FAF8F5',
          text: '#18232D',
          muted: '#6B747D',
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
        sans: ['"Plus Jakarta Sans"', '"Hind Siliguri"', 'sans-serif'],
        bangla: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(9, 40, 76, 0.06)',
        'card-hover': '0 12px 30px -4px rgba(9, 40, 76, 0.12)',
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
