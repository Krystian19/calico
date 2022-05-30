import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Currency {
    id: ID!
    name: String
    code: String
  }

  type Query {
    getCurrencies: [Currency!]!
  }
`;

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
  typeDefs,
  resolvers,
});
