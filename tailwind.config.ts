import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#F2E8D9", secondary: "#1A1A2E", accent: "#E63946" },
      fontFamily: { heading: ["var(--font-heading)", "serif"], body: ["var(--font-body)", "serif"] },
    },
  },
  plugins: [],
};
export default config;
