import {
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import groupedPokemonList from '../grouped-data.json';

// import pokemonList from '../data.json';

const Lists = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* old method */}
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <View style={styles.scrollView}>
        {/* <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          // horizontal
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />} // item seperator
          ListEmptyComponent={
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
              No items found
            </Text>
          }
          ListHeaderComponent={
            <Text
              style={styles.headerText}
            >
              Pokemon List
            </Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>
              End of list
            </Text>
          }
        /> */}

        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
