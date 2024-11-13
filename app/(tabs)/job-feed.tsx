// JobFeedScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const jobs = [
  { id: '1', title: 'Software Engineer', company: 'Tech Co.', location: 'Mombasa' },
  { id: '2', title: 'Graphic Designer', company: 'Creative Studio', location: 'Nairobi' },
  { id: '3', title: 'Marketing Intern', company: 'Ad Agency', location: 'Mombasa' },
  // Add more jobs for testing
];

export default function JobFeedScreen() {
  const { isDarkMode } = useTheme();

  return (
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={[styles.card, isDarkMode && styles.darkCard]}>
          <Text style={[styles.jobTitle, isDarkMode && styles.darkText]}>{item.title}</Text>
          <Text style={[styles.company, isDarkMode && styles.darkSubText]}>{item.company}</Text>
          <Text style={[styles.location, isDarkMode && styles.darkSubText]}>{item.location}</Text>
          <TouchableOpacity style={[styles.applyButton, isDarkMode && styles.darkApplyButton]}>
            <FontAwesome name="send" size={16} color="white" />
            <Text style={styles.applyText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  darkCard: {
    backgroundColor: '#333',
    shadowColor: '#fff',
  },
  jobTitle: { fontSize: 18, fontWeight: 'bold' },
  darkText: { color: '#fff' },
  company: { color: '#666' },
  location: { color: '#999', marginBottom: 10 },
  darkSubText: { color: '#ccc' },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
  },
  darkApplyButton: {
    backgroundColor: '#555',
  },
  applyText: { color: '#fff', marginLeft: 5 },
});
