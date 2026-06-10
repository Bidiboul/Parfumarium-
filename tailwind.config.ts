import type { Config } from "tailwindcss";

/**
 * Palette & thème Parfumarium
 * ---------------------------------------------------------------
 * Toutes les couleurs de la marque sont centralisées ici.
 * Pour changer l'identité visuelle, modifiez simplement ces valeurs.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs de marque
        ink: "#161311", // Noir profond chaud (texte + ancrages)
        ivory: "#FFFFFF", // Blanc pur (fond principal, cartes, texte sur sombre)
        cream: "#F6EFE1", // Crème / beige (accents : prix, fonds doux)
        champagne: "#E7D8BE", // Beige champagne (bordures, détails)
        gold: "#B9975B", // Doré subtil
        "gold-soft": "#CBB07E", // Doré clair
        warmgray: "#8C857B", // Gris chaud (textes secondaires)
        amber: "#7A4E2D", // Marron ambré (prix, accents chauds)
        sand: "#FAF6EF", // Crème très clair (légère alternance de sections)
        // Univers floral / sensoriel
        sage: "#9DAA93", // Vert sauge (accents)
        "sage-light": "#E7EBE1", // Vert sauge très clair (fonds éditoriaux)
        forest: "#27302A", // Vert profond (footer)
        powder: "#E8D4D0", // Rose poudré (accent doux)
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.18em",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(22, 19, 17, 0.35)",
        "card-hover": "0 30px 70px -28px rgba(22, 19, 17, 0.45)",
        soft: "0 10px 40px -18px rgba(22, 19, 17, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1.1s ease forwards",
        "slow-float": "slow-float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
