import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteZip } from 'vite-plugin-zip-file';
import path from 'path';
import { env } from 'node:process';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


import AutoImport from 'unplugin-auto-import/vite'

import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      viteZip({
        folderPath: path.resolve(__dirname, 'dist'),
        outPath: path.resolve(__dirname),
        zipName: 'Test.zip',
        enabled: env.NODE_ENV === 'production'? true: false
      }),
    optimizeCssModules(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true, // <-- this
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host: '0.0.0.0',
    port: 3000
  }
})
