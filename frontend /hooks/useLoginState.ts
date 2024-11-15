import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Here, you can check if the user is logged in (e.g., using AsyncStorage or context)
    const loggedIn = false; // Replace with actual login check
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      router.replace('/home'); // Automatically navigate to the home screen if logged in
    }
  }, [router]);

  return isLoggedIn;
};

export default useLoginState;
