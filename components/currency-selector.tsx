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
    <label className="sr-only">
      Moeda

      <select
        value={currency}
        onChange={(event) =>
          setCurrency(
            event.target.value as CurrencyCode,
          )
        }
        aria-label="Selecionar moeda"
      >
        {Object.values(currencies).map(
          (item) => (
            <option
              key={item.code}
              value={item.code}
            >
              {item.code}
            </option>
          ),
        )}
      </select>
    </label>
  )
}
