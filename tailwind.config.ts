import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3289',
        secondary: '#6270ac',
        tertiary: {
          dark: '#354795',
          light: '#6270ac',
        },
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;