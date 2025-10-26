import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false
    }
  },
  optimizeDeps: {
    exclude: ['node_modules']
  },
  build: {
    rollupOptions: {
      external: []
    }
  }
})
export default defineConfig({
  plugins: [react()],
  base: '/cacel-website/',
  // ... 既存の設定
})
