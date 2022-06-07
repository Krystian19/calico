import { CoinGecko } from '@calico/nexus';
import { expect } from 'chai';

describe('unit', () => {
  describe('nexus', () => {
    describe('coin gecko', () => {
      const nexus = new CoinGecko.default();

      it('coin gecko: api ping should work correctly', async () => {
        expect(await nexus.ping()).to.equal(true);
      });

      it('coin gecko: should fetch supported coins correctly', async () => {
        const coins = await nexus.getCoins();

        expect(coins.length).to.equal(CoinGecko.SUPPORTED_CURRENCIES.length);
        expect(
          coins.every((cn) => CoinGecko.SUPPORTED_CURRENCIES.includes(cn.id)),
        );

        expect(
          coins.every(
            (cn) =>
              cn.fiatConversions.length ===
              CoinGecko.SUPPORTED_FIAT_CURRENCIES.length,
          ),
        );

        expect(
          coins.every((cn) =>
            cn.fiatConversions.every((fc) =>
              CoinGecko.SUPPORTED_FIAT_CURRENCIES.includes(fc.fiat),
            ),
          ),
        );
      });
    });
  });
});
