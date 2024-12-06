import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "../lib/colors";
import STYLES from "../lib/styles";
import {useTranslation} from "react-i18next";
import {router} from "expo-router";

export default function LoginBox() {

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('loginBox.title')}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => router.push('/(auth)/login')} style={[STYLES.buttonContainer]}>
          <Text style={[STYLES.buttonText]}>{t('loginBox.login')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(auth)/register')} style={[STYLES.buttonPrimaryContainer]}>
          <Text style={[STYLES.buttonPrimaryText]}>{t('loginBox.register')}</Text>
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