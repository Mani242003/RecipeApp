import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealScreen from '../screens/MealScreen'
import { NavigationContainer } from '@react-navigation/native'
import FiltersScreen from '../screens/FiltersScreen'
import FavoritiesScreen from '../screens/FavoritiesScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons"
import { createDrawerNavigator } from '@react-navigation/drawer'
const Stack = createNativeStackNavigator()
const filterStack = createNativeStackNavigator()
const favoritesStack = createNativeStackNavigator()



const defaultStackStyle = {

    headerStyle: {
        backgroundColor: Colors.primaryColor
    },

    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'open-sans'
    } //Titel of the stacK
}




const MyStack = () => {
    return (
        <Stack.Navigator screenOptions={defaultStackStyle} >
            <Stack.Screen name='Categories' component={CategoriesScreen} options={{}} />
            <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} options={{}} />
            <Stack.Screen name='MealDetails' component={MealScreen} options={{}} />

        </Stack.Navigator>
    )
}

const FilterNavigator = () => {
    return (
        <filterStack.Navigator screenOptions={defaultStackStyle} >
            <filterStack.Screen name='Filters' component={FiltersScreen} />
        </filterStack.Navigator>


    )
}

const FavoritesNavigator = () => {
    return (
        <favoritesStack.Navigator screenOptions={defaultStackStyle}>
            <favoritesStack.Screen name='favorites' component={FavoritiesScreen} />
            <favoritesStack.Screen name='MealDetails' component={MealScreen} options={{}} />

        </favoritesStack.Navigator>


    )
}
// -------------------Tab Navigator--------------

const Tab=createMaterialBottomTabNavigator()

const TabNavigator=()=>{
    return(
        <Tab.Navigator shifting={true} barStyle={{
            backgroundColor:Colors.primaryColor,
            height:45,
            marginBottom:20
        }}
     
        >
            <Tab.Screen name='Meal' component={MyStack} options={{
                tabBarIcon:({focused,color})=>
                {
                    return(
                        <Ionicons name='ios-restaurant' size={24}  color={focused?color:'white'}/>
                    );
                },
                tabBarColor:Colors.primaryColor,
                tabBarLabel:<Text style={{color:'white'}} >Meals</Text>

              

               
            }}
        
            />
            <Tab.Screen name='Favorites' component={FavoritesNavigator}   options={{
                tabBarIcon:({focused,color})=>
                {
                    return(
                        <Ionicons name='ios-star' size={24}  color={focused?color:'white'}/>
                    );
                },
                tabBarColor:Colors.primaryColor,
                tabBarLabel:<Text style={{color:'white'}} >Favorites</Text>

              

               
            }} />
        </Tab.Navigator>
    )

}

const Drawer=createDrawerNavigator()
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor:Colors.accentColor,
            headerShown:false
        }}>
            <Drawer.Screen name='Meals' component={TabNavigator} />
            <Drawer.Screen name='Filter' component={FilterNavigator} />

        </Drawer.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
           <DrawerNavigator />
        </NavigationContainer>
    )
}

export default Navigator

