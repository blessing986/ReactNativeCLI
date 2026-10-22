import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
// When you rotate the device, the styles for landscape and portrait are applied
const UseWindowDimensions = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View
      style={[
        styles.box,
        {
          width: windowWidth > 500 ? '70%' : '90%',
          height: windowHeight > 600 ? '60%' : '90%',
        },
      ]}
    >
      <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome</Text>
    </View>
  );
};
export default UseWindowDimensions;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
