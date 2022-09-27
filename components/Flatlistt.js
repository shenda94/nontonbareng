import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Spinner from './Spinner'
import Textheader from '../components/Textheader'

export default function Flatlistt({data, navigation, isLoading, judul, indexcolor}) {

    if (isLoading == true) {
        return (
            <Spinner isLoading={isLoading} />
          )
    }
    else {
        return (
            <View style={styles.containerview}>
                <Textheader caption={judul} indexcolor={indexcolor} />
             <FlatList style={[ isLoading == true ? { display: 'none' } 
              : { display: 'flex' }]}
                data={ data }
                keyExtractor = {(movies) => movies.id}
                renderItem={({ item, index }) => {
        
                  return (
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Detail", {
                                        itemID: item.id,
                                    })}
                                    >
                        <View style={[ 
                                styles.container,
                                styles.elv1,
                                index === 0 
                                    ? { marginLeft: 5 } 
                                    : { marginLeft: 15 },
                            ]}
                        >
                            <View style={ styles.imageContainer }> 
                                <Image 
                                    style={ styles.image }
                                    source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}
                                />
                            </View>
                            
                        </View>  
                    </TouchableOpacity>
                  );
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
        
            </View>
          )
    }
}

const styles = StyleSheet.create({
    containerview: {
        paddingLeft: 5,
        paddingTop: 5,
    },
    container: {
        width: 100,
        height: 200,
        borderRadius: 50,
        marginVertical: 5,
        marginTop: 10,
        padding:0,
        // marginHorizontal: 25,
        alignItems: "center",
        justifyContent: "center"
        
    },

    elv1: {
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        elevation: 3,
        shadowOpacity: 0.1,
    },

    image: {
        width: 100,
        height: 200,
    },

    imageContainer: {
        width: 100,
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: 5,
    },

    header: {
        fontWeight: "bold",
    },
})