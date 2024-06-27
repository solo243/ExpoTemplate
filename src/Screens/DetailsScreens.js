import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const DetailsScreens = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.MainColor
        }}>
            <View style={{ flex: 1 }}>
                {/* <Image style={style.PosterImage} source={{ uri: "https://imgs.search.brave.com/SRc5x5upXlZyVXNGRj3eaeyRZKXRPcMvfLKj6l9ot8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ2OTE0/MzAuanBn" }} />
                <LinearGradient style={style.LinearGradientStyle}
                    start={{ x: 0.5, y: 0 }}
                    colors={['transparent', 'rgba(13,16,21,1)', "rgba(13,16,21,0)"]}
                    end={{ x: 0.5, y: 1 }} /> */}
                <Image style={style.MainPoster} source={{ uri: "https://imgs.search.brave.com/SRc5x5upXlZyVXNGRj3eaeyRZKXRPcMvfLKj6l9ot8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ2OTE0/MzAuanBn" }} />
                <View style={style.ContentCont}>
                    <Text numberOfLines={3} style={style.Title}>Attack on Titan</Text>
                    <View style={style.OtherInfo}>
                        <AntDesign name="star" size={22} color={Colors.SecondColor} />
                        <Text style={style.RatingText}>3.5</Text>
                        <AntDesign name="right" size={19} color={Colors.SecondColor} />
                        <Text style={style.ReleaseDate}>2018</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    PosterImage: {
        height: 350,
        width: '100%',
    },
    LinearGradientStyle: {
        position: 'absolute',
        width: width,
        height: height * 0.9
    }, MainPoster: {
        height: 310,
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
    }, ContentCont: {
        width: '100%',
        paddingBottom: 30,
        paddingHorizontal: 17,
        marginTop: 20
    },
    Title: {
        color: 'white',
        fontSize: 25,
        width: '72%',
        // backgroundColor: 'red',
        fontWeight: '600'
    }, OtherInfo: {
        paddingTop: 13,
        alignItems: 'center', 
        // backgroundColor: 'red',
        flexDirection: 'row',

    }, RatingText: {
        fontSize: 15,
        color: Colors.SecondColor,
        marginStart: 6,

        marginRight: 10
    }, ReleaseDate: {
        color: 'white',
        marginStart: 10,
        fontSize: 14,
    } 

})

export default DetailsScreens