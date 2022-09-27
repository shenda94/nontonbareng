import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Textheader({caption,indexcolor}) {
  const colors= [
    '#fff','#000000'
]

  return (
    <View style={styles.container}>
      <Text style={[styles.text1, {color:colors[indexcolor]}]}>{caption}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:5,
    },
    text1: {
        fontWeight:'bold',
        fontSize: 20
    },
})