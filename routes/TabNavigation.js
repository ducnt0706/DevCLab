import React from 'react'
import { View, Text } from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import ProfileScreen from '../screens/Profile'


const Tab=createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStack}/>
            <Tab.Screen name="profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}
