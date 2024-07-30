import { View, Text } from 'react-native'
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { HomepageFetch, MostPopular, Movies, SpecialSeries, TvSeries } from '../Api/ApiCall';
import Context from './Context';


export const ContextState = (props) => {
    const [MovieData, SetMovieData] = useState([]);
    const [tv, setTv] = useState([]);
    const [special, SetSpecial] = useState([]);
    const [popular, setPopular] = useState([]);
    const [data, setData] = useState([]);


    const MovieFetching = useCallback(async () => {
        try {
            const Data = await Movies(1);
            SetMovieData(Data);

        } catch (e) {
            console.log(e);
        }
    })

    const TvSeriesFetch = useCallback(async () => {
        try {
            const Data = await TvSeries(1);
            setTv(Data);
        } catch (e) {
            console.log(e);
        }
    })

    const SpecialSeriesFetch = useCallback(async () => {
        try {
            const Data = await SpecialSeries(1);
            SetSpecial(Data);
        } catch (e) {
            console.log(e);
        }
    })


    const PopularFetch = useCallback(async () => {
        try {
            const Data = await MostPopular();
            setPopular(Data);
        } catch (e) {
            console.log(e)
        }
    })

    const HomeFetching = useCallback(async () => {
        try {
            const data = await HomepageFetch();
            setData(data);
        } catch (e) {
            console.log("error hai PopUp ", e)
        }
    })

    useEffect(() => {
        HomeFetching();
        SpecialSeriesFetch();
        MovieFetching();
        TvSeriesFetch();
        PopularFetch();
    }, [])

    return <Context.Provider value={{
        popular,
        MovieData,
        tv,
        special,
        data
    }}>
        {props.children}
    </Context.Provider>

}

export default ContextState