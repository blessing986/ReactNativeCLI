import { Pressable, StyleSheet, Text } from 'react-native';

import React from 'react';

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 10,
  },
  text: {
    color: 'purple',
    fontSize: 18,
  },
});
