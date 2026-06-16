import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10233F",
        mist: "#F4F8FB",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 35, 63, 0.09)",
      },
    },
  },
  plugins: [],
} satisfies Config;
