import { StyleSheet, Text, View, TouchableOpacity, ScrollView , Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
// Your API key is: 3bb8584f64c9477cb81cc4371fb68336
// https://newsapi.org/v2/top-headlines

// const buttonFunction =()=>{
//     console.log('testtt')
// }

const Akun = () => {
  
  const [data, setData] =useState();

  const getData = async() => {
    try {    
      const res = await axios.get('https://newsapi.org/v2/top-headlines', {
        params:{
          country: 'us',
          category:'business',
          apiKey:'3bb8584f64c9477cb81cc4371fb68336',
        },
        // header
      });
      setData(res.data.articles)
      // console.log(res);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() =>{
    getData()
  },[])

  return (
    <>
    <SafeAreaView>
      <ScrollView>
        {data && 
          data.map((item, i)=>{
            return (
            <> 
            <View style={{ flexDirection:'row',marginVertical:10, marginHorizontal:5 }}>
            <Image 
                style={{width:75, height:75 }}
                source={{uri:item.urlToImage}}
              />
              <View style={{ justifyContent: 'space-between'}}>
                <Text style={{alignSelf:'center', fontSize:10, fontWeight:'bold' }}>{item.title}</Text>
                <Text style={{ fontSize:10 }}>{item.author}</Text>
              </View>
            </View>
          </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  </>
  );
}

export default Akun

const styles = StyleSheet.create({})