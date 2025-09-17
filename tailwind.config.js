/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(220 20% 95%)',
        accent: 'hsl(190 80% 50%)',
        primary: 'hsl(240 70% 50%)',
        surface: 'hsl(220 20% 100%)',
        'text-primary': 'hsl(220 15% 15%)',
        'text-secondary': 'hsl(220 15% 40%)',
        dark: {
          bg: 'hsl(220 15% 10%)',
          surface: 'hsl(220 15% 15%)',
          'text-primary': 'hsl(220 15% 90%)',
          'text-secondary': 'hsl(220 15% 70%)',
        }
      },
      borderRadius: {
        'lg': '12px',
        'md': '8px',
        'sm': '4px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(220, 15%, 10%, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
