import { View, Text, ImageBackground, ScrollView, ViewPagerAndroidComponent } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/Globalstyle'
import Movies from '../components/Horizontalmovies'
import Viewheader from '../components/Viewheader'

export default function Homescreens({navigation}) {
  const genre_ids = "";
  const judul = "What's Popular";
  const judul2 = "Top Rated";
  const judul3 = "Now Playing";

  const uri1 = "popular";
  const uri2 = "top_rated";
  const uri3 = "now_playing";

  const uri4 = "upcoming";
  const judul4 = "Up Coming";
  //alert(judul);

  return (
    <ImageBackground
            source={ require("../assets/bgorange.jpg") }
            resizeMode="cover"
            style={ globalStyles.backImage} >
      <ScrollView>
            <View style={ globalStyles.container }>
                <Viewheader navigation={navigation} />
                <Movies navigation={navigation} judul={judul} uri={uri1} />
                <Movies navigation={navigation} judul={judul2} uri={uri2} />
                <Movies navigation={navigation} judul={judul3} uri={uri3} />
                <Movies navigation={navigation} judul={judul4} uri={uri4} />
            </View>
    </ScrollView>
    </ImageBackground>
   
  )
}