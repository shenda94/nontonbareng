import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightheader}>Unlimited movies</Text>
      <Text style={styles.boldheader}>Ready to watch?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:25,
        marginHorizontal:25,
    },
    lightheader: {
        fontSize:35,
        color:'#fff'
    },
    boldheader: {
        fontSize:40,
        fontWeight:'bold',
        color:'#fff'
    }
})