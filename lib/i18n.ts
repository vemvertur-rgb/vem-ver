export const locales = [
  'pt',
  'en',
  'es',
  'fr',
  'it',
  'zh',
  'ja',
] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt'

export const localeLabels: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  zh: '简体中文',
  ja: '日本語',
}

export const localeFlags: Record<Locale, string> = {
  pt: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸',
  fr: '🇫🇷',
  it: '🇮🇹',
  zh: '🇨🇳',
  ja: '🇯🇵',
}

export const localeHtmlLang: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
  fr: 'fr',
  it: 'it',
  zh: 'zh-CN',
  ja: 'ja',
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getLocaleFromPathname(
  pathname: string,
): Locale {
  const segments = pathname
    .split('/')
    .filter(Boolean)

  const firstSegment = segments[0]

  if (
    firstSegment &&
    isLocale(firstSegment)
  ) {
    return firstSegment
  }

  return defaultLocale
}
