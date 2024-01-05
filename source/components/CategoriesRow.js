import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'

const DATA = [
  { id: '1', title: 'Fashion', image: require('./../../CategoriesImage/Fashion.jpg') },
  { id: '2', title: 'Mobiles', image: require('./../../CategoriesImage/Mobiles.jpg') },
  { id: '3', title: 'Music', image: require('./../../CategoriesImage/Music.jpg') },
  { id: '4', title: 'Laptops', image: require('./../../CategoriesImage/Laptops.jpg') },
  { id: '5', title: 'Automobiles', image: require('./../../CategoriesImage/Automobiles.jpg') },
  { id: '6', title: 'Sports', image: require('./../../CategoriesImage/sports-tools.jpg') },
  { id: '7', title: 'Gym', image: require('./../../CategoriesImage/Gym.jpg') },
  { id: '8', title: 'Games', image: require('./../../CategoriesImage/Games.jpg') },
  { id: '9', title: 'Furnitures', image: require('./../../CategoriesImage/Furniture.jpg') },
  { id: '10', title: 'Cosmetics', image: require('./../../CategoriesImage/Cosmetics.jpg') },
  { id: '11', title: 'T-shirts', image: require('./../../CategoriesImage/T-shirts.jpg') },
  { id: '12', title: 'Kids', image: require('./../../CategoriesImage/Kids.jpg') },
  { id: '13', title: 'Drinks', image: require('./../../CategoriesImage/Drinks.jpg') },
  { id: '14', title: 'Perfumes', image: require('./../../CategoriesImage/Perfumes.jpg') },

];


const Item = ({ item }) => (
  <View style={{ flexDirection: "row" }}>
    <TouchableOpacity >
      <View style={{ justifyContent: "space-between", width: "100", margin: 8 }} >
        <Image resizeMode="contain" style={{ height: 70, width: 70, borderRadius: 80 }} source={item.image}></Image>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  </View>


);

const CategoriesRow = () => {

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <FlatList
      horizontal={true}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default CategoriesRow

const styles = StyleSheet.create({
  title: {
    textAlign: "center"
  }
})