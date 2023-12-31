/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        Swhite:"#F2F4F7",
        Sblack:"#1A1C20",
        Scream:"#D9CAB3",
        Sorange:"#E57C23",
        Sred:"#E74646",
        Spurple:"#9336B4",
        Snavy:"#252B48",
        Syellow:"#F7E987",
        Soccur:"#F6AB0A",
        Speach:"#DC6D69",
        Srose:"#B8335D",
        Sgold:"#D3AA02",
        Sgradient:"bg-gradient-to-r from-[#B8335D] to-[#DC6D69]"
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("flowbite/plugin")
  ],
}
