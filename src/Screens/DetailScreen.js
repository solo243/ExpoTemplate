import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
    FlatList, ScrollView
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import LoadingScreen from './LoadingScreen';
import Modal from "react-native-modal";


const DetailScreen = ({ route, navigation }) => {
    const RedirectedData = route.params.id

    const [isFev, SetisFev] = useState(false)
    const [loading, SetLoading] = useState(true);
    const [realData, SetrealData] = useState([]);




    const animeFetch = async (RedirectedData) => {
        SetLoading(true)
        try {
            const fetching = await fetch(`https://amniflix.vercel.app/anime/zoro/info?id=${RedirectedData}`);
            const convert = await fetching.json();
            SetrealData(convert);
            SetLoading(false)
            console.log("Api is called Bro")
            console.log("loading was false ")
        } catch (e) {
            SetLoading(true)
            console.log(e)
        }
    }
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        animeFetch(RedirectedData)
    }, [RedirectedData]);


    // TODO: This is a SLiderAnime Cards 
    const SideAnimeCards = ({ title, data }) => (
        <>
            <Text style={style.RelatedText}>{title}</Text>
            <FlatList
                horizontal
                data={data || [1, 2, 3, 4, 45, 6, 7]}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("Details", { id: item.id })}
                        onPress={() => animeFetch(item.id)}
                        style={[style.AnimeCard,
                        index == 0 ?
                            { marginLeft: 20 }
                            :
                            { marginLeft: 0 }]}>
                        <Image style={style.SuggestionImage} source={{ uri: item.image }} />
                    </TouchableOpacity>
                )} />
        </>
    )


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.MainColor
        }}>
            {loading ? (
                <LoadingScreen />
            ) : (
                <ScrollView>
                    <View style={{ flex: 1, marginTop: 12, paddingBottom: 30 }}>
                        <View style={style.TopBackAndHeart}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={style.TouchableBtnSize}>
                                <AntDesign name="arrowleft" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={style.TouchableBtnSize} onPress={() => SetisFev(!isFev)}>
                                {isFev
                                    ?
                                    <MaterialCommunityIcons name="cards-heart" size={26} color="red" />
                                    :
                                    <MaterialCommunityIcons name="cards-heart-outline" size={26} color="white" />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={style.HeroContainer}>
                            <Image style={style.PosterImage} source={{ uri: realData.image }} />
                            <Text numberOfLines={2} style={style.Title}>
                                {realData.title || "Title Not Available"}
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <OtherInfoBlock title={realData.type || 'NA'} />
                                <OtherInfoBlock title={"SubDub - " + realData.subOrDub || 'NA'} />
                                <OtherInfoBlock title={"Ep " + realData.totalEpisodes || 'NA'} />
                            </View>
                        </View>
                        <TouchableOpacity style={style.PlayBtnCont} >
                            <FontAwesome5 name="play" size={16} color="black" />
                            <Text style={style.BtnText}>
                                Play
                            </Text>
                        </TouchableOpacity>
                        <Text numberOfLines={8} style={style.Description}>
                            {realData.description}
                        </Text>
                        {/* Related ANime   */}
                        <View>
                            <SideAnimeCards title={"Related Anime"} data={realData.relatedAnime} />
                        </View>
                        <View>
                            <SideAnimeCards title={"More Anime"} data={realData.recommendations} />
                        </View>
                        <Modal isVisible={isModalVisible}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{
                                    height: 200,
                                    width: 200,
                                    textAlign: 'center',
                                    backgroundColor: 'red'
                                }}>I am the modal content!</Text>
                            </View>
                        </Modal>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

export default DetailScreen

//TODO: OtherInfo Horizontal below Title Row 
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
        textAlign: 'center',
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
    },
    SuggestionImage: {
        height: '100%',
        borderRadius: 10,
        width: '100%'
    }
})