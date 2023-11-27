import { createApp } from 'vue'
import App from './app.vue'
// 主库
import i18n from './i18n'
import router from './router'
// 注册插件
import store from './store'

// 全局样式注册
import 'vant/lib/index.css'
import './style/global.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
