import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import ProfileScreen from '../screens/Profile'


const Tab=createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor:'coral',
            inactiveTintColor:'gray'
        }}
        >
            <Tab.Screen name="home" component={HomeStack} 
            options={{
                tabBarIcon:({size,color})=>(
                    <Ionicons name="home" size={size} color={color} />
                ),
            }}/>
            <Tab.Screen name="profile" component={ProfileScreen}
            options={{
                tabBarIcon:({size,color})=>(
                    <Ionicons name="information-circle" size={size} color={color}/>
                ),
            }}/>
        </Tab.Navigator>
    )
}
