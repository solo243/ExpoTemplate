import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

export const CheckOrentation = () => {

    const [orientation, setOrientation] = useState('PORTRAIT');
    useEffect(() => {
        const lister = Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation("PORTRAIT")
            } else {
                setOrientation("LANDSCAPE")
            }
        })
        return () => {
            lister.remove()
        }
    }, []);


    return orientation;
}

