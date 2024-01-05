import { StyleSheet, Text, SafeAreaView, View, Image, KeyboardAvoidingView, TextInput, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { useNavigation } from "@react-navigation/native";
import { colors } from '../infrastructrue/theme/colors';


const Register = () => {

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -200}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 80, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 250, height: 150 }} source={require('../../image/picture.png')} resizeMode='contain' />
            {/* <StatusBar style="auto" /> */}
          </View>

          <View style={{ alignItems: "flex-start" }}>
            <Text style={{ fontSize: 24, fontWeight: "400", marginTop: 12, color: "#041E42", }}>
              Welcome to Zishes
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "300", color: "#929292" }}>
              Please enter details to dive in!
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text>Mobile Number</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingVertical: 5,
                // backgroundColor:"#D0D0D0",
                borderRadius: 5,
                // paddingLeft:10,
              }}
            >
              {/* <Ionicons name="person" size={24} color="black" />        */}
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
                // style={{ marginVertical: 10, width: 250 ,fontSize:email ?16:16}}
                placeholder="  enter your number"
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text>E-mail</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingVertical: 5,
                borderRadius: 5,
                // backgroundColor:"#D0D0D0",
                // paddingLeft:10,
              }}
            >
              {/* <MaterialIcons name="email" size={30} color="black" /> */}
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                // style={{ borderRadius:5,borderWidth:1,borderColor:"gray",marginVertical: 10, width: 250 ,fontSize:email ?16:16,backgroundColor:"white"}}
                placeholder="  enter your e-mail"
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text>Full Name</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingVertical: 5,
                borderRadius: 5,
                backgroundColor: "white",
                // paddingLeft:10,
              }}
            >

              {/* <FontAwesome name="lock" size={30} color="black" /> */}
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}

                // style={{ color: "grey", marginVertical: 10, width: 250 ,fontSize:email ?16:16,backgroundColor:"white"}}
                placeholder="  enter your full name"
              />
            </View>
          </View>
          {/* <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:10}}>
        <Text>Keep me logged in </Text>
        <Text style={{color:"red",fontWeight:"500"}}>Forget Password ?</Text>
      </View> */}
          <View style={{ marginTop: 50 }} />
          <Pressable onPress={() => navigation.navigate('AllDrawer')} style={styles.button}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>

          {/* <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={[styles.button, { backgroundColor: button ? "#1E5CA9" : "grey" },]}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity> */}

          <Pressable onPress={() => navigation.goBack()}
            style={{ marginTop: 15 }}>
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>I have an account? <Text style={styles.signupLink}>Sign In</Text></Text>

          </Pressable>
        </ScrollView>

      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1E5CA9",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "300",
    color: "white",
  },
  signupLink: {
    color: colors.brand.origin,
    fontWeight: "500",
  },
  input: {
    color: "black",
    // marginVertical: 10,
    width: 300,
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#929292",
    borderRadius: 5,
    paddingLeft: 10,
  },
});
