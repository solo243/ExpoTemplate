import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const DetailScreen = () => {

    const [isFev, SetisFev] = useState(false)

    return (
        <SafeAreaView style={{
            flex: 1,

            backgroundColor: Colors.MainColor
        }}>
            <ScrollView>
                <View style={{ flex: 1, marginTop: 12, paddingBottom: 30 }}>
                    <View style={style.TopBackAndHeart}>
                        <TouchableOpacity style={style.TouchableBtnSize}>
                            <AntDesign name="arrowleft" size={24} color="gray" />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.TouchableBtnSize} onPress={() => SetisFev(!isFev)}>
                            {isFev
                                ?
                                <MaterialCommunityIcons name="cards-heart" size={26} color="red" />
                                :
                                <MaterialCommunityIcons name="cards-heart-outline" size={26} color="gray" />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={style.HeroContainer}>
                        <Image style={style.PosterImage} source={{ uri: "https://imgs.search.brave.com/SRc5x5upXlZyVXNGRj3eaeyRZKXRPcMvfLKj6l9ot8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ2OTE0/MzAuanBn" }} />
                        <Text numberOfLines={2} style={style.Title}> Demon Slayer </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <OtherInfoBlock title={"Action & Adventure"} />
                            <OtherInfoBlock title={"2024"} />
                            <OtherInfoBlock title={"2.5"} />
                        </View>
                    </View>
                    <TouchableOpacity style={style.PlayBtnCont} >
                        <FontAwesome5 name="play" size={16} color="black" />
                        <Text style={style.BtnText}>
                            Play
                        </Text>
                    </TouchableOpacity>
                    <Text numberOfLines={8} style={style.Description}>
                        Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, rgh. "Blade of Demon Destruction")[4] is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes. It has been published in English by Viz Media and simultaneously on the Manga Plus platform by Shueisha. It follows teenage Tanjiro Kamado, who strives to become a Demon Slayer after his family was slaughtered and his younger sister, Nezuko, is turned into a demon.
                    </Text>
                    {/* More Like this  */}
                    <View>
                        <Text style={style.RelatedText}>More Like this </Text>
                        <FlatList
                            horizontal
                            data={[1, 2, 3, 4, 5, 6, 7, 8]}
                            renderItem={({ item, index }) => (
                                <View style={[style.AnimeCard,
                                index == 0 ?
                                    { marginLeft: 20 }
                                    :
                                    { marginLeft: 0 }]}>
                                </View>
                            )} />
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default DetailScreen



const OtherInfoBlock = ({ title }) => (
    <View style={style.OtherInfo}>
        <Entypo name="dot-single" size={24} color={Colors.SecondColor} />
        <Text numberOfLines={1} style={style.OtherText}>
            {title}
        </Text>
    </View>
)

const style = StyleSheet.create({
    BackBtnCont: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50
    },
    HeroContainer: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    PosterImage: {
        height: 250,
        width: 170,
        alignSelf: 'center',
        borderRadius: 10
    },
    Title: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        marginTop: 18
    },
    OtherInfo: {
        alignItems: 'center',
        flexDirection: 'row',

    },
    OtherText: {
        color: 'lightgrey',
        marginRight: 7
    },
    PlayBtnCont: {
        backgroundColor: 'lightgrey',
        width: '92%',
        marginTop: 20,
        flexDirection: 'row',
        gap: 11,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 39,
        borderRadius: 5,
        borderCurve: 'continuous'
    },
    BtnText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    Description: {
        color: 'white',
        fontSize: 13,
        width: '90%',
        alignSelf: 'center',
        marginTop: 15
    },
    TopBackAndHeart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    TouchableBtnSize: {
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center'
    }, RelatedText: {
        color: 'white',
        marginStart: 20,
        marginTop: 24,
        fontSize: 20,
        fontWeight: '600'
    },
    AnimeCard: {
        backgroundColor: 'gray',
        borderRadius: 10,
        marginRight: 10,
        height: 199,
        width: 133,
        marginTop: 10,
    }
})