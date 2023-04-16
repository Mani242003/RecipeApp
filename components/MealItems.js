import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MealItems = ({title,duration,complexity,affordablelity,imageUrl,onSelectMeal}) => {
    // console.log(title,"//",duration,"//",comlexity,"//",affordablelity,"//",imageUrl,"//",onSelectMeal);
    // console.log("image uuuuuerl",affordablelity,"//",complexity);
  return (
    <View style={styles.mealItem} >
        <TouchableOpacity onPress={onSelectMeal} >
            <View>
                
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground source={{uri:imageUrl}} style={styles.bgImage}  >
                       <View style={styles.titelContainer}>
                         <Text style={styles.titel} >{title} </Text>
                       </View>
                    </ImageBackground>
                    
                   
                </View >
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text style={styles.info}>{duration} mins</Text>
                    <Text style={styles.info}>{complexity}</Text>
                    <Text style={styles.info}>{affordablelity}</Text>
                </View>
            </View>

        </TouchableOpacity>
      
    </View>
  )
}

export default MealItems

const styles = StyleSheet.create({
    mealItem:{

    width:"100%",
    height:200,
    marginVertical:10,
    borderRadius:10,
    backgroundColor:'#f5f5f5',
    
    },
    mealRow:{
        flexDirection:'row'

    },
    mealHeader:{
      height:'80%'
    },

    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },

    bgImage:{
        width:'100%',
        height:"100%",
        justifyContent:'flex-end'
        
    },
    titelContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5
    },
    titel:{
        fontFamily:"open-sans-bold",
        fontSize:20,
        paddingStart:10,
                color:'white'
    },
    info:{
        fontFamily:'open-sans',
        fontSize:18
    }
    
})