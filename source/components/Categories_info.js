import { StyleSheet, Text, View, FlatList, Image, ImageBackground, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Card } from 'react-native-paper'
import { Menu } from "./Menu"

const categories = [
    {
        id: '1',
        name: 'Fashion',
        image: require('./../../CategoriesImage/Fashion.jpg')
    },
    {
        id: '2',
        name: 'Mobiles',
        image: require('./../../CategoriesImage/Mobiles.jpg')
    },
    {
        id: '3',
        name: 'Music',
        image: require('./../../CategoriesImage/Music.jpg')
    },
    {
        id: '4',
        name: 'Laptops',
        image: require('./../../CategoriesImage/Laptops.jpg')
    },
    {
        id: '5',
        name: 'Automobiles',
        image: require('./../../CategoriesImage/Automobiles.jpg')
    },
    {
        id: '6',
        name: 'Sports',
        image: require('./../../CategoriesImage/sports-tools.jpg')
    },
    {
        id: '7',
        name: 'Gym',
        image: require('./../../CategoriesImage/Gym.jpg')
    },
    {
        id: '8',
        name: 'Games',
        image: require('./../../CategoriesImage/Games.jpg')
    },
    {
        id: '9',
        name: 'Furnitures',
        image: require('./../../CategoriesImage/Furniture.jpg')
    },
    {
        id: '10',
        name: 'Cosmetics',
        image: require('./../../CategoriesImage/Cosmetics.jpg')
    },
    {
        id: '11',
        name: 'T-shirts',
        image: require('./../../CategoriesImage/T-shirts.jpg')
    },
    {
        id: '12',
        name: 'Kids',
        image: require('./../../CategoriesImage/Kids.jpg')
    },
    {
        id: '13',
        name: 'Drinks',
        image: require('./../../CategoriesImage/Drinks.jpg')
    },
    {
        id: '14',
        name: 'Perfumes',
        image: require('./../../CategoriesImage/Perfumes.jpg')
    },
    {
        id: '15',
        name: 'Gadgets',
        image: require('./../../assets/watch.jpg')
    }, {
        id: '16',
        name: 'Gadgets',
        image: require('./../../assets/watch.jpg')
    }, {
        id: '17',
        name: 'Gadgetss',
        image: require('./../../assets/watch.jpg')
    }, {
        id: '18',
        name: '18Gadgets',
        image: require('./../../assets/watch.jpg')
    },
    {
        id: '19',
        name: '19Gadgets',
        image: require('./../../assets/watch.jpg')
    }, {
        id: '20',
        name: '20Gadgets',
        image: require('./../../assets/watch.jpg')
    },
];

const oneCategories = ({ item }) => (
    <TouchableOpacity>
        <View style={{ justifyContent: "space-between", width: "120", margin: 8 }} >
            <Card elevation={10} style={{ margin: 5, overflow: "hidden" }} ><ImageBackground style={{ height: 80, width: 140 }} source={item.image}>
            </ImageBackground>
                <View style={styles.textView}><Text style={styles.NameContainer}>{item.name}</Text></View>
            </Card>
        </View>
    </TouchableOpacity>

);

const Categories_info = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#1E5CA9" />
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.Container}>
            <FlatList
                data={categories}
                renderItem={oneCategories}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false} />
        </SafeAreaView>
    )
}

export default Categories_info

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white",
        marginBottom: 55,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: -10
        // paddingVertical: 40,
        // paddingHorizontal: 40,


    },
    list: {
        paddingHorizontal: 15,
        backgroundColor: "white",
        paddingVertical: 10,
    },
    NameContainer: {
        width: 130,
        textAlign: "center",
        color: "white"
    },
    textView: {
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: "black",
        opacity: 0.5,
        top: 61,
        left: 0,
        right: 0,
        bottom: 0,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})