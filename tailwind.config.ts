import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        'custom-beige': '#FAF3E0',
        'custom-mint-green': '#8BC34A',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
} satisfies Config;
