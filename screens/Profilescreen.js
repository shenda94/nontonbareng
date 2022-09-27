import { StyleSheet, Text, View, SafeAreaView, Alert, Button, Image, ImageBackground, ScrollView, Modal, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import banner from '../assets/profile1.jpg'
import Card  from '../components/Card'
import { globalStyles } from '../styles/Globalstyle'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Listfavwatchlist from '../components/Listfavwatchlist'
import FormScreen from './FormScreen'
import { openDatabase } from "expo-sqlite";
const db = openDatabase("use.db");

const Profilescreen = ({navigation}) => {
  const uri1 = "mywatchlist";
  const uri2 = "myfavlist";

  const judul1 = "My Watchlist";
  const judul2 = "My Fav Movies";

  const nmtable1 = "t_watchlist";
  const nmtable2 = "tfav";

  const [modalOpen, setModalOpen] = useState(false);
  const [arrayItems,setArrayItems] = useState([{'fullname':'merna','nohp':'0895391858683','email': 'vamosespana@ymail.com','id':'1'}]);

  const [fullname,setfullname] = useState("");

  //alert(setArrayItems);

  //{'fullname':'merna','nohp':'0895391858683','email': 'vamosespana@ymail.com','id':'1'}

    const Updatedata = (review) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM tuser WHERE id=?",
          ["1"],
          (tx, results) => {
            var len = results.rows.length;

          //  alert(review.fullname);
            //alert(len);
            if (len > 0) {
            //  alert("0");
              update("1",review.fullname,review.nohp,review.email);
            } else {
              simpan("1",review.fullname,review.nohp,review.email);
            }
            
          }
        );
      });
        
        setModalOpen(false);
    }

    //id TEXT, fullname TEXT, email TEXT, nohp TEXT

    const update = (id,fullname,nohp,email) => {
   //   alert(fullname);
      db.transaction((tx) => {
        tx.executeSql(
          'UPDATE tuser set fullname=?, email=?, nohp=? where id=?',
          [fullname, email, nohp, id],
          (tx, results) => {
           // alert(results.rowsAffected);
            if (results.rowsAffected > 0) {
              alert("Update success");
              getdata(id);
            } else {
              alert('Updation Failed');
            }
          }
        );
      });
    }

    const simpan = (id,fullname,nohp,email) => {
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO tuser (id, fullname, email, nohp) VALUES (?,?,?,?)',
          [id, fullname, email, nohp],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              
              alert("Update success");
              getdata(id);
            } else alert('Save Failed');
          }
        );
      });

    }

    const getdata = (id) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM tuser where id=?',
          [id],
          (tx, results) => {
            var len = results.rows.length;
            var temp = [];
            if (len > 0) {
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
                setArrayItems(temp);
              }
            }
            else {
              var temp2 = [{'fullname':'merna','nohp':'0895391858683','email': 'vamosespana@ymail.com','id':'1'}];
              
              setArrayItems(temp2);
            }
           // alert(JSON.stringify(results.fullname));
         // setfullname(results.fullname);
            
            
              
          }
        );
      });
    }
   

    
    useEffect(() => {
     
      //alert(JSON.stringify(arrayItems));
  },[]);
   //
   getdata("1");
      
  // alert(fullname);

  return (
      <ScrollView>
          <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
              <ImageBackground
                  source={ require("../assets/bgorange.jpg") }
                  resizeMode="cover"
                  style={ globalStyles.backImage} >
                <View style={styles.header}>
                    <Image source={banner} style={styles.image}></Image>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textstyle}>{arrayItems[0].fullname}</Text>
                    <TouchableOpacity style={styles.appButtonContainer} onPress={() => setModalOpen(true)}>
              <AntDesign
              name="edit"
              color="#000"
              size={25}
              style={styles.appButton}
              >
              </AntDesign>
          </TouchableOpacity>
                    </View>
                </View>
              </ImageBackground>

              <Modal
                    visible={ modalOpen }
                    style={{}}
                >

                    <View style={ globalStyles.modalContent }>

                        <MaterialIcons 
                            name="close"
                            size={ 24 }
                            onPress={() => setModalOpen(false)}
                            style={ globalStyles.modalToggle }
                        />

                        <Text style={ globalStyles.titleText }>
                            Update Data Profile
                        </Text>

                        {/* Form input data review */}
                        <FormScreen Updatedata={Updatedata} />

                    </View>

                </Modal>


              <View>
                <Card>
                    <View style={styles.view1}>
                      <Text style={styles.textstyle}><AntDesign name="mail" color="#000" size={30} /> {arrayItems[0].email}</Text>
                      <Text style={styles.textstyle}><AntDesign name="phone" color="#000" size={30} /> {arrayItems[0].nohp}</Text>
                    </View>
                </Card>

                <Card>
                <Listfavwatchlist navigation={navigation} uri={uri1} judul={judul1} nmtable={nmtable1} />
                </Card>

                <Card>
                <Listfavwatchlist navigation={navigation} uri={uri1} judul={judul2} nmtable={nmtable2} />
                </Card>

              </View>
            </View>
          </SafeAreaView>
      </ScrollView>
    
  )
}

export default Profilescreen

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  container: {
    flex: 1
  },
  header: {
    flexDirection:'column', alignItems:'center', margin:10, width:'auto',height:170, borderRadius:8, padding:15
  },
  image: {
    width:100, height:100, borderRadius:45, marginRight:20
  },
  textstyle: {
    fontSize:20, fontWeight:'bold'
  },
  view1: {
    marginTop: 10
  },
  appButtonContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginLeft:10,
  },
})