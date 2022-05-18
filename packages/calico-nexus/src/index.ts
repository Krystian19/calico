import GeckoClient from './clients/coin_gecko';

(async (): Promise<void> => {
  const client = new GeckoClient();
  console.log(await client.ping());
})();

export { GeckoClient };
