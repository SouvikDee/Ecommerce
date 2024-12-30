import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const cors = require('cors');
  const handleRegister = ()=>{
  
    const user = {
      name: name,
      email: email,
      password: password,
    };
  
    //send a post req to backend api

    // axios.post("http://172.20.80.1:8000/register", user)
    // .then((response) => {
    //   console.log(response);
    //   Alert.alert("Registration successful", "You have been registered successfully");
    //   setName("");
    //   setEmail("");
    //   setPassword("");
    // })
    // .catch((error) => {
    //   console.error("Error details:", error.toJSON());
    //   Alert.alert("Registration failed", "An error occurred while registering");
    //  setName("");
    //   setEmail("");
    //   setPassword("");
    // });
  

    
    axios.post("http://172.20.80.1:8000/register", user)
    .then((response) => {console.log(response);
      Alert.alert(
        "Registration successful",
        "You have been registered Successfully"
      );
      setName("");
      setEmail("");
      setPassword("");
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Request data:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error message:", error.message);
      }
      Alert.alert(
        "Registration Error",
        "An error occurred while registering"
      );
  
      console.log("registration failed", error);
    });

    
    // res.setHeader('Access-Control-Allow-Origin', '*');

  //   axios.post("http://localhost:8000/register",user).then((response) => {
  //     console.log(response);
  //     Alert.alert("Registration successful","You have been registered successfully");
  //     setName("");
  //     setEmail("");
  //     setPassword("");
  // }).catch((error) => {
  //     Alert.alert("Registration failed","An error occurred while registering");
  //     console.log("registration failed",error)
  // }); 
  };
  
  return (
   <GestureHandlerRootView>
         <SafeAreaView
           style={{
             flex: 1,
             backgroundColor: "white",
             alignItems: "center",
             marginTop: 50,
           }}
         >
           <View>
             <Image
               style={{ width: 150, height: 100 }}
               source={{
                 uri: "https://assets.stickpng.com/thumbs/59bedb177a216d0b052f128a.png",
               }}
             />
           </View>
           <KeyboardAvoidingView>
             <View>
               <Text
                 style={{
                   fontSize: 20,
                   color: "black",
                   marginBottom: 10,
                   alignItems: "center",
                   alignContent: "center",
                   marginLeft: 55,
                 }}
               >
                 Register To Your Account{" "}
               </Text>
             </View>
             
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Ionicons
              name="person"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="enter your name"
            />
          </View>
             
             <View style={{ marginTop: 10 }}>
               <View
                 style={{
                   flexDirection: "row",
                   alignItems: "center",
                   gap: 5,
                   backgroundColor: "D0D0D0",
                   paddingVertical: 5,
                   borderRadius: 5,
                   marginTop: 10,
                 }}
               >
                 <MaterialIcons
                   style={{ marginLeft: 8 }}
                   name="email"
                   size={24}
                   color="grey"
                 />
                 <TextInput
                   value={email}
                   onChangeText={(text) => setEmail(text)}
                   style={{
                     color: "grey",
                     marginVertical: 10,
                     width: 300,
                     fontSize: email ? 18 : 18,
                   }}
                   placeholder="Enter Your Email"
                 />
               </View>
             </View>
             <View style={{ marginTop: 10 }}>
               <View
                 style={{
                   flexDirection: "row",
                   alignItems: "center",
                   gap: 5,
                   backgroundColor: "D0D0D0",
                   paddingVertical: 5,
                   borderRadius: 5,
                   marginTop: 10,
                 }}
               >
                 <AntDesign
                   style={{ marginLeft: 8 }}
                   name="lock1"
                   size={24}
                   color="grey"
                 />
                 <TextInput
                   value={password}
                   onChangeText={(text) => setPassword(text)}
                   secureTextEntry={true}
                   style={{
                     color: "grey",
                     marginVertical: 10,
                     width: 300,
                     fontSize: password ? 16 : 16,
                   }}
                   placeholder="Enter Your Password"
                 />
               </View>
             </View>
             <View
               style={{
                 marginTop: 12,
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "space-between",
               }}
             >
               <Text>Keep me logged in</Text>
               <Text style={{ fontWeight: "500", color: "black" }}>

               </Text>
             </View>
             <View style={{ marginTop: 50 }}>
               <Pressable
               onPress={handleRegister}
                 style={{
                   width: 200,
                   backgroundColor: "yellow",
                   borderRadius: 6,
                   marginLeft: "auto",
                   marginRight: "auto",
                   padding: 15,
                 }}
               >
                   <Text style={{textAlign:'center',color:'black',fontSize:16,fontWeight:'bold'}}>Register</Text>
               </Pressable>
               <Pressable onPress={() => navigation.goBack()}
                style={{marginTop:15}}>
                   <Text style={{textAlign:"center",color:'gray',fonts:16, color:'black'}}> Already have an account? Sign In </Text>
               </Pressable>
             </View>
           </KeyboardAvoidingView>
         </SafeAreaView>
       </GestureHandlerRootView>
     );
  
}

export default RegisterScreen

const styles = StyleSheet.create({})