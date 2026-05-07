import { animations, easeOut } from "framer-motion";
import { scrollbar } from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%':{ opacity: 0, transform: "translateY(6rem)" },
        '100%': { opacity: 1, transform: "translateY(0)" } }
        },
        animations:{
          fadeIn:'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        },
colors: {
  neon: " #39FF14",
        },
      },
    },
plugins: [
  scrollbar({ nocompatible: true })
],
  };