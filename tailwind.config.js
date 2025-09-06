/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#E30A01",
        mainText: "#FFFFFF",
        mainBackground: "#000000",
        brandBackground: "#292524",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        "input:-webkit-autofill": {
          "-webkit-box-shadow": `0 0 0px 1000px ${theme(
            "colors.brandBackground"
          )} inset`,
          "-webkit-text-fill-color": theme("colors.mainText"),
          transition: "background-color 5000s ease-in-out 0s",
        },
      });
    },
  ],
};
