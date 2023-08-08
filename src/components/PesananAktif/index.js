import { StyleSheet, Text, Dimensions,TouchableOpacity,View } from 'react-native'
import React from 'react'
import { IconpesananAktif } from '../../assets'
import { WARNA_ABU_ABU, WARNA_UTAMA, WARNA_WARNING } from '../../utils/constant'

const PesananAktif = ({title,status}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <IconpesananAktif />
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.status(status)}>{status}</Text>
          </View>
    </TouchableOpacity>
  )
}

export default PesananAktif
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 3,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginVertical: windowHeight * 0.03,
        alignItems: 'center'
      },
      text:{
        marginLeft: windowWidth *0.02,
       },

       title:{
        fontSize:14,
        fontFamily: 'TitilliumWeb-SemiBold'
       },
       status: (status) => ({
        fontSize:12,
        fontFamily: 'TitilliumWeb-Light',
        color: status === 'Sudah Selesai' ? WARNA_UTAMA : status === 'Masih Dicuci' ? WARNA_WARNING : WARNA_ABU_ABU,
       })
})