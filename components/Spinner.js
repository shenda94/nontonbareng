import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Spinner({isLoading}) {
  return (
    <View style={[styles.container, isLoading == false ? { display: 'none' } 
                : { display: 'flex' }]}>
        <ActivityIndicator size="large" color="#007aff" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})