import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AllTab } from './App';

import Categories from './source/Screen/Categories';
import HotDeals from './source/Screen/HotDeals';
import Whislist from './source/Screen/Whislist';
import Account from './source/Screen/Account';
import Home from './source/Screen/Home';
import LoginScreen from './source/login/LoginScreen';
import Register from './source/login/Register';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} >
      {/* <Drawer.Screen name='LoginScreen' component={LoginScreen}/>
      <Drawer.Screen name='Register' component={Register}/> */}
      <Drawer.Screen name='AllTab' component={AllTab} />
      <Drawer.Screen name='Home' component={Home} />

      <Drawer.Screen name='Categories' component={Categories} />

      <Drawer.Screen name='Hot Deals' component={HotDeals} options={{ headerShown: false }} />
      <Drawer.Screen name='Whislist' component={Whislist} options={{ headerShown: false }} />
      <Drawer.Screen name='Account' component={Account} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})