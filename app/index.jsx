import {StatusBar } from 'expo-status-bar';
import React from 'react'
import {View, Text } from 'react-native';
import {Link} from "expo-router";


export default function App(){
  return(
    <View className="flex-1  justify-center items-center bg-white">
    <Text className="text-3xl font-pextrabold">Aora!</Text>
    <StatusBar style="auto"/>
    <Link href="/home" style={{color:"blue"}}>Go to home</Link>
    </View>
  )
}

