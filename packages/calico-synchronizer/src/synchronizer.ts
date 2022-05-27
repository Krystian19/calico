import db from '@calico/db';
import { CoinGecko } from '@calico/nexus';

const TICK = 20000; // 20 seconds

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
      const conversions = await this.nexusClient.getCoins();
      console.log(
        '===================================================================',
      );
      console.log(conversions);

      // Refresh current conversion on the DB
      await db.Currency.refreshCurrencies(conversions);

      // Sleep x amount of time before checking again
      await this.sleep(TICK);
    }
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
