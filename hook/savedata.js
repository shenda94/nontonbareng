import { useState } from "react";
import axios from "axios";
import { AsyncStorage, Alert } from "react-native";
import { openDatabase } from "expo-sqlite";
const db = openDatabase("Moviedb.db");
//const db = openDatabase({ name: 'Moviedb.db' });

export default () => {
    const [results, setResults] = useState({
        datasimpan:null,
        loading:true,
        error:null,
    });

     // Check if the items table exists if not create it
     db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS t_watchlist (id TEXT, tittle TEXT, poster_path TEXT, userid INT)'
      )
    })

    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tfav (id TEXT, tittle TEXT, poster_path TEXT, userid INT)'
      )
    })

    const savedata = async (navigation, movie_id, title_id, poster, uri) => {
        const loadingx = true;

        setResults({
            datasimpan:null,
            loading:loadingx,
            error:null,
        });

        try {
          if (uri == "savewatchlist") {
            db.transaction((tx) => {
              tx.executeSql(
                "SELECT * FROM t_watchlist WHERE id=?",
                [movie_id],
                (tx, results) => {
        
                  var len = results.rows.length;
                 
                  if (len > 0) {
                    deletedata(movie_id,"t_watchlist",navigation);
                  } else {
                    simpanwatch(navigation,movie_id,title_id,poster);
                  }
        
                }
              );
            });
              
          }

          if (uri == "savefav") {
            db.transaction((tx) => {
              tx.executeSql(
                "SELECT * FROM tfav WHERE id=?",
                [movie_id],
                (tx, results) => {
                  var len = results.rows.length;
                  if (len > 0) {
                    
                    deletedata(movie_id,"tfav",navigation);
                  } else {
                    simpanfav(navigation,movie_id,title_id,poster);
                  }
                }
              );
            });
             
 
           }

            /*const formData = new FormData();
            formData.append('movie_id', movie_id);
            formData.append('title', title_id);
            formData.append('poster', poster);
            
            
      axios({
        method: "post",
        url: "https://apimoviestest.000webhostapp.com/Apimovies/" + uri,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
         // alert(JSON.stringify(response.data));
          //var jsondata = JSON.stringify(response.data);
          setResults({
            datasimpan:response.data,
            loading:false,
            error:null,
        });
          
          
          //handle success
          //alert(JSON.stringify(response.data));
          //console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });*/

        } catch (error) {
            alert(error);
            setResults({
                datasimpan:null,
                loading:false,
                error: "Gagal Fetch data",
            });
        }
    }

    const simpanfav = (navigation, movie_id, title_id, poster) => {
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO tfav (id, tittle, userid, poster_path) VALUES (?,?,?,?)',
          [movie_id, title_id, "1", poster],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Berhasil simpan data',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('profile'),
                  },
                ],
                { cancelable: false }
              );
            } else alert('Save Failed');
          }
        );
      });

    }

    const simpanwatch = (navigation, movie_id, title_id, poster) => {
      
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO t_watchlist (id, tittle, userid, poster_path) VALUES (?,?,?,?)',
          [movie_id, title_id, "1", poster],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Berhasil simpan data',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('profile'),
                  },
                ],
                { cancelable: false }
              );
            } else alert('Save Failed');
          }
        );
      });
    }

    const deletedata = (movie_id,table, navigation) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM  '+table+' where id=?',
          [movie_id],
          (tx, results) => {
            //console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'Remove successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('profile'),
                  },
                ],
                { cancelable: false }
              );
            } else {
              alert('Please insert a valid Movie Id');
            }
          }
        );
      });
    }

    return [results,savedata];
}