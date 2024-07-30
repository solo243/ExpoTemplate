import { View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors'



const LoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.MainColor,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Image
                source={require('../../assets/LoadingImages/p1.gif')}
                style={{
                    height: 200,
                    width: 200,
                    marginTop: -50
                }} />
        </View>
    )
}

export default LoadingScreen