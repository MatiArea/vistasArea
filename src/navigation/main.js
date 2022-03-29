import { COLORS, TEXTSIZE } from '../constants/theme'

import Category from '../screens/category/index'
import Header from '../components/header'
import Home from '../screens/home/index'
import Product from '../screens/product/index'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'Tienda Area',
        headerStyle: {
          backgroundColor: COLORS.color2,
        },
        headerTitleStyle: {
          fontSize: TEXTSIZE.title,
          color: 'black',
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({ title: route['params']['category']['name'] })}
      />
      <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MainNavigator
