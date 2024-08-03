import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// import Video from 'react-native-video';
import * as ScreenOrientation from 'expo-screen-orientation';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Controls from '../Components/VideoScreen/Controls';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';
// import Video from 'react-native-video';
// import { Video } from 'expo-av';


const VideoScreen = () => {

    const videoRef = useRef(null)

    const DemoVideo = "https://ed.netmagcdn.com:2228/hls-playback/fbb29d5d0bc81d66138fa9d978a30bf7a36af8b507380add5975366485836f3876935c90f0f4206f469a29b540cd4fb734dddecbc75dfb8cbcfa5ad64b648feb3d03c4e1228d3663000b7fda0b1e27ad32f1ca1d7dd1f8ee1d38aa65f361080da33a7e4d2f8a737d250b1fdb01483ddb1691789c1327663f68d8066cb6710f1540beac4b19ab4c7ba935dc77b2b6ce25/master.m3u8"
    const VideoUrl = 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8';
    const [pause, setPause] = useState(false)
    const [fullscreenStatus, setFullscreenStatus] = useState(false);

    // const handleFullscreenUpdate = async (event) => {
    //     if (event.fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
    //         // setIsFullscreen(true)
    //         console.log("true")
    //         // await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    //     } else (event.fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
    //         // setIsFullscreen(false);
    //         console.log("false")
    //         // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    //     }
    // };
    const handleFullscreenUpdate = (event) => {
        setFullscreenStatus(!fullscreenStatus)
        switch (event.fullscreenUpdate) {
            case Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT:
                setFullscreenStatus('Entered fullscreen');
                console.log("Full screen")
                break;
            case Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT:
                setFullscreenStatus('Entering fullscreen');
                console.log("Full screen")
                break;
            case Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS:
                setFullscreenStatus('Exited fullscreen');
                console.log("exit screen")

                break;
            case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
                setFullscreenStatus('Exiting fullscreen');
                console.log("exit screen")
                break;
            default:
                setFullscreenStatus('Fullscreen update');
                console.log(fullscreenStatus)
                break;
        }
    };

    useEffect(() => {
        if (fullscreenStatus) {
            console.log(fullscreenStatus)
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
        }
        else {
            console.log(fullscreenStatus)
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        }
    }, [fullscreenStatus])



    const HideNavigation = async () => {
        await SystemNavigationBar.navigationHide();
    }



    useEffect(() => {
        // HideNavigation();

        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }, [])


    return (
        <SafeAreaView style={styles.MainContainer}>
            <StatusBar hidden={true} />
            <Video
                ref={videoRef}
                // source={{ uri: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" }}
                // source={{ uri: VideoUrl }}
                source={{ uri: "https://live-hls-abr-cdn.livepush.io/live/bigbuckbunnyclip/index.m3u8" }}
                onError={(e) => console.log(e)}
                volume={1}
                useNativeControls={true}
                shouldPlay={pause}
                // onFullscreenUpdate={(event) => {
                //     if (event.fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
                //         setFullscreenStatus(true);
                //         console.log("Fullscreen")
                //     } else if (event.fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
                //         setFullscreenStatus(false);
                //         console.log("Normal ")
                //     }
                // }}
                // onFullscreenUpdate={(e) => console.log(e)}
                resizeMode='contain'
                style={{ height: '100%', width: '100%' }}
            />

            {/* <Video
                source={{
                    uri: "https://ed.netmagcdn.com:2228/hls-playback/fbb29d5d0bc81d66138fa9d978a30bf7a36af8b507380add5975366485836f3876935c90f0f4206f469a29b540cd4fb734dddecbc75dfb8cbcfa5ad64b648feb3d03c4e1228d3663000b7fda0b1e27ad32f1ca1d7dd1f8ee1d38aa65f361080da33a7e4d2f8a737d250b1fdb01483ddb1691789c1327663f68d8066cb6710f1540beac4b19ab4c7ba935dc77b2b6ce25/master.m3u8"
                    // uri: "https://ed.netmagcdn.com:2228/hls-playback/fbb29d5d0bc81d66138fa9d978a30bf7a36af8b507380add5975366485836f3876935c90f0f4206f469a29b540cd4fb734dddecbc75dfb8cbcfa5ad64b648feb3d03c4e1228d3663000b7fda0b1e27ad32f1ca1d7dd1f8ee1d38aa65f361080da33a7e4d2f8a737d250b1fdb01483ddb1691789c1327663f68d8066cb6710f1540beac4b19ab4c7ba935dc77b2b6ce25/master.m3u8",
                    // uri: "https://ed.netmagcdn.com:2228/hls-playback/569e86dd527cb9360ba75ef9ef4940c371307ec9d326dcbe999cb1eb193173f51ad2df40c5f9e42c2cc3952c8306e2ed3f787496127c1649a3df1127f0507d79e1c0e2fc139b88ad1c6037bf27c833c7ddab3f2524541dbf6a1b378de9143322ab96e958f49b56975ad9d38e797600f938b2e82969ce5ba664b7ecffddab87e4525667c0fac5bb8b2fe8354e85271bfd/master.m3u8",
                    // type: 'm3u8'
                }}
                controls={true}
                volume={1}
                onError={(e) => console.log(e)}
                fullscreen={false}
                // paused={pause}
                showNotificationControls={false}
                resizeMode='contain'
                onBuffer={() => (

                    <Text style={{ position: 'absolute', color: 'red', fontSize: 17 }}>
                        {console.log("Buffering")}  Buffering
                    </Text>
                )}
                onLoad={() => (
                    <Text style={{ position: 'absolute', color: 'red', fontSize: 17 }}>
                        {console.log("Loading")}   Loading....
                    </Text>
                )}
                // fullscreenOrientation='landscape'
                style={{
                    height: '100%',
                    width: '100%',

                }}
                // rate={1.0}
                repeat={true}
            /> */}

            <Controls
                pause={pause}
                setPause={setPause}

            />



        </SafeAreaView>
    )
}


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
    }

})
export default VideoScreen