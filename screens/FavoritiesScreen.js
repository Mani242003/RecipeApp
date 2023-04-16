import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MealItems from '../components/MealItems'
import MealList from '../components/MealList'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

const FavoritiesScreen = () => {
  const navigation =useNavigation()

  const favMeals=useSelector((state)=> state.meals.favouriteMeals)
useEffect(()=>{
  navigation.setOptions({
    headerTitle:"Your Favourites",
    headerLeft:()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
      <Item title='title' iconName='ios-menu' onPress={()=>{
        navigation.toggleDrawer()
      }} />
    </HeaderButtons>
  })
},[])
  
if( favMeals.length === 0 || !favMeals){
  return (
    <View style={styles.contant}> 
    <Text style={styles.text}  >No Favoritie Meals found.Start adding some</Text>
    </View>
   
  )

}  

return <MealList displayMealsitem={favMeals} />
}

export default FavoritiesScreen

const styles = StyleSheet.create({

  contant:{
    felx:1,
   

  },
  text:{
    paddingTop:200,
    textAlign:'center',
    fontSize:18
  }
})