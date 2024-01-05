import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Categories_info from '../components/Categories_info'

import Ionicons from 'react-native-vector-icons/Ionicons'

import { useNavigation } from "@react-navigation/native";
import Menu from '../components/Menu'
import Activity_indicator from '../components/Activity_indicator'
import Home from './Home';

export default function Categories() {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack(Home)}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity >
      <Text style={styles.TextContainer}>Categories</Text>
      <Categories_info />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: -10
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
  TextContainer: {
    marginBottom: 10,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "500",
    color: "#1E5CA9",
  },
  backContainer: {
    margin: 15,
  }
})