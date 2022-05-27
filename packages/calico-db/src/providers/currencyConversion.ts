import { createClient } from '../client';

const client = createClient();

export const provider = {
  ...client.currencyConversion,
};
