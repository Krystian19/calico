import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useGetHomeQuery } from '../gql';

export default function CurrencyListView(): JSX.Element {
  const { loading, error, data } = useGetHomeQuery({
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <>Loading....</>;
  }

  if (error) {
    return <>Error....</>;
  }

  console.log('==========================================================');
  console.log(data?.getCurrencies);

  return (
    <View style={styles.container}>
      <Text>Currency List view</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
