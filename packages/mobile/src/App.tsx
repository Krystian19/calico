import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Views
import CurrencyListView from './views/CurrencyListView';
import SettingsView from './views/SettingsView';

// View Names
const currencyListView = 'Home';
const settingsView = 'Settings';

const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={currencyListView}
        screenOptions={({ route }): BottomTabNavigationOptions => ({
          tabBarIcon: ({ focused, color, size }): JSX.Element => {
            let iconName = 'home';
            const routeName = route.name;

            if (routeName == currencyListView) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (routeName == settingsView) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={currencyListView} component={CurrencyListView} />
        <Tab.Screen name={settingsView} component={SettingsView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
