import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'

const AnimeCard = ({ data }) => {
    return (
        <View style={style.ContentAreaCont}>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ gap: 11.5, justifyContent: 'center' }}
                data={data}
                renderItem={({ item }) => (
                    <View style={style.Card}>
                        <Text>asdhaoshdoasohdoahsodh</Text>
                        <Image source={item.image} style={style.Image} />
                    </View>
                )} />
        </View>
    )
}
const style = StyleSheet.create({
    ContentAreaCont: {
        width: '97%',
        height: '100%',
        // backgroundColor: 'red',
        alignSelf: 'center',
    },
    Card: {
        height: 290,
        borderRadius: 10,
        borderCurve: 'continuous',
        width: '46%',
        marginBottom: 10,
        backgroundColor: 'gray'
    },
    Image: {
        height: 150,
        width: 140,
        borderRadius: 10,
    }
})
export default AnimeCard