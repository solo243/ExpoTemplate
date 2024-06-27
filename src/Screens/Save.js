import { View, Text, StyleSheet, ScrollView, FlatList, VirtualizedList } from 'react-native'
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
            <FlatList
                data={[1]}
                renderItem={({ index }) => (
                    <View key={index} style={{ flex: 1 }}>
                        {/* TOpBar  */}
                        <View style={style.TopBar}>
                            <Text style={style.MyText}> My Anime List!</Text>
                        </View>
                        {/* Content Area  */}
                        <View style={style.FlatListCont}>
                            <FlatList data={[1, 2, 3, 4, 4, 5, 6, 7]} renderItem={({ item }) => (
                                <View style={style.AnimeCardCont}>
                                    <View style={style.HorizontalCard}>

                                    </View>
                                </View>
                            )} />
                        </View>

                    </View>
                )} />
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
    }, AnimeCardCont: {
        height: 100,
        width: '100%',
        // backgroundColor: 'red',
        marginBottom: 20,
        alignItems: 'center'
    }, HorizontalCard: {
        backgroundColor: 'green',
        borderRadius: 10,
        width: '92%',
        height: 100
    }
})

export default Save