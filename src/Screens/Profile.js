import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import Widget from '../Components/Profile/Widget';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.MainColor }}>
      <View style={style.MainContainer}>
        <Widget
          icon={<AntDesign name="infocirlceo" size={24} color="white" />}
          name={"Help Center"} />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  MainContainer: {
    marginTop: 20,
  },
  HelpCenterCont: {
    height: 60,
    justifyContent: 'space-between',
    backgroundColor: '#272a2f',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
    borderCurve: 'continuous'
  }, helpCenterText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600'
  }
})
export default Profile