import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#232932",
      },
      keyframes: {
        "jello-soft": {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.05, 0.95, 1)" },
          "40%": { transform: "scale3d(0.95, 1.05, 1)" },
          "50%": { transform: "scale3d(1.03, 0.97, 1)" },
          "65%": { transform: "scale3d(0.98, 1.02, 1)" },
          "75%": { transform: "scale3d(1.01, 0.99, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      boxShadow: {
        glowing:
          "0 -10px 18.5px rgba(117 139 253, 0.05), 0 10px 18.5px rgba(117 139 253, 0.10)",
          'inner-shadow1': 'inset -8.6px -8.6px 8.6px #bebebe26, inset 8.6px 8.6px 8.6px #0000008c',
      },
      container: {
        center: true,
        padding: "16px", 
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "jello-soft": "jello-soft 0.7s both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
