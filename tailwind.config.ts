import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        electric: "#FF2E2E",
        charcoal: "#0F0F12",
        toxic: "#B4FF00",
        chrome: "#D9D9D9",
        cyan: "#00F0FF"
      },
      fontFamily: {
        display: ["'Bebas Neue'", "'Arial Narrow'", "sans-serif"],
        body: ["'Space Grotesk'", "'Segoe UI'", "sans-serif"]
      },
      boxShadow: {
        toxic: "0 0 30px rgba(180, 255, 0, 0.45)",
        cyan: "0 0 25px rgba(0, 240, 255, 0.35)",
        red: "0 0 35px rgba(255, 46, 46, 0.4)"
      },
      backgroundImage: {
        noise: "radial-gradient(circle at 22% 18%, rgba(255,46,46,0.12), transparent 45%), radial-gradient(circle at 100% 0%, rgba(217,217,217,0.08), transparent 35%), radial-gradient(circle at 0% 100%, rgba(217,217,217,0.06), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
