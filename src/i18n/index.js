import cn from './cn'
import { createI18n } from 'vue-i18n'
import en from './en'

const i18n = createI18n({
  locale: 'tw',
  // 如果要支持compositionAPI
  legacy: false,
  // 全局注册 $t
  globalInjection: true,
  messages: {
    en,
    cn
  }
})

export default i18n
