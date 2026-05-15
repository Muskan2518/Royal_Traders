/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    {
      pattern:
        /^(bg|text|border|from|to|via|ring|shadow|fill|stroke)-(brand|accent|ink)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ["hover", "focus", "group-hover", "md", "lg"]
    }
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f4fb",
          100: "#dde4f1",
          200: "#b9c7e0",
          300: "#8aa1c8",
          400: "#5775a8",
          500: "#34548a",
          600: "#243f6e",
          700: "#1c3158",
          800: "#162646",
          900: "#0f1c36",
          950: "#070f22"
        },
        accent: {
          50: "#fdf8ec",
          100: "#faedc8",
          200: "#f3d98c",
          300: "#ecc257",
          400: "#e0ab36",
          500: "#c8902a",
          600: "#a8741f",
          700: "#85581c",
          800: "#6c461d",
          900: "#5b3b1d",
          950: "#341f0d"
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        }
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"]
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", md: "2rem", lg: "3rem" },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1600px"
        }
      }
    }
  },
  plugins: []
};
