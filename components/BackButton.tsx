import * as React from "react";
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

interface IProps {
  absolute?: boolean;
  style?: StyleProp<ViewStyle>;
}

const BackButton = (props: IProps) => {
  if (router.canGoBack()) {
    return (
      <TouchableOpacity activeOpacity={0.8}
                        style={[styles.parent, props.absolute ? styles.parentAbs : undefined, props.style]}
                        onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black"/>
      </TouchableOpacity>);
  }
  return null;
};

const styles = StyleSheet.create({
  parent: {
    height: 38,
    width: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0,
    }
  },
  parentAbs: {
    position: 'absolute',
  }
});

export default BackButton
