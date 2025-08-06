import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    "themes": {
      "light": {
        "colors": {
          "default": {
            "50": "#f8f9fa",
            "100": "#e9ecef",
            "200": "#dee2e6",
            "300": "#ced4da",
            "400": "#adb5bd",
            "500": "#6c757d",
            "600": "#495057",
            "700": "#343a40",
            "800": "#212529",
            "900": "#121416",
            "foreground": "#000",
            "DEFAULT": "#6c757d"
          },
          "primary": {
            "50": "#fffce5",
            "100": "#fff7b3",
            "200": "#fff280",
            "300": "#ffed4d",
            "400": "#ffe81a",
            "500": "#ffd700",
            "600": "#ccac00",
            "700": "#998100",
            "800": "#665600",
            "900": "#332b00",
            "foreground": "#000",
            "DEFAULT": "#ffd700"
          },
          "secondary": {
            "50": "#ffe5e5",
            "100": "#ffb3b3",
            "200": "#ff8080",
            "300": "#ff4d4d",
            "400": "#ff1a1a",
            "500": "#e60000",
            "600": "#b30000",
            "700": "#800000",
            "800": "#4d0000",
            "900": "#1a0000",
            "foreground": "#fff",
            "DEFAULT": "#e60000"
          },
          "success": {
            "50": "#e6f9ec",
            "100": "#b3eacb",
            "200": "#80dbab",
            "300": "#4dcb8a",
            "400": "#1abc6a",
            "500": "#00a651",
            "600": "#008540",
            "700": "#00642f",
            "800": "#00431e",
            "900": "#00210d",
            "foreground": "#000",
            "DEFAULT": "#00a651"
          },
          "warning": {
            "50": "#fff3e0",
            "100": "#ffe0b2",
            "200": "#ffcc80",
            "300": "#ffb74d",
            "400": "#ffa726",
            "500": "#ff9800",
            "600": "#fb8c00",
            "700": "#f57c00",
            "800": "#ef6c00",
            "900": "#e65100",
            "foreground": "#000",
            "DEFAULT": "#ff9800"
          },
          "danger": {
            "50": "#f3e5f5",
            "100": "#e1bee7",
            "200": "#ce93d8",
            "300": "#ba68c8",
            "400": "#ab47bc",
            "500": "#9c27b0",
            "600": "#7b1fa2",
            "700": "#6a1b9a",
            "800": "#4a148c",
            "900": "#2e0854",
            "foreground": "#fff",
            "DEFAULT": "#9c27b0"
          },
          "background": "#d0e1ff",
          "foreground": "#2e2e2e",
          "content1": {
            "DEFAULT": "#e0f7fa",  // Water
            "foreground": "#000"
          },
          "content2": {
            "DEFAULT": "#ffe0e0",  // Fire
            "foreground": "#000"
          },
          "content3": {
            "DEFAULT": "#e0ffe0",  // Grass
            "foreground": "#000"
          },
          "content4": {
            "DEFAULT": "#f3e5f5",  // Psychic
            "foreground": "#000"
          },
          "focus": "#ffd700",
          "overlay": "#000000"
        }
      },
      "dark": {
        "colors": {
          "default": {
            "50": "#121416",
            "100": "#212529",
            "200": "#343a40",
            "300": "#495057",
            "400": "#6c757d",
            "500": "#adb5bd",
            "600": "#ced4da",
            "700": "#dee2e6",
            "800": "#e9ecef",
            "900": "#f8f9fa",
            "foreground": "#fff",
            "DEFAULT": "#343a40"
          },
          "primary": {
            "50": "#332b00",
            "100": "#665600",
            "200": "#998100",
            "300": "#ccac00",
            "400": "#ffd700",
            "500": "#ffe81a",
            "600": "#ffed4d",
            "700": "#fff280",
            "800": "#fff7b3",
            "900": "#fffce5",
            "foreground": "#000",
            "DEFAULT": "#ffd700"
          },
          "secondary": {
            "50": "#1a0000",
            "100": "#4d0000",
            "200": "#800000",
            "300": "#b30000",
            "400": "#e60000",
            "500": "#ff1a1a",
            "600": "#ff4d4d",
            "700": "#ff8080",
            "800": "#ffb3b3",
            "900": "#ffe5e5",
            "foreground": "#fff",
            "DEFAULT": "#e60000"
          },
          "success": {
            "50": "#00210d",
            "100": "#00431e",
            "200": "#00642f",
            "300": "#008540",
            "400": "#00a651",
            "500": "#1abc6a",
            "600": "#4dcb8a",
            "700": "#80dbab",
            "800": "#b3eacb",
            "900": "#e6f9ec",
            "foreground": "#000",
            "DEFAULT": "#00a651"
          },
          "warning": {
            "50": "#e65100",
            "100": "#ef6c00",
            "200": "#f57c00",
            "300": "#fb8c00",
            "400": "#ff9800",
            "500": "#ffa726",
            "600": "#ffb74d",
            "700": "#ffcc80",
            "800": "#ffe0b2",
            "900": "#fff3e0",
            "foreground": "#000",
            "DEFAULT": "#ff9800"
          },
          "danger": {
            "50": "#2e0854",
            "100": "#4a148c",
            "200": "#6a1b9a",
            "300": "#7b1fa2",
            "400": "#9c27b0",
            "500": "#ab47bc",
            "600": "#ba68c8",
            "700": "#ce93d8",
            "800": "#e1bee7",
            "900": "#f3e5f5",
            "foreground": "#fff",
            "DEFAULT": "#9c27b0"
          },
          "background": "#1e1e2f",
          "foreground": "#f0f0f0",
          "content1": {
            "DEFAULT": "#004d61",  // Water
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#7f1d1d",  // Fire
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#1b5e20",  // Grass
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#4a148c",  // Psychic
            "foreground": "#fff"
          },
          "focus": "#ffd700",
          "overlay": "#ffffff"
        }
      }
    },
    "layout": {
      "disabledOpacity": "0.5"
    }
  }
  )],
}

module.exports = config;