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
        width="6/6"
        renderItem={({ item }): JSX.Element => (
          <Box
            width="6/6"
            height="10"
            marginBottom="2"
            rounded="md"
            bg="primary.300"
            textAlign="center"
          >
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
    backgroundColor: '#fff',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '10px',
  },
});
