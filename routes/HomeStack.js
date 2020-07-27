import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeSceen';
import DetailScreen from '../screens/Detail';
import Header from '../components/Header';
import {globalStyles} from '../styles/style';

const Stack = createStackNavigator();
export default function HomeStack() {
  // const myModal = useRef(null);
  // const showModal= ()=>{
  //   myModal.current.toggleModal();
  // }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: <Header />,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Image
              style={[globalStyles.headerLeft,{position: 'absolute', right: -35},]}
              source={require('../assets/Group2.png')}
            />
          ),
        }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
