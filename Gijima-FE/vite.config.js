import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps
  },
  server: {
    host: 'localhost', // Ensure local debugging works
    port: 5173, // Adjust if you use a custom port
  },
})
