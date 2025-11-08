import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  //   css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // Example: Add a global variable or mixin path
  //       additionalData: `@import "./src/assets/styles/_variables.scss";`,
  //       // Example: Configure Sass's NodePackageImporter for resolving node_modules imports
  //       // importers: [new NodePackageImporter()] // Requires `import { NodePackageImporter } from 'sass';`
  //     },
  //   },
  // },
})
