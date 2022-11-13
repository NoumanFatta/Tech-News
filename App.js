import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Header ,ScrollView , Route, Router} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "./screens/SearchScreen";
import { Entypo,FontAwesome } from '@expo/vector-icons';
import { AlanView } from '@alan-ai/alan-sdk-react-native';
import React, { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

        <NavigationContainer styles = {style.container}>
        
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "Blue"
            }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: () =><FontAwesome name="home" size={24} color="#1c70c8"/>
                }}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: () =><FontAwesome name="search" size={24} color="#1c70c8" />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>


  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55AAff',
  },
});
