import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'

const Stack=createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="MapScreen" component={MapScreen}/>
        </Stack.Navigator>
    )
}
