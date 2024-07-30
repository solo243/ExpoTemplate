import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '../Constants/Colors'

const AnimeCard = ({ data, navigation }) => {
    return (
        <View style={style.FlatlistCont}>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                numColumns={2}
                data={data || [1, 2, 3, 4, 5]} renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Details", { id: item.id })}
                        style={style.MainCard} >
                        <Image source={{ uri: item.image || "https://cdni.iconscout.com/illustration/premium/thumb/404-7304110-5974976.png?f=webp" }}
                            style={style.MainImage} />
                        <View style={style.TitleBioCont}>
                            <Text numberOfLines={2} style={style.TitleText}>{item.title || "Not Available"}</Text>
                            <Text style={style.Type}>{item.type} | duration - {item.duration}</Text>
                        </View>

                    </TouchableOpacity>
                )} />
        </View>
    )
}
const style = StyleSheet.create({


    FlatlistCont: {
        width: '96%',
        alignSelf: 'center'
    },
    MainCard: {
        // height: 290,
        width: '48.5%',
        marginBottom: 10,
        borderRadius: 6,
        backgroundColor: '#272a2f',
        zIndex: 10,
    },
    MainImage: {
        width: '100%',
        height: moderateScale(200),

        backgroundColor: 'gray'
    },
    TitleText: {
        fontSize: RFValue(15),
        fontWeight: '500',
        color: 'white'
    }, TitleBioCont: {
        paddingHorizontal: 7,
        paddingTop: 6,
        paddingBottom: 10
    }, Type: {
        // color: Colors.SecondColor,
        color: 'gray',
        marginTop: 0,
    }
})
export default AnimeCard