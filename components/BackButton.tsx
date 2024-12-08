import * as React from "react";
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import STYLES from "../lib/styles";

interface IProps {
  absolute?: boolean;
  style?: StyleProp<ViewStyle>;
}

const BackButton = (props: IProps) => {
  if (router.canGoBack()) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[STYLES.roundedHoverButton, props.absolute ? styles.parentAbs : undefined, props.style]}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black"/>
      </TouchableOpacity>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  parentAbs: {
    position: 'absolute',
    zIndex: 1,
  }
});

export default BackButton
