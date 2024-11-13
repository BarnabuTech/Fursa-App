import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const applications = [
  { id: '1', title: 'Software Engineer', status: 'Interview Scheduled' },
  { id: '2', title: 'Graphic Designer', status: 'Applied' },
  { id: '3', title: 'Marketing Intern', status: 'Offer Received' },
  
];

export default function ApplicationTrackerScreen() {
  const { isDarkMode } = useTheme();

  return (
    <FlatList
      data={applications}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={[styles.card, isDarkMode && styles.darkCard]}>
          <Text style={[styles.jobTitle, isDarkMode && styles.darkText]}>{item.title}</Text>
          <Text style={[styles.status, isDarkMode && styles.darkSubText]}>{item.status}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#1E90FF',
  },
  darkCard: {
    backgroundColor: '#333',
    borderLeftColor: '#555',
  },
  jobTitle: { fontSize: 18, fontWeight: 'bold' },
  darkText: { color: '#fff' },
  status: { color: '#666', marginTop: 5 },
  darkSubText: { color: '#ccc' },
});
