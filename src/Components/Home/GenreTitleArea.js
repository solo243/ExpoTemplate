import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

const GenreTitleArea = ({ title, navigation, genre }) => {
    return (
        <View style={style.MovieGenreRow}>
            <Text style={style.GenreText}>
                {title}
            </Text>
            <TouchableOpacity
                style={style.SeeAllContainer}
                onPress={() => navigation.navigate("Categories", { title: title, genre: genre })}>
                <Text style={style.SeeAllText}> See all </Text>
                <AntDesign name="rightcircleo" size={16} color="gray" />
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    MovieGenreRow: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    GenreText: {
        color: 'white',
        fontSize: RFValue(17),
        fontWeight: '600',
        marginStart: 7,
    },
    SeeAllContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 3
    },
    SeeAllText: {
        color: 'gray',
        fontSize: RFValue(11),
    },
})

export default GenreTitleArea