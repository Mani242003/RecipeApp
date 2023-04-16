import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import{useSelector} from 'react-redux'
import { CATEGORIES } from '../data/dummy'
import MealList from '../components/MealList'


const CategoryMealsScreen = () => {

  const navigation=useNavigation();

  const route=useRoute()
  const {categoryId}=route.params;

  const avilableMeals=useSelector((state)=>{
   return state.meals.filterMeals;

  })

  const displayMeals= avilableMeals .filter((meal)=>{
    return meal.categoryIds.indexOf(categoryId) >=0
  })

  

  if(displayMeals.length === 0){
    return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>nothing meals found</Text></View>)
  }


const selectedCategories=CATEGORIES.find((meal)=>meal.id === categoryId)
  useEffect(() => {
    
    navigation.setOptions(
      {
        headerTitle:selectedCategories.title,
        // headerStyle:{}
      }
    )
    
  }, [])
  


  return (
   <MealList  displayMealsitem={displayMeals} />
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({})