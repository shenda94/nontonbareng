import {
  View, ImageBackground, StyleSheet
 } from "react-native";
import { globalStyles } from "../styles/Globalstyle";
import detailmovies from '../hook/Detailmovies'
import React, {useState, useEffect} from 'react'
import Detaildata from "../components/Detaildata";

export default function Detailmoviescreen({ route, navigation }) {
   // Ekstrak parameter yang diterima
   const { itemTitle, itemRating, itemBody, itemID } = route.params;
   const id = itemID;
   const rating = itemRating;

   const [{data, loading, error}, Getdetailmovies] = detailmovies();
   const [isLoading, setLoading] = useState(true);

   useEffect(() => {
       setLoading(true);
       Getdetailmovies(id);
       setLoading(loading);
   },[]);


  return (
      <ImageBackground
          resizeMode="cover"
          source={ require("../assets/bgorange.jpg") }
          style={ globalStyles.backImage }>

          <View style={ globalStyles.container }>
              <Detaildata navigation={navigation} data={data} isLoading={loading} />
          </View>

      </ImageBackground>
  )
}

const styles = StyleSheet.create({})