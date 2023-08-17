/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./public/**/*.html','./src/**/*.{js,jsx,ts,tsx,vue}',],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff5f00',
          LIGHT: '#FFA570',
        },
        secondary: {
          DEFAULT: '#4361EE',
          LIGHT: '#9BABF8',
        },
        success: {
          DEFAULT: '#73C625',
          LIGHT: '#DCF9A8',
        },
        danger: {
          DEFAULT: '#FF5C1C',
          LIGHT: '#FFD0A4',
        },
        warning: {
          DEFAULT: '#EFDF02',
          LIGHT: '#FDF898',
        },
        black: {
          DEFAULT: '#161D24',
          LIGHT: '#C7C8CA',
        },
        white: {
          DEFAULT: '#FFFFFF',
          LIGHT: '#F9F9F9',
          DARK: '#E0E1E1',
        },
      },fontFamily: {
        Pretendard: ['pretendard', 'sans-serif'],
      },
    },
    screens: {
      '2xsm' : { 'min': '280px', 'max': '424px' },
      // => @media (min-width: 280px and max-width: 424px) { ... }

      'xsm' : { 'min': '425px', 'max': '639px' },
      // => @media (min-width: 425px and max-width: 639px) { ... }

      'sm' : { 'min': '640px', 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md' : { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 767px) { ... }

      'lg' : { 'min': '1024px', 'max': '1279px' },
      //=> @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl' : { 'min': '1280px', 'max': '1535px' },
      //=> @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl' : { 'min': '1460px'}, /*컨텐츠 영역 설정*/
      //=> @media (min-width: 1460px) { ... }
    }
  },
  plugins: [],
}

