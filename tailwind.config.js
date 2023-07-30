/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['max-w-[830px]', 'max-w-[400px]', 'ml-[14px]', 'h-[100px]'],
  theme: {
    extend: {
      colors: {
        "epj-red": "#a70e13",
      }
    },
  },
  plugins: [],
}
