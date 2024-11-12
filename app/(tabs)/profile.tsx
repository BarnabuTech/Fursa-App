import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Skills</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your skills (e.g., JavaScript, Design)"
        value={skills}
        onChangeText={setSkills}
      />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={[styles.input, styles.bioInput]}
        placeholder="Write a short bio"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      <Button title="Save Profile" onPress={() => alert('Profile saved!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  bioInput: { height: 80, textAlignVertical: 'top' },
});
