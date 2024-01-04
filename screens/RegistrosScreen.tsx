import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

import { db } from '../config/Config'
import { ref, set } from 'firebase/database'


export default function RegistrosScreen() {

const [id, setId] = useState('')
const [monto, setMonto] = useState('')
const [categoria, setCategoria] = useState('')
const [descripcion, setDescripcion] = useState('')

const [datos, setDatos] = useState([])

function guardar(id:string, monto:string, categoria: string, descripcion:string){
  set(ref(db, 'registro/' + id), {
    amount: monto,
    category: categoria,
    description: descripcion
  });

Alert.alert('Mensaje', 'Se agrego el gasto')
  
  }

  return (
    <View>
     <TextInput
     placeholder='Ingresar id'
     onChangeText={(texto)=>setId(texto)}
     />
     <TextInput
     placeholder='Ingresar monto'
     onChangeText={(texto)=>setMonto(texto)}
     />
     <TextInput
     placeholder='Ingresar Categoria'
     onChangeText={(texto)=>setCategoria(texto)}
     />
     <TextInput
     placeholder='Ingresar Descripcion'
     onChangeText={(texto)=>setDescripcion(texto)}
     />

     <Button title='GUARDAR' onPress={()=>guardar(id, monto, categoria, descripcion)}/>
    </View>
  )
  }

const styles = StyleSheet.create({})
