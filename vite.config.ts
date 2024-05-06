import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /* Absolute path */
  resolve: {
    alias: {
      '@': "/src",
      '@components': "/src/components",
      '@pages': "/src/pages",
      /* '@assets': "/src/assets", */
      /* '@layouts': "/src/layouts",
      '@router': "/src/router", */
    }
  }
})
