import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Activity_indicator = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
     }, []);
  return (
    <View style={styles.container}>
    {visible ? (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.activityIndicator}
      />
    ) : null}
  </View>
);
};

export default Activity_indicator

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    activityIndicator: {
       alignItems: 'center',
       justifyContent: 'center',
       padding: 8,
    },
   });