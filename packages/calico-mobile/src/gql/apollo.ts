import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import ENV from 'react-native-dotenv';

export function NewApolloClient(): ApolloClient<NormalizedCacheObject> {
  const link = new HttpLink({
    uri: ENV.MOBILE_APP_SERVER_URL,
    credentials: 'same-origin',
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}
