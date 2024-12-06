import {Text, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, TextInput} from "react-native";
import AuthHeader from "../../components/AuthHeader";
import {COLORS} from "../../lib/colors";
import {useTranslation} from "react-i18next";
import InputField, {InputFieldStyles} from "../../components/InputField";
import {Controller, useForm} from "react-hook-form";
import STYLES from "../../lib/styles";
import {useCallback} from "react";
import PhoneNumberInputField from "../../components/PhoneNumberInputField";
import * as React from "react";
import {Checkbox} from "expo-checkbox";
import {router} from "expo-router";

interface RegisterFormDto {
  name: string;
  email: string;
  tel: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female',
  acceptToc: boolean;
  referralCode?: string
}

export default function RegisterScreen() {

  const { t } = useTranslation();

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormDto>({
    defaultValues: {
      name: '',
      email: ''
    }
  });

  const onSubmit = useCallback((data: RegisterFormDto) => {
    console.log(data);
    router.push('/(auth)/health-condition');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20, }}>
        <AuthHeader active={'register'} showSegmentControl={true} />
        <View style={{ marginTop: 32, marginBottom: 20 }}>
          <Text style={styles.text}>{t('registerScreen.title')}</Text>
        </View>
        <View style={styles.formFieldsContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label={t('registerScreen.name')}
                isRequired={true}
                textInputProps={{
                  onBlur,
                  onChangeText: onChange,
                  value,
                }}
              />
            )}
            name="name"
          />

          <Controller
            control={control}
            rules={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: t('registerScreen.emailInvalid')
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label={t('registerScreen.email')}
                isRequired={true}
                textInputProps={{
                  onBlur,
                  onChangeText: onChange,
                  value,
                  keyboardType: 'email-address',
                }}
              />
            )}
            name="email"
          />

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

          <Controller
            control={control}
            rules={{
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label={t('registerScreen.password')}
                isRequired={true}
                textInputProps={{
                  onBlur,
                  onChangeText: onChange,
                  value,
                }}
              />
            )}
            name="password"
          />

          <Controller
            control={control}
            rules={{
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label={t('registerScreen.confirmPassword')}
                isRequired={true}
                textInputProps={{
                  onBlur,
                  onChangeText: onChange,
                  value,
                }}
              />
            )}
            name="confirmPassword"
          />

          <View style={{ flexDirection: 'row', }}>
            <Controller
              control={control}
              rules={{
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={InputFieldStyles.wfInputField}>
                  <View style={InputFieldStyles.labelStack}>
                    <Text style={InputFieldStyles.label}>
                      <Text style={InputFieldStyles.text}>{t('registerScreen.gender')}</Text>
                      <Text style={InputFieldStyles.text1}>*</Text>
                    </Text>
                  </View>
                  <View style={[styles.frameParent, styles.parentFlexBox, { gap: 26 }]}>
                    <TouchableOpacity onPress={() => onChange('male')} activeOpacity={0.8} style={styles.parentFlexBox}>
                      <Text style={[styles.label, { fontWeight: '700'}]}>男</Text>
                      <View style={{ backgroundColor: value === 'male' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('female')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label, { fontWeight: '700'}]}>女</Text>
                      <View style={{ backgroundColor: value === 'female' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              name="gender"
            />
            <Controller
              control={control}
              rules={{
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  label={t('registerScreen.referralCode')}
                  textInputProps={{
                    onBlur,
                    onChangeText: onChange,
                    value,
                  }}
                />
              )}
              name="referralCode"
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, }}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Checkbox color={COLORS.brand} value={value as any == "1"} onValueChange={(value) => onChange(value ? "1" : "0")} />
              )}
              name="acceptToc"
            />
            <View style={{flexDirection: 'row',}}>
              <Text style={[InputFieldStyles.label]}>
                {t('registerScreen.acceptToc')}
              </Text>
              <TouchableOpacity onPress={() => router.push('/terms')} activeOpacity={0.8}>
                <Text style={[InputFieldStyles.label, {fontWeight: '700', textDecorationLine: 'underline'}]}>{t('registerScreen.acceptTocLink')}</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <TouchableOpacity onPress={handleSubmit(onSubmit)} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer]}>
          <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>{t('loginBox.register')}</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    alignSelf: "stretch",
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.brandNeutral900,
    textAlign: "left"
  },
  formFieldsContainer: {
    rowGap: 20,
    marginBottom: 26,
  },
  inputContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#3a334c",
    borderWidth: 1,
    overflow: 'hidden',
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro",
    color: "#283237",
    textAlign: "left"
  },
  radioButtonsIcon: {
    width: 28,
    height: 28
  },
  frameParent: {
    flex: 1,
    width: "100%",
    height: 48,
    gap: 24
  }
});
