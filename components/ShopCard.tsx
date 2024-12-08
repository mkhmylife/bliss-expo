import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Image as ExpoImage } from 'expo-image';
import STYLES from "../lib/styles";
import {router} from "expo-router";
import {Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import {COLORS} from "../lib/colors";
import PagerView from 'react-native-pager-view';

const ShopCard = () => {

  return (
    <TouchableOpacity onPress={() => router.push('/shops/1')} activeOpacity={0.8} style={styles.groupParent}>
      <View style={styles.imageContainer}>
        <ExpoImage style={[styles.shopImageContainer, styles.shopImage]} source={require('../assets/images/demo-shop.png')} />
        {/*<PagerView style={styles.shopImageContainer} initialPage={0}>*/}
        {/*  <View style={{}} key="1">*/}
        {/*    <ExpoImage style={[styles.shopImage]} source={require('../assets/images/demo-shop.png')} />*/}
        {/*  </View>*/}
        {/*  <View style={{}} key="2">*/}
        {/*    <ExpoImage style={[styles.shopImage]} source={require('../assets/images/demo-shop.png')} />*/}
        {/*  </View>*/}
        {/*</PagerView>*/}

        <TouchableOpacity
          activeOpacity={0.8}
          style={[STYLES.roundedHoverButton, styles.likeButton]}
        >
          <Feather name="heart" size={19} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.parent}>
        <View style={styles.nameContainer}>
          <Text style={styles.text}>日月. 按摩</Text>
          <ExpoImage style={styles.badge} source={require('../assets/images/icons/badge.png')} />
        </View>
        <View style={[styles.frameContainer]}>
          <View style={[styles.iconParent]}>
            <FontAwesome name="star" size={15} color={COLORS.brandNeutral900} />
            <Text style={[styles.text5, styles.textTypo]}>4.89</Text>
          </View>
          <Text style={styles.text6}>(182)</Text>
        </View>
      </View>

      <View style={styles.frameGroup}>
        <View style={[styles.parentFlexBox]}>
          <Ionicons style={[styles.locationOnIcon, styles.iconLayout]} name="location-outline" size={15} color={COLORS.brandNeutral900} />
          <Text style={[styles.textTypo]}>尖沙咀柯士甸道134號太極大樓地舖 (佐敦站D出口)</Text>
        </View>
        <View style={[styles.parentFlexBox]}>
          <Feather style={[styles.locationOnIcon, styles.iconLayout]} name="home" size={15} color={COLORS.brandNeutral900} />
          <View style={styles.group}>
            <Text style={styles.textTypo}>西營盤</Text>
            {/*<Image style={styles.frameChild2} resizeMode="cover" source="Ellipse 1.png" />*/}
            <Text style={styles.textTypo}>旺角</Text>
            {/*<Image style={styles.frameChild2} resizeMode="cover" source="Ellipse 2.png" />*/}
            <Text style={styles.textTypo}>尖沙咀</Text>
          </View>
        </View>
        <View style={[styles.parentFlexBox]}>
          <Ionicons name="pricetag-outline" size={15} color={COLORS.brandNeutral900} />
          <Text style={[styles.text4, styles.textTypo]}>$300+</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    aspectRatio: 353/265,
  },
  shopImageContainer: {
    objectFit: 'cover',
    aspectRatio: 353/265,
    borderRadius: 10,
    overflow: 'hidden',
  },
  shopImage: {
    objectFit: 'cover',
    aspectRatio: 353/265,
  },
  likeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  badge: {
    width: 20,
    height: 20,
  },
  parentFlexBox: {
    gap: 6,
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: 'center',
  },
  iconLayout: {
    height: 14,
    width: 14,
  },
  textTypo: {
    fontSize: 13,
    textAlign: "left",
    color: COLORS.brandNeutral900,
    fontFamily: "SF Pro"
  },
  groupChild: {
    top: 12,
    left: 309,
    width: 32,
    height: 32,
    position: "absolute"
  },
  frameChild: {
    width: 5,
    height: 5
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
  frameChild2: {
    width: 2,
    height: 2
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
    gap: 12,
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    width: 11,
    height: 10
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
    fontSize: 8,
    color: "#83939c",
    textAlign: "right",
    fontFamily: "SF Pro",
    fontWeight: "500",
    // lineHeight: 22,
    alignSelf: "stretch"
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
  }
});

export default ShopCard;
