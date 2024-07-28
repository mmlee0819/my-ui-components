import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/components/index.js',
      output: {
        dir: 'dist',
        format: 'es',
      },
    },
    lib: {
      entry: 'src/components/index.js',
      name: '', 
      formats: ['es', 'cjs'], 
      fileName: (format) => `my-ui-components.${format}.js` 
    },
  },
})
