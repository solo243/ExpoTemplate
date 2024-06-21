import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetailScreen() {


    const [isSaved, SetIsSaved] = useState(true)
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.MainColor
        }}>
            <View style={{ flex: 1 }}>
                {/* Top Area  */}
                <View style={style.TopContainer}>
                    <TouchableOpacity style={style.BackBtnCont}>
                        <Feather name="chevron-left" size={28} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => SetIsSaved(!isSaved)} style={style.BackBtnCont}>
                        {isSaved ?
                            <AntDesign name="heart" size={24} color="red" /> :
                            <AntDesign name="hearto" size={24} color="gray" />
                        }
                    </TouchableOpacity>

                </View>
                <Image source={{ uri: 'https://imgs.search.brave.com/SRc5x5upXlZyVXNGRj3eaeyRZKXRPcMvfLKj6l9ot8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ2OTE0/MzAuanBn' }} style={style.PosterImage} />
                <LinearGradient
                    colors={["transparent", '#2a3444', Colors.MainColor]}
                    style={style.LinearStyle}
                    start={{ x: 1, y: 0.6 }}
                    end={{ x: 1, y: 0 }}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    BackBtnCont: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50
    },
    TopContainer: {
        height: 50,
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        paddingTop: 16,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    }, PosterImage: {
        height: 350,
        width: '100%',
        // backgroundColor: 'green'
    },
    LinearStyle: {
        width: "100%",
        height: "70%",
        position: "absolute",
        top: 0,
    },
})