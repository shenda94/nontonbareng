import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useEffect} from 'react'
import listdata from '../hook/Searchmovies'

export default function Listmovies({navigation, genre, search}) {
    const [{data, loading, error}, searchmovies] = listdata();
    const searchx = search;

    useEffect(() => {
        searchmovies(searchx);
    },[]);

    return (
        <FlatList 
                    data={ data }
                    keyExtractor = {(movies) => movies.id}
                    renderItem={ ({ item }) => (
                        

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Detail", {
                                itemID: item.id,
                                itemTitle: item.original_title,
                                itemBody: item.overview,
                                itempopularity: item.popularity,
                            })}
                        >
                           <View style={{borderColor: "black",
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#FFF",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,}}>
                           <View style={{flexDirection:'row', alignItems:'center', marginTop:0, width:'auto',height:100, borderRadius:8}}>
          <Image source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}} style={{width:100, height:100, marginRight:20}}></Image>
          <View>
          <Text style={styles.text1}>{ item.original_title }</Text>

          <Text>{ String(item.release_date).split('-')[0] }</Text>
          </View>
          </View>
                           </View>
                            
                        </TouchableOpacity>

                    ) }
                />
    );

    //alert({data:data});
}

const styles = StyleSheet.create({
    text1: {
        fontWeight:'bold'
    }
})