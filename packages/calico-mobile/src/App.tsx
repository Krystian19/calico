import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@calico/mobile-graphql';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Views
import CurrencyListView from './views/CurrencyListView';
import SettingsView from './views/SettingsView';

const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  const apolloClient = NewApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={HOME}
          screenOptions={({ route }): BottomTabNavigationOptions => ({
            tabBarIcon: ({ focused, color, size }): JSX.Element => (
              <Ionicons
                name={getNavbarIcon(route.name, focused)}
                size={size}
                color={color}
              />
            ),
          })}
        >
          <Tab.Screen name={HOME} component={CurrencyListView} />
          <Tab.Screen name={SETTINGS} component={SettingsView} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

function NewApolloClient(): ApolloClient<NormalizedCacheObject> {
  const link = new HttpLink({
    uri: 'http://localhost:4000',
    credentials: 'same-origin',
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}

// Views
const HOME = 'Home';
const SETTINGS = 'Settings';

function getNavbarIcon(routeName: string, focused: boolean): string {
  switch (routeName) {
    case SETTINGS:
      return focused ? 'settings' : 'settings-outline';
    case HOME:
    default:
      return focused ? 'home' : 'home-outline';
  }
}
