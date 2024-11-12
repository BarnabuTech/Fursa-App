import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

const logoImage = require("../../assets/images/fursa-logo.png");


const RegisterScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://192.168.93.155:5001/register", {
        name: username,
        email,
        password,
      });

      if (response.data.status === "ok") {
        Alert.alert("Registration successful", response.data.data);
        router.push("/auth/login");
      } else {
        Alert.alert("Registration failed", response.data.data);
      }
    } catch (error) {
      Alert.alert("An error occurred", "Unable to register");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
      <Text
        style={styles.link}
        onPress={() => router.push("/auth/login")}
      >
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  link: {
    color: "blue",
    marginTop: 15,
    textAlign: "center",
  },
});

export default RegisterScreen;

