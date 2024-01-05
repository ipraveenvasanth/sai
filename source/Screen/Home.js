import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import Home_info from '../components/Home_info';
import { SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import styled from 'styled-components';
import Menu from '../components/Menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import MenuDrawer from './MenuDrawer';

import Fontisto from 'react-native-vector-icons/Fontisto';


const SafeArea = styled(SafeAreaView)`
flex:1;
`;

const SearchContainer = styled.View`
padding:${(props) => props.theme.space[3]};
background-color: white;
`;

const HomeListContainer = styled.View`
flex:1;
padding:${(props) => props.theme.space[0]};
background-color: black;
`;

const Drawer = createDrawerNavigator();


export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Home_info />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1E5CA9",
    justifyContent: "space-around",
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
  AndroidSafeView: {
    flex: 1,
    backgroundColor: "white",
    //  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

})
