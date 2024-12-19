const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "87.5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#eca3a3",
          100: "#e89191",
          200: "#e57e7e",
          300: "#e16c6c",
          400: "#dd5a5a",
          500: "#DA4848",
          600: "#c44040",
          700: "#983232",
          800: "#822b2b",
          900: "#6d2424",

        },
        semantic: {
          info: "#2780ED",
          success: "#4CAF50",
          warning: "#F59638",
          error: "#ED2227",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      fontSize: {
        display: ["7.1875rem", {
          lineHeight: "7.6875rem",
          letterSpacing: "0",
          fontWeight: "bold",
          textTransform: "none",
        }],
        h1: ["3.5rem", {
          lineHeight: "4rem",
          letterSpacing: "0",
          fontWeight: "600",
          textTransform: "none",
        }],
        h2: ["2rem", {
          lineHeight: "2.5rem",
          letterSpacing: "0",
          fontWeight: "600",
          textTransform: "none",
        }],
        h3: ["1.5rem", {
          lineHeight: "2rem",
          letterSpacing: "0",
          fontWeight: "600",
          textTransform: "none",
        }],
        "text-lg": ["1.125rem", {
          lineHeight: "1.75rem",
          letterSpacing: "0",
          fontWeight: "normal",
          textTransform: "none",
        }],
        "text-md": ["1rem", {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "normal",
          textTransform: "none",
        }],
        "text-sm": ["0.875rem", {
          lineHeight: "1.25rem",
          letterSpacing: "0",
          fontWeight: "normal",
          textTransform: "none",
        }],
        "text-xs": ["0.75rem", { // 
          lineHeight: "1rem",
          letterSpacing: "0",
          fontWeight: "normal",
          textTransform: "none",
        }],
        "text-caption": ["0.625rem", {
          lineHeight: "0.75rem",
          letterSpacing: "0",
          fontWeight: "normal",
          textTransform: "none",
        }],
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
        regular: "400",
      },
    },
  },
  plugins: [animate],
};
