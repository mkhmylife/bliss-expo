import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginBox from "../components/LoginBox";
import ShopListHeader from "../components/ShopListHeader";
import ShopCard from "../components/ShopCard";
import PromoBanner from "../components/PromoBanner";
import * as React from "react";

export default function App() {
  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior={'automatic'}>
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            style={{ width: 88, height: 24 }}
            source={require('../assets/images/logo.png')} />
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.icon}>
              <Image resizeMode="cover" source={require('../assets/images/icons/user.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Image resizeMode="cover" source={require('../assets/images/icons/hamburger.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <LoginBox />

        <View style={{ paddingTop: 30 }}>
          <PromoBanner />
          <View style={{ paddingTop: 30 }}/>
          <ShopListHeader />
          <View style={{ paddingTop: 12 }}/>
          <ShopCard />
          <View style={{ paddingTop: 28 }}/>
          <ShopCard />
        </View>

      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    width: 24,
    height: 24
  },
});
