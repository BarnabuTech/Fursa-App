import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function ProfileScreen() {
  const { isDarkMode } = useTheme();
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Profile</Text>
      
      <Text style={[styles.label, isDarkMode && styles.darkText]}>Name</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Enter your name"
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={name}
        onChangeText={setName}
      />

      <Text style={[styles.label, isDarkMode && styles.darkText]}>Skills</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Enter your skills (e.g., JavaScript, Design)"
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={skills}
        onChangeText={setSkills}
      />

      <Text style={[styles.label, isDarkMode && styles.darkText]}>Bio</Text>
      <TextInput
        style={[styles.input, styles.bioInput, isDarkMode && styles.darkInput]}
        placeholder="Write a short bio"
        placeholderTextColor={isDarkMode ? "#ccc" : "#888"}
        value={bio}
        onChangeText={setBio}
        multiline
      />

      <Button title="Save Profile" onPress={() => alert("Profile saved!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  darkContainer: { backgroundColor: "#333" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  darkText: { color: "#fff" },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  input: { borderColor: "#ddd", borderWidth: 1, padding: 10, borderRadius: 5, marginTop: 5 },
  darkInput: { backgroundColor: "#444", color: "#fff", borderColor: "#555" },
  bioInput: { height: 80, textAlignVertical: "top" },
});

