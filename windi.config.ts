import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '3xl': '1920px',
      }
    },
    container: {
      center: true,
      padding: '16px',
    },
  }
})