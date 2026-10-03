'use client'

import { useEffect, useState } from 'react'

import {
  defaultCurrency,
  formatCurrency,
  type CurrencyCode,
} from '@/lib/currency'

import { getExchangeRates } from '@/lib/exchange-rate'
import { useCurrency } from './currency-provider'

type LocalizedPriceProps = {
  amount: number
  locale?: string
  className?: string
}

export function LocalizedPrice({
  amount,
  locale = 'pt-BR',
  className,
}: LocalizedPriceProps) {
  const { currency } = useCurrency()

  const [rates, setRates] = useState<
    Partial<Record<CurrencyCode, number>>
  >({
    BRL: 1,
  })

  useEffect(() => {
    let active = true

    async function loadRates() {
      const nextRates =
        await getExchangeRates()

      if (active) {
        setRates(nextRates)
      }
    }

    loadRates()

    return () => {
      active = false
    }
  }, [])

  const selectedCurrency =
    currency || defaultCurrency

  const rate = rates[selectedCurrency]

  const convertedAmount =
    selectedCurrency === 'BRL'
      ? amount
      : typeof rate === 'number'
        ? amount * rate
        : amount

  const formatted =
    selectedCurrency === 'BRL' ||
    typeof rate === 'number'
      ? formatCurrency(
          convertedAmount,
          selectedCurrency,
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
