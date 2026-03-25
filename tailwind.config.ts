import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Murs / fonds clairs — papier galerie légèrement lavande */
        primary: "#FAF5FF",
        /* Texte & teintes — violet profond (plus de noir pierre) */
        secondary: "#4C1D95",
        /* Accents pétillants — or / ambre */
        accent: "#F59E0B",
        /* Second accent — rose pour liens & détails */
        sparkle: "#EC4899",
        /* Texte sur bandeaux colorés (crème chaud — jamais blanc pur, bon contraste) */
        bandFg: "#FEF3C7",
        bandFgMuted: "#FDE68A",
      },
      backgroundImage: {
        /* Bandeaux : violet soutenu (évite l’effet « bande blanche ») */
        "gallery-band":
          "linear-gradient(135deg, #3b0764 0%, #5b21b6 32%, #6d28d9 55%, #7e22ce 72%, #9d174d 100%)",
      },
      fontFamily: { heading: ["var(--font-heading)", "serif"], body: ["var(--font-body)", "serif"] },
    },
  },
  plugins: [],
};
export default config;
