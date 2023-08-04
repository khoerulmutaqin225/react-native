import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios'
// Your API key is: 3bb8584f64c9477cb81cc4371fb68336
// https://newsapi.org/v2/top-headlines

const buttonFunction =()=>{
    console.log('testtt')
}

const Akun = () => {
  return (
    <View>
      <TouchableOpacity onPress={()=>buttonFunction()}>
      <Text>Akun</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({})