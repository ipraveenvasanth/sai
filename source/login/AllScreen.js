// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './../../Navigation/TabNavigation';
import StackNavigator from './../../Navigation/StackNavigator';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function AllScreen() {
  return (
    <>
      <Tab.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} /> */}
        <Tab.Screen name="Stack" component={StackNavigator} options={{ headerShown: false }} />

        {/* <Tab.Screen name="Register" component={Register} options={{headerShown:false}} />  */}
        <Tab.Screen name="Tab" component={TabNavigation} options={{ headerShown: false }} />
        {/* <StackNavigator />
          <TabNavigation /> */}

      </Tab.Navigator>

      {/* </NavigationContainer> */}
      {/* <TabNavigation/> */}
      {/* <View style={styles.container}>
      <ThemeProvider theme={theme}>
    <NavigationContainer>
    </NavigationContainer>
    </ThemeProvider>
      <StatusBar style="auto" /> 
    </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  //   searchbar: {
  //      flex:0.2,
  //   backgroundColor: '#fff',
  //   padding:40,
  // },
});


// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import LoginScreen from './source/login/LoginScreen';
// import Register from './source/login/Register';

// const Stack=createNativeStackNavigator();

// const StackNavigator = () => {
//   return (
//    <NavigationContainer>
//     <Stack.Navigator>
//        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
//        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default StackNavigator;

