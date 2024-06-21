import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'

const AnimeCard = ({ height, width }) => {
    const data = [1, 2, 3, 4, 5, 6, 7]
    const name = "Demon Slayer Hero the warrior"
    return (
        <View style={{ marginTop: 15, }}>
            <FlatList
                horizontal
                data={data} renderItem={({ item }) => (
                    <View style={[style.CardMainContainer, { height: height, width: width }]}>
                        <Image source={{ uri: 'https://imgs.search.brave.com/SRc5x5upXlZyVXNGRj3eaeyRZKXRPcMvfLKj6l9ot8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ2OTE0/MzAuanBn' }} style={style.ImagePoster} />
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