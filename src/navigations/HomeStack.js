import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screeens/HomeScreen';
import ChatScreen from '../screeens/ChatScreen';


const Stack=createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Chat" component={ChatScreen} options={({route})=>(route.params.name?{title:route.params.name}:{title:'Chat'})}/>
        </Stack.Navigator>
    )
}
