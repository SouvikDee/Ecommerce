import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  Pressable,
  TextInput,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
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
              Login to your Account{" "}
            </Text>
          </View>
          <View style={{ marginTop: 70 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
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
              Forgot Password
            </Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <Pressable
              style={{
                width: 200,
                backgroundColor: "yellow",
                borderRadius: 6,
                marginLeft: "auto",
                marginRight: "auto",
                padding: 15,
              }}
            >
                <Text style={{textAlign:'center',color:'black',fontSize:16,fontWeight:'bold'}}>Login</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")} style={{marginTop:15}}>
                <Text style={{textAlign:"center",color:'gray',fonts:16, color:'black'}}>Don't have an account? Sign up </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
