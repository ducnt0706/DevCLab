import React from 'react';
import HomeStack from './src/navigations/HomeStack';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return ( 
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
  );
}
