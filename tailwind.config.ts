import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        size: {
          "0%, 100%": {
            transform: "scale(1)",
            backgroundColor: "rgb(13 148 136)",
          },
          "50%": {
            transform: "scale(1.05)",
            backgroundColor: "rgb(217 70 239)",
          },
        },
      },
      animation: {
        size: "size 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
