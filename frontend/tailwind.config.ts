import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0098ea",
        "secondary": "#006bc6",
        "accent": "#ff3b00",
        "neutral": "#181213",
        "base-100": "#f5fefb",
        "base-content": "#151615",
        "info": "#00bad9",
        "success": "#009e03",
        "warning": "#ffb242",
        "error": "#ff92a3",
      },
      padding: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      margin: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
      },
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      borderRadius: {
        sm: "5px",
        md: "10px",
        lg: "15px",
      },
      borderWidth: {
        normal: "1px",
        lg: "3px",
      },
      fontSize: {
        xl: "2rem",
        lg: "1.5rem",
        md: "1rem",
        sm: "0.75rem",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
