import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, Pressable, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../components/Header';
import { useNavigation } from "@react-navigation/native";
import Menu from '../components/Menu';
import WatchSlide from '../components/WatchSlide';



const Details = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Menu />
        <ScrollView>
          <View style={styles.backOptionContainer}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="black" />
            </Pressable>
          </View>
          <WatchSlide />
          <View style={styles.productContainer}>
            <Text style={styles.title}>JBL Flip 5 Wireless Portable Bluetooth Speaker</Text>
            <Text style={styles.priceTitle}>$10</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.dayContainer}>Ends in 24 Days 12.25:08</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>PLAY NOW</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, fontWeight: "400", }}>Description</Text>
            <Text style={{ color: "gray", fontSize: 10 }}>JBL Flip 5 Wireless Portable Bluetooth Speaker, Signature Sound with Powerful Bass Radiator, Vibrant Colors with Rugged Fabric Design, Party Boost, IPX7 Waterproof & Type C (Without Mic, Blue)
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 5 }}>About this item</Text>
            <Text style={{ color: "gray", fontSize: 12 }}>JBL SIGNATURE SOUND: Enjoy JBL Pure Bass Sound with all new race track drivers that pump booming Bass in a compact package
              12 HOURS PLAYTIME: Keep the music going longer with 12 Hours of playtime under optimal audio settings, Bluetooth Version: 4.2
              IPX7 WATERPROOF: IPX7 rated, the Flip 5 allows you to enjoy music in rain or at your pool party
              PARTYBOOST: PartyBoost allows you to pair two JBL PartyBoost-compatible speakers together for stereo sound or link multiple JBL PartyBoost-compatible speakers to pump up your party
              TOUGH AND RUGGED: Covered with Durable Fabric material along with Rubber housing, the Flip 5 is little gem for outdoors
              WHATS IN THE BOX: 1 x JBL Flip 5, 1 x Type C USB cable, 1 x Safety Sheet, 1 x Quick Start Guide, 1 x Warranty Card
              BATTERY CAPACITY: 4000 mAh | Charging Time: 2.5 Hrs</Text>
            <Text style={{ color: "gray", fontSize: 12 }}>JBL SIGNATURE SOUND: Enjoy JBL Pure Bass Sound with all new race track drivers that pump booming Bass in a compact package
              12 HOURS PLAYTIME: Keep the music going longer with 12 Hours of playtime under optimal audio settings, Bluetooth Version: 4.2
              IPX7 WATERPROOF: IPX7 rated, the Flip 5 allows you to enjoy music in rain or at your pool party
              PARTYBOOST: PartyBoost allows you to pair two JBL PartyBoost-compatible speakers together for stereo sound or link multiple JBL PartyBoost-compatible speakers to pump up your party
              TOUGH AND RUGGED: Covered with Durable Fabric material along with Rubber housing, the Flip 5 is little gem for outdoors
              WHATS IN THE BOX: 1 x JBL Flip 5, 1 x Type C USB cable, 1 x Safety Sheet, 1 x Quick Start Guide, 1 x Warranty Card
              BATTERY CAPACITY: 4000 mAh | Charging Time: 2.5 Hrs</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Details

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
  backOptionContainer: {
    padding: 5,
  },

  wrapper: {
    height: 200,
    backgroundColor: 'red'

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  productContainer: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "10",
  },
  priceTitle: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  dayContainer: {
    marginTop: 5,
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "300",
    color: "white",
    padding: 5,
  },
  button: {
    backgroundColor: "#1E5CA9",
    borderRadius: 3,
    width: 100,
    height: 30,
    marginLeft: 50,
    alignContent: "flex-end",
  }
})