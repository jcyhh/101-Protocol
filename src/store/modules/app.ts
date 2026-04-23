import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@/config/storage'
import { i18n } from '@/locale'

export const useAppStore = defineStore('app', () => {

    const { getLang, setLang } = useStorage()

    const lang = ref(getLang()) // 当前多语言

    // 修改多语言
    const setLocale = (locale:any, reload:boolean = true) =>{
        if(locale == lang.value)return
        lang.value = locale
        setLang(locale)
        i18n.global.locale = locale
        if(reload)location.reload()
    }

    return {
        lang,
        setLocale
    }
})