// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // adjust path as needed
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"TT Hoves Pro"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
