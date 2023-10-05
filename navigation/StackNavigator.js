import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import {Entypo} from "@expo/vector-icons"

const StackNavigator = () => {

    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()
    function BottomTabs(){
      return(
        <Tab.Navigator>
          <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: {color:"#008E97"},
            headerShown:false,
            tabBarIcon:({focused}) => {
                focused ? (
                 
                ) : (

                )
            }
          }}
          />
        </Tab.Navigator>
      )
    }
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})