import { fileURLToPath, URL } from 'node:url'
// Vite가 설치 되어있으면 항상 Vite에만 플러그인 추가
// https://vitejs.dev/config/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


const path = require('path');
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});




