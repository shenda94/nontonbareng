import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import Homes from './screens/Homescreens'
import Detail from './screens/Detailmoviescreen'
import Cari from './screens/Carimoviescreen'
import Profil from './screens/Profilescreen'
import keluar from './screens/Keluar'
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
 
const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
 
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
 
const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
 //alert(routeName);
  switch (routeName) {
    case 'HomeScreen':
      return ' Home';
    case 'profile':
      return ' Profile';
    case 'Hometab':
      return ' Home';
    case 'Feed':
      return ' Home';
  }
};

function Keluarstackscreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="keluar" component={keluar} Title="Logout" screenOptions={{headerShown:true}} />
    </Stack.Navigator>
  );
}
 
const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown:false, tabBarStyle: {
      backgroundColor:'#f4511e', color: '#fff'
    }}}>
      <Tab.Screen name="Hometab" component={Homes} Title="Orange Box" screenOptions={{headerShown:false}}
          options={{
            color:'#fff',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color="#fff" size={26} />
          ),
        }}
        />
        <Tab.Screen name="profile" component={Profil}
        options={{
          color:'#fff',
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color="#fff" size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
};
 
const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
      <HomeStack.Screen name="Detail" component={Detail} 
      options={({route}) => ({
          headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
       />
      <HomeStack.Screen name="Cari" component={Cari} screenOptions={{headerShown:false}} options={{
        headerTitle: 'Cari Movies',
        headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },}} />
    </Stack.Navigator>
  );
};
 
const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Setting', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
 
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator

screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerStyle: {
            backgroundColor: '#ffb347',
          },
          headerTitleAlign: "center",
          drawerLabelStyle: {
            color:'#000',
          },
          headerShown:false
          
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'Home'}}
          component={HomeScreenStack}
        />
        <Drawer.Screen name="Keluar" component={Keluarstackscreen}  />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
 
export default App;