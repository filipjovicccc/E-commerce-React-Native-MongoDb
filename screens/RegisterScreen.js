import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable} from 'react-native'
import React, {useState} from 'react'
import {MaterialIcons} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons"
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native';

import axios from 'axios'

const RegisterScreen = () => {

  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
  const user ={
    name:name,
    email:email,
    password:password
  };

  axios.post("http://192.168.1.2:8081/register", user).then((response)=> {

    console.log(response)
    Alert.alert("Registered successfull", "You have registered successfully");
    console.log("registration failed", error)

    setName("");
    setPassword("");
    setEmail("");
  }).catch((error)=> {
    Alert.alert("Registration Error", "an error occured during registration")
  })
  
   ;

 };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"white", alignItems:"center"}}>
    <View>
       <Image style={{width: 150, height: 100}}
       source={{
           uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png"
       }}/>

    </View>
    <KeyboardAvoidingView>
       <View style={{alignItems: "center"}}>
         <Text style={{fontSize: 17, fontWeight:"bold", marginTop:12, color: "#041E42"}}>Register to your Account</Text>
       </View>
       <View style={{marginTop: 70}}>
         <View>
         <View style=
       {{flexDirection:"row", 
          alignItems:"center", 
          gap:5, 
          backgroundColor: "#D0D0D0",
          paddingVertical:5, 
          borderRadius:5, 
          marginTop:30}}>
             <AntDesign name="lock1" size={24} color="gray" style={{marginLeft: 8}}/>
           <TextInput
             value={name}
             style={{color: "gray", marginVertical: 10, width: 300, fontSize: name ? 16 : 16} }
             placeholder="enter your Name"
             onChangeText={(text)=> setName(text)}
            />
        </View>
         </View>
       <View style=
       {{flexDirection:"row", 
          alignItems:"center", 
          gap:5, 
          backgroundColor: "#D0D0D0",
          paddingVertical:5, 
          borderRadius:5, 
          marginTop:30}}>
         <MaterialIcons 

            style={{marginLeft: 8}}
            name="email" 
            size={24} 
            color="gray"/> 
           <TextInput

             value={email}
             style={{color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16} }
             placeholder="enter your Email"
             onChangeText={(text)=> setEmail(text)}
            />
        </View>
        </View>
         <View>
          <View style={{
                     flexDirection: "row", 
                     alignItems: "center",
                     gap:5,
                     backgroundColor: "#D0D0D0",
                     paddingVertical: 5,
                     borderRadius: 5,
                     marginTop: 30,
                      }}>
           <Ionicons name="ios-person" size={24} color="gray"/>
           <TextInput
              style={{color: "gray", marginVertical: 10, width: 300, fontSize: password ? 16 : 16}}
              placeholder="enter your Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
             />
          </View>
       </View>
      
        <View style={{marginTop:12, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <Text>Keep me logged in</Text>
            <Text style={{color:"#007FFF", fontWeight:"500"}}>Forgot Password</Text>
      </View>


      <View style={{marginTop:80}}/>
     
     <Pressable 
              onPress={handleRegister}
              style={{width:200,
              backgroundColor:"#FEBE10",
              borderRadius:6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15
     }}>
          <Text style={{
             color:"white",
             fontWeight:"bold",
             textAlign:"center",
             fontSize: 16,
   }}>Register</Text>
      </Pressable>
      <Pressable onPress={() => navigation.goBack()} style={{marginTop: 15}}>
          <Text
            style={{textAlign: "center", color: "gray", fontSize:16}}>Already have and account? Sign In</Text>
      </Pressable>
    </KeyboardAvoidingView>
   </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})