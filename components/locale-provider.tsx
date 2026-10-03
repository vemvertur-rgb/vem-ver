'use client'

import {
  createContext,
  useContext,
  useMemo,
} from 'react'

import { usePathname } from 'next/navigation'

import {
  defaultLocale,
  getLocaleFromPathname,
  type Locale,
} from '@/lib/i18n'

import {
  getTranslations,
  type Translation,
} from '@/lib/translations'

type LocaleContextValue = {
  locale: Locale
  translations: Translation
}

const LocaleContext =
  createContext<LocaleContextValue | null>(null)

export function LocaleProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const locale =
    pathname
      ? getLocaleFromPathname(pathname)
      : defaultLocale

  const translations =
    useMemo(
      () => getTranslations(locale),
      [locale],
    )

  const value = useMemo(
    () => ({
      locale,
      translations,
    }),
    [locale, translations],
  )

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context =
    useContext(LocaleContext)

  if (!context) {
    throw new Error(
      'useLocale deve ser usado dentro de LocaleProvider.',
    )
  }

  return context
}
