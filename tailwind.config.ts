import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily :{
      sans: ["Poppins", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    colors:{
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
    pink: colors.pink,
    },
    extend: {
      colors:{
        "bg": "#002244",
        "fun-gray-light": "#b2bbcf",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#00c7ff",
        "fun-pink-darker": "#000f2e",
        "fun-pink-darkest": "#000c24",
        "fun-pink-dark": "#192742",
        "fun-pink-light": "#009ac5",
        'green-vogue': {
          '50': '#e9fbff',
          '100': '#cef5ff',
          '200': '#a7f0ff',
          '300': '#6bebff',
          '400': '#26daff',
          '500': '#00b6ff',
          '600': '#008cff',
          '700': '#0071ff',
          '800': '#0061e6',
          '900': '#0056b3',
          '950': '#002244',
      },
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fadeInAndBounce': 'fadeIn 3s ease-out',
      },
      willChange: {
        'projectCard': 'border-color, opacity, transform',
      }
    },
  },
  plugins: [],
}
export default config
