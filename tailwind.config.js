/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
    theme: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      extend: {},
    },
    plugins: [require("preline/plugin")],
  }
);
