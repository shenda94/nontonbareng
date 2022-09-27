import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Searchbar({navigation}) {

  const [text, setText] = useState("");
    
    const changeHandler = (val) => {
        setText(val);
    }



  const  handleKeyPress = () => {
    //alert(text);
    //go to cari movies
    navigation.navigate("Cari", {
      Search: text
  })
  }

  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={ 25 } />
        <TextInput placeholder="Drama, Thriller, Comedy" onChangeText={(val) => changeHandler(val)} onSubmitEditing={handleKeyPress}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff',
    marginTop:5,
    marginHorizontal:15,
    backgroundColor: 'white',
    padding:5,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: {width:5,height:5},
    elevation:3,
    shadowOpacity:0.1,
  marginBottom:20,    
}

})