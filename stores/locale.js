import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    currentLang: 'en', // 默认语言
    messages: {
      en: {}, // 英文语言包
      el: {}  // 希腊语言包
    }
  }),
  actions: {
    // 初始化语言包
    async init() {
      try {
        // 加载语言包（确保文件路径正确）
        const enModule = await import('../locales/en-US.json')
        const elModule = await import('../locales/el-GR.json')
        
        this.messages.en = enModule.default
        this.messages.el = elModule.default
        
        // 取本地存储的语言偏好
        const savedLang = localStorage.getItem('app-lang')
        if (savedLang && ['en', 'el'].includes(savedLang)) {
          this.currentLang = savedLang
        }
      } catch (error) {
        console.error('语言包加载失败:', error)
      }
    },
    
    // 切换语言的方法（关键：确保方法名为setLang）
    setLang(lang) {
      if (['en', 'el'].includes(lang)) {
        this.currentLang = lang
        localStorage.setItem('app-lang', lang) // 持久化存储
      }
    }
  },
  getters: {
    // 翻译方法
    t: (state) => (key) => {
      const keys = key.split('.')
      return keys.reduce((obj, k) => obj?.[k] || key, state.messages[state.currentLang])
    }
  }
})
    