// plugins/i18n.js
export default defineNuxtPlugin((nuxtApp) => {
    // Nuxt 3 + Pinia
    const localeStore = useLocaleStore()
    
    // 初始化语言包
    nuxtApp.hook('app:mounted', async () => {
      await localeStore.init()
    })
    
    // 全局注册$t方法
    nuxtApp.provide('t', (key) => {
      return localeStore.t(key)
    })
    
    // Nuxt 2版本
    // export default ({ app, store }) => {
    //   // 初始化语言包
    //   store.dispatch('init')
    //   
    //   // 全局注册$t方法
    //   app.prototype.$t = (key) => {
    //     return store.getters.t(key)
    //   }
    // }
  // 全局注册获取当前语言的方法（可选）
  nuxtApp.provide('getCurrentLang', () => {
    return localeStore.currentLang
  })
})