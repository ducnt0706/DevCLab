import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../styles/style'

export default function Header() {
    return (
        <View style={globalStyles.header}>
            <Text style={globalStyles.textHeader}>Dashboard</Text>
        </View>
    )
}
