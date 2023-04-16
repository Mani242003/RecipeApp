import {createSlice} from '@reduxjs/toolkit'
import { MEALS } from '../data/dummy'
import PushNotification from 'react-native-push-notification';


const initialState={
    meals:MEALS,
    filterMeals:MEALS,
    favouriteMeals:[]
}

const mealSlice=createSlice(
    {name:"meal",
    initialState,
    reducers:{
        toggelFavourite:(state,action)=>{
            const findIndex=state.favouriteMeals.findIndex((meal)=> meal.id === action.payload)
            if(findIndex >= 0){
                // console.log("from if");
                const updatedFavMeals=[...state.favouriteMeals]
                updatedFavMeals.splice(findIndex,1)
                state.favouriteMeals=updatedFavMeals
                
                // addNotify()

            }else{

                const meal =state.meals.find( meal=> meal.id === action.payload)
                state.favouriteMeals=state.favouriteMeals.concat(meal)
                // console.log("from else");
                // RemoveNotify()


            }
        }
    }

    }
)


// const addNotify=(seleacteMeals)=>{
//     PushNotification.localNotification({
//       channelId:"add-notify",
//       title:"Removed !!!",
//       message:"Your Meal is Removed in your favorite...Please Check !!!"
//     })
//   }

//   const RemoveNotify=(seleacteMeals)=>{
//     PushNotification.localNotification({
//       channelId:"remove-notify",
//       title:"Added !!!",
//       message:"Your Meal is Added in your favorite...Please Check!!!!"
//     })
    
//   }




export const {toggelFavourite}=mealSlice.actions;

export default mealSlice.reducer