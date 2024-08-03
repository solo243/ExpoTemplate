import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { Colors } from '../../Constants/Colors';



const Controls = ({ pause, setPause, status }) => {
    const [controlVisible, setControlVisible] = useState(false);


    return (
        <TouchableOpacity style={styles.ControlsCont} onPress={() => setControlVisible(!controlVisible)}>
            {
                controlVisible ? (
                    <>
                        <View style={styles.PlayPauseCont}>
                            {/* <TouchableOpacity style={styles.PlayPause}>
                                <MaterialIcons name="replay-10" size={55} color="white" />
                            </TouchableOpacity> */}
                            <TouchableOpacity style={styles.PlayPause} onPress={() => setPause(!pause)}>
                                {
                                    pause ?
                                        <FontAwesome5 name="play" size={40} color="white" />
                                        :
                                        <FontAwesome5 name="pause" size={40} color="white" />

                                }
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={styles.PlayPause}>
                                <MaterialIcons name="forward-10" size={55} color="white" />
                            </TouchableOpacity> */}
                        </View>
                        <View style={styles.SliderCont}>
                            <Slider
                                style={{
                                    width: '80%',
                                    height: 46,
                                    opacity: 1,
                                }}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor={Colors.SecondColor}
                                maximumTrackTintColor='white'
                                // value={status.positionMillis ? status.positionMillis / 1000 : 0}
                                thumbTintColor='white'
                            />
                        </View>
                    </>
                )
                    : null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    SliderCont: {

        backgroundColor: 'black',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 65,
        opacity: 0.8,
        position: 'absolute'

    },
    PlayPauseCont: {
        flexDirection: 'row',
        // backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 90
        // gap: Dimensions.get('window').width - 670,

    },
    PlayPause: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: 90,
        backgroundColor: '#202020',
        opacity: 0.8
    },
    ControlsCont: {
        position: 'absolute',
        alignItems: 'center',
        // backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        // gap: 90,
        gap: Dimensions.get('window').width - 670,
        // flexDirection: '',
        height: '100%',
        width: '100%'
    }
})
export default Controls