import { Dimensions, ImageBackground, ScrollView,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageHeader, Logo } from '../../assets'
import { ButtonIcon, PesananAktif, Saldo } from '../../components'
import { WARNA_ABU_ABU } from '../../utils/constant'
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
          <Text style={styles.selamat}> Selamat Datang           </Text>
          <Text style={styles.username}>  Khoerul Mutaqin           </Text>
        </View>
      </ImageBackground>
      <Saldo />
      <View style={styles.layanan}>
        <Text style={styles.label}>Layanan Kami</Text>
        <View style={styles.iconlayanan}>
          <ButtonIcon title="Kiloan" type="layanan" />

          <ButtonIcon title="Satuan" type="layanan" />

          <ButtonIcon title="Vip" type="layanan" />

          <ButtonIcon title="Karpet" type="layanan" />

          <ButtonIcon title="Setrika Saja" type="layanan" />

          <ButtonIcon title="Ekspres" type="layanan" />

        </View>
      </View>
      <View style={styles.pesananAktif}>
        <Text style={styles.label}>Pesanan Aktif</Text>
        <PesananAktif  title="Pesanan No 002142" status="Sudah Selesai" />
        <PesananAktif title="Pesanan No 002142" status="Masih Dicuci" />
        <PesananAktif title="Pesanan No 002142" status="Sudah Selesai" />
        <PesananAktif title="Pesanan No 002142" status="Sudah Selesai" />
        <PesananAktif title="Pesanan No 002142" status="Beluum Dikerjakna" />
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
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  Logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06
  },
  hello: {
    marginTop: windowHeight * 0.030
  },
  selamat: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Regular'
  },
  username: {
    fontSize: 16,
    fontFamily: 'TitilliumWeb-Bold'
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconlayanan: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  pesananAktif:{
    paddingTop: 10,
    paddingHorizontal:30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20

  }
})