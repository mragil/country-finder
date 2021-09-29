module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
      colors: {
        light_text: "hsl(200, 15%, 8%)",
        light_input: "hsl(0, 0%, 52%)",
        light_bg: "hsl(0, 0%, 98%)",
        light_el: "hsl(0, 0%, 100%)",
      },
      width: {
        tes: "23%",
      },
      maxWidth: {
        "1/12": "8.333333%",
      },
      minWidth: {
        "1/12": "8.333333%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
