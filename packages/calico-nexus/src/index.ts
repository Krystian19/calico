import CoinGecko from 'coingecko-api';

const CoinGeckoClient = new CoinGecko();

(async (): Promise<void> => {
  console.log(await CoinGeckoClient.ping());
})();
