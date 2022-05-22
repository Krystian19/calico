import db from '@calico/db';

(async (): Promise<void> => {
  const res = await db.Currency.findFirst({
    where: {
      name: 'yyyzzz',
    },
  });

  console.log(res);
})();
