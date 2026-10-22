import { Button, StatusBar, View } from 'react-native';

import { useState } from 'react';

const StatusBarComponent = () => {
    const [hidden, setHidden] = useState(false);

  return (
      <View>
          <StatusBar backgroundColor="lightblue" barStyle="light-content" hidden={hidden} />
          
          <Button title={hidden ? 'Show status bar' : 'Hide status bar'} onPress={() => setHidden(!hidden)}/>
    </View>
  );
};

export default StatusBarComponent;
