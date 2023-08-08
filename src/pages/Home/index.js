import { Dimensions, ImageBackground, ScrollView,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from '../../assets'
import { ButtonIcon, PesananAktif, Saldo } from '../../components'
import { WARNA_ABU_ABU, WARNA_WARNING } from '../../utils/constant'
// Pembacaan Ke empat

const Home = () => {
  return (
    <View style={styles.page}>
     <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={ImageHeader}
        style={styles.header}>
        <Image source={Logo} style={styles.Logo} />
        <View style={styles.hello}>
          <Text style={styles.selamat}> Selamat Datang</Text>
          <Text style={styles.username}>  Khoerul Mutaqin</Text>
        </View>
      </ImageBackground>

      <Saldo />
      <Text style={styles.labelLayanan}>Layanan Kami</Text>
      <View style={styles.layanan}>
        <View style={styles.iconlayanan}>
          <ButtonIcon title="Kiloan" type="layanan" />

          <ButtonIcon title="Satuan" type="layanan" />

          <ButtonIcon title="Vip" type="layanan" />
          <ButtonIcon title="Karpet" type="layanan" />

          <ButtonIcon title="Setrika" type="layanan" />

          <ButtonIcon title="Ekspres" type="layanan" />
        </View>
        <Text style={styles.label}>Pesanan Aktif</Text>
        <View style={styles.labelpesanan}>
          <PesananAktif  title="Pesanan No 002142" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No 002142" status="Masih Dicuci" />
          <PesananAktif title="Pesanan No 002142" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No 002142" status="Sudah Selesai" />
          <PesananAktif title="Pesanan No 002142" status="Beluum Dikerjakna" />
        </View>
        </View>
      </ScrollView>
    </View>
  )
}


export default Home
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: windowWidth,
    height: windowHeight - 500 ,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  Logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06
  },
  hello: {
    // backgroundColor: WARNA_WARNING,
    marginTop: windowHeight * 0.050,
    width: windowWidth -200,
    height: windowWidth -275,
  },
  selamat: {
    fontSize:20 ,
    // backgroundColor: WARNA_ABU_ABU,
    fontFamily: 'TitilliumWeb-Regular'
  },
  username: {
    // fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold'
  },
  labelLayanan: {
    fontFamily: 'TitilliumWeb',
    paddingTop: 10,
    paddingHorizontal:30,
  },
  labelpesanan: {
    paddingLeft:10,
    paddingHorizontal: 30,
  },
  layanan: {
    width: windowWidth +20,    
    paddingLeft:20,
    flex:1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20
  },
  label: {
    paddingLeft:10,
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconlayanan: { 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',
    padding:10,
    marginTop: 10,
    flexWrap: 'wrap'
    // flexBasis:'wrap'
  },
  pesananAktif:{
    // paddingTop: 10,
    // paddingHorizontal:30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20,
  }
})