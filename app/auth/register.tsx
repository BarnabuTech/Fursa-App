import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import { useTheme } from "../context/ThemeContext"; 

const RegisterScreen = () => {
  const { isDarkMode } = useTheme(); 
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
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
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
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
  darkContainer: { backgroundColor: "#333" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  darkText: { color: "#fff" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 10, borderRadius: 5 },
  darkInput: { backgroundColor: "#444", color: "#fff", borderColor: "#555" },
  link: { color: "blue", marginTop: 15, textAlign: "center" },
  darkLink: { color: "#89CFF0" },
});

export default RegisterScreen;
