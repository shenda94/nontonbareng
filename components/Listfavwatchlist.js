import { View } from 'react-native'
import React, {useEffect, useState} from 'react'
import listdata from '../hook/Listdatafavwatchlist'
import Flatlistt from './Flatlistt';
import { AsyncStorage } from "react-native";
import { openDatabase } from "expo-sqlite";
const db = openDatabase("Moviedb.db");

export default function Listfavwatchlist({ navigation, uri, judul, nmtable }) {
    const [arrayItems,setArrayItems] = useState([]);
    const loading = false;
    const indexcolor = 1;

   //  useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM '+ nmtable,
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
              setArrayItems(temp);
          }
        );
      });

//alert(arrayItems);
      
   // }, []);

  return (
    <View>
        <Flatlistt data={arrayItems} isLoading={loading} navigation={navigation} judul={judul} indexcolor={indexcolor} />
    </View>
  );
}