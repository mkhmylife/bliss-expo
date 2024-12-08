import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Image} from 'expo-image';

export default function PromoBanner() {

  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, {flex: 1, }]}>
      <Image
        style={styles.imageContainer}
        source={require('../assets/images/demo-promo-banner.png')} />
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0,
    }
  },
  imageContainer: {
    aspectRatio: 746 / 348,
    objectFit: 'cover',
    borderRadius: 12,
  },
});