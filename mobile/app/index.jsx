import {Link} from "expo-router"; 
import { Text, View,StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export default function Index() {
  const {user, token,checkAuth,logout} = useAuthStore(); 

  console.log(user,token);
  
  useEffect(() =>{
    checkAuth();
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {user?.username}</Text>
      <Text style={styles.title}>Token {token}</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Image />
      <Link href="/(auth)/signup">Signup </Link>
      <Link href="/(auth)">Login </Link>
    </View>
  );
}

const styles =StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: "center", 
    "alignItems": "center", 
  },
  title:{
    color: "blue", 
  }
})