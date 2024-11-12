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
      {/* Define a Stack.Screen for the Tabs layout */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Other stack screens */}
    
    </Stack>
  );
}