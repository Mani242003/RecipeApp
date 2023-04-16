import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';
import {toggelFavourite} from "../slices/meals"
import PushNotification from 'react-native-push-notification';





const MealScreen = () => {

 

  const route = useRoute();
  const natvigation = useNavigation()
  const { mealId } = route.params;

  const avilableMeals = useSelector((state) => state.meals.meals)

  const seleacteMeals = avilableMeals.find((meal) => meal.id === mealId)

  const isFavoriteMeal = useSelector(state => {
    return state.meals.favouriteMeals.some(meal => meal.id === mealId)
  })

  // const [istoggle, setistoggle] = true
  // console.log(isFavoriteMeal);

   const addNotify=()=>{
    PushNotification.localNotification({
      channelId:"add-notify",
      title:seleacteMeals.title,
      message:"Your favourite "+seleacteMeals.title +"is Added Successfully"
    })
  }

  const RemoveNotify=(seleacteMeals)=>{
    PushNotification.localNotification({
      channelId:"remove-notify",
      title:seleacteMeals.title,
      message:"Your favourite "+seleacteMeals.title +"is Removed Successfully"
    })
    
  }

  useEffect(() => {
    natvigation.setOptions({
      headerTitle: seleacteMeals.title,
      headerRight: () =>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
          <Item title='Menu'
            iconName={isFavoriteMeal ? 'star' : 'star-outline'}
            onPress={toggelFaVHandeler}
            
              />
        </HeaderButtons>



    })

    
  

  }, [isFavoriteMeal])

  // useEffect(()=>{
  //   isFavoriteMeal ? addNotify(): RemoveNotify()
  // },[])

//  const  toggelFaVHandelers=()=>{
//   toggelFaVHandeler()
//  
 
  const dispatch =useDispatch()
 
  const toggelFaVHandeler=()=>{
    dispatch(toggelFavourite(mealId))
    isFavoriteMeal ?  RemoveNotify(seleacteMeals) :  addNotify(seleacteMeals)
  }

  const { duration, affordability, complexity, imageUrl, ingredients, steps } = seleacteMeals
  // console.log(ingredients);
  // const FavMeals = useSelector((state) => state.meals.favouriteMeals)


  // useEffect(()=>{
  //   console.log("from fav",FavMeals);
  // },[FavMeals])


  return (
    <ScrollView contentContainerStyle={{
      paddingBottom:100
    }} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detials} >
        <Text style={styles.info} > {duration} mins </Text>
        <Text style={styles.info} > {complexity.toUpperCase()}</Text>
        <Text style={styles.info} > {affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {
        ingredients.map((ingredient, index) => <View key={index}><Text  style={styles.listItem}   >{ingredient}</Text></View>

        )
      }
       <Text style={styles.title}>Steps</Text>
      {
        steps.map((step, index) => <View key={index}><Text style={styles.listItem}  >{step}</Text></View>

        )
      }

    </ScrollView>


  )
}

// const ListItem =({childern})=>{
//   return(
//     <View style={styles.listItem}>
//       <Text style={styles.info} >{childern}</Text>

//     </View>
//   )
// }

export default MealScreen 

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  detials:{
    flexDirection:'row',
    padding:15,
    justifyContent:'space-between'
  },
  title:{
    fontFamily:'open-sans',
    fontSize:22,
    textAlign:'center',
    color:'black',
   

  },
  listItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:Colors.primaryColor,
    borderBottomWidth:1,
    padding:10,
    fontSize:20,
   
    },
    info:{
      
      fontSize:17,
      color:'black'
    }


  

  

})

