import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'

const AnimeCard = ({ height, width, data }) => {
    const name = "Demon Slayer Hero the warrior"
    return (
        <View style={{ marginTop: 13, }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data > 0 ? [1, 2, 3, 4, 5, 5, 6, 7] : data} renderItem={({ item, index }) => (
                    <View style={[style.CardMainContainer, { height: height, width: width }]}>
                        <Image source={{ uri: item.image || "https://i.pinimg.com/originals/92/4e/ae/924eaebfc55711f2f5379d82e0877328.jpg" }} style={style.ImagePoster} />
                    </View>
                )} />
        </View>
    )
}

const style = StyleSheet.create({
    CardMainContainer: {
        marginStart: 10,
        backgroundColor: 'gray',
        borderRadius: 10
    }, ImagePoster: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    }
})
export default AnimeCard