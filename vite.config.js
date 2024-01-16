import { URL, fileURLToPath } from 'node:url'
// H5项目开启px2vp
// import cosmixPx2vp from './tools/px2vp'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(() => {
  
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      // postcss: {
      //   plugins: [cosmixPx2vp]
      // },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/variables.scss";'
        }
      }
    },
    server: {
      port: 80,
      proxy: {
        '/api': {
          target: 'https://github.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          bypass(req, res, options) {
            const url = new URL(options.rewrite(req.url) || '', options.target)
            console.log(`${req.method}: ${url.href}`)
          }
        }
      }
    }
  }
})
