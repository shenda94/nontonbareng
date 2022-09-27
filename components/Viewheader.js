import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Search from './Searchbar'
import { globalStyles } from '../styles/Globalstyle'

export default function Viewheader({navigation}) {
  return (
    <ImageBackground
        source={ require("../assets/bg11.jpg") }
        resizeMode="cover"
        style={ globalStyles.backImage} >
          <View style={ {height: "auto"} }>
            <Header />
            <Search navigation={navigation} />
          </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
})