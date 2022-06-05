import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { MOBILE_APP_SERVER_URL } from '@env';

export function NewApolloClient(): ApolloClient<NormalizedCacheObject> {
  const link = new HttpLink({
    uri: `http://${MOBILE_APP_SERVER_URL}`,
    credentials: 'same-origin',
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}
