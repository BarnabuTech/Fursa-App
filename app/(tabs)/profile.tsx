import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import { useTheme } from "../context/ThemeContext";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const { isDarkMode } = useTheme();
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUri, setAvatarUri] = useState("https://via.placeholder.com/100");

  
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedName = await AsyncStorage.getItem('name');
        const savedSkills = await AsyncStorage.getItem('skills');
        const savedBio = await AsyncStorage.getItem('bio');
        const savedAvatarUri = await AsyncStorage.getItem('avatarUri');
        
        if (savedName) setName(savedName);
        if (savedSkills) setSkills(savedSkills);
        if (savedBio) setBio(savedBio);
        if (savedAvatarUri) setAvatarUri(savedAvatarUri);
      } catch (error) {
        console.log("Error loading profile:", error);
      }
    };
    loadProfile();
  }, []);

  
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access camera roll is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setAvatarUri(result.uri);
    }
  };

  
  const saveProfile = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('skills', skills);
      await AsyncStorage.setItem('bio', bio);
      await AsyncStorage.setItem('avatarUri', avatarUri);
      Alert.alert("Profile saved successfully!");
    } catch (error) {
      console.log("Error saving profile:", error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.container, isDarkMode && styles.darkContainer]}>
          <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
            <Image style={styles.avatar} source={{ uri: avatarUri }} />
            <Text style={styles.avatarText}>Tap to change avatar</Text>
          </TouchableOpacity>

          <Text style={[styles.header, isDarkMode && styles.darkText]}>Edit Your Profile</Text>
          
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

          <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
            <Text style={styles.saveButtonText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff" 
  },
  darkContainer: { 
    backgroundColor: "#333" 
  },
  header: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center" 
  },
  darkText: { 
    color: "#fff" 
  },
  label: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginTop: 10 
  },
  input: { 
    borderColor: "#ddd", 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 5, 
    marginTop: 5, 
    backgroundColor: "#fff" 
  },
  darkInput: { 
    backgroundColor: "#444", 
    color: "#fff", 
    borderColor: "#555" 
  },
  bioInput: { 
    height: 80, 
    textAlignVertical: "top" 
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eee",
  },
  avatarText: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: "#0A74DA",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});



