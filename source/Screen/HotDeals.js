import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Menu from '../components/Menu'
import { AllTabView } from '../../App'
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

export default function HotDeals() {
  const navigation = useNavigation();
  return (
    <View style={styles.bg}>
      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack(Home)}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.TextContainer}>My Orders</Text>
      <AllTabView />
    </View>
  )
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
  TextContainer: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "500",
    color: "#1E5CA9",
  },
  backContainer: {
    margin: 15,
  }
})