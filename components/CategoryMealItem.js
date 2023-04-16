import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import images from '../data/images'

const CategoryMealItem = ({title,onSelect,imageURL}) => {
  return (
    <View  style={{...styles.gridItem}} >
        <TouchableOpacity onPress={onSelect} >
           
           <View style={{
                height:"80%",
               
               
            }} >
                <Image source={imageURL} resizeMode="cover" style={{
                    flex:1,
                   
                    width:"100%",
                    height:'100%'
                }}  />

            </View>
            <View
            style={{
                height:"20%",
                backgroundColor:Colors.accentColor,
                
            }}
            >
                <Text
                style={{
                    textAlign:'center',
                    fontFamily:"open-sans",
                    padding:8,
                    color:'black',
                    justifyContent:'center',
                    opacity:0.9

                }}
                >{title}</Text>
           
           </View>
        </TouchableOpacity>
      
    </View>
  )
}

export default CategoryMealItem

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
       
        margin:17,
        height:170,
       
        borderRadius:10,
        overflow:'hidden',
      
    }
})