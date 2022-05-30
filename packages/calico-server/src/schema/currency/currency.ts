import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { makeExecutableSchema } from '@graphql-tools/schema';

const resolvers = {
  Query: {
    getCurrencies: (): { id: number; name: string; code: string }[] => {
      return [
        {
          id: 1,
          name: 'bitcoin',
          code: 'btc',
        },
      ];
    },
  },
};

export default makeExecutableSchema({
  typeDefs: loadSchemaSync('./src/schema/currency/currency.gql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers,
});
