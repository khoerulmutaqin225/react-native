import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
// Your API key is: 3bb8584f64c9477cb81cc4371fb68336
// https://newsapi.org/v2/top-headlines

const buttonFunction =()=>{
    console.log('testtt')
}

const Akun = () => {
  const getData = async() => {
    try {    
      const res = await axios.get('https://newsapi.org/v2/top-headlines',{
        params:{
          country: 'us',
          category:'business',
          apiKey:'3bb8584f64c9477cb81cc4371fb68336'
        },
        // header
      });
      console.log(res);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() =>{
    getData()
  },[])

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