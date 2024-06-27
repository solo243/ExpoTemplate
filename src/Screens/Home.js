import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { Colors } from '../Constants/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import GenreCAtegory from '../Components/Home/GenreCAtegory';
import AnimeCard from '../Components/Home/AnimeCard';
import GenreTitleArea from '../Components/Home/GenreTitleArea';
import { HomepageFetch, Movies, SpecialSeries, TvSeries } from '../Api/ApiCall';
import CardAndGenre from '../Components/Home/CardAndGenre';

export default function Home({ navigation }) {

    const [data, setData] = useState([]);
    const [MovieData, SetMovieData] = useState([]);
    const [tv, setTv] = useState([]);
    const [special, SetSpecial] = useState([]);
    const HomeFetching = async () => {
        try {
            const data = await HomepageFetch();
            setData(data);
        } catch (e) {
            console.log("error hai chutiye ", e)
        }
    }
    const MovieFetching = async () => {
        try {
            const Data = await Movies(1);
            SetMovieData(Data);
            // console.log(Data)
        } catch (e) {
            console.log(e);
        }
    }

    const TvSeriesFetch = async () => {
        try {
            const Data = await TvSeries(1);
            setTv(Data);
            // console.log(Data)
        } catch (e) {
            console.log(e);
        }
    }
    const SpecialSeriesFetch = async () => {
        try {
            const Data = await SpecialSeries(1);
            SetSpecial(Data);
            // console.log(Data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => (
     
        HomeFetching(),
        MovieFetching(),
        TvSeriesFetch(),
        SpecialSeriesFetch() 
    ), [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MainColor }} >
            <ScrollView style={{ flex: 1, backgroundColor: Colors.MainColor }}>
                <View style={{ paddingBottom: 20 }}>
                    {/*TODO: Top Section */}
                    <View style={style.TopSectionContainer}>
                        <View style={style.ImageAndMorning}>
                            <Image
                                source={{ uri: 'https://imgs.search.brave.com/fsr-i99FXfa48NXSVe_jJB0Yrh_OYux4tDybM9TYdts/rs:fit:860:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNS9OYXJ1/dG8tUGZwLWZvci1Q/cm9maWxlLVBpY3R1/cmUuanBn' }}
                                style={style.ProfileImage} />
                            <View>
                                <Text style={style.GoodMorningText}>
                                    Good Morning
                                </Text>
                                <Text style={style.WelcomeText}>
                                    welcome Harshil
                                </Text>
                            </View>
                        </View>
                        {/* Bell container  */}
                        <View style={style.BellContainer}>
                            <Feather name="bell" size={24} color="white" />
                        </View>
                    </View>
                    {/* TODO: Slider Container  */}
                    <View style={style.SliderContainer}>
                        <View style={style.Slider}>
                            <Image source={{ uri: 'https://imgs.search.brave.com/SRc5x5upXlZyVXNGRj3eaeyRZKXRPcMvfLKj6l9ot8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ2OTE0/MzAuanBn' }}
                                style={{ height: '100%', borderRadius: 10, }} />
                        </View>
                    </View>
                    {/*TODO: Content Area  */}
                    <View style={style.ContentContainer}>
                        <>
                            <Text style={style.HeroText}>
                                Find Your
                            </Text>
                            <Text style={style.HeroText}>
                                Favorite Anime!
                            </Text>
                        </>
                        {/*TODO: SearchBar  */}
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Search")} style={style.SearchBar}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 11 }}>
                                <Feather name="search" size={24} color="#929192" />
                                <Text style={style.SearchPlaceHolder}> Search Movie</Text>
                            </View>
                            <FontAwesome6 name="sliders" size={22} color="#929192" />
                        </TouchableOpacity>
                        {/* AnimeCards  */}
                        <View>
                            {/* MovieGenre Area  */}
                            <View style={{ marginTop: 29 }}>
                                <GenreTitleArea title={"Anime Genres"} navigation={navigation} />
                                {/* <GenreCAtegory /> */}
                                <AnimeCard
                                    height={169}
                                    width={120}
                                    data={data}
                                />
                            </View>

                            {/*TODO: Popular Movies  */}
                            <CardAndGenre
                                title={"Popular Movies"}
                                height={214}
                                width={145}
                                data={MovieData}
                                navigation={navigation} />


                            {/*TODO: Popular Series  */}
                            <CardAndGenre
                                title={"Popular Series"}
                                height={169}
                                width={120}
                                data={tv}
                                navigation={navigation} />

                            {/* Poster Image  */}
                            <View style={style.HoriPosterCont}>
                                <Image style={style.HorizontalPoster} source={{ uri: "https://i.pinimg.com/originals/92/4e/ae/924eaebfc55711f2f5379d82e0877328.jpg" }} />
                            </View>

                            {/*TODO: Special Anime  */}
                            <CardAndGenre
                                title={"Special Anime"}
                                height={169}
                                width={120}
                                data={special}
                                navigation={navigation} />

                        </View>
                    </View>
                </View>
                {/* continue Watching  */}

                <Text style={style.Thanks}>
                    Nothing to see here tanks for Download :)
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    TopSectionContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 13,

    },
    ProfileImage: {
        height: 50,
        borderRadius: 130,
        width: 50,
        backgroundColor: 'gray'
    },
    ImageAndMorning: {
        flexDirection: 'row',
        gap: 10
    },
    GoodMorningText: {
        color: Colors.SecondColor,
        fontWeight: '500'
    },
    WelcomeText: {
        fontWeight: '600',
        fontSize: 16,
        color: 'white'
    }, BellContainer: {
        height: 40,
        borderRadius: 10,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#272a2f',
    },
    SliderContainer: {
        width: '100%',
        height: 160,
        marginTop: 10,
        alignItems: 'center'
    },
    Slider: {
        width: '92%',
        height: '100%',
        borderRadius: 10,
        borderCurve: 'continuous',
        backgroundColor: 'gray'
    },
    ContentContainer: {
        width: '92%',
        marginTop: 30, 
        alignSelf: 'center' 
    },
    HeroText: {
        fontSize: 31,
        fontWeight: '600',
        marginStart: 7,
        color: 'white',
        paddingBottom: 2,
    },
    SearchBar: {
        height: 52,
        borderRadius: 10,
        width: '100%',
        marginTop: 18,
        alignItems: 'center',
        backgroundColor: '#272a2f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    SearchPlaceHolder: {
        color: '#929192',
        fontSize: 15
    },
    MainCateContainer: {
        marginTop: 25
    }, Thanks: {
        fontSize: 14,
        paddingBottom: 10,
        textAlign: 'center',
        marginTop: 10,
        color: 'gray'
    },
    HoriPosterCont: {
        marginTop: 40
    },
    HorizontalPoster: {
        height: 130,
        backgroundColor: 'gray',
        width: '98%',
        alignSelf: 'center',
        borderRadius: 10,
        borderCurve: 'continuous'
    }
})