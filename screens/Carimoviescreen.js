import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Movies from '../components/Listmovies'
import { globalStyles } from '../styles/Globalstyle'

const Carimoviescreen = ({route, navigation}) => {
  const { itemTitle, itemID, Search } = route.params;
  const genre_ids = itemID;
  const SearchX = Search;
  //alert(Search);

  return (
    <ImageBackground
        source={ require("../assets/bgorange.jpg") }
        resizeMode="cover"
        style={ globalStyles.backImage} >
          <ScrollView>
            <View style={ globalStyles.container }>
                <Movies genre={genre_ids} navigation={navigation} search={SearchX} />
            </View>
          </ScrollView>
    </ImageBackground>
  )
}

export default Carimoviescreen

const styles = StyleSheet.create({})