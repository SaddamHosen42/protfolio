import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#00f5ff",
          "primary-content": "#001a1d",
          "secondary": "#ff00aa",
          "secondary-content": "#160009",
          "accent": "#00ff88",
          "accent-content": "#001a0d",
          "neutral": "#1a1b23",
          "neutral-content": "#d1d5db",
          "base-100": "#0f0f23",
          "base-200": "#1a1b35",
          "base-300": "#2a2d47",
          "base-content": "#e5e7eb",
          "info": "#00c7ff",
          "success": "#00ff88",
          "warning": "#ffbe00",
          "error": "#ff5555",
        },
        light: {
          "primary": "#0891b2",
          "primary-content": "#ffffff",
          "secondary": "#d946ef",
          "secondary-content": "#ffffff",
          "accent": "#10b981",
          "accent-content": "#ffffff",
          "neutral": "#374151",
          "neutral-content": "#f9fafb",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#1f2937",
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        }
      }
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
