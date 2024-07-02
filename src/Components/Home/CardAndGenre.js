import { View, StyleSheet } from 'react-native'
import React from 'react'
import AnimeCard from './AnimeCard'
import GenreTitleArea from './GenreTitleArea'

const CardAndGenre = ({
    navigation,
    data,
    title,
    height,
    width,
    genre
}) => {
    return (
        <View style={style.MainCateContainer}>
            <GenreTitleArea title={title} navigation={navigation} genre={genre} />
            <View>
                <AnimeCard
                    navigation={navigation}
                    height={height}
                    width={width}
                    data={data}
                />
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    MainCateContainer: {
        marginTop: 14
    },
})
export default CardAndGenre