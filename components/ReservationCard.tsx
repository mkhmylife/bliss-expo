import {StyleSheet, View, Text} from "react-native";
import {COLORS} from "../lib/colors";
import {Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import * as React from "react";
import {InputFieldStyles} from "./InputField";
import {useTranslation} from "react-i18next";

export default function ReservationCard() {

  const {t} = useTranslation();

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>日月按摩</Text>

      <View style={{marginTop: 16, flexDirection: 'row'}}>
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

      <View style={{marginTop: 16, flexDirection: 'row', gap: 6}}>
        <Ionicons style={{}} name="location-outline" size={16} color={COLORS.brandNeutral900} />
        <Text style={{}}>尖沙咀柯士甸道134號太極大樓地舖 (佐敦站D出口)</Text>
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
        <View style={[styles.serviceMetaContainer, { justifyContent: 'flex-start', alignItems: 'center', gap: 6 }]}>
          <FontAwesome name="user-o" size={16} color="black" />
          <Text style={styles.therapist}>陳師傅</Text>
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
        <View style={[styles.serviceMetaContainer, { justifyContent: 'flex-start', alignItems: 'center', gap: 6 }]}>
          <FontAwesome name="user-o" size={16} color="black" />
          <Text style={styles.therapist}>陳師傅</Text>
        </View>
      </View>

      <View style={[{ marginTop: 16 }]}>
        <View style={InputFieldStyles.wfInputField}>
          <View style={InputFieldStyles.labelStack}>
            <Text style={InputFieldStyles.label}>
              <Text style={InputFieldStyles.text}>
                {t('reservation.step3.notes')}
              </Text>
            </Text>
          </View>
          <View style={[InputFieldStyles.textInput, { height: 38, flexDirection: 'row', alignItems: 'center' }]}>
            <Text style={styles.notes}>雙人房，女技師</Text>
          </View>
        </View>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    borderColor: COLORS.brandNeutral900,
    borderWidth: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.brandNeutral900,
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
  therapist: {
    color: COLORS.brandNeutral900,
  },

  notes: {
    color: COLORS.brandNeutral900,
  }
});