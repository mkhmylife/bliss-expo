import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" options={{}} />
      <Stack.Screen name="register" options={{}} />
      <Stack.Screen name="health-condition" options={{}} />
      <Stack.Screen name="forgot-password" options={{}} />
      <Stack.Screen name="reset-password" options={{}} />
    </Stack>
  );
}