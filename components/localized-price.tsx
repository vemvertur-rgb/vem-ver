'use client'

import {
  useEffect,
  useState,
} from 'react'

import {
  defaultCurrency,
  formatCurrency,
  type CurrencyCode,
} from '@/lib/currency'

import {
  getExchangeRates,
} from '@/lib/exchange-rate'

import {
  useCurrency,
} from './currency-provider'

type LocalizedPriceProps = {
  amount: number
  locale?: string
  className?: string
}

const REFRESH_INTERVAL =
  15 * 60 * 1000

export function LocalizedPrice({
  amount,
  locale = 'pt-BR',
  className,
}: LocalizedPriceProps) {
  const {
    currency,
  } = useCurrency()

  const [
    rates,
    setRates,
  ] = useState<
    Partial<
      Record<
        CurrencyCode,
        number
      >
    >
  >({
    BRL: 1,
  })

  const [
    loading,
    setLoading,
  ] = useState(
    currency !== defaultCurrency,
  )

  useEffect(() => {
    let active = true

    async function loadRates() {
      setLoading(true)

      const nextRates =
        await getExchangeRates()

      if (!active) {
        return
      }

      setRates(nextRates)
      setLoading(false)
    }

    if (
      currency !== defaultCurrency
    ) {
      loadRates()
    } else {
      setLoading(false)
    }

    const intervalId =
      window.setInterval(
        () => {
          if (
            currency !==
            defaultCurrency
          ) {
            loadRates()
          }
        },
        REFRESH_INTERVAL,
      )

    return () => {
      active = false
      window.clearInterval(
        intervalId,
      )
    }
  }, [currency])

  const selectedCurrency =
    currency || defaultCurrency

  const rate =
    rates[selectedCurrency]

  const hasRate =
    selectedCurrency ===
      defaultCurrency ||
    typeof rate === 'number'

  const convertedAmount =
    selectedCurrency ===
      defaultCurrency
      ? amount
      : hasRate
        ? amount * (rate as number)
        : amount

  const formatted =
    hasRate
      ? formatCurrency(
          convertedAmount,
          selectedCurrency,
          locale,
        )
      : formatCurrency(
          amount,
          defaultCurrency,
          'pt-BR',
        )

  return (
    <span
      className={className}
      aria-live="polite"
    >
      {loading &&
      selectedCurrency !==
        defaultCurrency
        ? `${formatted}…`
        : formatted}
    </span>
  )
}
