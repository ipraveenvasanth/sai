import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
//  import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'; 

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import MenuBar from './MenuBar';
// import HomeScreen from '../../HomeScreen';
// import SettingsScreen from '../../SettingsScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DrawerActions } from '@react-navigation/native';


const Menu = () => {

  return (
    <TouchableWithoutFeedback >
      <View style={styles.container}>
        <Entypo name="menu" size={24} color="white" />
        <Image source={require("./../../image/picture.png")} style={{ resizeMode: "contain", height: "100%", width: "70%" }} />
        <FontAwesome name="bell-o" size={24} color="white" />
        <Ionicons name="person-circle" size={28} color="white" />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E5CA9",
    justifyContent: "space-around",
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
})