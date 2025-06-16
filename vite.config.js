import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/YouTube_Clone/',
  plugins: [react()],
  server: {
    open: true
  }
})