import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "../lib/colors";
import STYLES from "../lib/styles";

export default function LoginBox() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>立即註冊或登入並開始預約！</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[STYLES.buttonContainer]}>
          <Text style={[STYLES.buttonText]}>登入</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.buttonPrimaryContainer]}>
          <Text style={[STYLES.buttonPrimaryText]}>註冊</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0,
    }
  },
  text: {
    fontSize: 14,
    color: COLORS.brandNeutral900,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
  }
});