import React, { useState, useCallback, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import HomeStack from './src/navigations/HomeStack'

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  )
}


