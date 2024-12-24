import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1E40AF",
        secondary: "#F59E0B",
        accent: "#10B981",
        tarawera: {
          '50': '#edfefe',
          '100': '#d1fbfc',
          '200': '#a8f4f9',
          '300': '#6ce9f4',
          '400': '#29d5e7',
          '500': '#0db8cd',
          '600': '#0e93ac',
          '700': '#12768c',
          '800': '#185f72',
          '900': '#195060',
          '950': '#0b3948',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
