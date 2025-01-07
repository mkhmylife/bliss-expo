import {useTranslation} from "react-i18next";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Controller, useForm} from "react-hook-form";
import moment from "moment/moment";
import BackButton from "../../components/BackButton";
import * as React from "react";
import {InputFieldStyles} from "../../components/InputField";
import {AntDesign, Entypo, Feather} from "@expo/vector-icons";
import {COLORS} from "../../lib/colors";
import STYLES from "../../lib/styles";
import {router} from "expo-router";

export default function ReservationStep2Screen() {

  const {t} = useTranslation();

  const { control, handleSubmit, formState: { errors } } = useForm<ReservationFormDto>({
    defaultValues: {
      branchId: 0,
      date: moment().startOf('day').toISOString(),
      ppl: 1,
      pplSelect: 1,
    }
  });

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={{ padding: 16 }} contentInsetAdjustmentBehavior={'automatic'}>

        <BackButton />

        <View style={[styles.formFieldsContainer, { marginTop: 20 }]}>
          <View style={InputFieldStyles.wfInputField}>
            <View style={InputFieldStyles.labelStack}>
              <Text style={InputFieldStyles.label}>
                <Text style={InputFieldStyles.text}>
                  {t('reservation.step2.reservation-details')}
                </Text>
              </Text>
            </View>

            <View style={{ marginTop: 4, marginBottom: 12, flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                <Feather style={{}} name="home" size={15} color={COLORS.brandNeutral900} />
                <Text>尖沙咀</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
                <Feather name="calendar" size={15} color={COLORS.brandNeutral900} />
                <Text>7月12日</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'flex-end' }}>
                <Feather name="clock" size={15} color={COLORS.brandNeutral900} />
                <Text>14:00</Text>
              </View>
            </View>

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.pplContainer}>
                  {[...Array(2)].map((_, i) => (
                    <TouchableOpacity key={i} onPress={() => onChange(i+1)} activeOpacity={0.8} style={[styles.button, value === i+1 ? { backgroundColor: COLORS.brand } : {}]}>
                      <Text style={[styles.buttonText, value === i+1 ? { color: '#FFF' } : {}]}>{t('reservation.step2.ppl-x', { x: i+1 })}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              name={'pplSelect'}
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={[styles.pplContainer, { marginTop: 12 }]}>
                  {['massage', 'treatment', 'additional'].map((type, i) => (
                    <TouchableOpacity key={i} onPress={() => onChange(i+1)} activeOpacity={0.8} style={[styles.button, value === i+1 ? { backgroundColor: COLORS.brand } : {}]}>
                      <Text style={[styles.buttonText, value === i+1 ? { color: '#FFF' } : {}]}>{t(`reservation.step2.service-type-${type}`)}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              name={'pplSelect'}
            />


            <View style={[{ marginTop: 12 }]}>
              <TouchableOpacity  activeOpacity={0.8} style={styles.serviceContainer}>
                <View>
                  <Text style={[styles.buttonText, { fontWeight: '700' }]}>足部養生穴位按摩</Text>
                  <View style={styles.serviceMeta}>
                    <Text style={styles.servicePrice}>HK$268</Text>
                    <Text style={styles.serviceMinute}>45{t('reservation.step2.minute')}</Text>
                  </View>
                </View>
                <AntDesign name="pluscircleo" size={18} color={COLORS.brand} />
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={{ paddingBottom: 62 }} />
      </ScrollView>

      <View style={STYLES.bottomSheetContainer}>
        <TouchableOpacity onPress={() => router.push('reservation/step3')} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer, { flex: 1}]}>
          <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>
            {t('reservation.step2.confirm-reservation')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  formFieldsContainer: {
    rowGap: 24,
    marginBottom: 28,
  },

  pplContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  button: {
    backgroundColor: '#e8e9ee',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.brandNeutral900,
    fontWeight: '700',
  },

  serviceContainer: {
    backgroundColor: '#e8e9ee',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceMeta: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  servicePrice: {
    fontSize: 12,
  },
  serviceMinute: {
    fontSize: 12,
  }
});