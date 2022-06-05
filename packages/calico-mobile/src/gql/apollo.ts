import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export function NewApolloClient(): ApolloClient<NormalizedCacheObject> {
  const link = new HttpLink({
    uri: 'http://localhost:4000',
    credentials: 'same-origin',
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}
