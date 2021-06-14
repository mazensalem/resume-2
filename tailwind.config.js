module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
        0: "0ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
