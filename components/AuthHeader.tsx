import {Image, StyleSheet, View} from "react-native";
import AuthSegmentControl, {AuthSegmentControlProps} from "./AuthSegmentControl";
import BackButton from "./BackButton";

interface IProps {
  showSegmentControl: boolean;
  active?: AuthSegmentControlProps['active'];
}

export default function AuthHeader(props: IProps) {

  return (
    <View>
      <BackButton absolute={true} style={{ marginTop: 12 }} />
      <View style={styles.header}>
        <Image
          style={{ width: 124.3, height: 34, marginBottom: 12 }}
          source={require('../assets/images/logo.png')} />
      </View>
      {props.showSegmentControl && props.active ? (
        <AuthSegmentControl active={props.active} />
      ) : null}
    </View>
  )

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
    justifyContent: 'center',
  }
});