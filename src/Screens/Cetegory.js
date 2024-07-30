import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale } from 'react-native-size-matters';
import LoadingScreen from './LoadingScreen';

const Cetegory = ({ navigation, route }) => {


  const ReDirected = route.params.title
  const ReDirectedGenre = route.params.genre
  console.log(ReDirectedGenre)

  const [data, SetData] = useState([]);
  const [page, Setpage] = useState(1);
  const [loading, SetLoading] = useState(true);


  const flatListRef = useRef(null);

  const scrollToTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };



  const ApiCall = async (genre, page) => {
    SetLoading(true)
    const URL = `https://amniflix.vercel.app/anime/zoro/${genre}?page=${page}`;
    console.log(URL)
    const urlftch = await fetch(URL);
    const convret = await urlftch.json()
    SetData(convret.results)
    SetLoading(false)
  }





  useEffect(() => {
    ApiCall(ReDirectedGenre, page)
  }, [page])

  const AnimeCard = () => (
    <View style={style.FlatlistCont}>
      <FlatList
        bounces="true"
        ref={flatListRef}
        keyExtractor={(item, index) => index.toString()}
        // onEndReached={() => Setpage(page + 1)}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        data={data || [1, 2, 3, 4, 5]} renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: item.id })}
            style={style.MainCard} >
            <Image source={{ uri: item.image || "https://cdni.iconscout.com/illustration/premium/thumb/404-7304110-5974976.png?f=webp" }}
              style={style.MainImage} />
            <View style={style.TitleBioCont}>
              <Text numberOfLines={2} style={style.TitleText}>{item.title || "Not Available"}</Text>
              <Text style={style.Type}>{item.type} | Duration - {item.duration}</Text>
            </View>
          </TouchableOpacity>
        )} />
    </View>
  )

  return (
    <SafeAreaView style={style.MainContainer}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <FlatList data={[1]} renderItem={({ item, index }) => (
          <View style={{ paddingBottom: 30 }}>
            {/* Top Bar  */}
            <View style={style.TopBarCont}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={style.BackBtn}>
                <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
              <Text style={style.GenreNameText}>{ReDirected}</Text>
            </View>
            <View style={style.ContentArea}>
              <AnimeCard />
            </View>
            <View style={style.BtnsRow}>
              {page == 1 ? (<></>) : (
                <TouchableOpacity
                  onPress={() => Setpage(page - 1)}
                  style={style.BtnCont}>
                  <Text style={style.NextText}>Prev Page</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[style.BtnCont, page == 1 ? { width: 300 } : {}]}
                onPress={() => scrollToTop() & Setpage(page + 1)}>
                <Text style={style.NextText}> Next Page</Text>
              </TouchableOpacity>
            </View>
          </View>
        )} />
      )}

    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.MainColor
  },
  ContentArea: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20
  },
  TopBarCont: {
    height: moderateScale(55),
    alignItems: 'center',
    paddingHorizontal: 6,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#272a2f'
  },
  BackBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 60
  },
  GenreNameText: {
    fontSize: RFValue(17),
    color: 'white',
    fontWeight: '600',
    // position: 'static'
  },





  FlatlistCont: {
    width: '94%',
    alignSelf: 'center'
  },
  MainCard: {
    // height: 290,
    width: '48.5%',

    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: '#272a2f',
    zIndex: 10,
  },
  MainImage: {
    width: '100%',
    height: moderateScale(200),

    backgroundColor: '#272a2f'
  },
  TitleText: {
    fontSize: RFValue(15),
    fontWeight: '500',
    // paddingHorizontal: 7,
    // paddingTop: 6,
    color: 'white'
  }, TitleBioCont: {
    paddingHorizontal: 7,
    paddingTop: 6,
    paddingBottom: 10
  }, Type: {
    // color: Colors.SecondColor,
    color: 'gray',
    marginTop: 0,
  },


  BtnCont: {
    height: moderateScale(50),
    backgroundColor: Colors.SecondColor,
    width: 165,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }, NextText: {
    color: 'white',
    fontSize: RFValue(15),
    fontWeight: '500'
  }, BtnsRow: {
    flexDirection: 'row',
    gap: moderateScale(22),
    justifyContent: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 20,

  }
})
export default Cetegory