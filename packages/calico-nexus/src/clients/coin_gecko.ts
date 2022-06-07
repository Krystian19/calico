import { CoinGeckoClient, Options } from 'coingecko-api-v3';

export const SUPPORTED_CURRENCIES = ['bitcoin', 'ethereum', 'monero', 'zcash'];
export const SUPPORTED_FIAT_CURRENCIES = ['usd', 'eur'];

export default class GeckoClient {
  client: CoinGeckoClient;

  constructor(opts?: Options) {
    this.client = new CoinGeckoClient(opts);
  }

  async ping(): Promise<boolean> {
    return (await this.client.ping()).gecko_says === '(V3) To the Moon!';
  }

  async getCoins(): Promise<BasicCoinConvertion[]> {
    const res = await this.client.simplePrice({
      ids: SUPPORTED_CURRENCIES.join(','),
      vs_currencies: SUPPORTED_FIAT_CURRENCIES.join(','),
    });

    const coins: BasicCoinConvertion[] = [];
    Object.keys(res).forEach((ky) => {
      const conversions = Object.keys(res[ky]);
      const fiatConversions: BasicFiatConversion[] = [];

      conversions.forEach((cv) => {
        fiatConversions.push({
          fiat: cv,
          amount: res[ky][cv],
        });
      });

      coins.push({
        id: ky,
        fiatConversions,
      });
    });

    return coins;
  }
}

export type BasicCoinConvertion = {
  id: string;
  fiatConversions: BasicFiatConversion[];
};

export type BasicFiatConversion = {
  fiat: string;
  amount: number;
};
