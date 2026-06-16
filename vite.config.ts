import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// GitHub Pages 部署在 https://<user>.github.io/<repo>/ 时
// 设置 VITE_BASE=/<repo>/ 来获得正确的资源路径
// 本地 dev 留空即可（Vite 默认 '/'）
const base = process.env.VITE_BASE || './'

export default defineConfig({
  base,
  plugins: [vue(), UnoCSS()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
})
