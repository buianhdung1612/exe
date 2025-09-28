import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        client: {
          primary: "#FF6262",
          secondary: "#102937"
        },
      },
      fontFamily: {
        secondary: ['Be Vietnam Pro', 'sans-serif'],
      },
      screens: {
        "2xl": { max: "1540px" },
        "xl": { max: "1280px" },
        "lg": { max: "1024px" },
        "md": { max: "767px" },
        "sm": { max: "479px" },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        ".app-container": {
          "@apply w-full mx-auto max-w-[1520px] 2xl:max-w-[1300px] xl:max-w-[1100px] lg:max-w-[850px] md:max-w-[580px] sm:max-w-[400px]": {},
        },
      })

      // Thêm font-secondary mặc định weight 600
      addUtilities({
        ".font-secondary": {
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontWeight: "700",
        },
      })
    }),
  ],
}

export default config