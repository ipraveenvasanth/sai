import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import Menu from '../components/Menu';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../infrastructrue/theme/colors';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';


export default function Whislist() {
  const navigation = useNavigation();
  const data = [
    { id: '1', title: 'T-shirt, Full sleeve,dark, LOST Ink', image: require('./../../image/Desktop.jpg'), price: '400' },
    { id: '2', title: 'Leica M3 with APO Summicron 50mm 1:2', image: require('./../../image/earbuds.jpg'), price: '5100' },
    { id: '3', title: 'iPad Pro 2023 with 256GB - purple', image: require('./../../image/cpu.jpg'), price: '25000' },
    { id: '4', title: 'Modena Juice & Vege Blender Silver', image: require('./../../image/cpu.jpg'), price: '3522' },
    { id: '5', title: 'T-shirt, Full sleeve,dark, LOST INK', image: require('./../../image/cpu.jpg'), price: '20000' },
    { id: '6', title: 'T-shirt, Full sleeve,dark, LOST Ink', image: require('./../../image/cpu.jpg'), price: '1070' },
    { id: '7', title: 'LOST Ink', image: require('./../../image/cpu.jpg'), price: '10500' },
    { id: '8', title: 'LOST Ink', image: require('./../../image/cpu.jpg'), price: '1090' },
    { id: '9', title: 'LOST Ink', image: require('./../../image/cpu.jpg'), price: '8000' },
    { id: '10', title: 'LOST Ink', image: require('./../../image/cpu.jpg'), price: '95400' },
  ];

  const renderItem = ({ item }) => (
    <Card style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.imageContainer} source={item.image} />
        <View style={{ margin: 2, width: 230, marginTop: 15 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.priceContainer}>₹{item.price}</Text>
          {/* <Text style={styles.title}>{item.title}</Text> */}

        </View>
      </View>
    </Card>

  );
  return (

    <View style={styles.bg}>
      {/* <Menu/> */}
      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack(Home)}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.TextContainer}>Whislist</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
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
  item: {
    height: 100,
    backgroundColor: '#F5F9FE',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    color: "#183B56",
    fontSize: 14,
    fontWeight: "500",
  },
  priceContainer: {
    color: "gray",
    marginTop: 5,
  },
  imageContainer: {
    height: 80,
    width: 80,
    margin: 5,
    alignSelf: "center",
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