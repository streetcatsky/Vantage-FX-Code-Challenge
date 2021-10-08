export type GetExchangeRatesDataType = {
    rates: {
        [key: string]: {
            name: string;
            unit: string;
            value: string;
            type: string;
        }
    }
}
export const getExchangeRates = () => fetch('https://api.coingecko.com/api/v3/exchange_rates');