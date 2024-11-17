import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";

const logoImage = require("../../assets/images/fursa-logo.png");

const Login: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    try {
      console.log("Attempting login with:", email, password); 
      const response = await axios.post("http://*********/login-user", { email, password });

      console.log("Response from server:", response.data); 
      if (response.data.status === "ok") {
        await AsyncStorage.setItem("user_token", response.data.data);
        Alert.alert("Success", "Login successful!");
        router.replace("/(tabs)/");
      } else {
        Alert.alert("Login Failed", response.data.message || "Unknown error.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Backend responded with error:", error.response?.data);
        Alert.alert("Login Failed", error.response?.data?.message || "Server error.");
      } else if (error instanceof Error) {
        console.error("Unexpected error:", error.message);
        Alert.alert("Error", "An unexpected error occurred. Please try again.");
      } else {
        console.error("Unknown error type:", error);
        Alert.alert("Error", "An unknown error occurred.");
      }
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Login</Text>
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
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
    alignSelf: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  darkText: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  darkInput: {
    backgroundColor: "#444",
    color: "#fff",
    borderColor: "#555",
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
