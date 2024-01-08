module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_e5: "#ffffffe5",
          A700_7e: "#ffffff7e",
          A700_d8: "#ffffffd8",
          A700_cc: "#ffffffcc",
          A700_33: "#ffffff33",
          A700_99: "#ffffff99",
          A700_19: "#ffffff19",
          A700: "#ffffff",
        },
        gray: {
          50: "#f9f9f9",
          900: "#111111",
          "900_02": "#28262c",
          "900_03": "#1e1e1e",
          "900_01": "#262626",
        },
        black: {
          900: "#0d0c0f",
          "900_e5": "#000000e5",
          "900_01": "#000000",
          "900_00": "#0d0c0f00",
          "900_19": "#00000019",
        },
        blue_gray: { 300: "#9ca4ab", "100_cc": "#d9d9d9cc" },
      },
      fontFamily: { inter: "Inter", sfcompact: "SF Compact" },
      backgroundImage: {
        gradient: "linear-gradient(270deg ,#0d0c0f,#0d0c0f00,#0d0c0f)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
