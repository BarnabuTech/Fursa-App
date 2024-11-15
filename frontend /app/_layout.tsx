import { Stack } from 'expo-router';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

   
    
    </Stack>
  );
}