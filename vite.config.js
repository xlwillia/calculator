import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/calculator/",
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "Calculator",
        categories: ["productivity"],
        description: "A Calculator/Unit Converter/Currency Converter made using Vue!",
        display: "standalone",
        icons: [
          {
            "src": "src/assets/images/calculator_icon_48.jpg",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "src/assets/images/calculator_icon_72.jpg",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "src/assets/images/calculator_icon_96.jpg",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "src/assets/images/calculator_icon_144.jpg",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "src/assets/images/calculator_icon_168.jpg",
            "sizes": "168x168",
            "type": "image/png"
          },
          {
            "src": "src/assets/images/calculator_icon_192.jpg",
            "sizes": "192x192",
            "type": "image/png"
          }
        ],
        orientation: "portrait-primary"
      }
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
