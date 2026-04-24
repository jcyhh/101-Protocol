import { createI18n } from 'vue-i18n'
import { useStorage } from '@/config/storage';
import type { TypeLang } from '@/config/type';

import enCommon from './common/en.json';
import koCommon from './common/ko.json';
import jaCommon from './common/ja.json';
import hkCommon from './common/hk.json';
import zhCommon from './common/zh.json';
import idCommon from './common/id.json';
import esCommon from './common/es.json';
import trCommon from './common/tr.json';
import viCommon from './common/vi.json';
import thCommon from './common/th.json';
import ruCommon from './common/ru.json';
import frCommon from './common/fr.json';
import maCommon from './common/ma.json';
import hiCommon from './common/hi.json';

import en from './modules/en.json';
import ko from './modules/ko.json';
import ja from './modules/ja.json';
import hk from './modules/hk.json';
import zh from './modules/zh.json';
import id from './modules/id.json';
import es from './modules/es.json';
import tr from './modules/tr.json';
import vi from './modules/vi.json';
import th from './modules/th.json';
import ru from './modules/ru.json';
import fr from './modules/fr.json';
import ma from './modules/ma.json';
import hi from './modules/hi.json';

const { getLang } = useStorage()

const messages = {
    en: {...en, ...enCommon},
    ko: {...ko, ...koCommon},
    ja: {...ja, ...jaCommon},
    'zh-Hant': {...hk, ...hkCommon},
    'zh-Hans': {...zh, ...zhCommon},
    id: {...id, ...idCommon},
    es: {...es, ...esCommon},
    tr: {...tr, ...trCommon},
    vi: {...vi, ...viCommon},
    th: {...th, ...thCommon},
    ru: {...ru, ...ruCommon},
    fr: {...fr, ...frCommon},
    ma: {...ma, ...maCommon},
    hi: {...hi, ...hiCommon}
}


interface LangOption {
  name: string
  lang: TypeLang
}
export const langs: LangOption[] = [
    { name: 'English', lang: 'en' },        // 英语
    // { name:'french', lang: 'fr'},        // 法语
    { name: '한국어', lang: 'ko' },           // 韩语
    { name: '日本語', lang: 'ja' },          // 日语
    // { name: 'Русский', lang: 'ru' },        // 俄语
    // { name: 'हिन्दी', lang: 'hi' },            // 印地语
    // { name:'malaysia', lang: 'ma'},         // 马来语
    // { name: 'Español', lang: 'es' },     // 西班牙语
    // { name: 'Indonesian', lang: 'id' },     // 印尼语
    // { name: 'Türkçe', lang: 'tr' },      // 土耳其语
    // { name: 'Tiếng Việt', lang: 'vi' },     // 越南
    // { name: 'ภาษาไทย', lang: 'th' },     // 泰国
    { name: '繁体中文', lang: 'zh-Hant' },   // 繁体中文
    { name: '简体中文', lang: 'zh-Hans' },   // 简体中文
]

export const i18n = createI18n({
    legacy: false,
    locale: getLang(),
    missingWarn: false,
    fallbackWarn: false,
    messages
})

export const t = i18n.global.t