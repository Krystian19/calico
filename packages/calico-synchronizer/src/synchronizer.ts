import { CoinGecko } from '@calico/nexus';

const TICK = 10000; // 10 seconds

export default class Synchronizer {
  nexusClient: CoinGecko.default;

  constructor() {
    this.nexusClient = new CoinGecko.default();
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async run(): Promise<void> {
    while (true) {
      const conversions = await this.nexusClient.getCoins();
      console.log(
        '===================================================================',
      );
      console.log(conversions);

      await this.sleep(TICK);
    }
  }
}
