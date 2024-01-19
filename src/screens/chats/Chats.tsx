import { StackNavigationProp } from '@react-navigation/stack';
import { FC } from 'react';
import { TypeRootStackParamList } from '../../navigation/navigation.types';
import { Button, Text, View } from 'react-native';

type ChatsProps = {
  navigation: StackNavigationProp<TypeRootStackParamList>;
};

const Home: FC<ChatsProps> = ({ navigation }) => {
  return (
    <View>
      <Text>This is Chats</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      ></Button>
    </View>
  );
};

export default Home;
