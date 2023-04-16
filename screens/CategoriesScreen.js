import { FlatList, StyleSheet, Text, View,Button } from 'react-native'
import React, { useEffect } from 'react'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import { useNavigation } from '@react-navigation/native'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { CATEGORIES } from '../data/dummy'
import CategoryMealItem from '../components/CategoryMealItem'
import PushNotification from 'react-native-push-notification';

const handelAddButton =()=>{
  PushNotification.localNotification({
    channelId:"channel-id",
    title:"Welcome",
    message:"Hello to You will find food harmony,and laughter here !!!"
  })
}




const CategoriesScreen = () => {

  

  useEffect(()=>{
    // PushNotificationFunction
    handelAddButton() 
  })
 
  const Navigation = useNavigation();
// -------------------------------------------------------
  
  useEffect(()=>{
    Navigation.setOptions({
      headerLeft:()=>{
        return(
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item title='Menu' iconName='ios-menu' onPress={()=>Navigation.toggleDrawer()
            }/>

          </HeaderButtons>
          
        )
      }
      
    })

  },[Navigation])

  const renderGridItem =(itemData)=>{
    // console.log(itemData);
      return(
        <CategoryMealItem title={itemData.item.title} imageURL={itemData.item.image} onSelect={()=>{
          Navigation.navigate('CategoryMeals',{
            categoryId:itemData.item.id
          }) 
        }}/>
        
      )
    
    }


  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item)=> item.id } 
    numColumns={2}
    renderItem={renderGridItem}
    showsVerticalScrollIndicator={false}   
     />
    // <Button title='Hello' onPress={ ()=>{ handelAddButton()}} />
     
  )
}



export default CategoriesScreen

