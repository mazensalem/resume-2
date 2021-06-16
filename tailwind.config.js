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
      width: {
        "9/6": "96%",
      },
      screens: {
        change_text: "1100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
