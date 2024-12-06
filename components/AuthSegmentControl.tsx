import * as React from "react";
import {Text, StyleSheet, View, Pressable} from "react-native";
import {COLORS} from "../lib/colors";
import {router} from "expo-router";

export interface AuthSegmentControlProps {
  active: 'login' | 'register';
}

const AuthSegmentControl = (props: AuthSegmentControlProps) => {

  if (props.active === 'login') {
    return (
      <View style={styles.frameParent}>
        <View  style={[styles.container, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>登入</Text>
        </View>
        <Pressable onPress={() => router.replace('/(auth)/register')} style={[styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>註冊</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={styles.frameParent}>
        <Pressable style={styles.wrapperFlexBox} onPress={() => router.replace('/(auth)/login')}>
          <Text style={[styles.text, styles.textTypo]}>登入</Text>
        </Pressable>
        <View style={[styles.container, styles.wrapperFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>註冊</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 22,
    fontSize: 16
  },
  wrapperFlexBox: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 999,
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  text: {
    color: COLORS.brand,
  },
  text1: {
    color: "#fff"
  },
  container: {
    backgroundColor: COLORS.brand,
  },
  frameParent: {
    borderRadius: 99,
    backgroundColor: "#e8e9ee",
    width: "100%",
    padding: 4,
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  }
});

export default AuthSegmentControl;
