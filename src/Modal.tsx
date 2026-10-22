import { Button, Modal, Text, View } from 'react-native';

import { useState } from 'react';

const ModalComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <Button
        title="Pressed"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close Modal"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
