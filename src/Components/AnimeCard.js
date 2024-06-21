import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'

const AnimeCard = () => {
    return (
        <View style={style.ContentAreaCont}>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
                data={[1, 2, 3, 4, 5, 6, , 7, 8, 8]}
                renderItem={({ item }) => (
                    <View style={style.Card}>
                        <Image style={style.Image} />
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
        marginBottom: 18,
        backgroundColor: 'gray'
    },
    Image: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    }
})
export default AnimeCard