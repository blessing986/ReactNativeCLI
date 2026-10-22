import { ActivityIndicator, View } from 'react-native';

import React from 'react';

const ActivityIndicatorComponent = () => {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />
    </View>
  );
};

export default ActivityIndicatorComponent;
