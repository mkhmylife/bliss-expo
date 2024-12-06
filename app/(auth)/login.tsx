import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AuthHeader from "../../components/AuthHeader";
import {useTranslation} from "react-i18next";
import * as React from "react";
import {COLORS} from "../../lib/colors";
import {Controller, useForm} from "react-hook-form";
import InputField from "../../components/InputField";
import PhoneNumberInputField from "../../components/PhoneNumberInputField";
import STYLES from "../../lib/styles";
import {useCallback} from "react";
import {router} from "expo-router";

interface LoginFormDto {
  tel: string;
  password: string;
}

export default function LoginScreen() {

  const { t } = useTranslation();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormDto>({
    defaultValues: {
    }
  });

  const onSubmit = useCallback((data: LoginFormDto) => {
    console.log(data);
    router.push('/(auth)/health-condition');
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <AuthHeader active={'login'} showSegmentControl={true} />
          <View style={{ marginTop: 32, marginBottom: 24 }}>
            <Text style={styles.text}>{t('loginScreen.title')}</Text>
          </View>

          <View style={styles.formFieldsContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PhoneNumberInputField
                  label={t('registerScreen.phoneNumber')}
                  isRequired={false}
                  value={value}
                  onChange={onChange}
                />
              )}
              name="tel"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <InputField
                    label={t('loginScreen.password')}
                    isRequired={false}
                    textInputProps={{
                      onBlur,
                      onChangeText: onChange,
                      value,
                    }}
                  />
                  <TouchableOpacity onPress={() => router.push('/(auth)/forgot-password')} activeOpacity={0.8} style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPassword}>{t('loginScreen.forgot-password')}</Text>
                  </TouchableOpacity>
                </View>
              )}
              name="password"
            />
          </View>

          <TouchableOpacity onPress={handleSubmit(onSubmit)} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer]}>
            <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>{t('loginBox.login')}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  text: {
    alignSelf: "stretch",
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.brandNeutral900,
    textAlign: "left"
  },
  formFieldsContainer: {
    rowGap: 24,
    marginBottom: 28,
  },
  forgotPasswordContainer: {
    position: 'absolute',
    right: 0,
  },
  forgotPassword: {
    color: "#8ea5d5",
  }
});
