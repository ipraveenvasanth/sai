import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './source/infrastructrue/theme';
import LoginScreen from './source/login/LoginScreen';
import Register from './source/login/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './source/Screen/Home';
import Categories from './source/Screen/Categories';
import HotDeals from './source/Screen/HotDeals';
import Whislist from './source/Screen/Whislist';
import Account from './source/Screen/Account';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from 'styled-components';
import Details from './source/login/Details';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Delivered from './source/MyOrders/Delivered';
import Processing from './source/MyOrders/Processing';
import Cancelled from './source/MyOrders/Cancelled';
import { colors } from './source/infrastructrue/theme/colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuDrawer from './source/Screen/MenuDrawer';
import DrawerNavigator from './DrawerNavigator';

const SafeArea = styled(SafeAreaView)`
flex:1;`;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabView = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


const AllDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* <Drawer.Screen name='Home' component={Home}/> */}
        <Drawer.Screen name='MenuDrawer' component={MenuDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export const AllTabView = () => {
  return (
    <NavigationContainer independent={true}>
      <TabView.Navigator>
        <TabView.Screen name="Delivered" component={Delivered} />
        <TabView.Screen name="Processing" component={Processing} />
        <TabView.Screen name="Cancelled" component={Cancelled} />
      </TabView.Navigator>
    </NavigationContainer>
  )
}

const AllStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="AllDrawer" component={DrawerNavigator} />
    {/* <Stack.Screen name="AllTab" component={AllTab} /> */}
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export const AllTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
          <Tab.Screen name="Home" component={Home}
            options={{
              headerTitle: () => (<Image source={require('./assets/logo1.png')} style={{ width: 150, height: 70, resizeMode: "contain" }} />),
              headerShown: true,
              tabBarLabel: 'Home',
              headerStyle: { backgroundColor: colors.brand.origin },
              headerLeft: ({ color, size, focused }) => (<TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" size={34} color={focused ? colors.brand.origin : "white"} style={{ marginLeft: 10 }} /></TouchableOpacity>),
              headerRight: ({ color, size, focused }) => (<TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.openDrawer()}>

                <Ionicons name="notifications" size={24} color={focused ? colors.brand.origin : "white"} style={{ marginRight: 15 }} />
                <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                  <MaterialCommunityIcons name="account-circle" size={24} color={focused ? colors.brand.origin : "white"} style={{ marginRight: 15 }} />
                </TouchableOpacity>
              </TouchableOpacity>),

              // tabBarButton:({ color, size ,focused})=>( <Entypo name="home" size={24} color={focused ? colors.brand.origin : "gray"} />
              // ),
              tabBarIcon: ({ color, size, focused }) => (
                <Entypo name="home" size={24} color={focused ? colors.brand.origin : "gray"} />
              )
            }} />

          <Tab.Screen name="Categories" component={Categories}
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({ color, size, focused }) => (
                <MaterialIcons name="category" size={24} color={focused ? colors.brand.origin : "gray"} />
              )
            }} />
          <Tab.Screen name="Hot Deals" component={HotDeals}
            options={{
              tabBarLabel: 'Hot Deals',
              tabBarIcon: ({ color, size, focused }) => (
                <Entypo name="rocket" size={24} color={focused ? colors.brand.origin : "gray"} />
              )
            }} />
          <Tab.Screen name="Whislist" component={Whislist}
            options={{
              tabBarLabel: 'Whislist',
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="heart" size={24} color={focused ? colors.brand.origin : "gray"} />
              )
            }} />
          <Tab.Screen name="Account" component={Account}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons name="account" size={24} color={focused ? colors.brand.origin : "gray"} />
              )
            }} />
        </Tab.Navigator>
        {/* </SafeArea> */}
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  )
}


export default function App() {
  return (
    <>
      {/* <View style={styles.container}> */}
      <NavigationContainer independent={true}>
        {/* <AllTab /> */}
        {/* <DrawerNavigator/> */}
        <AllStack />
      </NavigationContainer>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    //    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});



