import { Button, Image, Pressable, Text, View } from 'react-native';
const logoImage = require('./assets/wallpaper.jpg');

const ButtonPressable = () => {
  return (
    <View>
      <Button
        title="Pressed"
        onPress={() => console.log('Button pressed')}
        color="midnightblue"
        disabled
      />

      <Pressable
        onPressIn={() => console.log('Image pressed In')}
        onLongPress={() => console.log('Image long pressed')}
        onPressOut={() => console.log('Image pressed Out')}
      >
        <Image source={logoImage} style={{ width: 200, height: 200 }} />
      </Pressable>

      <Pressable onPress={() => console.log('Text pressed')}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero
          accusamus ullam non voluptates facilis distinctio maxime
          exercitationem tempore eos? Impedit quam quisquam officia tenetur
          architecto, illo culpa doloremque laboriosam? Repellendus harum
          officia ullam quasi. Dicta illum perspiciatis molestias rerum, ut
          maxime itaque explicabo voluptates, aspernatur dolores adipisci vel
          magni ipsa quidem est natus totam optio corporis et. Blanditiis,
          dolorum! Odio amet ab sit, iste, consequuntur id, architecto
          asperiores adipisci temporibus incidunt animi? Eos eum atque inventore
          deleniti! Minima molestiae consectetur voluptatibus possimus
          architecto asperiores aliquam tenetur esse nam. Ratione? Eius ea quis
          recusandae repudiandae labore inventore atque officiis enim, maxime at
          doloribus nostrum aut quibusdam natus! Aperiam itaque asperiores quis
          natus aliquam necessitatibus, fuga libero eaque veniam eos corporis!
          Molestiae obcaecati perspiciatis alias non quaerat sapiente laboriosam
          error fugit! Quasi quibusdam minima dolores magni rerum consequatur
          repellendus, est delectus tempore fugiat magnam, libero natus hic
          deleniti ea architecto voluptas!
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonPressable;
