import { createClient } from '@calico/db/src/client';

const client = createClient();

export const provider = {
  ...client.currencyConversion,
};
