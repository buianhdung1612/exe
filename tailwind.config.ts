import type { Config } from "tailwindcss"

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
        secondary: ["Londrina Solid", "display"],
      },
    },
  },
  plugins: [],
}

export default config
