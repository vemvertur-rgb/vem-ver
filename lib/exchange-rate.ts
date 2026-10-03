import type { CurrencyCode } from '@/lib/currency'

const API_URL = 'https://api.frankfurter.dev/v2/rates'

type FrankfurterRate = {
  date: string
  base: string
  quote: string
  rate: number
}

const supportedCurrencies: CurrencyCode[] = [
  'USD',
  'EUR',
  'JPY',
  'CNY',
]

export async function getExchangeRates(): Promise<
  Partial<Record<CurrencyCode, number>>
> {
  try {
    const response = await fetch(
      `${API_URL}?base=BRL&quotes=${supportedCurrencies.join(',')}`,
      {
        cache: 'no-store',
      },
    )

    if (!response.ok) {
      throw new Error(
        `Erro ao consultar câmbio: ${response.status}`,
      )
    }

    const data =
      (await response.json()) as FrankfurterRate[]

    const rates: Partial<
      Record<CurrencyCode, number>
    > = {
      BRL: 1,
    }

    for (const item of data) {
      const currency =
        item.quote as CurrencyCode

      if (
        supportedCurrencies.includes(currency) &&
        typeof item.rate === 'number' &&
        Number.isFinite(item.rate)
      ) {
        rates[currency] = item.rate
      }
    }

    return rates
  } catch (error) {
    console.error(
      'Não foi possível carregar as cotações:',
      error,
    )

    return {
      BRL: 1,
    }
  }
}
