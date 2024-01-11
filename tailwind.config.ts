import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Montserrat', 'serif'],
        'sans': ['Montserrat', 'serif', 'sans-serif'],
      },
      colors: {
        'custom-beige': '#FAF3E0',
        'custom-mint-green': '#8BC34A',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
} satisfies Config;
