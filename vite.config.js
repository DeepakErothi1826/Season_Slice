import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 75 },
      jpeg: { quality: 70 },
      jpg: { quality: 70 },
      webp: { quality: 70, lossless: false },
      avif: { quality: 60 },
      exclude: /\.jfif$/,
    }),

  ],
  base: './',
  build: {
    target: 'es2020',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-')) return 'react-vendor';
          if (id.includes('node_modules/framer-motion')) return 'animation-vendor';
          if (id.includes('node_modules/zustand')) return 'state-vendor';
          if (id.includes('node_modules/lucide-react')) return 'icon-vendor';
        },
      },
    },
    chunkSizeWarningLimit: 200,
    sourcemap: false,
    reportCompressedSize: false,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
