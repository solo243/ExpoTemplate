import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Constants/Colors';

const GenreCAtegory = () => {
    const Genre = ["Comedy", "Romance", "Horror", "Thriller", "Action"]
    const [selected, SetSelected] = useState(0);

    return (
        <View style={{ marginTop: 14 }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Genre}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => SetSelected(index)} style={[style.TextContainer,
                    index == selected ? { backgroundColor: Colors.SecondColor } :
                        { backgroundColor: '#272a2f' }]}>
                        <Text style={{
                            fontWeight: index == selected ? '600' : '500',
                            fontSize: 15,
                            color: index == selected ? 'white' : 'lightgrey'
                        }}>{item}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    )
}
const style = StyleSheet.create({
    TextContainer: {
        marginLeft: 8,
        paddingHorizontal: 22,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderCurve: 'continuous',
    },

})
export default GenreCAtegory