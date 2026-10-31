import { SafeAreaView, StyleSheet } from 'react-native';

import Lists from './src/Lists';

// import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* <CustomButton title="Press me" onPress={() => Alert.alert('Pressed!')} /> */}
      <Lists />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    // backgroundColor: 'plum',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'plum',
  //   paddingTop: Platform.OS === 'android' ? 25 : 0,
  // },
});
