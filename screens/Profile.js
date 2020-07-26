import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../styles/style'

export default function Profile() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textHeader}>Profile</Text>
        </View>
    )
}
