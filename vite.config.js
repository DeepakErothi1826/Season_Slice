import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
      timeout: 30000,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})