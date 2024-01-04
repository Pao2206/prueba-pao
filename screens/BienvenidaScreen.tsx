import {Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BienvenidaScreen({navigation}:any) {
  return (
    <ImageBackground
      source={{uri: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
      style={styles.container}>
        <Text style={{color:'black', fontSize:50}}>Paola Tamayo</Text>
        <Button title="ACCEDER" onPress={()=>navigation.navigate('Tab')}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        resizeMode:'cover'
    }
});
