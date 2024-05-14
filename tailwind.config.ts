import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        redw: '#ff5f57',
        yelloww: '#FEBC2E',
        greenw: '#28C840',
      },
      borderRadius: {
        'innerw': '0.65rem',
        
      },
      fontFamily: {
        'ibm': "var(--font-ibm)", // Add this line
        'inter': "var(--font-inter)", // Add this line
      },
    },
  },
  plugins: [],
};
export default config;
