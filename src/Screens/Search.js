import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import AnimeCard from '../Components/AnimeCard';

const Search = () => {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.MainColor }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MainColor }}>
          <ScrollView >
            <View style={{ flex: 1 }}>
              {/* TopSection  */}
              {/* SearchSection  */}
              <View style={style.SearchBarCont}>
                <View style={style.SearchBar}>
                  <Ionicons name="search" size={24} color='gray' />
                  <TextInput cursorColor={'gray'}
                    placeholder='Search here...'
                    placeholderTextColor={'gray'}
                    style={style.SearchBarInput}>
                  </TextInput>
                </View>
              </View>
              {/* Content Area  */}
              <View style={style.ContentAreaCont}>
                {/* <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-around' }}
                data={[1, 2, 3, 4, 5, 6, , 7, 8, 8]}
                renderItem={({ item }) => (
                  <View style={style.Card}>
                    <Image style={style.Image} />
                  </View>
                )} /> */}
                <AnimeCard />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}
const style = StyleSheet.create({
  SearchBarCont: {
    height: 85,
    width: '100%',
    // backgroundColor: 'red'
  },
  SearchBar: {
    width: '90%',
    height: 52,
    marginTop: 15,
    borderRadius: 10,
    borderCurve: 'continuous',
    backgroundColor: '#272a2f',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13
  },
  SearchBarInput: {
    height: '100%',
    width: '90%',
    marginStart: 10,
    color: 'white',
    fontSize: 16
  },
  RecentHistory: {
    color: 'gray',
    fontSize: 16,
    paddingHorizontal: 20
  },
  Card: {
    height: 290,
    borderRadius: 10,
    borderCurve: 'continuous',
    width: '46%',
    marginBottom: 18,
    backgroundColor: 'gray'
  },
  Image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  }
})
export default Search