import {useTranslation} from "react-i18next";
import {Controller, useForm} from "react-hook-form";
import moment from "moment";
import BackButton from "../../components/BackButton";
import InputField, {InputFieldStyles} from "../../components/InputField";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Entypo, Feather} from "@expo/vector-icons";
import {COLORS} from "../../lib/colors";
import * as React from "react";
import PhoneNumberInputField from "../../components/PhoneNumberInputField";
import {router} from "expo-router";
import STYLES from "../../lib/styles";
import {Checkbox} from "expo-checkbox";

export default function ReservationStep3Screen() {

  const {t} = useTranslation();

  const {control, handleSubmit, formState: {errors}} = useForm<ReservationFormDto>({
    defaultValues: {
      branchId: 0,
      date: moment().startOf('day').toISOString(),
      ppl: 1,
      pplSelect: 1,
    }
  });

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={{padding: 16}} contentInsetAdjustmentBehavior={'automatic'}>

        <BackButton/>

        <View style={[styles.formFieldsContainer, {marginTop: 20}]}>
          <View style={InputFieldStyles.wfInputField}>
            <View style={InputFieldStyles.labelStack}>
              <Text style={InputFieldStyles.label}>
                <Text style={InputFieldStyles.text}>
                  {t('reservation.step2.reservation-details')}
                </Text>
              </Text>
            </View>

            <View style={{marginTop: 4, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                <Feather style={{}} name="home" size={15} color={COLORS.brandNeutral900}/>
                <Text>尖沙咀</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'center'}}>
                <Feather name="calendar" size={15} color={COLORS.brandNeutral900}/>
                <Text>7月12日</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'flex-end'}}>
                <Feather name="clock" size={15} color={COLORS.brandNeutral900}/>
                <Text>14:00</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.serviceContainer}>
          <Text style={styles.ppl}>
            {t('reservation.step2.ppl-x', { x: 1 })}
          </Text>
          <View style={styles.serviceMetaContainer}>
            <Text style={styles.service}>足部養生穴位按摩</Text>
            <Text style={styles.minute}>45{t('reservation.step2.minute')}</Text>
            <Text style={styles.price}>HK$248</Text>
          </View>
          <View style={styles.serviceMetaContainer}>
            <Text style={styles.service}>足部養生穴位按摩</Text>
            <Text style={styles.minute}>45{t('reservation.step2.minute')}</Text>
            <Text style={styles.price}>HK$248</Text>
          </View>
          <View style={InputFieldStyles.wfInputField}>
            <View style={[InputFieldStyles.textInput, styles.select]}>
              <Text style={styles.selectValue}>{t('reservation.step3.select-therapist')}</Text>
              <Entypo name="chevron-down" size={16} color="black" />
            </View>
          </View>
        </View>

        <View style={styles.serviceContainer}>
          <Text style={styles.ppl}>
            {t('reservation.step2.ppl-x', { x: 2 })}
          </Text>
          <View style={styles.serviceMetaContainer}>
            <Text style={styles.service}>足部養生穴位按摩</Text>
            <Text style={styles.minute}>45{t('reservation.step2.minute')}</Text>
            <Text style={styles.price}>HK$248</Text>
          </View>
          <View style={styles.serviceMetaContainer}>
            <Text style={styles.service}>足部養生穴位按摩</Text>
            <Text style={styles.minute}>45{t('reservation.step2.minute')}</Text>
            <Text style={styles.price}>HK$248</Text>
          </View>
          <View style={InputFieldStyles.wfInputField}>
            <View style={[InputFieldStyles.textInput, styles.select]}>
              <Text style={styles.selectValue}>{t('reservation.step3.select-therapist')}</Text>
              <Entypo name="chevron-down" size={16} color="black" />
            </View>
          </View>
        </View>

        <View style={[styles.formFieldsContainer, { marginTop: 16 }]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label={t('reservation.step3.notes')}
                isRequired={false}
                textInputProps={{
                  onBlur,
                  onChangeText: onChange,
                  value,
                  placeholder: t('reservation.step3.notes-placeholder'),
                }}
              />
            )}
            name="notes"
          />
        </View>

        <View style={styles.hr} />

        <View>
          <View />
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalLabel}>{t('reservation.step3.subtotal')}</Text>
            <Text style={styles.subtotal}>HK$1,323</Text>
          </View>
        </View>

        <View style={[styles.formFieldsContainer, { marginTop: 12 }]}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <View style={styles.promoCodeContainer}>
                  <InputField
                    label={t('reservation.step3.promo-code')}
                    isRequired={false}
                    textInputProps={{
                      onBlur,
                      onChangeText: onChange,
                      value,
                    }}
                  />
                  <TouchableOpacity activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer, { flex: 0, width: 60, height: 48, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={[STYLES.buttonPrimaryText, { fontSize: 16, fontWeight: '500' }]}>{t('reservation.step3.apply-coupon-code')}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => router.push('/(auth)/forgot-password')} activeOpacity={0.8} style={styles.seePromoCodesContainer}>
                  <Text style={styles.seePromoCodes}>{t('reservation.step3.see-promo-codes')}</Text>
                </TouchableOpacity>
              </View>
            )}
            name="promoCode"
          />
        </View>

        <View style={styles.hr} />

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 }}>
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
            <Text style={{color: "#ed003d", marginLeft: 2}}>*</Text>
          </View>
        </View>

        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalLabel}>{t('reservation.step3.total')}</Text>
          <Text style={styles.total}>HK$1,323</Text>
        </View>

        <View style={{ paddingBottom: 62 }} />
      </ScrollView>

      <View style={[STYLES.bottomSheetContainer, { flexDirection: 'row', gap: 12 }]}>
        <TouchableOpacity onPress={() => router.push('reservation/success')} activeOpacity={0.8} style={[STYLES.buttonContainer, { flex: 1}]}>
          <Text style={[STYLES.buttonText, STYLES.buttonPrimaryTextMd]}>
            {t('reservation.step3.pay-with-package')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('reservation/success')} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer, { flex: 1}]}>
          <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>
            {t('reservation.step3.pay-with-credit-card')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  formFieldsContainer: {
    rowGap: 24,
    marginBottom: 2,
  },

  serviceContainer: {
    backgroundColor: '#E8E9EE',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 8,
  },
  ppl: {
    fontSize: 14,
    color: COLORS.brandNeutral900,
  },
  serviceMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  service: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.brandNeutral900,
  },
  price: {
    fontSize: 14,
    color: COLORS.brandNeutral900,
  },
  minute: {

  },
  select: {
    marginTop: 8,
    height: 38,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  selectValue: {
    fontWeight: '700',
    color: COLORS.brandNeutral900,
  },

  hr: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.brand,
    marginTop: 12,
  },

  subtotalContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 16,
    gap: 8,
  },
  subtotalLabel: {

  },
  subtotal: {
    color: COLORS.brandNeutral900,
    fontWeight: '700',
  },

  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  seePromoCodesContainer: {
    position: 'absolute',
    right: 0,
  },
  seePromoCodes: {
    color: COLORS.brandNeutral500,
    textDecorationLine: 'underline',
  },

  total: {
    fontWeight: '700',
    fontSize: 32,
    color: COLORS.brandNeutral900,
  }
});
