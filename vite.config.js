/*import { fileURLToPath, URL } from 'node:url'*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/Marion-Bernard.github.io',
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: [
      'bootstrap', // Assurez-vous d'inclure les modules nécessaires ici
      // Ajoutez d'autres modules si nécessaire
    ],
  },
})
