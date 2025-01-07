import {useTranslation} from "react-i18next";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {COLORS} from "../../lib/colors";
import * as React from "react";
import {InputFieldStyles} from "../../components/InputField";
import {Controller, useForm} from "react-hook-form";
import {Entypo, Feather} from "@expo/vector-icons";
import CalendarPicker, {CustomDatesStylesFunc, CustomDayHeaderStylesFunc} from "react-native-calendar-picker";
import BackButton from "../../components/BackButton";
import moment from "moment";
import STYLES from "../../lib/styles";
import {router} from "expo-router";

export default function ReservationStep1Screen() {

  const {t} = useTranslation();

  const { control, handleSubmit, formState: { errors } } = useForm<ReservationFormDto>({
    defaultValues: {
      branchId: 0,
      date: moment().startOf('day').toISOString(),
      ppl: 1,
    }
  });

  const customDayHeaderStylesCallback: CustomDayHeaderStylesFunc = ({dayOfWeek, month, year}) => {
    return {
      textStyle: {
        color: COLORS.brandNeutral900,
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: '400',
      }
    };
  }

  const customDatesStylesCallback: CustomDatesStylesFunc = (date) => {
    return {
      style: {
        backgroundColor: '#e8e9ee',
        // borderRadius: 4,
        // overflow: 'hidden',
      },
      containerStyle: {
        borderRadius: 4,
        overflow: 'hidden',
      },
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={{ padding: 16 }} contentInsetAdjustmentBehavior={'automatic'}>

        <BackButton />

        <View style={styles.earliestBookingContainer}>
          <Text style={styles.earliestBooking}>{t('reservation.step1.earliest-booking')}</Text>
          <Text style={styles.earliestBookingTime}>17:00</Text>
        </View>

        <View style={styles.formFieldsContainer}>
          <View style={InputFieldStyles.wfInputField}>
            <View style={InputFieldStyles.labelStack}>
              <Text style={InputFieldStyles.label}>
                <Text style={InputFieldStyles.text}>
                  {t('reservation.step1.select-branch')}
                </Text>
              </Text>
            </View>
            <View style={[InputFieldStyles.textInput, styles.textInput]}>
              <Text style={styles.textInputValue}>XXX分店</Text>
              <Entypo name="chevron-down" size={16} color="black" />
            </View>
          </View>
        </View>

        <View style={styles.formFieldsContainer}>
          <View style={InputFieldStyles.wfInputField}>
            <View style={InputFieldStyles.labelStack}>
              <Text style={InputFieldStyles.label}>
                <Text style={InputFieldStyles.text}>
                  {t('reservation.step1.select-date')}
                </Text>
              </Text>
            </View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CalendarPicker
                  selectedStartDate={value}
                  onDateChange={(date) => onChange(moment(date).toISOString())}
                  minDate={new Date()}
                  previousComponent={<Entypo name="chevron-thin-left" size={16} color="black" />}
                  nextComponent={<Entypo name="chevron-thin-right" size={16} color="black" />}
                  selectedDayStyle={{ backgroundColor: COLORS.brand}}
                  selectedDayTextStyle={{ color: '#FFF' }}
                  dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0 }}
                  // todayBackgroundColor={COLORS.brand}
                  todayTextStyle={{ color: COLORS.brand }}
                  dayShape={'circle'}
                  customDayHeaderStyles={customDayHeaderStylesCallback}
                  customDatesStyles={customDatesStylesCallback}
                />
              )}
              name={'date'}
            />
          </View>
        </View>

        <View style={styles.formFieldsContainer}>
          <View style={InputFieldStyles.wfInputField}>
            <View style={InputFieldStyles.labelStack}>
              <Text style={InputFieldStyles.label}>
                <Text style={InputFieldStyles.text}>
                  {t('reservation.step1.select-ppl')}
                </Text>
              </Text>
            </View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.pplContainer}>
                  <TouchableOpacity onPress={() => onChange(value-1)} activeOpacity={0.8} style={styles.pplButton}>
                    <Feather name="minus-circle" size={14} color={COLORS.brand} />
                  </TouchableOpacity>
                  <View style={[InputFieldStyles.textInput, styles.textInput, { flex: 1} ]}>
                    <Text style={{ textAlign: 'center', width: '100%' }}>{value}</Text>
                  </View>
                  <TouchableOpacity onPress={() => onChange(value+1)} activeOpacity={0.8} style={styles.pplButton}>
                    <Feather name="plus-circle" size={14} color={COLORS.brand} />
                  </TouchableOpacity>
                </View>
              )}
              name={'ppl'}
            />
          </View>
        </View>

        <View style={styles.formFieldsContainer}>
          <View style={InputFieldStyles.wfInputField}>
            <View style={InputFieldStyles.labelStack}>
              <Text style={InputFieldStyles.label}>
                <Text style={InputFieldStyles.text}>
                  {t('reservation.step1.select-time')}
                </Text>
              </Text>
            </View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.timeContainer}>
                  {[...Array(10)].map((_, i) => (
                    <TouchableOpacity key={i} onPress={() => onChange(i+1)} activeOpacity={0.8} style={[styles.timeButton, value === i+1 ? { backgroundColor: COLORS.brand } : {}]}>
                      <Text style={[styles.timeButtonText, value === i+1 ? { color: '#FFF' } : {}]}>{i+1}:00</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              name={'time'}
            />
          </View>
        </View>

        <View style={{ paddingBottom: 62 }} />
      </ScrollView>

      <View style={STYLES.bottomSheetContainer}>
        <TouchableOpacity onPress={() => router.push('reservation/step2')} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer, { flex: 1}]}>
          <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>
            {t('reservation.step1.select-service')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  earliestBookingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginBottom: 22,
  },
  earliestBooking: {
    fontSize: 18,
    color: COLORS.brandNeutral500,
  },
  earliestBookingTime: {
    fontSize: 18,
    color: COLORS.brandNeutral900,
    fontWeight: 'bold',
  },

  formFieldsContainer: {
    rowGap: 24,
    marginBottom: 28,
  },
  textInput: {
    height: 38,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInputValue: {
    fontWeight: '700',
    color: COLORS.brandNeutral900,
  },

  pplContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  pplButton: {
    backgroundColor: '#e8e9ee',
    borderRadius: 8,
    padding: 8,
    width: 62,
    height: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  timeButton: {
    backgroundColor: '#e8e9ee',
    borderRadius: 8,
    padding: 8,
    width: '23%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeButtonText: {
    color: COLORS.brandNeutral900,
    fontWeight: '700',
  }
});