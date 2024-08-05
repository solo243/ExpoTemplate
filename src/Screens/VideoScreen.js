import { Dimensions, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import * as ScreenOrientation from 'expo-screen-orientation';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Controls from '../Components/VideoScreen/Controls';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video } from 'expo-av';




const VideoScreen = () => {

    const VideoUrl = 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8';
    const video = useRef(null);
    const [fullscreenStatus, setFullscreenStatus] = useState(false);
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [status, setStatus] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status.isLoaded) {
            setPosition(status.positionMillis);
            setDuration(status.durationMillis);
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [status]);

    const handleSliderChange = async (value) => {
        if (video.current) {
            await video.current.setPositionAsync(value);
            setPosition(value);
        }
    };

    const HideNavigation = async () => {
        await SystemNavigationBar.navigationHide();
    }


    useEffect(() => {
        // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }, [])

    return (
        <SafeAreaView style={styles.MainContainer}>
            <StatusBar hidden={true} />
            <Video
                source={{
                    uri: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                }}
                useNativeControls={false}
                ref={video}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                volume={1}
                onError={(error) => console.error('Video Error:', error)}
                showNotificationControls={false}
                resizeMode='contain'

                shouldPlay={isPlaying}
                style={{
                    height: '100%',
                    width: '100%',
                }}
            />
            <Controls
                pause={isPlaying}
                setPause={setIsPlaying}
                duration={duration}
                position={position}
                handleSliderChange={handleSliderChange}
            />
            {isLoading && <LoadingImage />}
        </SafeAreaView>
    )
}


const LoadingImage = () => (
    <View style={styles.LoadFullScreenCont}>
        {console.log("Loading ")}
        <View style={styles.LoadCont}>
            <Image
                source={require('../../assets/L1.gif')}
                style={styles.LoadImage} />
        </View>
    </View>
)



const styles = StyleSheet.create({
    video: {
        width: 300,
        height: 200,
    },
    MainContainer: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoadFullScreenCont: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoadCont: {
        backgroundColor: 'black',
        borderRadius: 100,
        opacity: 0.8,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoadImage: {
        height: 150,
        width: 150,
        opacity: 1
    }


})
export default VideoScreen