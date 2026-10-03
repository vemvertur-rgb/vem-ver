'use client'

import { usePathname, useRouter } from 'next/navigation'

import {
  defaultLocale,
  getLocaleFromPathname,
  localeFlags,
  localeLabels,
  locales,
  type Locale,
} from '@/lib/i18n'

function getLocalizedPath(
  pathname: string,
  locale: Locale,
): string {
  const segments = pathname
    .split('/')
    .filter(Boolean)

  const currentLocale =
    getLocaleFromPathname(pathname)

  if (currentLocale !== defaultLocale) {
    segments.shift()
  }

  const cleanPath =
    segments.length > 0
      ? `/${segments.join('/')}`
      : '/'

  if (locale === defaultLocale) {
    return cleanPath
  }

  if (cleanPath === '/') {
    return `/${locale}/`
  }

  return `/${locale}${cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`}`
}

export function LanguageSelector() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale =
    getLocaleFromPathname(pathname)

  function handleChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    const nextLocale =
      event.target.value as Locale

    const nextPath = getLocalizedPath(
      pathname,
      nextLocale,
    )

    router.push(nextPath)
  }

  return (
    <label className="sr-only">
      Idioma

      <select
        value={currentLocale}
        onChange={handleChange}
        aria-label="Selecionar idioma"
      >
        {locales.map((locale) => (
          <option
            key={locale}
            value={locale}
          >
            {localeFlags[locale]}{' '}
            {localeLabels[locale]}
          </option>
        ))}
      </select>
    </label>
  )
}
