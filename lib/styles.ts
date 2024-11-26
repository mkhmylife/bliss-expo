import {StyleSheet} from "react-native";
import {COLORS} from "./colors";

const STYLES = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    borderColor: COLORS.brand,
    borderWidth: 2,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.brand,
    textAlign: 'center',
    padding: 4,
  },
  buttonPrimaryContainer: {
    flex: 1,
    borderColor: COLORS.brand,
    borderWidth: 2,
    backgroundColor: COLORS.brand,
    borderRadius: 8,
  },
  buttonPrimaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white100,
    textAlign: 'center',
    padding: 4,
  },
});

export default STYLES;