import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput} from 'react-native'
import React from 'react'
import {MaterialIcons} from "@expo/vector-icons"
import {AntDesign} from "@expo/vector-icons"

const LoginScreen = () => {

  const [email, setEmail]= useState("")
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
       
        </View>
        <View style={{marginTop: 30}}>

        <View style={{flexDirection:"row", alignItems:"center", gap:5, backgroundColor: "#D0D0D0", paddingVertical:5, borderRadius:5, marginTop:30}}>
           {/* <MaterialIcons style={{marginLeft: 8}} name="email" size={24} color="gray"/> */}

           <AntDesign name="mail" size={24} color="gray" style={{marginLeft: 8}}/>

           <TextInput 
           value={email}
            onChangeText={(text)=> setEmail(text)}
             placeholder={'enter your email'} 
              style={{color:"gray", marginVertical:10, width:300}} />
        </View>

        </View>
     </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})