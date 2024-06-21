import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import AnimeCard from '../Components/AnimeCard'

const Save = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.MainColor
        }}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {/* TOpBar  */}
                    <View style={style.TopBar}>
                        <Text style={style.MyText}> My Anime List!</Text>
                    </View>
                    {/* Content Area  */}
                    <AnimeCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    TopBar: {
        height: 70,
        paddingTop: 21,
        paddingStart: 20,
        width: '100%'
    }, MyText: {
        fontSize: 22,
        color: 'white'
        , fontWeight: '600'
    }
})

export default Save