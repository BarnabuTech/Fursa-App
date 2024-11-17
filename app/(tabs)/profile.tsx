import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView 
} from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  const saveProfile = () => {
   
    alert("Profile saved locally (no backend integration).");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>Edit Your Profile</Text>
          
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Skills</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your skills (e.g., JavaScript, Design)"
            placeholderTextColor="#888"
            value={skills}
            onChangeText={setSkills}
          />

          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            placeholder="Write a short bio"
            placeholderTextColor="#888"
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
  header: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center" 
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
  bioInput: { 
    height: 80, 
    textAlignVertical: "top" 
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
