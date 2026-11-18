import en, { type Dictionary } from './en'
import fa from './fa'

export type LocaleCode = 'en' | 'fa'

export const DICTIONARIES: Record<LocaleCode, Dictionary> = { en, fa }

export const LOCALE_META = {
  en: { path: '/', htmlLang: 'en', dir: 'ltr', short: 'EN', name: 'English' },
  fa: { path: '/fa', htmlLang: 'fa-IR', dir: 'rtl', short: 'فا', name: 'فارسی' }
} as const

export function useLocaleData(locale: LocaleCode) {
  return {
    locale,
    dict: DICTIONARIES[locale],
    meta: LOCALE_META[locale],
    other: (locale === 'en' ? 'fa' : 'en') as LocaleCode
  }
}

export { en, fa }
export type { Dictionary }
