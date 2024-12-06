import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import LoginBox from "../components/LoginBox";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.header}>
            <Image
              style={{ width: 88, height: 24 }}
              source={require('../assets/images/logo.png')} />
          </View>
          <LoginBox />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 16,
  }
});
