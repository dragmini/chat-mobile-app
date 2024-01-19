import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Chats from './src/screens/chats/Chats';
import Profile from './src/screens/profile/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center bg-red-600">
    //   <Text className="text-[32px]">Амирка в жопе дырка</Text>
    //   <Text className="text-[22px]">200 рублей - 200 часов</Text>
    //   <Text className="text-[48px]">+79962944687</Text>
    //   <StatusBar style="light" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
