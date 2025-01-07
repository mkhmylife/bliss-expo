import { Stack } from 'expo-router';
import {COLORS} from "../lib/colors";
import '../lib/i18n';
import Header from "../components/Header";
import {ActionSheetProvider} from "@expo/react-native-action-sheet"; // This line imports the i18n configuration

export default function RootLayout() {
  return (
    <ActionSheetProvider>
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
        <Stack.Screen name="reservation/step1" options={{ title: '' }} />
        <Stack.Screen name="reservation/step2" options={{ title: '' }} />
        <Stack.Screen name="reservation/step3" options={{ title: '' }} />
        <Stack.Screen name="reservation/success" options={{ title: '' }} />
      </Stack>
    </ActionSheetProvider>
  );
}