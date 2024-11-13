import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Switch } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useTheme } from "../context/ThemeContext";

const Settings: React.FC = () => {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    Alert.alert(
      "Logout?",
      "Are you sure you want to log out?",
      [

        { text: "Cancel", onPress: () => console.log("Logout cancelled"), style: "cancel" },
        { text: "Yes", onPress: () => router.replace("/auth/login") },

        {
          text: "Cancel",
          onPress: () => console.log("Logout cancelled"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("Logged out");
            router.replace("/auth/login"); 
          },
        },

      ],
      { cancelable: true }
    );
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.header, isDarkMode ? styles.darkText : styles.lightText]}>Settings</Text>
      <View style={styles.section}>
        
        
        <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
          <Icon name="user" size={24} color="#4caf50" />
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>Account</Text>
          <Icon name="angle-right" size={24} color="#999" style={styles.optionIcon} />
        </TouchableOpacity>
        
        
        <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </TouchableOpacity>

      
        <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
          <Icon name="bell" size={24} color="#ff9800" />
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>Notifications</Text>
          <Icon name="angle-right" size={24} color="#999" style={styles.optionIcon} />
        </TouchableOpacity>

        
        <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
          <Icon name="lock" size={24} color="#f44336" />
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>Privacy</Text>
          <Icon name="angle-right" size={24} color="#999" style={styles.optionIcon} />
        </TouchableOpacity>

        
        <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]}>
          <Icon name="info-circle" size={24} color="#3f51b5" />
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>About</Text>
          <Icon name="angle-right" size={24} color="#999" style={styles.optionIcon} />
        </TouchableOpacity>

   
        <TouchableOpacity style={[styles.option, isDarkMode ? styles.darkOption : styles.lightOption]} onPress={handleLogout}>
          <Icon name="sign-out" size={24} color="#e91e63" />
          <Text style={[styles.optionText, isDarkMode ? styles.darkText : styles.lightText]}>Logout</Text>
          <Icon name="angle-right" size={24} color="#999" style={styles.optionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 32, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  section: { marginVertical: 10 },
  option: { flexDirection: "row", alignItems: "center", paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10, marginBottom: 10, elevation: 2 },
  optionText: { flex: 1, fontSize: 18, marginLeft: 10 },
  optionIcon: { marginLeft: "auto" },

  
  lightContainer: { backgroundColor: "#f5f5f5" },
  lightText: { color: "#333" },
  lightOption: { backgroundColor: "#fff" },

 
  darkContainer: { backgroundColor: "#121212" },
  darkText: { color: "#fff" },
  darkOption: { backgroundColor: "#333" },
});
