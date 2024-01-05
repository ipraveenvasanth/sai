import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Header = () => {
    return (
        <View>
            <Swiper style={styles.wrapper} showsButtons={false} autoplay>
                <View style={styles.slide1} >
                    <Image source={require("./../../assets/a.jpg")} style={{ resizeMode: 'contain', width: "100%", borderRadius: 40 }}>
                    </Image>
                </View>
                <View style={styles.slide2}>
                    <Image source={require("./../../assets/p2.png")} style={{ resizeMode: 'contain', width: "100%", borderRadius: 40 }}>
                    </Image>
                </View>
                <View style={styles.slide3}>
                    <Image source={require("./../../assets/p1.png")} style={{ resizeMode: 'contain', width: "100%", borderRadius: 40 }}>
                    </Image>
                </View>
            </Swiper>

        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E5CA9",
        justifyContent: "space-around",
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        padding: 5
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
    }
})
