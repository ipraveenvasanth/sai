import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'
// import {Ionicons } from '@expo/vector-icons'; 
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

import OrderList_Account from '../components/OrderList_Account';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

export default function Account() {

  const navigation = useNavigation();

  const data = [
    { id: '1', title: 'Location', icon: 'location-sharp', topEdge: '10' },
    { id: '2', title: 'Favourites', icon: 'heart' },
    { id: '3', title: 'My Preference', icon: 'phone-portrait-outline' },
    { id: '4', title: 'Change Number', icon: 'call' },
    { id: '5', title: 'Clear Cache', icon: 'archive' },
    { id: '6', title: 'Clear History', icon: 'time' },
    { id: '7', title: 'Delete Account', icon: 'person-remove-sharp' },
    { id: '8', title: 'Logout', icon: 'power' },
  ];

  const renderItem = ({ item }) => {
    if (item.id === '1') {
      return (
        <TouchableOpacity style={{
          alignItems: "center"
        }}>
          <View style={{
            flexDirection: "row",
            width: 300,
            height: 37,
            justifyContent: "space-between",
            borderColor: "gray",
            borderWidth: 1,
            alignItems: "center",
            marginHorizontal: "auto",
            paddingLeft: 5,
            paddingRight: 5,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
            <Ionicons name={item.icon} size={20} color="gray" />
            <Text style={{ color: "gray" }}>{item.title}</Text>
            <Entypo name="forward" size={20} color="gray" />
          </View>
        </TouchableOpacity>
      );
    }

    if (item.id === '8') {
      return (
        <TouchableOpacity style={{
          alignItems: "center"
        }}>
          <View style={{
            flexDirection: "row",
            width: 300,
            height: 37,
            justifyContent: "space-between",
            borderColor: "gray",
            borderWidth: 1,
            alignItems: "center",
            marginHorizontal: "auto",
            paddingLeft: 5,
            paddingRight: 5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
            <Ionicons name={item.icon} size={20} color="gray" />
            <Text style={{ color: "gray" }}>{item.title}</Text>
            <Entypo name="forward" size={20} color="gray" />
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity style={{
        alignItems: "center"
      }}>
        <View style={{
          flexDirection: "row",
          width: 300,
          height: 37,
          justifyContent: "space-between",
          borderColor: "gray",
          borderWidth: 1,
          alignItems: "center",
          marginHorizontal: "auto",
          paddingLeft: 5,
          paddingRight: 5,
          // borderTopLeftRadius:10,
          // borderTopRightRadius:10,
        }}>


          <Ionicons name={item.icon} size={20} color="gray" />
          <Text style={{ color: "gray" }}>{item.title}</Text>
          <Entypo name="forward" size={20} color="gray" />
        </View>
      </TouchableOpacity>
    );
  }


  return (
    <View style={styles.bg}>
      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack(Home)}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.TextContainer}>Profile</Text>
      <View style={{ flexDirection: "row", justifyContent: 'space-evenly', }} >
        <Image style={styles.profileContainer} source={require('../../image/profile.jpg')}></Image>
        <View style={{ marginVertical: 25 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Catherine</Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>catherine2605@gmail.com</Text>
        </View>
        <View style={{ marginVertical: 35 }}>
          <FontAwesome5 name="edit" size={20} color="black" />
        </View>
      </View>
      <OrderList_Account />

      <View>
        <Text style={{ fontSize: 18, fontWeight: "500", margin: 15, textAlign: "left", paddingLeft: 10 }}>Orders</Text>
        {/* <OrderList_Account/> */}
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
  TextContainer: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 12,
    color: "#1E5CA9",
  },
  profileContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "contain"
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