import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_UTAMA } from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

// import { ButtonIcon } from '../../components'


const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Saldo :</Text>
          <Text style={styles.valueSaldo}>   Rp. 500000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Point  :</Text>
          <Text style={styles.valuePoint}>100 Point</Text>
        </View>
      </View>
        <View style={styles.buttonAksi}>
          <ButtonIcon title="Add Saldo" />
          <Gap width={20} />
          <ButtonIcon title="Get Point" />
        </View>
    </View>
  );
};

export default Saldo
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,  // untuk mengatur jarak dari pesanan aktif
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.07,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informasiSaldo: {
    // width: '0%',
  },
  labelSaldo: {
    // fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valueSaldo: {
    // fontSize: 20 ,
    // margin:3,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoint: {
    // fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valuePoint: {
    // margin:4,
    // fontSize: 15,
    fontFamily: 'TitilliumWeb-Bold',
    color: WARNA_UTAMA,
  },
  buttonAksi: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // justifyContent: 'center',
  },
});