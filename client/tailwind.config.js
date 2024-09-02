/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/layouts/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "#22d3ee",
          cerulean: "#06b6d4",
          sky: "#e0f8fc",
          lightBlue: "#b7ecf6",
          powderBlue: "#89dff0",
          aqua: "#5ad2ea",
          azure: "#2aa7e6",
          teal: "#0891b2",
          deepTeal: "#155e75",
          darkTeal: "#134e68",
          darkBlue: "#1e40af",
        },
        secondary: {
          white: "#ffffff",
          lightGray: "#d3d3d3",
          mediumGray: "#4b5563",
          darkGray: "#0b0b0c",
          black: "#000000",
        },
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(
          to right, 
          theme(colors.primary.cerulean),
          theme(colors.primary.azure), 
          theme(colors.primary.cyan))`,
        "secondary-gradient": `linear-gradient(
          to right, 
          theme(colors.primary.cyan),
          theme(colors.primary.teal), 
          theme(colors.primary.darkBlue))`,
      },
      transitionProperty: {
        colors: "background-color, border-color, color",
        transform: "transform",
      },
      transitionDuration: {
        200: "200ms",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      borderColor: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase, addComponents, theme }) {
      addBase({
        a: {
          fontWeight: "bold",
          fontSize: theme("fontSize.xl"),
          color: theme("colors.secondary.mediumGray"),
          transitionProperty: theme("transitionProperty.colors"),
          transitionDuration: theme("transitionDuration.200"),
        },
        button: {
          backgroundColor: theme("colors.primary.cyan"),
          color: theme("colors.secondary.white"),
          transitionProperty: theme("transitionProperty.colors"),
          transitionDuration: theme("transitionDuration.200"),
          "&:hover": {
            backgroundColor: theme("colors.primary.cerulean"),
            color: theme("colors.secondary.white"),
          },
        },
      });

      addComponents({
        ".link-button": {
          width: theme("spacing.44"),
          height: theme("spacing.12"),
          fontWeight: theme("fontWeight.bold"),
          textDecoration: "none",
          color: theme("colors.secondary.white"),
          fontSize: theme("fontSize.xl"),
          borderRadius: theme("borderRadius.3xl"),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transitionProperty: theme("transitionProperty.colors"),
          transitionDuration: theme("transitionDuration.200"),
          cursor: "pointer",
          backgroundColor: theme("colors.primary.cyan"),
          "&:hover": {
            backgroundColor: theme("colors.primary.cerulean"),
            color: theme("colors.secondary.white"),
          },
        },
        ".card": {
          width: "350px",
          height: "400px",
          padding: "10px",
          boxShadow: `-1px 1px 13px ${theme("colors.secondary.lightGray")}`,
          transitionDuration: theme("transitionDuration.200"),
          transitionTimingFunction: "ease-in",
          borderTopLeftRadius: theme("borderRadius.lg"),
          borderTopRightRadius: theme("borderRadius.lg"),
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      });
    },
  ],
};
