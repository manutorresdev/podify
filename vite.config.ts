import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@_types': '/src/types',
      '@services': '/src/services',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@context': '/src/context',
      '@views': '/src/views'
    }
  }
})
