import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Use standard class strategy for dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#080d1a',
          dark: '#0a0f1e',
          card: '#0f1629',
        },
        primary: {
          green: '#10B981',
          cyan: '#06B6D4',
          emerald: '#34D399',
        },
        text: {
          primary: '#ffffff',
          secondary: '#9ca3af',
          muted: '#6b7280',
        },
      },
      backgroundImage: {
        'gradient-green-cyan': 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        'gradient-emerald-green': 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
        'gradient-radial': 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
