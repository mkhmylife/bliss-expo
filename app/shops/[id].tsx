import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import BackButton from "../../components/BackButton";
import {Image} from "expo-image";
import {COLORS} from "../../lib/colors";
import {Image as ExpoImage} from "expo-image/build/Image";
import * as React from "react";
import {Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import STYLES from "../../lib/styles";
import {useTranslation} from "react-i18next";
import {router} from "expo-router";

export default function ShopDetailScreen() {

  const {t} = useTranslation();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
        <Image style={styles.shopImage} source={require('../../assets/images/demo-shop.png')} />
        <BackButton absolute={true} style={{ left: 20, top: 12 }} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={[STYLES.roundedHoverButton, { position: 'absolute', right: 72, top: 12 }]}
        >
          <Feather name="share" size={19} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[STYLES.roundedHoverButton, { position: 'absolute', right: 20, top: 12 }]}
        >
          <Feather name="heart" size={19} color="black" />
        </TouchableOpacity>

        <View style={{ paddingHorizontal: 20 }}>

          <View style={{ paddingTop: 26 }}>
            <View style={styles.nameContainer}>
              <Text style={styles.shopName}>日月. 按摩</Text>
              <Image style={styles.badge} source={require('../../assets/images/icons/badge.png')} />
            </View>

            <View style={styles.frameGroup}>
              <View style={[styles.parentFlexBox]}>
                <FontAwesome style={[styles.iconLayout]} name="star" size={15} color={COLORS.brandNeutral900} />
                <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                  <Text style={[styles.textTypo]}>4.89</Text>
                  <Text style={[styles.textTypo, styles.text6]}>(182)</Text>
                  <Text style={[styles.textTypo, {marginHorizontal: 4}]}>·</Text>
                  <View style={{ marginLeft: 0, flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                    <Text style={[styles.textTypo, styles.text6]}>服務：</Text>
                    <Text style={[styles.textTypo]}>4.8</Text>
                  </View>
                  <View style={{ marginLeft: 8, flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                    <Text style={[styles.textTypo, styles.text6]}>環境：</Text>
                    <Text style={[styles.textTypo]}>4.8</Text>
                  </View>
                  <View style={{ marginLeft: 8, flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                    <Text style={[styles.textTypo, styles.text6]}>消費：</Text>
                    <Text style={[styles.textTypo]}>4.8</Text>
                  </View>
                </View>
              </View>

              <View style={[styles.parentFlexBox]}>
                <Feather style={[styles.iconLayout]} name="home" size={15} color={COLORS.brandNeutral900} />
                <View style={styles.group}>
                  <Text style={styles.textTypo}>西營盤</Text>
                  <Text style={[styles.textTypo, styles.text6, {marginHorizontal: 0}]}>·</Text>
                  <Text style={styles.textTypo}>旺角</Text>
                  <Text style={[styles.textTypo, styles.text6, {marginHorizontal: 0}]}>·</Text>
                  <Text style={styles.textTypo}>尖沙咀</Text>
                </View>
              </View>

              <View style={[styles.parentFlexBox]}>
                <Ionicons style={[styles.iconLayout]} name="location-outline" size={16} color={COLORS.brandNeutral900} />
                <Text style={[styles.textTypo]}>尖沙咀柯士甸道134號太極大樓地舖 (佐敦站D出口)</Text>
              </View>

              <View style={[styles.parentFlexBox]}>
                <Entypo style={[styles.iconLayout]} name="list" size={18} color={COLORS.brandNeutral900} />
                <Text style={[styles.textTypo]}>服務價目表</Text>
              </View>

              <View style={[styles.parentFlexBox]}>
                <MaterialIcons style={[styles.iconLayout]}  name="access-time" size={16} color={COLORS.brandNeutral900} />
                <Text style={[styles.textTypo]}>休息中</Text>
                <Text style={[styles.textTypo, styles.text6, {marginHorizontal: 0}]}>·</Text>
                <Text style={[styles.textTypo]}>12:00 - 20:00</Text>
              </View>

              <View style={[styles.parentFlexBox]}>
                <Feather style={[styles.iconLayout]} name="phone" size={15} color={COLORS.brandNeutral900}/>
                <Text style={[styles.textTypo]}>6688 6688</Text>
              </View>

              <View style={[styles.parentFlexBox]}>
                <MaterialCommunityIcons style={[styles.iconLayout]}  name="web" size={16} color={COLORS.brandNeutral900} />
                <Text style={[styles.textTypo]}>https://www.sunandmonhk.com</Text>
              </View>

              <View style={[styles.parentFlexBox]}>
                <Ionicons name="pricetag-outline" size={15} color={COLORS.brandNeutral900} />
                <Text style={[styles.text4, styles.textTypo]}>$300+</Text>
              </View>
            </View>

          </View>

          <View style={{ paddingBottom: 100 }} />
        </View>
      </ScrollView>

      <View style={STYLES.bottomSheetContainer}>
        <View style={styles.bottomText}>
          <Text style={styles.text11}>最早可預約</Text>
          <Text style={styles.text12}>今天 12:00</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={[STYLES.buttonPrimaryContainer, { flex: 1}]}>
          <Text style={[STYLES.buttonPrimaryText, STYLES.buttonPrimaryTextMd]}>
            {t('shopDetailScreen.bookNow')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shopImage: {
    aspectRatio: 353/265,
  },
  shopName: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro",
    color: COLORS.brandNeutral900,
    textAlign: "left"
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 26,
  },
  badge: {
    width: 24,
    height: 24,
  },
  parentFlexBox: {
    gap: 10,
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: 'center',
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  textTypo: {
    fontSize: 14,
    color: COLORS.brandNeutral900,
  },
  text: {
    fontSize: 16,
    textAlign: "left",
    color: "#283237",
    fontFamily: "SF Pro",
    fontWeight: "700",
    lineHeight: 22,
    alignSelf: "stretch"
  },
  locationOnIcon: {
    overflow: "hidden"
  },
  locationOnParent: {
    alignSelf: "stretch"
  },
  group: {
    width: 234,
    gap: 8,
    alignItems: "center",
    flexDirection: "row"
  },
  text4: {
    fontWeight: "700",
  },
  frameGroup: {
    gap: 20,
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text5: {
    fontWeight: "500",
    lineHeight: 22,
    fontSize: 12
  },
  iconParent: {
    gap: 4,
    alignItems: 'center',
    flexDirection: "row",
  },
  text6: {
    color: "#83939c",
    fontFamily: "SF Pro",
    fontWeight: "500",
    // lineHeight: 22,
  },
  frameContainer: {
    justifyContent: "center",
    position: 'absolute',
    right: 0,
  },
  groupParent: {
    width: "100%",
    gap: 20,
    flex: 1,
    alignSelf: "stretch"
  },

  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text11: {
    fontSize: 16,
    color: COLORS.brandNeutral500,
  },
  text12: {
    color: COLORS.brand,
    fontWeight: '700',
    fontSize: 16,
  }
});