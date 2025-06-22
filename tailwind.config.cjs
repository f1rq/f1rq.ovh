/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,svelte,js,ts}',
    './src/routes/**/*.{svelte,js,ts}',
    './src/lib/**/*.{svelte,js,ts}'
  ],
  important: true,
  corePlugins: {
    preflight: true,
    cssNesting: false,
  },
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "accent": "#00467a",
          "primary": "#002946", 
          "base-100": "#001c30"
        }
      }
    ],
  },
};