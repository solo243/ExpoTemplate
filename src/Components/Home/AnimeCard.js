import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { LinearGradient } from 'expo-linear-gradient'


const AnimeCard = ({ height, width, data, navigation }) => {
    return (

        <View style={{ marginTop: 8, width: '97%', alignSelf: 'center' }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data == 0 ? [1, 2, 3, 45, 6, 7,] : data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Details", { id: item.id })}
                        activeOpacity={1}
                        style={[style.CardMainContainer,
                        index == 0 ?
                            { marginLeft: moderateScale(11) } :
                            { marginStart: 0 },
                        ]}>
                        <Image
                            source={item.image ?
                                { uri: item.image } :
                                { uri: "http://" }}
                            style={[style.ImagePoster,
                            { height: height, width: width }]} />
                    </TouchableOpacity>
                )} />
        </View>
    )
}

const style = StyleSheet.create({
    CardMainContainer: {
        marginRight: 7,
        borderRadius: 10
    }, ImagePoster: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
    },
    TitleText: {
        paddingHorizontal: 12,
        marginTop: 3,
        fontWeight: '400',
        color: 'white',
        // bottom: 0,
        // textAlign: 'center'
    }
})
export default AnimeCard