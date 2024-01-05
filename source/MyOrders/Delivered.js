import { StyleSheet, Text, View,FlatList, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';

const data = [
    {id: '1', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
    {id: '2', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
    {id: '3', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
    {id: '4', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
    {id: '5', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
    {id: '6', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
    {id: '7', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
    {id: '8', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
    {id: '9', orderNo: '1947034', trackingNo: '', quantity: 3, date: '05-12-2019', invoiceNo: 'IW3475453455', totalAmount: 112},
   ];

   const renderItem = ({item}) => (
    <Card style={styles.item}>
    <View style={styles.rowsDirection}>
       <Text style={styles.title}>Order No: {item.orderNo}</Text>
       <Text style={styles.text}>{item.date}</Text>
       </View>
       <View style={styles.rowDirection}>
       <Text style={styles.textContainer} >Tracking number: {item.trackingNo}</Text>
       <Text style={styles.TrackContainer}>{item.invoiceNo}</Text>
       </View>
       <View style={styles.rowDirection}>
       <Text style={styles.textContainer}>Quantity: <Text style={{color:"black",fontWeight:"500"}}> {item.quantity}</Text></Text>
       <Text style={styles.rightTextContainer}>Total Amount: <Text style={{color:"black",fontWeight:"500"}}> {item.totalAmount}$</Text></Text>

       </View>
       <View style={styles.rowDirection}>
       <TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:20,width:100,height:35,justifyContent:"center"}}><Text style={{alignSelf:"center"}}>Details</Text></TouchableOpacity>
       <Text style={{color:"green",alignSelf:"center",fontWeight:"500"}}>Delivered</Text>
       </View>

    </Card>
   );


const Delivered = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Delivered

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
     },
     item: {
        padding: 10,
        height: 150,
        backgroundColor: 'white',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:5,
     },
     text: {
        fontSize: 12,
        color:"gray",
         alignSelf:"center",
     },
     title:{
        fontSize:16,
        fontWeight:"500",
      },
      rowDirection:{
        justifyContent: 'space-between',
        flexDirection:"row",
        marginTop:10,

      },
      rowsDirection:{
        justifyContent: 'space-between',
        flexDirection:"row",

      },
      textContainer:{
        color:"gray",
      },
      rightTextContainer:{
        color:"gray",
      },
      TrackContainer:{
        color:"black",
        alignSelf:"center",
      },

})