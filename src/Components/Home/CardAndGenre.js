import { View, StyleSheet } from 'react-native'
import React from 'react'
import AnimeCard from './AnimeCard'
import GenreTitleArea from './GenreTitleArea'

const CardAndGenre = ({
    navigation,
    data,
    title,
    height,
    width
}) => {
    return (
        <View style={style.MainCateContainer}>
            <GenreTitleArea title={title} navigation={navigation} />
            <View>
                <AnimeCard
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
        marginTop: 19
    },
})
export default CardAndGenre