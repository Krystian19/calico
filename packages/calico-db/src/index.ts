import * as Providers from '@calico/db/src/providers';
import client from '@prisma/client';

export default {
  ...Providers,
  ...client,
};
