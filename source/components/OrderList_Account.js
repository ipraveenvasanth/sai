import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'


const OrderList_Account = () => {

    const data = [
        { id: '1', title: 'Your Orders', icon: 'cart' },
        { id: '2', title: 'Subscription', icon: 'checkmark-circle' },
    ];

    const renderItem = ({ item }) => {
        if (item.id === '1') {
            return (
                <TouchableOpacity style={{
                    alignItems: "center"
                }}>
                    <View style={{
                        flexDirection: "row",
                        width: 300,
                        height: 37,
                        justifyContent: "space-between",
                        borderColor: "gray",
                        borderWidth: 1,
                        alignItems: "center",
                        marginHorizontal: "auto",
                        paddingLeft: 5,
                        paddingRight: 5,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}>
                        <Ionicons name={item.icon} size={20} color="gray" />
                        <Text style={{ color: "gray" }}>{item.title}</Text>
                        <Entypo name="forward" size={20} color="gray" />
                    </View>
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity style={{
                alignItems: "center"
            }}>
                <View style={{
                    flexDirection: "row",
                    width: 300,
                    height: 37,
                    justifyContent: "space-between",
                    borderColor: "gray",
                    borderWidth: 1,
                    alignItems: "center",
                    marginHorizontal: "auto",
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,

                }}>
                    <Ionicons name={item.icon} size={20} color="gray" />
                    <Text style={{ color: "gray" }}>{item.title}</Text>
                    <Entypo name="forward" size={20} color="gray" />
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View>
            <Text style={{ fontSize: 18, fontWeight: "500", margin: 15, paddingLeft: 10 }}>Accounts</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer} />
        </View>
    )
}

export default OrderList_Account

const styles = StyleSheet.create({})