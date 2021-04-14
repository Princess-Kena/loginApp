import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import profile from './assets/ch.jpg'

export default function App() {
  return <View style ={styles.container}>
   <View style={styles.titleContainer} ><Text style={styles.title}>Edit Profile</Text></View>

    <Image source={profile} style={styles.image}/>

    
     <View style={ styles.details}>
     <Text style={styles.label}>School</Text>
     <Text style={styles.input}>The Lawrenceville School</Text>

     <Text style={styles.label}>Email Address</Text>
     <Text style={styles.input}>lawrenceville@gmail.com</Text>

     </View>
     <View style={ styles.subDetails}>
     <Text style={styles.labelTwo}>Name</Text>
     <Text style={styles.inputTwo}>Marlyse Bannomock</Text>

     <Text style={styles.labelTwo}>Nickname</Text>
     <Text style={styles.inputTwo}>Oboshie</Text>

     <Text style={styles.labelTwo}>Emergency number</Text>
     <Text style={styles.inputTwo}>0553662689</Text>
   </View>
   <View>
     <Button title="Update Profile" style={styles.button}/>
   </View>
  </View>
 
    
};
const styles = StyleSheet.create({
container :{
  flex:1,
  marginHorizontal: 50,
},
title :{
 textAlign: 'center',
 marginTop: 30,
 fontWeight:'normal',
 fontSize:18

  

},
titleContainer:{
  marginVertical:10
},
image:{
  width:170,
  height:170,
  marginBottom:10,
  alignSelf:'center',
  borderRadius:85,
marginTop:50,
},
details:{
  flexDirection:'column',
  marginVertical:3,
  
},
label:{
  color:"black",
  marginBottom:2,
  
  fontSize:15,
  paddingHorizontal:5,
},
input :{
  color: 'black',
  fontSize:20,
  marginBottom:10,
  
},
subDetails:{
  flexDirection:'column',
  marginVertical:3,
  marginBottom:20
  
},
labelTwo:{
color:'blue',
marginTop:10
},
inputTwo:{
color:'black',
fontSize:20,
borderBottomColor:'silver',
  borderBottomWidth:2,
marginTop:5,
marginBottom:5
},




})
