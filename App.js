import { StyleSheet, Text, View,Button } from 'react-native'
import React ,{useEffect}from 'react'
import Navigator from './navigation/Navigator'
import CreateChannel from './components/CreateChannel'
import {Provider} from "react-redux"
import { store } from './app/store'





const App = () => {

  
  useEffect(()=>{
    CreateChannel()
  })

  return <Provider store={store} ><Navigator /></Provider>
 
}



export default App

const styles = StyleSheet.create({})