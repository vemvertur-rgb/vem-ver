'use client'

import {
  currencies,
  type CurrencyCode,
} from '@/lib/currency'

import { useCurrency } from './currency-provider'
import { useLocale } from './locale-provider'

const currencyNames = {
  pt: {
    BRL: 'Real brasileiro',
    USD: 'Dólar americano',
    EUR: 'Euro',
    JPY: 'Iene japonês',
    CNY: 'Yuan chinês',
  },

  en: {
    BRL: 'Brazilian real',
    USD: 'US dollar',
    EUR: 'Euro',
    JPY: 'Japanese yen',
    CNY: 'Chinese yuan',
  },

  es: {
    BRL: 'Real brasileño',
    USD: 'Dólar estadounidense',
    EUR: 'Euro',
    JPY: 'Yen japonés',
    CNY: 'Yuan chino',
  },

  fr: {
    BRL: 'Réal brésilien',
    USD: 'Dollar américain',
    EUR: 'Euro',
    JPY: 'Yen japonais',
    CNY: 'Yuan chinois',
  },

  it: {
    BRL: 'Real brasiliano',
    USD: 'Dollaro statunitense',
    EUR: 'Euro',
    JPY: 'Yen giapponese',
    CNY: 'Yuan cinese',
  },

  zh: {
    BRL: '巴西雷亚尔',
    USD: '美元',
    EUR: '欧元',
    JPY: '日元',
    CNY: '人民币',
  },

  ja: {
    BRL: 'ブラジル・レアル',
    USD: '米ドル',
    EUR: 'ユーロ',
    JPY: '日本円',
    CNY: '中国人民元',
  },
} satisfies Record<
  string,
  Record<CurrencyCode, string>
>

const currencyLabels = {
  pt: 'Selecionar moeda',
  en: 'Select currency',
  es: 'Seleccionar moneda',
  fr: 'Choisir la devise',
  it: 'Seleziona valuta',
  zh: '选择货币',
  ja: '通貨を選択',
} as const

export function CurrencySelector() {
  const {
    currency,
    setCurrency,
  } = useCurrency()

  const {
    locale,
  } = useLocale()

  const names =
    currencyNames[locale] ||
    currencyNames.pt

  const ariaLabel =
    currencyLabels[locale] ||
    currencyLabels.pt

  return (
    <div className="relative">

      <label
        htmlFor="currency-selector"
        className="sr-only"
      >
        {ariaLabel}
      </label>

      <select
        id="currency-selector"
        value={currency}
        onChange={(event) =>
          setCurrency(
            event.target
              .value as CurrencyCode,
          )
        }
        aria-label={ariaLabel}
        className="min-h-10 cursor-pointer appearance-none rounded-full border border-border bg-background px-3 pr-8 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >

        {Object.values(
          currencies,
        ).map((item) => (
          <option
            key={item.code}
            value={item.code}
          >
            {item.flag} {item.code} —{' '}
            {names[item.code]}
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
