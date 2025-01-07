import {Image, SafeAreaView, View} from "react-native";

export default function Header() {

  return (
    <SafeAreaView style={{ backgroundColor: '#FFF' }}>
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12 }}>
        <Image
          style={{ width: 58.49, height: 16 }}
          source={require('../assets/images/logo.png')} />
      </View>
    </SafeAreaView>
  )

}