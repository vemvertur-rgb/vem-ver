'use client'

import { useEffect, useState } from 'react'

import {
  defaultCurrency,
  formatCurrency,
  type CurrencyCode,
} from '@/lib/currency'

import { getExchangeRates } from '@/lib/exchange-rate'

type LocalizedPriceProps = {
  amount: number
  currency?: CurrencyCode
  locale?: string
  className?: string
}

export function LocalizedPrice({
  amount,
  currency = defaultCurrency,
  locale = 'pt-BR',
  className,
}: LocalizedPriceProps) {
  const [rates, setRates] = useState<
    Partial<Record<CurrencyCode, number>>
  >({
    BRL: 1,
  })

  useEffect(() => {
    let active = true

    async function loadRates() {
      const nextRates = await getExchangeRates()

      if (active) {
        setRates(nextRates)
      }
    }

    loadRates()

    return () => {
      active = false
    }
  }, [])

  const rate = rates[currency]

  const convertedAmount =
    currency === 'BRL'
      ? amount
      : typeof rate === 'number'
        ? amount * rate
        : amount

  const formatted =
    currency === 'BRL' || typeof rate === 'number'
      ? formatCurrency(
          convertedAmount,
          currency,
          locale,
        )
      : formatCurrency(
          amount,
          'BRL',
          'pt-BR',
        )

  return (
    <span className={className}>
      {formatted}
    </span>
  )
}
