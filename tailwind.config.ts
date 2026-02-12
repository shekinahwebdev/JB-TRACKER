/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: "rgb(var(--card))",
        cardForeground: "rgb(var(--card-foreground))",
        popover: "rgb(var(--popover))",
        popoverForeground: "rgb(var(--popover-foreground))",

        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        blue: {
          DEFAULT: "rgb(var(--blue))",
          foreground: "rgb(var(--blue-foreground))",
        },
        green: {
          DEFAULT: "rgb(var(--green))",
          foreground: "rgb(var(--green-foreground))",
        },
        red: {
          DEFAULT: "rgb(var(--red))",
          foreground: "rgb(var(--red-foreground))",
        },
        black: "rgb(var(--black))",
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "bounce-gentle": "bounce-gentle 2s infinite",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, rgb(var(--primary)) 0%, rgb(var(--secondary)) 100%)",
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
