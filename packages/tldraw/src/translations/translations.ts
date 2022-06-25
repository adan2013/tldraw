import ar from './ar.json'
import en from './en.json'
import fr from './fr.json'
import it from './it.json'
import zh_cn from './zh-cn.json'

export const TRANSLATIONS = [
  { code: 'en', label: 'English', messages: en },
  { code: 'ar', label: 'عربي', messages: ar },
  { code: 'fr', label: 'Français', messages: fr },
  { code: 'it', label: 'Italiano', messages: it },
  { code: 'zh-cn', label: 'Chinese - Simplified', messages: zh_cn },
] as const

/* ---------- Derived Types (do not change) --------- */

export type TDTranslations = typeof TRANSLATIONS
export type TDLanguage = TDTranslations[number]['code']