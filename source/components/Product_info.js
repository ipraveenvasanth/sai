import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { ScrollView,FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const Productcard =styled(Card)`
height:220px;
width:150px;
margin:10px;
elevation:10;
border-radius:5px;
`
;

const ProductCardCover =styled(Card.Cover)`
height:100px;
width:100px;
margin:10px;
align-self:center;
background-color:"gray";

`
;


 
export const Product_info = () => {

  const data = [
    { id: '1', text: '100 Days',image:require('./../../image/Desktop.jpg') ,name:'Bose New Quiet   Comfort Earbuds ||',price:'100',playsLeft:'129',deadLine:'67 days 22.29.13',used:true},
    { id: '2', text: '200 Days' ,image:require('./../../image/earbuds.jpg'),name:'Bose New Quiet Comfort Earbuds ||',price:'100',playsLeft:'129',deadLine:'67 days 22.29.13' },
    { id: '3', text: '300 Days',image:require('./../../image/cpu.jpg') ,name:'Bose New Quiet Comfort Earbuds ||',price:'100',playsLeft:'129' ,deadLine:'67 days 22.29.13'},
    { id: '4', text: '400 Days' ,image:require('./../../image/watches.png'),name:'Bose New Quiet Comfort Earbuds ||',price:'100',playsLeft:'129',deadLine:'67 days 22.29.13',used:true},
    { id: '5', text: '500 Days' ,image:require('./../../image/watches.png'),name:'Bose New Quiet Comfort Earbuds ||',price:'100',playsLeft:'129',deadLine:'67 days 22.29.13'},
    { id: '6', text: '600 Days' ,image:require('./../../image/watches.png'),name:'Bose New Quiet Comfort Earbuds ||',price:'100',playsLeft:'129',deadLine:'67 days 22.29.13'},
    { id: '7', text: '700 Days' ,image:require('./../../image/watches.png'),name:'Bose New Quiet  Comfort Earbuds ||',price:'100',playsLeft:'129' ,deadLine:'67 days 22.29.13',used:true},
    { id: '8', text: '800 Days' ,image:require('./../../image/watches.png'),name:'Bose New Quiet Comfort Earbuds ||',price:'100',playsLeft:'129' ,deadLine:'67 days 22.29.13',used:true},
    { id: '9', text: '900 Days' ,image:require('./../../image/watches.png'),name:'Bose New Quiet Comfort Earbuds ||',price:'100',playsLeft:'129',deadLine:'67 days 22.29.13' },
    { id: '10',text: '1000 Days',image:require('./../../image/watches.png'),name:'Bose New Quiet Comfort Earbuds ||',price:'100',playsLeft:'129',deadLine:'67 days 22.29.13',used:true},
 ];

 const renderItem = ({ item }) => (

<Pressable onPress={()=> navigation.navigate("Details")}>
  <Productcard>
  <ProductCardCover source={item.image}/> 
  {/* <View>{item.sffg}</View> */}
  {item.used ? (
        <View style={styles.used}>
          <Text style={styles.UsedText}>USED</Text>
        </View>
      ) : (
        <View style={styles.new}>
          <Text style={styles.NewText}>NEW</Text>
        </View>
      )}
  <Text style={{alignSelf:"flex-start",paddingLeft:5,marginTop:5 }}>{item.name}</Text>
  <View style={styles.rowDirection}>
  <Text style={{fontWeight:"800"}}>₹{item.price}</Text>
  <Text style={{color:"gray",fontSize:10,alignSelf:"center"}}>Plays Left   <Text style={{color:"black" ,fontWeight:"500"}}>{item.playsLeft}</Text></Text>
  </View>
  <View style={styles.deadLine}>
    <Text style={styles.deadLineContainer}>    Ends in      <Text style={{color:"blue",fontWeight:"700"}}>{item.deadLine}</Text>   </Text>
  </View>
  </Productcard>
 </Pressable>
);
  const navigation = useNavigation();

  return (
    <FlatList
    horizontal={true}
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    style={styles.container}
  />
   
  )
}

export default Product_info

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
  }
  ,
  used:{
    backgroundColor:"#1E5CA9" ,
    width:35,
    height:15,
    borderRadius:3,
    marginLeft:5,
  },
  UsedText:{
    color:"white",
    fontSize:9,
    textAlign:"center",
    marginTop:1,
    // alignContent:"center"
    // alignSelf:"center",
    // verticalAlign:"middle"
  },
  new:{
    backgroundColor:"#FDA829" ,
    width:35,
    height:15,
    borderRadius:3,
    marginLeft:5,
  },
  NewText:{
    color:"black",
    fontSize:9,
    alignSelf:"center",
    marginTop:1,
  },
  priceContainer:{
    fontWeight:'800',
    alignSelf:"center",
  },
  rowDirection:{
   flexDirection:"row",
   justifyContent:"space-around",
   height:20,
   marginTop:5,    

  },
  deadLine:{
    height:15,
    marginTop:5,    
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    backgroundColor:"gray",
    opacity:0.3,

  },
  deadLineContainer:{
    fontSize:9,
    }
})