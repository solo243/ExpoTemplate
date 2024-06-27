import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import AnimeCard from '../Components/AnimeCard';
import { SearchAnime } from '../Api/ApiCall';

const Search = () => {


  const [SearchData, SetSearchData] = useState([]);

  const Searching = async (query) => {
    const fetching = await fetch(`https://amniflix.vercel.app/anime/zoro/search?q=${query}}`)
    const Converting = await fetching.json();
    SetSearchData(Converting.results);
  }


  return (
    <>
      <FlatList data={[1]} renderItem={({ index }) => (
        <SafeAreaView key={index} style={{ flex: 1, backgroundColor: Colors.MainColor }}>
          <View style={{ flex: 1 }}>
            {/* TopSection  */}
            {/* SearchSection  */}
            <View style={style.SearchBarCont}>
              <View style={style.SearchBar}>
                <Ionicons name="search" size={24} color='gray' />
                <TextInput onChangeText={(text) => Searching(text)} cursorColor={'gray'}
                  placeholder='Search here...'
                  placeholderTextColor={'gray'}
                  style={style.SearchBarInput}>
                </TextInput>
              </View>
            </View>
            {/* Content Area  */}
            <View style={style.ContentAreaCont}>
              <AnimeCard data={SearchData} />
            </View>
          </View>
        </SafeAreaView>
      )} style={{ flex: 1, backgroundColor: Colors.MainColor }} />
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