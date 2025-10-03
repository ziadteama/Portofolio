import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom triathlete theme colors
        'sport-blue': '#00d4ff',
        'sport-green': '#00ff88',
        'sport-orange': '#ff6b35',
        'sport-purple': '#a855f7',
        'dark': {
          900: '#0a0e1a',
          800: '#111827',
          700: '#1e293b',
        }
      },
      fontFamily: {
        'sport': ['Orbitron', 'monospace'],
        'body': ['Rajdhani', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'sport-gradient': 'linear-gradient(135deg, #00d4ff 0%, #00ff88 50%, #ff6b35 100%)',
        'blue-gradient': 'linear-gradient(135deg, #00d4ff 0%, #0ea5e9 100%)',
        'green-gradient': 'linear-gradient(135deg, #00ff88 0%, #10b981 100%)',
        'orange-gradient': 'linear-gradient(135deg, #ff6b35 0%, #f97316 100%)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'track-move': 'track-move 3s linear infinite',
        'ripple': 'ripple-expand 4s ease-out infinite',
        'gear-rotate': 'rotate 4s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'track-move': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'ripple-expand': {
          '0%': { width: '0', height: '0', opacity: '1' },
          '100%': { width: '600px', height: '600px', opacity: '0' },
        },
        'rotate': {
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px var(--neon-blue)' },
          '50%': { boxShadow: '0 0 30px var(--neon-blue), 0 0 45px var(--neon-blue)' },
        },
      },
    },
  },
} satisfies Config;

