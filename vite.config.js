import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://laineypau.github.io/tommy-dogs-website/ on GitHub Pages,
  // so assets must be referenced relative to this subpath, not the domain root.
  base: '/tommy-dogs-website/',
  plugins: [react(), tailwindcss()],
})
