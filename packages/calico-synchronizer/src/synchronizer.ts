import db from '@calico/db';
import { CoinGecko } from '@calico/nexus';

const SECOND = 1000;
const TICK = 20 * SECOND;

export default class Synchronizer {
  nexusClient: CoinGecko.default;

  constructor() {
    this.nexusClient = new CoinGecko.default();
  }

  async run(): Promise<void> {
    await this.syncCurrencyConversionsForever();
  }

  async syncCurrencyConversionsForever(): Promise<void> {
    while (true) {
      await this.refreshCoinConversionInfo();

      // Sleep x amount of time before checking again
      await this.sleep(TICK);
    }
  }

  async refreshCoinConversionInfo(): Promise<void> {
    // Fetch coin latest coin conversion info
    const conversions = await this.nexusClient.getCoins();

    console.log(
      '===================================================================',
    );
    console.log(conversions);

    // Refresh current conversion on DB
    await db.Currency.refreshCurrencies(conversions);
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
