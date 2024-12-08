import * as React from "react";
import {Text, StyleSheet, Image, View, Pressable, TouchableOpacity} from "react-native";
import {useTranslation} from "react-i18next";
import {Entypo, Ionicons} from "@expo/vector-icons";
import {COLORS} from "../lib/colors";

const ShopListHeader = () => {

  const { t } = useTranslation();

  return (
    <View style={styles.frameParent}>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>
          {t('shopListsHeader.nearby-recommendation')}
        </Text>
        <View style={[styles.iconParent, styles.parentFlexBox]}>
          <Ionicons name="location-outline" size={15} color={COLORS.brandNeutral500} />
          <Text style={[styles.text1, styles.textTypo]}>
            {t('areas.causewayBay')}
          </Text>
          <Entypo name="chevron-small-down" size={16} color={COLORS.brandNeutral500} />

        </View>
      </View>
      <TouchableOpacity style={styles.filter3}>
        <Image style={styles.frameChild} resizeMode="cover" source={require('../assets/images/icons/filter.png')} />
      </TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row"
  },
  textTypo: {
    textAlign: "left",
    fontFamily: "SF Pro",
    fontWeight: "700",
    lineHeight: 22
  },
  text: {
    fontSize: 16,
    color: "#283237"
  },
  icon: {
    width: 8,
    height: 12
  },
  text1: {
    fontSize: 12,
    color: COLORS.brandNeutral500,
  },
  frameChild: {
    width: 24,
    height: 24
  },
  iconParent: {
    gap: 6
  },
  parent: {
    gap: 25
  },
  icon1: {
    height: "100%",
    width: "100%"
  },
  filter3: {
    width: 24,
    height: 24
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  }
});

export default ShopListHeader;
