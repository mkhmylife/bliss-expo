import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AuthHeader from "../../components/AuthHeader";
import {useTranslation} from "react-i18next";
import * as React from "react";
import {COLORS} from "../../lib/colors";
import {Controller, useForm} from "react-hook-form";
import InputField from "../../components/InputField";
import PhoneNumberInputField from "../../components/PhoneNumberInputField";
import STYLES from "../../lib/styles";
import {useCallback, useState} from "react";
import {router} from "expo-router";

interface ForgotPasswordFormDto {
  tel: string;
  pin?: string;
}

export default function ForgotPasswordScreen() {

  const { t } = useTranslation();

  const [isPinSent, setIsPinSent] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormDto>({
    defaultValues: {
    }
  });

  const sendPin = useCallback((data: ForgotPasswordFormDto) => {
    console.log(data);
    setIsPinSent(true);
  }, []);

  const resetPassword = useCallback((data: ForgotPasswordFormDto) => {
    console.log(data);
    router.replace('/(auth)/reset-password');
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <AuthHeader active={'login'} showSegmentControl={true} />
          <View style={{ marginTop: 32, marginBottom: 24 }}>
            <Text style={styles.text}>{t('forgotPasswordScreen.title')}</Text>
          </View>

          <View style={styles.formFieldsContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PhoneNumberInputField
                  label={t('registerScreen.phoneNumber')}
                  isRequired={true}
                  value={value}
                  onChange={onChange}
                />
              )}
              name="tel"
            />

            {isPinSent ? (
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View>
                    <InputField
                      label={t('forgotPasswordScreen.enterPin')}
                      isRequired={true}
                      textInputProps={{
                        onBlur,
                        onChangeText: onChange,
                        value,
                      }}
                    />
                    <TouchableOpacity onPress={handleSubmit(sendPin)} activeOpacity={0.8} style={styles.forgotPasswordContainer}>
                      <Text style={styles.forgotPassword}>{t('forgotPasswordScreen.sendAgain')}</Text>
                    </TouchableOpacity>
                  </View>
                )}
                name="pin"
              />
            ) : null}
          </View>

          {isPinSent ? (
            <TouchableOpacity onPress={handleSubmit(resetPassword)} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer]}>
              <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>{t('forgotPasswordScreen.resetPassword')}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSubmit(sendPin)} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer]}>
              <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>{t('forgotPasswordScreen.sendPin')}</Text>
            </TouchableOpacity>
          )}
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
