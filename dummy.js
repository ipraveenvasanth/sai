import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text, ActivityIndicator, ImageBackground, Card, CardItem } from 'react-native';

const categories = [
    // Your categories array here
];

const oneCategories = ({ item }) => (
    <TouchableOpacity>
        <View style={{ justifyContent: "space-between", width: "120", margin: 8 }}>
            <Card elevation={10} style={{ margin: 5, overflow: "hidden" }}>
                <ImageBackground style={{ height: 80, width: 140 }} source={item.image}>
                </ImageBackground>
                <View style={styles.textView}>
                    <Text style={styles.NameContainer}>{item.name}</Text>
                </View>
            </Card>
        </View>
    </TouchableOpacity>
);

const Categories_info = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.Container}>
            <FlatList
                data={categories}
                renderItem={oneCategories}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.list} />
        </View>
    )
}

export default Categories_info;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "white",
        marginBottom: 100,
    },
    list: {
        paddingHorizontal: 10,
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
});