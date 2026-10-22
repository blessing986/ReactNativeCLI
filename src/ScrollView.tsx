import { Image, ScrollView, Text, View } from 'react-native';

const ScrollViewComponent = () => {
  return (
    <View>
      <ScrollView>
        <Image
          source={{ uri: 'https://picsum.photos/300' }}
          style={{ width: 300, height: 300 }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          consectetur quos tempora error sequi. Ipsum, ullam ut iure ratione
          officia consequuntur? Quam placeat eligendi laborum consequatur porro
          quae autem tenetur. Eum ratione possimus odit repellendus. Animi ad
          adipisci modi quasi at tempore dicta dolorum! Qui cumque, aliquam est
          laboriosam laudantium neque iusto a vitae tempore quas natus quis
          officiis debitis. Cupiditate necessitatibus ut natus sunt assumenda
          sed, debitis rerum pariatur error non consequuntur, excepturi laborum
          recusandae placeat aperiam? Quidem minus, perspiciatis qui odit
          voluptate eum quas ducimus nihil cupiditate aspernatur. Officia harum
          dignissimos aperiam incidunt quos id perspiciatis laudantium magnam
          natus at soluta omnis error distinctio hic veniam eligendi quae illum,
          doloribus nobis ratione asperiores nemo magni corrupti ullam. Commodi!
          Labore molestiae odio optio quasi suscipit. In ipsa obcaecati deleniti
          odio, molestias voluptatibus, eos ducimus, dignissimos ratione
          officiis nostrum. Vitae, numquam dolore amet facilis delectus iusto at
          cupiditate fuga in.
        </Text>
        <Image
          source={{ uri: 'https://picsum.photos/300' }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
    </View>
  );
};

export default ScrollViewComponent;
