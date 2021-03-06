import db from '@calico/db';
import { Currency, Resolvers } from '@calico/server/src/schema/generated';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { makeExecutableSchema } from '@graphql-tools/schema';

const resolvers: Resolvers = {
  Query: {
    getCurrencies: async (): Promise<Currency[]> => {
      return db.Currency.findMany();
    },
  },
};

export default makeExecutableSchema({
  typeDefs: loadSchemaSync('./src/schema/currency/currency.gql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers,
});
