import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#f6e05e',
        primaryLight: '#faf090',
        primaryExLight: '#fefac5',
        primaryDark: '#d69e2e',
        primaryExDark: '#975a16',
        secondary: '#90caf9',
        secondaryLight: '#bbdefb',
        secondaryExLight: '#e3f2fd',
        secondaryDark: '#1e88e5',
        secondaryExDark: '#1565c0',
        green: '#22C55E',
        greenLight: '#86EFAC',
        greenExLight: '#BBF7D0',
        greenDark: '#15803D',
        greenExDark: '#14532D',
        pink: '#EC4899',
        pinkLight: '#F9A8D4',
        pinkExLight: '#FBCFE8',
        pinkDark: '#BE185D',
        pinkExDark: '#831843',
        red: '#DC2626',
        redLight: '#F87171',
        redExLight: '#FCA5A5',
        redDark: '#B91C1C',
        redExDark: '#7F1D1D',
        gray: '#737373',
        grayLight: '#D4D4D4',
        grayExLight: '#F5F5F5',
        gray50: '#FAFAFA',
        grayDark: '#404040',
        grayExDark: '#171717',
      },
      fontFamily: {
        sans: [ 'Roboto', 'sans-serif' ],
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px)
        'laptop': '1024px',
        // => @media (min-width: 1024px) 
        'desktop': '1280px',
        // => @media (min-width: 1280px)
        'full': '1536px'
        // => @media (min-width: 1536px)
      },
    },
  },
  plugins: [],
};
export default config;
