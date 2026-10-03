'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  defaultCurrency,
  isCurrency,
  type CurrencyCode,
} from '@/lib/currency'

type CurrencyContextValue = {
  currency: CurrencyCode
  setCurrency: (currency: CurrencyCode) => void
}

const CurrencyContext =
  createContext<CurrencyContextValue | null>(null)

const STORAGE_KEY = 'vem-ver-currency'

export function CurrencyProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [currency, setCurrencyState] =
    useState<CurrencyCode>(defaultCurrency)

  useEffect(() => {
    const saved =
      window.localStorage.getItem(STORAGE_KEY)

    if (saved && isCurrency(saved)) {
      setCurrencyState(saved)
    }
  }, [])

  function setCurrency(
    nextCurrency: CurrencyCode,
  ) {
    setCurrencyState(nextCurrency)

    window.localStorage.setItem(
      STORAGE_KEY,
      nextCurrency,
    )
  }

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
    }),
    [currency],
  )

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context =
    useContext(CurrencyContext)

  if (!context) {
    throw new Error(
      'useCurrency deve ser usado dentro de CurrencyProvider.',
    )
  }

  return context
}
