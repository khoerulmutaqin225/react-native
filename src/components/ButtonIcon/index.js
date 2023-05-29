import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconaddSaldo,IcongetPoint } from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({title}) => {
    const Icon = () => {
        if(title === "Add Saldo") return <IconaddSaldo/>
        
        if(title === "Get Point") return <IcongetPoint/>
        return <IconaddSaldo/>
    }
    return (
        <TouchableOpacity style={styles.container}>    
            <View style={styles.button}>
                <Icon/>
            </View>
            <Text style={styles.text}>
            {title}</Text>    
        </TouchableOpacity>

    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container:{
        marginBottom: 12,
        marginRight:1 

    },
    button:{
        backgroundColor: WARNA_SEKUNDER,
        padding: 7,
        // justifyContent,
        borderRadius: 10
    },
    text:{
        fontSize: 10,
        fontFamily: 'TitilliumWeb-Regular',
        textAlign: 'center'
    }
})