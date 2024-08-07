import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { Colors } from '../Constants/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import CardAndGenre from '../Components/Home/CardAndGenre';
import { moderateScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import Context from '../GlobalState/Context';

export default function Home({ navigation }) {
    const {
        popular,
        MovieData,
        tv,
        special,
        data } = useContext(Context)

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
                            <Image source={{ uri: 'https://i.pinimg.com/564x/97/c4/51/97c45187dc99191f51066b04b0051b70.jpg' }}
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
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => navigation.navigate("Search")}
                            style={style.SearchBar}>
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
                                <CardAndGenre
                                    title={"Trending Anime"}
                                    navigation={navigation}
                                    height={moderateScale(169)}
                                    width={moderateScale(120)}
                                    genre={"tv"}
                                    data={data} />
                            </View>

                            {/*TODO: Popular Movies  */}
                            <CardAndGenre
                                title={"Popular Movies"}
                                height={moderateScale(214)}
                                width={moderateScale(145)}
                                data={MovieData}
                                genre={"movie"}
                                navigation={navigation} />



                            {/*TODO: Popular Series  */}
                            <CardAndGenre
                                title={"Popular Series"}
                                height={moderateScale(169)}
                                width={moderateScale(120)}
                                data={popular}
                                genre={"most-popular"}
                                navigation={navigation} />

                            {/* Poster Image  */}
                            <View style={style.HoriPosterCont}>
                                <Image style={style.HorizontalPoster} source={{ uri: "https://i.pinimg.com/originals/92/4e/ae/924eaebfc55711f2f5379d82e0877328.jpg" }} />
                            </View>


                            {/*TODO: Special Anime  */}
                            <CardAndGenre
                                title={"Special Anime"}
                                height={moderateScale(169)}
                                width={moderateScale(120)}
                                data={special}
                                genre={"special"}
                                navigation={navigation} />


                            <CardAndGenre
                                title={"Tv Series"}
                                height={moderateScale(169)}
                                width={moderateScale(120)}
                                data={tv}
                                genre={"tv"}
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
        width: '100%',
        // backgroundColor: 'red',
        marginTop: 30,
        alignSelf: 'center'
    },
    HeroText: {
        fontSize: RFValue(31),
        fontWeight: '600',
        marginStart: 15,
        color: 'white',
        // paddingBottom: 1,
    },
    SearchBar: {
        height: 52,
        borderRadius: 7,
        width: '92%',
        alignSelf: 'center',
        marginTop: 17,
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
        marginTop: 30
    },
    HorizontalPoster: {
        height: moderateScale(130),
        backgroundColor: 'gray',
        width: '92%',
        alignSelf: 'center',
        borderRadius: 10,
        borderCurve: 'continuous'
    }
})