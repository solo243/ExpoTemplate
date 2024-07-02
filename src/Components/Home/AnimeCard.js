import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const AnimeCard = ({ height, width, data, navigation }) => {
    return (
        <View style={{ marginTop: 8, width: '94%', alignSelf: 'center' }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data == 0 ? [1, 2, 3, 45, 6, 7,] : data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Details", { id: item.id })}
                        activeOpacity={1}
                        style={[style.CardMainContainer,
                        index == 0 ? { marginLeft: moderateScale(0) } :
                            { marginStart: 0 },
                        { height: height, width: width }]}>
                        <Image
                            source={item.image ?
                                { uri: item.image } :
                                { uri: "http://" }}
                            style={style.ImagePoster} />
                        <Text numberOfLines={2}
                            style={style.TitleText}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

const style = StyleSheet.create({
    CardMainContainer: {
        marginRight: 10,
        borderRadius: 10
    }, ImagePoster: {
        height: '100%',
        width: '100%',
        backgroundColor: 'gray',
        borderRadius: 10,
    },
    TitleText: {
        paddingHorizontal: 10,
        fontWeight: '400',
        color: 'white',
        bottom: 0,
        textAlign: 'center'
    }
})
export default AnimeCard