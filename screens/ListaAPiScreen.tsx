import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function ListaAPiScreen() {

  const [datos, setDatos] = useState([]);

  const API_LAPTOPS = 'https://jritsqmet.github.io/web-api/laptop.json'

  useEffect(() => {

    fetch(API_LAPTOPS)
      .then((response) => response.json())
      .then((data) => setDatos(data.laptops))
      .catch((error) => console.log(error));
      
  }, []);

  type lista={
    modelo: string,
    marca: string,
    almacenamiento: string,
    precio: string,
    
  }

  return (
    <View>
      <Text>LISTA LAPTOPS</Text>
      <FlatList
        data={datos}
        renderItem={({ item }: {item:lista}) => (
          <View>
            <View style={{borderWidth:1, width:'100%', marginTop:10}}/>
            <Text>Modelo: {item.modelo}</Text>
            <Text>Marca: {item.marca}</Text>
            <Text>Almacenamiento: {item.almacenamiento}</Text>
            <Text>Precio: {item.precio}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
