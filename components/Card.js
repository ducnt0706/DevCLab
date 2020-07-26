import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import {globalStyles} from '../styles/style'

export default function Card(props) {
    return (
        <TouchableOpacity style={[globalStyles.card,props.bg]}>
            <View style={globalStyles.cardContent}>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}
