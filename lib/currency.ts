export type CurrencyCode =
  | 'BRL'
  | 'USD'
  | 'EUR'
  | 'JPY'
  | 'CNY'

export type CurrencyInfo = {
  code: CurrencyCode
  name: string
  symbol: string
  flag: string
}

export const currencies: Record<
  CurrencyCode,
  CurrencyInfo
> = {
  BRL: {
    code: 'BRL',
    name: 'Real brasileiro',
    symbol: 'R$',
    flag: '🇧🇷',
  },

  USD: {
    code: 'USD',
    name: 'Dólar americano',
    symbol: 'US$',
    flag: '🇺🇸',
  },

  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
  },

  JPY: {
    code: 'JPY',
    name: 'Iene japonês',
    symbol: '¥',
    flag: '🇯🇵',
  },

  CNY: {
    code: 'CNY',
    name: 'Yuan chinês',
    symbol: '¥',
    flag: '🇨🇳',
  },
}

export const defaultCurrency: CurrencyCode = 'BRL'

export function isCurrency(
  value: string,
): value is CurrencyCode {
  return value in currencies
}

export function formatCurrency(
  amount: number,
  currency: CurrencyCode,
  locale = 'pt-BR',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}
