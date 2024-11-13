import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "../context/ThemeContext";

const { width } = Dimensions.get("window"); // Get the device's screen width

// Import images
const job1 = require("./assets/images/job1.jpg");
const job2 = require("./assets/images/job2.jpg");
const job3 = require("./assets/images/job3.jpg");

const TabHome: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Welcome Banner */}
      <Text style={[styles.title, isDarkMode && styles.darkTitle]}>Welcome to Fursa</Text>

      {/* Search Bar */}
      <TextInput
        style={[styles.searchBar, isDarkMode && styles.darkSearchBar]}
        placeholder="Search jobs..."
        placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
      />

      {/* Featured Opportunities Carousel */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Featured Opportunities</Text>
      <ScrollView horizontal pagingEnabled style={styles.carousel}>
        {[job1, job2, job3].map((image, index) => (
          <Image key={index} source={image} style={styles.carouselImage} resizeMode="cover" />
        ))}
      </ScrollView>

      {/* Categories Grid */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Explore Categories</Text>
      <View style={styles.categoryContainer}>
        {["Tech", "Sales", "Healthcare", "Education", "Finance"].map((category) => (
          <TouchableOpacity key={category} style={[styles.categoryItem, isDarkMode && styles.darkCategoryItem]}>
            <Icon name="briefcase" size={25} color="#fff" />
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Map Section */}
      <TouchableOpacity style={[styles.mapButton, isDarkMode && styles.darkMapButton]}>
        <Icon name="map-marker" size={25} color="#fff" />
        <Text style={styles.mapText}>Find Jobs Near Me</Text>
      </TouchableOpacity>

      {/* Success Stories Section */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Success Stories</Text>
      <Text style={styles.successStory}>“I found my dream job through Fursa! Highly recommend.” - User A</Text>

      {/* Profile Shortcut */}
      <TouchableOpacity style={[styles.profileShortcut, isDarkMode && styles.darkProfileShortcut]}>
        <Icon name="user" size={25} color="#fff" />
        <Text style={styles.profileText}>Complete Your Profile</Text>
      </TouchableOpacity>

      {/* Motivational Quote */}
      <Text style={[styles.motivationalText, isDarkMode && styles.darkMotivationalText]}>
        "Unlock opportunities in Mombasa today!"
      </Text>

      {/* Notifications Section */}
      <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Announcements</Text>
      <Text style={styles.announcement}>Upcoming Job Fair: Mombasa, Nov 20th!</Text>
    </ScrollView>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  darkTitle: {
    color: "#fff",
  },
  searchBar: {
    width: "90%",
    padding: 12,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    color: "#333",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  darkSearchBar: {
    backgroundColor: "#333",
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#666",
  },
  darkSectionTitle: {
    color: "#ccc",
  },
  carousel: {
    height: 250, // Larger height for carousel
    width: width * 0.95, // Larger width for carousel
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  carouselImage: {
    height: "100%",
    width: width * 0.95, // Matches the width of the carousel container
    borderRadius: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 15,
    width: "100%",
  },
  categoryItem: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#61DBFB",
    marginBottom: 15,
    width: "47%",
    elevation: 3,
  },
  darkCategoryItem: {
    backgroundColor: "#555",
  },
  categoryText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#0FAAFF",
    marginVertical: 20,
    width: "90%",
    elevation: 5,
  },
  darkMapButton: {
    backgroundColor: "#333",
  },
  mapText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  successStory: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 24,
  },
  profileShortcut: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#61DBFB",
    width: "90%",
    marginVertical: 20,
    elevation: 5,
  },
  darkProfileShortcut: {
    backgroundColor: "#333",
  },
  profileText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  motivationalText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
    fontStyle: "italic",
  },
  darkMotivationalText: {
    color: "#ccc",
  },
  announcement: {
    fontSize: 16,
    color: "#666",
    marginVertical: 10,
    textAlign: "center",
    lineHeight: 24,
  },
});
