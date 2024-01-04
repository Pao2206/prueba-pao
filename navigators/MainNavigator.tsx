import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import RegistrosScreen from "../screens/RegistrosScreen";
import ListaScreen from "../screens/ListaScreen";
import EdicionScreen from "../screens/EdicionScreen";
import ListaAPiScreen from "../screens/ListaAPiScreen";
import BienvenidaScreen from "../screens/BienvenidaScreen";
import { MaterialIcons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Registro"
        component={RegistrosScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="archive" size={24} color={"indigo"} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista"
        component={ListaScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="list" size={24} color={"indigo"} />
          ),
        }}
      />
      <Tab.Screen
        name="Edición"
        component={EdicionScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="edit" size={24} color={"indigo"} />
          ),
        }}
      />
      <Tab.Screen
        name="Información API"
        component={ListaAPiScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="info" size={24} color={"indigo"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bienvenida" component={BienvenidaScreen} />
      <Stack.Screen name="Tab" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
