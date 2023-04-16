import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealItems from './MealItems'
import { useNavigation } from '@react-navigation/native'

const MealList = ({ displayMealsitem }) => {

  const natvigation = useNavigation()

  const renderItem = (itemData) => {

    // // console.log(itemData);
    // console.log("affffff",itemData.item.affordability);
    //  console.log("titttttel"+itemData.item.title);
    //  console.log("image uuuuuerl",itemData.item.imageUrl);

    return <MealItems
      title={itemData.item.title}
      imageUrl={itemData.item. imageUrl}
      duration={itemData.item.duration}
      affordablelity={itemData.item. affordability}
      complexity={itemData.item.complexity}

    onSelectMeal={
          () => {
            natvigation.navigate('MealDetails', {
              mealId: itemData.item.id
            })
          }
        }
    
    />
    


  }


  return (
    <View style={styles.list}>
      <FlatList
        data={displayMealsitem }
        keyExtractor={(item) =>item.id}
        renderItem={renderItem}
        style={{ width: '100%' }} />

    </View>
  )
}

export default MealList

const styles = StyleSheet.create({})