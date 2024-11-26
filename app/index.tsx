import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LoginBox from "../components/LoginBox";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            style={{ width: 88, height: 24 }}
            source={require('../assets/images/logo.png')} />
        </View>
        <LoginBox />
      </SafeAreaView>
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
