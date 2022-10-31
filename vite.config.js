import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  root: 'views',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        nested: path.resolve(__dirname, 'gacha.html')
      }
    },
    outDir: path.resolve(__dirname, 'public'),
  },
})
