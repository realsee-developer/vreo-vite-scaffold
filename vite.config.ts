import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  })],
  build: {
    outDir: 'docs',
    target: 'chrome54'
  }
})
