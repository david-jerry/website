import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/dark-bg.webp")',
        'light-bg': 'url("/light-bg.webp")'
      },
      screens: {
        xxs: '325px',
        ...defaultTheme.screens
      },
      fontSize: {
        xxs: '0.55rem',
        s: "0.65rem",
        ...defaultTheme.fontSize
      },
      fontFamily: {
        cursive: ['var(--font-cs)'],
        bfo: ['var(--font-bfo)'],
      },
      boxShadow: {
        '3xl': '0 -2px 5px 4px rgba(148,148,148,148.014)',
        ...defaultTheme.boxShadow
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-slow': 'wiggle 2s linear infinite',
        'ping-slow': 'ping 1s linear infinite',
        'ping-slower': 'ping 2s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
      },
      colors: {
        primary: "#F6913F",
        secondary: "#393A47",
        'bg-dark': "#131424",
        accent: '#2BF124',
        light: "#fefffe",
        dark: "#494949"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
};
export default config;
