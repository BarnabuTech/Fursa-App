import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, Alert } from "react-native"; 
import axios from "axios"; 

const OpportunityWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{ name: string; description: string } | null>(null); 
  const [categoryDescription, setCategoryDescription] = useState<string | null>(null); 
  const [categories, setCategories] = useState<{ name: string; description: string }[]>([]); 
  const rotation = useState(new Animated.Value(0))[0]; 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://*********/categories"); 
        if (response.data.status === "ok") {
          setCategories(response.data.data); 
        } else {
          Alert.alert("Error", "Failed to fetch categories.");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        Alert.alert("Error", "Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, []);

  
  const fetchCategoryDescription = async (categoryName: string) => {
    try {
      const response = await axios.get(`http://192.168.93.155:5001/category-details/${categoryName}`);
      if (response.data.status === "ok") {
        setCategoryDescription(response.data.data); 
      } else {
        setCategoryDescription("No additional details available.");
      }
    } catch (error) {
      console.error("Error fetching category details:", error);
      setCategoryDescription("Failed to load category details.");
    }
  };

  // Function to spin the wheel
  const spinWheel = () => {
    if (categories.length === 0) {
      Alert.alert("Error", "No categories available to spin.");
      return;
    }

    setSpinning(true);
    
    // Animate rotation
    Animated.timing(rotation, {
      toValue: 1, 
      duration: 2000, 
      easing: Easing.ease, 
      useNativeDriver: true,
    }).start(() => {
      const randomIndex = Math.floor(Math.random() * categories.length);
      const selected = categories[randomIndex];
      setSelectedCategory(selected);
      setSpinning(false);
      
      fetchCategoryDescription(selected.name);

      rotation.setValue(0);
    });
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], 
  });

  return (
    <View style={styles.container}>
      <View style={styles.wheel}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          {spinning ? (
            <Text style={styles.spinningText}>Spinning...</Text>
          ) : (
            <Text style={styles.segmentText}>
              {selectedCategory ? selectedCategory.name : "Spin the Wheel!"}
            </Text>
          )}
        </Animated.View>
      </View>
      <TouchableOpacity style={styles.spinButton} onPress={spinWheel} disabled={spinning}>
        <Text style={styles.buttonText}>{spinning ? "Spinning..." : "Spin Now"}</Text>
      </TouchableOpacity>

      {selectedCategory && !spinning && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.categoryDescription}>
            {categoryDescription || "No description available for this category."}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  wheel: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#FFD700",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  segmentText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  spinningText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "gray",
  },
  spinButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: "80%",
  },
  categoryDescription: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

export default OpportunityWheel;
