import { StyleSheet, View, TextInput } from 'react-native';
import React, { useRef } from 'react';

export const Otp_Box = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const handleInput = (value, nextRef, prevRef) => {
    if (value.length === 1 && nextRef) {
      nextRef.current.focus();
    }
  };

  const handleKeyPress = (e, prevRef) => {
    if (e.nativeEvent.key === 'Backspace' && prevRef) {
      prevRef.current.focus();
    }
  };

  const filterSpecialCharacters = (value) => {
    // Filter out special characters using a regular expression
    return value.replace(/[^a-zA-Z0-9]/g, '');
  };

  return (
    <View style={styles.OTPcontainer}>
      <TextInput
        style={styles.textInputcontainer}
        selectionColor="black"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleInput(filterSpecialCharacters(value), ref2, null)}
        onKeyPress={(e) => handleKeyPress(e, null)}
        ref={ref1}
      />
      <TextInput
        style={styles.textInputcontainer}
        selectionColor="black"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleInput(filterSpecialCharacters(value), ref3, ref1)}
        onKeyPress={(e) => handleKeyPress(e, ref1)}
        ref={ref2}
      />
      <TextInput
        style={styles.textInputcontainer}
        selectionColor="black"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleInput(filterSpecialCharacters(value), ref4, ref2)}
        onKeyPress={(e) => handleKeyPress(e, ref2)}
        ref={ref3}
      />
      <TextInput
        style={styles.textInputcontainer}
        selectionColor="black"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleInput(filterSpecialCharacters(value), ref5, ref3)}
        onKeyPress={(e) => handleKeyPress(e, ref3)}
        ref={ref4}
      />
      <TextInput
        style={styles.textInputcontainer}
        selectionColor="black"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleInput(filterSpecialCharacters(value), ref6, ref4)}
        onKeyPress={(e) => handleKeyPress(e, ref4)}
        ref={ref5}
      />
      <TextInput
        style={styles.textInputcontainer}
        selectionColor="black"
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleInput(filterSpecialCharacters(value), null, ref5)}
        onKeyPress={(e) => handleKeyPress(e, ref5)}
        ref={ref6}
      />
    </View>
  );
};

export default Otp_Box;

const styles = StyleSheet.create({
  OTPcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  textInputcontainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    borderRadius: 8,
    width: 40,
    height: 45,
    margin: 5,
  },
});
