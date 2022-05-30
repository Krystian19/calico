import { createClient } from '@calico/db/src/client';
import { CoinGecko } from '@calico/nexus';
import { Prisma } from '@prisma/client';

const client = createClient();

export const provider = {
  ...client.currency,

  async refreshCurrencies(
    conversions: CoinGecko.BasicCoinConvertion[],
  ): Promise<void> {
    await client.$transaction(async (prisma: Prisma.TransactionClient) => {
      for (const cv of conversions) {
        const currentCurrency = await prisma.currency.upsert({
          where: {
            code: cv.id,
          },
          update: {},
          create: {
            name: cv.id,
            code: cv.id,
          },
        });

        await prisma.currencyConversion.deleteMany({
          where: {
            currencyId: currentCurrency.id,
          },
        });

        const newConversions = cv.fiatConversions.map((fc) => ({
          fiat: fc.fiat,
          amount: fc.amount,
          currencyId: currentCurrency.id,
        }));

        await prisma.currencyConversion.createMany({
          data: newConversions,
        });
      }
    });
  },
};
