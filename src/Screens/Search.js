import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ScrollView
  , TouchableOpacity
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AnimeCard from '../Components/AnimeCard';


export default function Search({ navigation }) {


  const [SearchData, SetSearchData] = useState([]);
  const [query, setQuery] = useState("");
  const [ApiQuery, setApiQuery] = useState("");

  const Searching = useCallback(
    async (text) => {
      try {
        const URL = `https://amniflix.vercel.app/anime/zoro/${text}`
        console.log(URL);
        if (text < 3) {
          return console.log("SHort hai ") && null
        } else {
          const fetching = await fetch(URL)
          const Converting = await fetching.json();
          if (Converting) {
            console.log(Converting)
            SetSearchData(Converting.results);
          }
        }
      } catch (e) {
        console.log("Error while Fetching..", e)
      }
    }, [])

  const initialSearchCall = useCallback(
    async (term) => {
      if (term) {
        await Searching(term);
      }
    }, [],
  )

  useEffect(() => {
    if (ApiQuery) {
      initialSearchCall(ApiQuery)
    } else {
      SetSearchData([])
      console.log("Nothing found")
    }
  }, [ApiQuery])

  useEffect(() => {
    const timeoutId = setTimeout(() => setApiQuery(query), 800)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [query]);

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
                <TextInput
                  autoFocus={true}
                  value={query}
                  onChangeText={(text) => setQuery(text)} cursorColor={'gray'}
                  placeholder='Search here...'
                  placeholderTextColor={'gray'}
                  style={style.SearchBarInput}>
                </TextInput>
                {
                  !query ? null : (
                    <TouchableOpacity onPress={() => setQuery("")} style={style.ClearBtnCont}>
                      <Entypo name="circle-with-cross" size={24} color="gray" />
                    </TouchableOpacity>
                  )
                }

              </View>
            </View>
            {/* Content Area  */}
            <View style={style.ContentAreaCont}>
              <AnimeCard data={SearchData} navigation={navigation} />
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
    width: '80%',
    // backgroundColor: 'blue',
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
  },
  ClearBtnCont: {
    height: '100%',
    // , backgroundColor: 'red',
    flex: 1,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
