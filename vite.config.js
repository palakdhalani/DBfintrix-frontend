import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'

const duplicateToBuildPlugin = () => ({
  name: 'duplicate-to-build',
  closeBundle() {
    try {
      if (fs.existsSync('dist')) {
        fs.cpSync('dist', 'build', { recursive: true })
      }
    } catch (e) {
      console.warn('Could not copy dist to build:', e.message)
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), duplicateToBuildPlugin()],
  build: {
    outDir: 'dist',
  },
})
