import CoinGecko from 'coingecko-api';

class GeckoClient {
  client: CoinGecko;

  constructor() {
    this.client = new CoinGecko();
  }

  async ping(): Promise<boolean> {
    return (await this.client.ping()).success;
  }
}

export default GeckoClient;
