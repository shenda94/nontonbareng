import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Spinner from './Spinner'

export default function Castlist({datacast, isLoading}) {

    if (isLoading == true) {
        return (
            <Spinner isLoading={isLoading} />
          )
    }
    else {
        return (
            <View style={styles.containerview}>
                
             <FlatList style={[ isLoading == true ? { display: 'none' } 
              : { display: 'flex' }]}
                data={ datacast }
                keyExtractor = {(movies) => movies.id}
                renderItem={({ item, index }) => {
        
                  return (
                    <TouchableOpacity>
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
                                    source={{uri: 'https://image.tmdb.org/t/p/w500' + item.profile_path}}
                                />

                                <View style={{padding:5}}>
                                <Text style={[ {fontWeight:'bold', fontSize:12}]}>{item.name}</Text>
<Text style={[{ fontSize:12}]}>{item.character}</Text>
                                </View>


                     
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
        height: 170,
        backgroundColor: "#FFF",
        marginVertical: 5,
        marginTop: 10,
        padding:0,
    },

    elv1: {
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        elevation: 3,
        shadowOpacity: 0.1,
    },

    image: {
        width: 100,
        height: 120 ,
    },

    header: {
        fontWeight: "bold",
    },
})