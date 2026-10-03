'use client'

import {
  currencies,
  type CurrencyCode,
} from '@/lib/currency'

import { useCurrency } from './currency-provider'

export function CurrencySelector() {
  const { currency, setCurrency } =
    useCurrency()

  return (
    <div className="relative">
      <label
        htmlFor="currency-selector"
        className="sr-only"
      >
        Selecionar moeda
      </label>

      <select
        id="currency-selector"
        value={currency}
        onChange={(event) =>
          setCurrency(
            event.target.value as CurrencyCode,
          )
        }
        aria-label="Selecionar moeda"
        className="min-h-10 cursor-pointer appearance-none rounded-full border border-border bg-background px-3 pr-8 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {Object.values(currencies).map(
          (item) => (
            <option
              key={item.code}
              value={item.code}
            >
              {item.flag} {item.code}
            </option>
          ),
        )}
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
