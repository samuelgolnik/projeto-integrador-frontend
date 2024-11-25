// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Porta do Vite
    proxy: {
      // Redireciona chamadas da API do frontend para o backend
      '/api': {
        target: 'http://localhost:3000', // URL do backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api do caminho
      },
    },
  },
})
