import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const GenreTitleArea = ({ title }) => {
    return (
        <View style={style.MovieGenreRow}>
            <Text style={style.GenreText}>
                {title}
            </Text>
            <TouchableOpacity style={style.SeeAllContainer}>
                <Text style={style.SeeAllText}> See all </Text>
                <AntDesign name="rightcircleo" size={16} color="gray" />
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    MovieGenreRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    GenreText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        marginStart: 10,
    },
    SeeAllContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 3
    },
    SeeAllText: {
        color: 'gray',
        fontSize: 14,
    },
})

export default GenreTitleArea