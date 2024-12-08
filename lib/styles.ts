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
    padding: 5,
  },
  buttonPrimaryContainer: {
    flex: 1,
    borderColor: COLORS.brand,
    borderWidth: 2,
    backgroundColor: COLORS.brand,
    borderRadius: 8,
    width: '100%',
  },
  buttonPrimaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.white100,
    textAlign: 'center',
    padding: 4,
  },
  buttonPrimaryTextMd: {
    fontSize: 16,
    padding: 12,
  },
  roundedHoverButton: {
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
  bottomSheetContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: -8
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderRadius: 16,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    gap: 16,
    alignItems: "center"
  },
});

export default STYLES;