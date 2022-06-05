import { StatusBar } from 'expo-status-bar';
import { Box, FlatList } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

import { useGetHomeQuery } from '../gql';

export default function CurrencyListView(): JSX.Element {
  const { loading, error, data } = useGetHomeQuery({
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>error...</Text>
      </View>
    );
  }

  const currenciesData = data?.getCurrencies || [];
  if (currenciesData.length == 0) {
    return (
      <View style={styles.container}>
        <Text>Nothing to show</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={currenciesData}
        renderItem={({ item }): JSX.Element => (
          <Box px={5} py={2} rounded="md" my={2} bg="primary.300">
            {item.name}
          </Box>
        )}
        keyExtractor={(item): string => item.id.toString()}
      />
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
