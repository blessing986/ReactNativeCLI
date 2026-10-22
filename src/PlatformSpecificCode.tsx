import { Platform, StyleSheet, Text, View } from 'react-native';

const PlatformSpecificCode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </View>
  );
};

export default PlatformSpecificCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic',
      },
      android: {
        color: 'blue',
        fontSize: 30,
      },
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
