import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Spinner from './Spinner'
import { AntDesign } from '@expo/vector-icons';
import getCastmovies from '../hook/Castmovies';
import Castlist from './Castlist';
import saving from '../hook/savedata';
import swal from 'sweetalert2';
import { openDatabase } from "expo-sqlite";
const db = openDatabase("Moviedb.db");

export default function Detaildata({data, navigation, isLoading}) {

    if (isLoading == true) {
        return (
            <Spinner isLoading={isLoading} />
          )
    }
    else {

        var myloop = [];
        var data1 = "";

for (let i = 0; i < data.genres.length; i++) {
    data1 = data1 + data.genres[i].name + ",";
}
myloop.push(data1);

const [{datacast, loadingcast, error}, Castmovies] = getCastmovies();
const [isLoadingcast, setLoadingcast] = useState(true);

const [isLoadingsimpan, setLoadingsimpan] = useState(true);
const [{datasimpan, laodingsave, error2}, savedata] = saving();
const [colorfav, setColor] = useState("");
const [colorwatch, setColorw] = useState("");

  const onSubmitFav = async (event) => {
    const movie_id = data.id;
    const title_id = data.original_title;
    const poster_path = data.poster_path;
    const uri2 = "savefav";

    if (movie_id == "" || title_id == "" || poster_path == "") {
      alert("Movie tidak ditemukan");
      return;
    }
    setLoadingsimpan(true);
    try {
        //alert("0");
        savedata(navigation, movie_id, title_id, poster_path, uri2);
        //alert(datasimpan.pesan);
        swal.fire({  
            icon: datasimpan.status,  
            title: 'Informasi...',  
            text: datasimpan.pesan  
          });
       // alert(datasimpan);
    } catch (error) {
      //alert("An error has occurred");
      //setIsLoading(false);
    }
  };

  const onSubmitWatchlist = async (event) => {
    const movie_id = data.id;
    const title_id = data.original_title;
    const poster_path = data.poster_path;
    const uri2 = "savewatchlist";
    //alert(uri2);

    if (movie_id == "" || title_id == "" || poster_path == "") {
      alert("Movie tidak ditemukan");
      return;
    }
    setLoadingsimpan(true);
    try {
        //alert(uri2);
        savedata(navigation, movie_id, title_id, poster_path, uri2);
        //alert(datasimpan.pesan);
        swal.fire({  
            icon: datasimpan.status,  
            title: 'Informasi...',  
            text: datasimpan.pesan  
          });
        //alert(datasimpan);
    } catch (error) {
      //alert("An error has occurred");
      //setIsLoading(false);
    }
  };

useEffect(() => {
  setColor('white');
  setColorw('white');

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM tfav WHERE id=?",
      [data.id],
      (tx, results) => {
        var len = results.rows.length;
       //alert("0");
        if (len > 0) {
            setColor('#C21010');
        } else {
           setColor('white');
        }
       // console.log('len', len);
      }
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM t_watchlist WHERE id=?",
      [data.id],
      (tx, results) => {

        var len = results.rows.length;
       
        if (len > 0) {
            setColorw('#1CD6CE');
        } else {
           setColorw('white');
        }

        //alert(buttonfav);
      }
    );
  });


    setLoadingcast(true);
    Castmovies(data.id);
    setLoadingcast(loadingcast);

    

},[]);

        return (
            <ScrollView>
                 <View style={styles.containerview}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={{uri: 'https://image.tmdb.org/t/p/w500' + data.poster_path}} style={styles.image}></Image>
                        
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.textstyle}>{ data.original_title }</Text>
                            <Text style={styles.textstyle2}>{ data.status }</Text>
                            <Text style={styles.textstyle2}>{String(data.release_date).split('-')[0]}</Text>
                            <Text style={styles.textstyle3}>{myloop}</Text>
                            <View style={{flexDirection:'row', marginTop:10,}}>
                                <TouchableOpacity style={styles.appButtonContainer} onPress={onSubmitWatchlist}>
                                    <AntDesign
                                    name="book"
                                    color={colorwatch}
                                    size={25}
                                    style={styles.appButton}
                                    >
                                    </AntDesign>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.appButtonContainer} onPress={onSubmitFav}>
              <AntDesign
              name="heart"
              color={colorfav}
              size={25}
              style={styles.appButton}
              >
              </AntDesign>
          </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    

                    <View style={{flexDirection:'column', width:'95%',marginTop:60,}}>
                        <Text style={[styles.textstyle2, {fontWeight:'bold', fontSize:28}]}>Overview</Text>
                        <Text style={styles.textstyle1}>{ data.overview }</Text>
                    </View>

                    <View style={{flexDirection:'column', width:'95%',marginTop:20,}}>
                        <Text style={[styles.textstyle2, {fontWeight:'bold', fontSize:28}]}>Cast</Text>
                       <Castlist datacast={datacast} isLoading={loadingcast}></Castlist>
                    </View>

                </View>

            </View>
            </ScrollView>

           
          )
    }
}

const styles = StyleSheet.create({
    containerview: {
        paddingLeft: 5,
        paddingTop: 5,
    },
    container: {
        
    },
    header: {
        flexDirection:'row', alignItems:'flex-start', width:'auto',height:170, borderRadius:8, 
      },
    image: {
        width:150, height:220,  marginRight:20
    },
    textstyle: {
        fontSize:25, fontWeight:'bold', color:'#fff',
        textAlign: 'justify',width:'60%'
    },
    textstyle1: {
        fontSize:15, color:'#fff', 
        textAlign: 'justify',
        flexWrap: 'wrap'
    },

    textstyle2: {
        fontSize:18, color:'#fff'
    },
    textstyle3: {
        fontSize:16, color:'#fff',width:'70%'
    },
    appButton: {
        padding: 12,
      },
    
      appButtonContainer: {
        backgroundColor: '#000',
        paddingVertical: 0,
        paddingHorizontal: 0,
        marginRight:10,
        borderRadius:50
      },
})