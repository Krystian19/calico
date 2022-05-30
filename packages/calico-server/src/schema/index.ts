import { stitchSchemas } from '@graphql-tools/stitch';

import currencySchema from './currency';

export default stitchSchemas({
  subschemas: [currencySchema],
});
