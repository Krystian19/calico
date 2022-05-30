import { stitchSchemas } from '@graphql-tools/stitch';

import currencySchema from './currency/currency';

export default stitchSchemas({
  subschemas: [currencySchema],
});
