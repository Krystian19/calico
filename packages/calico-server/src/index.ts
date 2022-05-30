import schema from '@calico/server/src/schema';
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
