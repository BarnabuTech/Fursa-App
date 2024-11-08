
import { View, Text, FlatList, StyleSheet } from 'react-native';

const applications = [
  { id: '1', title: 'Software Engineer', status: 'Interview Scheduled' },
  { id: '2', title: 'Graphic Designer', status: 'Applied' },
  { id: '3', title: 'Marketing Intern', status: 'Offer Received' },
  // Add more applications if needed
];

export default function ApplicationTrackerScreen() {
  return (
    <FlatList
      data={applications}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.status}>{item.status}</Text>
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
  jobTitle: { fontSize: 18, fontWeight: 'bold' },
  status: { color: '#666', marginTop: 5 },
});
