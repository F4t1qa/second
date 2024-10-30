import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vite.dev/config/
export default defineConfig({
	base:'./',
  plugins: [vue(),createHtmlPlugin({ template: 'src/index.html' })],
	  build: {
    outDir: '.', // 将生成的文件直接放在项目根目录
    assetsDir: 'js' // 将 JS 文件放到根目录下的 js 子目录中
  }
})
