import React from 'react';;
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import Detalhes from './src/components/Detalhes';
import Produtos from './src/components/Produtos';
import Ionicons from "react-native-vector-icons/Ionicons";

import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Produtos' component={Produtos}/>
        <Drawer.Screen name='Detalhes' component={Detalhes}/>
      </Drawer.Navigator>
    </NavigationContainer>

    )
}

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StatusBar/>
//       <Tab.Navigator initialRouteName="Home" screenOptions={({route})=>({
//         tabBarIcon: ({color, size}) => {
//           let iconName;

//           switch(route.name){
//             case "Home":
//               iconName = 'home';
//               break;
//             case "Produtos":
//               iconName = "list";
//               break;
//             case "Detalhes":
//               iconName = "grid";
//               break;
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: "tomato",
//         inactiveTintColor: "gray",
//       }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen}/>
//         <Tab.Screen name="Produtos" component={Produtos}/>
//         <Tab.Screen name="Detalhes" component={Detalhes}/>
//       </Tab.Navigator>
//     </NavigationContainer>

//   );}
    


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:'center',
  },
})