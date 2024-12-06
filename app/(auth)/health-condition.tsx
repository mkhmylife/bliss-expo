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
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {router} from "expo-router";

interface RegisterFormDto {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string[];
}

export default function HealthConditionScreen() {

  const { t } = useTranslation();

  const inset = useSafeAreaInsets();

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormDto>({
    defaultValues: {
    }
  });

  const onSubmit = useCallback((data: RegisterFormDto) => {
    console.log(data);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20, }}>
        <AuthHeader showSegmentControl={false} />
        <View>
          <Text style={styles.name}>Edward</Text>
          <Text style={[styles.text, { textAlign: 'center' }]}>{t('healthConditionScreen.welcome-to-bliss')}</Text>
        </View>
        <View style={{ marginTop: 32, marginBottom: 20 }}>
          <Text style={styles.text}>{t('healthConditionScreen.title')}</Text>
        </View>
        <View style={styles.formFieldsContainer}>

          <View style={InputFieldStyles.wfInputField}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={[InputFieldStyles.wfInputField, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                  <View style={InputFieldStyles.labelStack}>
                    <Text style={InputFieldStyles.label}>
                      <Text style={InputFieldStyles.text}>{t('healthConditionScreen.q1')}</Text>
                      <Text style={InputFieldStyles.text1}>*</Text>
                    </Text>
                  </View>
                  <View style={[styles.frameParent, styles.parentFlexBox, { columnGap: 26 }]}>
                    <TouchableOpacity onPress={() => onChange('1')} activeOpacity={0.8} style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.yes')}
                      </Text>
                      <View style={{ backgroundColor: value === '1' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.no')}
                      </Text>
                      <View style={{ backgroundColor: value === '0' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              name="q1"
            />
          </View>
          <View style={InputFieldStyles.wfInputField}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={[InputFieldStyles.wfInputField, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                  <View style={InputFieldStyles.labelStack}>
                    <Text style={InputFieldStyles.label}>
                      <Text style={InputFieldStyles.text}>{t('healthConditionScreen.q2')}</Text>
                      <Text style={InputFieldStyles.text1}>*</Text>
                    </Text>
                  </View>
                  <View style={[styles.frameParent, styles.parentFlexBox, { columnGap: 26 }]}>
                    <TouchableOpacity onPress={() => onChange('1')} activeOpacity={0.8} style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.yes')}
                      </Text>
                      <View style={{ backgroundColor: value === '1' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.no')}
                      </Text>
                      <View style={{ backgroundColor: value === '0' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              name="q2"
            />
          </View>
          <View style={InputFieldStyles.wfInputField}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={[InputFieldStyles.wfInputField, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                  <View style={InputFieldStyles.labelStack}>
                    <Text style={InputFieldStyles.label}>
                      <Text style={InputFieldStyles.text}>{t('healthConditionScreen.q3')}</Text>
                      <Text style={InputFieldStyles.text1}>*</Text>
                    </Text>
                  </View>
                  <View style={[styles.frameParent, styles.parentFlexBox, { columnGap: 26 }]}>
                    <TouchableOpacity onPress={() => onChange('1')} activeOpacity={0.8} style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.yes')}
                      </Text>
                      <View style={{ backgroundColor: value === '1' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.no')}
                      </Text>
                      <View style={{ backgroundColor: value === '0' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              name="q3"
            />
          </View>
          <View style={InputFieldStyles.wfInputField}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={[InputFieldStyles.wfInputField, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                  <View style={InputFieldStyles.labelStack}>
                    <Text style={InputFieldStyles.label}>
                      <Text style={InputFieldStyles.text}>{t('healthConditionScreen.q4')}</Text>
                      <Text style={InputFieldStyles.text1}>*</Text>
                    </Text>
                  </View>
                  <View style={[styles.frameParent, styles.parentFlexBox, { columnGap: 26 }]}>
                    <TouchableOpacity onPress={() => onChange('1')} activeOpacity={0.8} style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.yes')}
                      </Text>
                      <View style={{ backgroundColor: value === '1' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.no')}
                      </Text>
                      <View style={{ backgroundColor: value === '0' ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              name="q4"
            />
          </View>
          <View style={InputFieldStyles.wfInputField}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={[InputFieldStyles.wfInputField, { alignItems: 'center' }]}>
                  <View style={InputFieldStyles.labelStack}>
                    <Text style={InputFieldStyles.label}>
                      <Text style={InputFieldStyles.text}>{t('healthConditionScreen.q5')}</Text>
                      <Text style={InputFieldStyles.text1}>*</Text>
                    </Text>
                  </View>
                  <View style={[styles.frameParent, styles.parentFlexBox, { marginTop: 20, columnGap: 26, rowGap: 14, flexWrap: 'wrap' }]}>
                    <TouchableOpacity onPress={() => onChange('1')} activeOpacity={0.8} style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition1')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('1') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition2')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('2') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('3')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition3')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('2') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition4')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('2') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition5')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('2') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition6')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('2') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition7')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('2') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition8')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('2') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChange('0')} activeOpacity={0.8}  style={styles.parentFlexBox}>
                      <Text style={[styles.label]}>
                        {t('healthConditionScreen.condition9')}
                      </Text>
                      <View style={{ backgroundColor: value.includes('2') ? '#49454F' : '#FFF', borderWidth: 1, borderColor: '#49454F', width: 14, height: 14, borderRadius: 100 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              name="q5"
            />
            <TextInput style={InputFieldStyles.textInput} />
          </View>
        </View>

        <TouchableOpacity onPress={handleSubmit(onSubmit)} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer]}>
          <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>{t('healthConditionScreen.finish')}</Text>
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
  name: {
    fontSize: 48,
    fontWeight: "700",
    color: COLORS.brandNeutral900,
    textAlign: 'center',
  },
  text: {
    alignSelf: "stretch",
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.brandNeutral900,
    textAlign: "left"
  },
  formFieldsContainer: {
    rowGap: 31,
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
    gap: 24
  }
});
