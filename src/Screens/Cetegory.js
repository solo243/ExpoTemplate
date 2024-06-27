import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constants/Colors'

const Cetegory = () => {
  return (
    <SafeAreaView style={style.MainContainer}>
      <ScrollView>
        <View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.MainColor
  }
})
export default Cetegory