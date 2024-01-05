import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import React from 'react'
import Product_info from './Product_info';
import Header from './Header';
import CategoriesRow from './CategoriesRow';

import Fontisto from 'react-native-vector-icons/Fontisto';


const Home_info = () => {

  return (
    <ScrollView>

      <View style={styles.info}>
        <View style={styles.inputbox}>
          <View style={styles.placeholder} >
            <TextInput style={{ fontSize: 18 }}
              placeholder='Search Zishes'
            />
          </View>
          <View style={styles.search}>
            <Fontisto name="search" size={24} color="#1E5CA9" />
          </View>
        </View>
        <Header />
        <Text>Shop by Categories</Text>
        <CategoriesRow />
        < Text>New Arrivals</Text>
        <Product_info />
        <Text>New Collection</Text>
        <Product_info />
        <Text>New Trends</Text>
        <Product_info />
      </View>
    </ScrollView>
  )
}

export default Home_info

const styles = StyleSheet.create({
  info: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  inputbox: {
    borderColor: "#1E5CA9",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "white",
  },
  placeholder: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    height: 50,

  },
  search: {
    alignSelf: "center"
  },
  //    card:{
  //     backgroundColor:'blue'},
  //    cover:{
  //    backgroundColor:'blue'},

});
