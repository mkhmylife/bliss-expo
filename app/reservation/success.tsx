import {useTranslation} from "react-i18next";
import * as React from "react";
import {ScrollView, StyleSheet, View, Text, useWindowDimensions, TouchableOpacity} from "react-native";
import {COLORS} from "../../lib/colors";
import ReservationCard from "../../components/ReservationCard";
import RenderHtml from "react-native-render-html";
import {termsSource} from "../terms";
import STYLES from "../../lib/styles";
import {router} from "expo-router";

export default function ReservationSuccessScreen() {

  const {t} = useTranslation();

  const { width } = useWindowDimensions();

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={{padding: 16}} contentInsetAdjustmentBehavior={'automatic'}>
        <View>
          <Text style={styles.title}>{t('reservation.success.title')}</Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <ReservationCard />
        </View>

        <RenderHtml
          contentWidth={width}
          source={termsSource}
          baseStyle={{ fontSize: 16, lineHeight: 24, color: COLORS.brandNeutral900 }}
          tagsStyles={{
            h1: {fontSize: 20},
            ul: {paddingLeft: 12},
            li: {paddingLeft: 12},
          }}
        />
        <View style={{ paddingBottom: 62 }} />
      </ScrollView>

      <View style={STYLES.bottomSheetContainer}>
        <TouchableOpacity onPress={() => router.replace('/')} activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer, { flex: 1}]}>
          <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>
            {t('reservation.success.back-to-home')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.brandNeutral900,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
  }
});