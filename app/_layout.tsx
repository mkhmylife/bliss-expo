import { Stack } from 'expo-router';
import {COLORS} from "../lib/colors";
import '../lib/i18n';
import Header from "../components/Header"; // This line imports the i18n configuration

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: '',
        header: (props) => {
          return <Header />;
        }
      }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="terms" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="shops/[id]" options={{ title: '' }} />
    </Stack>
  );
}