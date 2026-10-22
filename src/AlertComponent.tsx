import { Alert, Button, View } from 'react-native';

const AlertComponent = () => {
  return (
    <View>
      <Button title="Alert" onPress={() => Alert.alert('Invalid Data')} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert('Invalid Data', 'DOB incorrect')}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert('Invalid Data', 'DOB incorrect', [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
            },
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ])
        }
      />
    </View>
  );
};

export default AlertComponent;
