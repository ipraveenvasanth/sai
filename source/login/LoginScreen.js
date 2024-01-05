import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Otp_Box from "./Otp_Box";
import { colors } from "../infrastructrue/theme/colors";
import styled from "styled-components";
import { LogoImage } from "../components/StyledComponent";

// const Keyboard_avoiding_view=styled(KeyboardAvoidingView)`
// behavior="position";
// keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -250};
// `;

// const LogoImage=styled(Image)`
// width:250px;
// height:150px;
// resize-mode:contain`;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [showGetOtp, setShowGetOtp] = useState(false);
  const [loginButtonEnabled, setLoginButtonEnabled] = useState(false);
  const navigation = useNavigation();

  const onChangeText = (text) => {
    setEmail(text);
    setShowGetOtp(text.length >= 10);
    setLoginButtonEnabled(false); // Reset login button when text changes
  };

  const handleGetOtpClick = () => {
    // Add logic here to send OTP or perform other actions
    setLoginButtonEnabled(true);
  };

  return (

    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -250}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 80, alignItems: "center", justifyContent: "center" }}>
            <LogoImage source={require('../../image/picture.png')} />
            {/* <Image style={{ width: 250, height: 150 }} source={require('../../image/picture.png')} resizeMode="contain" /> */}
            {/* <StatusBar style="auto" /> */}
          </View>

          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.headingText}>Login</Text>
          </View>

          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.subHeadingText}>Welcome Back</Text>
          </View>

          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.infoText}>Welcome back! Please enter your details</Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text>E-mail/Mobile Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={email}
                onChangeText={(text) => onChangeText(text)}
                style={styles.input}
                placeholder="Enter your mobile number"
                selectionColor={"black"}
                keyboardType="email-address"
                maxLength={30}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
            {showGetOtp && (
              <TouchableOpacity onPress={handleGetOtpClick}>
                <Text style={{ color: "#1E5CA9", fontWeight: "800" }}>GET OTP ?</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.OTPcontainer}>
            <Otp_Box />
          </View>

          <TouchableOpacity
            // disabled={!loginButtonEnabled}
            onPress={() => navigation.navigate("Register")}
            style={[styles.button, { backgroundColor: loginButtonEnabled ? "#1E5CA9" : "grey" },]}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.signupText}>Do not have an account? <Text style={styles.signupLink}>Sign Up</Text></Text>
          </View>


        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 12,
    color: "#1E5CA9",
  },
  subHeadingText: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 24,
    color: "black",
  },
  infoText: {
    fontSize: 14,
    fontWeight: "300",
    color: "#929292",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  input: {
    color: "black",
    marginVertical: 10,
    width: 300,
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#1E5CA9",
    padding: 15,
    borderRadius: 5,
    marginTop: 50,
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "300",
    color: "white",
  },
  signupText: {
    textAlign: "center",
    color: "grey",
    fontSize: 16,
  },
  signupLink: {
    color: colors.brand.origin,
    fontWeight: "500",
  },
  OTPcontainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  AndroidSafeView: {
    flex: 1,
    backgroundColor: "black",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
