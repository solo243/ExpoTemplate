import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../Constants/Colors';


const Widget = ({ name, icon }) => {
    return (
        <View style={style.HelpCenterCont}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                {icon}
                <Text style={style.helpCenterText}> {name}</Text>
            </View>
            <AntDesign name="right" size={22} color="white" />
        </View>
    )
}

const style = StyleSheet.create({
    MainContainer: {
        marginTop: 20,
    },
    HelpCenterCont: {
        height: 60,
        justifyContent: 'space-between',
        backgroundColor: '#272a2f',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        gap: 10,
        borderCurve: 'continuous'
    }, helpCenterText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600'
    }
})
export default Widget