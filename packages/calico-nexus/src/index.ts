import GeckoClient from './clients/coin_gecko';

(async (): Promise<void> => {
  const client = new GeckoClient();
  console.dir(await client.getCoins(), { depth: null });
})();

export { GeckoClient };
