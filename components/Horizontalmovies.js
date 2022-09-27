import { View } from 'react-native'
import React, {useEffect, useState} from 'react'
import listdata from '../hook/Popularmovies'
import Flatlistt from './Flatlistt';

export default function Horizontalmovies({ navigation, judul, uri }) {
    const [{data, loading, error}, Popularmovies] = listdata();
    const [isLoading, setLoading] = useState(true);
    const indexcolor = 0;

    useEffect(() => {
        setLoading(true);
        Popularmovies(uri);
        setLoading(loading);
    },[]);

  return (
    <View>
        <Flatlistt data={data} isLoading={loading} navigation={navigation} judul={judul} indexcolor={indexcolor} />
    </View>
  );
}