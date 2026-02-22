/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#4C1D95',
          'purple-light': '#6B46C1',
        },
        accent: {
          orange: '#F97316',
          'orange-red': '#EF4444',
        },
        neutral: {
          'dark-blue': '#1E3A8A',
          'peach': '#FED7AA',
          'pink': '#FCE7F3',
          'purple-bg': '#F3E8FF',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #F97316 0%, #EF4444 100%)',
      },
    },
  },
  plugins: [],
}
