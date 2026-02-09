import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
export default {
  darkMode: "class",
  content: [
    "./src/app/pages/**/*.{ts,tsx}",
    "./src/app/components/**/*.{ts,tsx}",
    "./src/app/app/**/*.{ts,tsx}",
    "./sr/capp/**/*.{ts,tsx}",
  ],
  prefix: "",

  theme: {
    extend: {
      colors: {
        muted: "#D1D5DB",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
