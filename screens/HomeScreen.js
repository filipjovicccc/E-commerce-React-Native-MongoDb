import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, Pressable } from 'react-native'
import React from 'react'
import {AntDesign} from "@expo/vector-icons"


export default function HomeScreen() {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS=== "android" ? 40 : 0,flex:1, backgroundColor:"white"}}>
      <Text>HomeScreen</Text>

      <ScrollView>
        <View>
          <Pressable>
              <AntDesign name="search1" size={24} color="black"/>

              <TextInput />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})