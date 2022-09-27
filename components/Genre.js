import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useEffect} from 'react'
import listdata from '../hook/Genredata'
import { globalStyles } from '../styles/Globalstyle'
const colors= [
    '#994F14','#DA291C','#FFCD00','#007A33','#EB9CA8', '#7C878E',
    '#8A004F','#000000','#10069F','#00a3e0','#4CC1A1'
]

export default function Genre({navigation}) {
    const [{data, loading, error}, carigenre] = listdata();

    useEffect(() => {
        //alert(useRestaurant());
        carigenre();
    },[]);

    return (
        <View style={{marginTop:10}}>
            <FlatList 
                    data={ data }
                    keyExtractor = {(movies) => movies.id}
                    horizontal={true}
        showsHorizontalScrollIndicator={false}
                    renderItem={ ({ item, index }) => (

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Cari", {
                                itemID: item.id,
                                itemTitle: item.name,
                            })}
                        >

<View style={ [globalStyles.card , {backgroundColor:colors[index%colors.length]}]}>
            <View style={ globalStyles.cardContent }>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:10, width:'auto',height:75, borderRadius:8, padding:5}}>
          <Text style={styles.genretext}>{ item.name }</Text>
          </View>
            </View>
        </View>
                            
                        </TouchableOpacity>

                    ) }
                />
        </View>
    );

    //alert({data:data});
}

const styles = StyleSheet.create({
    genretext : {
        color: '#fff'
    },
    style1 :{
        
    }
    
})