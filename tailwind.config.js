/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        midnight: "#101720",
        blue1: "#426390",
        yellow1: "rgb(255, 240, 0, 0.5)",

        // Surface colors
        surface: "#10131a",
        "surface-dim": "#10131a",
        "surface-bright": "#363941",
        "surface-container-lowest": "#0b0e15",
        "surface-container-low": "#191b23",
        "surface-container": "#1d2027",
        "surface-container-high": "#272a31",
        "surface-container-highest": "#32353c",

        // On surface colors
        "on-surface": "#e1e2ec",
        "on-surface-variant": "#c2c6d6",
        "inverse-surface": "#e1e2ec",
        "inverse-on-surface": "#2e3038",

        // Outline colors
        outline: "#8c909f",
        "outline-variant": "#424754",

        // Primary colors
        "surface-tint": "#adc6ff",
        primary: "#adc6ff",
        "on-primary": "#002e6a",
        "primary-container": "#4d8eff",
        "on-primary-container": "#00285d",
        "inverse-primary": "#005ac2",

        // Secondary colors
        secondary: "#ffe083",
        "on-secondary": "#3c2f00",
        "secondary-container": "#eec200",
        "on-secondary-container": "#645000",

        // Tertiary colors
        tertiary: "#c0c1ff",
        "on-tertiary": "#1000a9",
        "tertiary-container": "#8083ff",
        "on-tertiary-container": "#0d0096",

        // Error colors
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",

        // Fixed colors
        "primary-fixed": "#d8e2ff",
        "primary-fixed-dim": "#adc6ff",
        "on-primary-fixed": "#001a42",
        "on-primary-fixed-variant": "#004395",
        "secondary-fixed": "#ffe083",
        "secondary-fixed-dim": "#eec200",
        "on-secondary-fixed": "#231b00",
        "on-secondary-fixed-variant": "#574500",
        "tertiary-fixed": "#e1e0ff",
        "tertiary-fixed-dim": "#c0c1ff",
        "on-tertiary-fixed": "#07006c",
        "on-tertiary-fixed-variant": "#2f2ebe",

        // Background colors
        background: "#10131a",
        "on-background": "#e1e2ec",
        "surface-variant": "#32353c",
      },
      
    },
  },
  plugins: [],
};
