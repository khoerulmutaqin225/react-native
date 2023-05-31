import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconaddSaldo,IcongetPoint,Iconkiloan,Iconkarpet,Iconvip,Iconsatuan,Iconsetrika,Iconekspress} from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({title, type}) => {
    const Icon = () => {
        if(title === "Add Saldo") return <IconaddSaldo/>
        
        if(title === "Get Point") return <IcongetPoint/>
        
        if(title === "Kiloan") return <Iconkiloan/>

        if(title === "Satuan") return <Iconsatuan/>
        
        if(title === "Vip") return <Iconvip/>
        
        if(title === "Karpet") return <Iconkarpet/>
        
        if(title === "Setrika") return <Iconsetrika/>
        
        if(title === "Ekspres") return <Iconekspress/>

        return <IconaddSaldo/>
    }
    return (
        <TouchableOpacity style={styles.container(type)}>    
            <View style={styles.button(type)}>
                <Icon/>
            </View>
            <Text style={styles.text(type)}>
            {title}</Text>    
        </TouchableOpacity>

    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom : type === "layanan" ? 12 : 0,
        marginRight : type === "layanan" ? 30 : 0
    }), 
    button: (type) => ({
      backgroundColor: WARNA_SEKUNDER,
      padding: type === 'layanan' ? 12 : 7,
      borderRadius: 10,
    }),
    text: (type) => ({
      fontSize: type === 'layanan' ? 14 : 10,
      fontFamily:type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
      textAlign: 'center',
    }),
  
  });