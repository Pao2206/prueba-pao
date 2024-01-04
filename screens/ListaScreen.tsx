import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { onValue, ref } from 'firebase/database'
import { db } from '../config/Config'

export default function ListaScreen() {

  const [datos, setDatos] = useState([])

  useEffect(() => {
    function leer(){
      const starCountRef = ref(db, 'usuarios/');
      onValue(starCountRef, (snapshot)=>{
        const data = snapshot.val();

        const dataTemp: any = Object.keys(data).map((key)=>({
          key, ...data[key]
        }))

        setDatos(dataTemp)
        
      });
    }
    leer()
  }, [])
  
  

  return (
    <View>
      <Text>Registros Almacenados</Text>
     <FlatList
     data={datos}
     renderItem={({item})=>(
      <View>
        
      </View>
     )}
     />
    </View>
  )
}

const styles = StyleSheet.create({})