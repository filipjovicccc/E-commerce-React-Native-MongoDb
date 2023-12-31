import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable} from 'react-native'
import React, {useEffect, useState} from 'react'
import {MaterialIcons} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Alert } from 'react-native';


const LoginScreen = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);
  const handleLogin = () => {
    const user ={
      email: email,
      password: password
    }
    axios.post("http://192.168.1.2:8081/login", user).then((response)=>{
      console.log(response);
      const token = response.data.token;
      AsyncStorage.setItem("authToken", token)
      navigation.replace("Main")
    }).catch((error)=> {
      Alert.alert("Login Error", "Invalid Email")
      console.log(error)
    })
  }

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
          <Text style={{fontSize: 17, fontWeight:"bold", marginTop:12, color: "#041E42"}}>Login In to your Account</Text>
        </View>
        <View style={{marginTop: 70}}>
        <View style={{
                      flexDirection: "row", 
                      alignItems: "center",
                      gap:5,
                      backgroundColor: "#D0D0D0",
                      paddingVertical: 5,
                      borderRadius: 5,
                      marginTop: 30,
                       }}>

         <MaterialIcons 
             style={{marginLeft: 8}}
             name="email" 
             size={24} 
             color="gray"/> 

            <TextInput
               style={{color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16}}
               placeholder="enter your Email"
               value={email}
               onChangeText={(text) => setEmail(text)}
              />
           </View>
          </View>
       
       <View style={{marginTop: 10}}>
        <View style=
        {{flexDirection:"row", 
           alignItems:"center", 
           gap:5, 
           backgroundColor: "#D0D0D0",
           paddingVertical:5, 
           borderRadius:5, 
           marginTop:30}}>
            <AntDesign name="mail" size={24} color="gray" style={{marginLeft: 8}}/>
            <TextInput
              value={password}
              secureTextEntry={true}
              style={{color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16} }
              placeholder="enter your Password"
              onChangeText={(text)=> setPassword(text)}
             />
         </View>
         </View>
         <View style={{marginTop:12, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
             <Text>Keep me logged in</Text>
             <Text style={{color:"#007FFF", fontWeight:"500"}}>Forgot Password</Text>
       </View>

       <View style={{marginTop:80}}/>
      
      <Pressable
               onPress={handleLogin}
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
    }}>Login</Text>
       </Pressable>
       <Pressable onPress={() => navigation.navigate("Register")} style={{marginTop: 15}}>
           <Text
             style={{textAlign: "center", color: "gray", fontSize:16}}>Don't have an account? Sign Up</Text>
       </Pressable>
     </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})