'use client'

import {
  usePathname,
  useRouter,
} from 'next/navigation'

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

  return `/{$locale}${cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`}`
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
    <div className="relative">
      <label
        htmlFor="language-selector"
        className="sr-only"
      >
        Selecionar idioma
      </label>

      <select
        id="language-selector"
        value={currentLocale}
        onChange={handleChange}
        aria-label="Selecionar idioma"
        className="min-h-10 cursor-pointer appearance-none rounded-full border border-border bg-background px-3 pr-8 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

      <span
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground"
        aria-hidden="true"
      >
        ▼
      </span>
    </div>
  )
}
