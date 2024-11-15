import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from "react-native";
import { useRouter } from "expo-router";
import axios, { AxiosError } from "axios";
import { useTheme } from "../context/ThemeContext";

const logoImage = require("../../assets/images/fursa-logo.png");

const RegisterScreen = () => {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
           
        const response = await axios.post("http://1******/register", {
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
        const err = error as AxiosError;
        if (err.response && err.response.status === 400) {
            Alert.alert("Registration failed", "User already exists!");
        } else {
            Alert.alert("An error occurred", "Unable to register");
            console.error("Error:", err);
        }
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Register</Text>

      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Username"
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
      <Text
        style={[styles.link, isDarkMode && styles.darkLink]}
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
  darkContainer: { backgroundColor: "#333" },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center",
  },
  darkText: { color: "#fff" },
  input: { 
    width: "100%", 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    marginVertical: 10, 
    borderRadius: 5,
  },
  darkInput: { backgroundColor: "#444", color: "#fff", borderColor: "#555" },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  link: { 
    color: "blue", 
    marginTop: 15, 
    textAlign: "center",
  },
  darkLink: { color: "#89CFF0" },
});

export default RegisterScreen;
