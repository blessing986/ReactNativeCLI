import { Image, ImageBackground, View } from 'react-native';
const logoImage = require('./assets/wallpaper.jpg');

const ImageComponent = () => {
  return (
    <View>
      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Image source={logoImage} style={{ width: 200, height: 200 }} />
        <Image
          source={{ uri: 'https://picsum.photos/300' }}
          style={{ width: 300, height: 300 }}
        />
      </ImageBackground>
    </View>
  );
};

export default ImageComponent;
