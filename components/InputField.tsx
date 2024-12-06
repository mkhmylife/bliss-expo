import * as React from "react";
import {Text, StyleSheet, View, TextInput} from "react-native";
import {TextInputProps} from "react-native/Libraries/Components/TextInput/TextInput";

export interface InputFieldProps {
  label: string;
  isRequired?: boolean;
  textInputProps?: TextInputProps;
}

const InputField = (props: InputFieldProps) => {

  return (
    <View style={styles.wfInputField}>
      <View style={styles.labelStack}>
        <Text style={styles.label}>
          <Text style={styles.text}>{props.label}</Text>
          {props.isRequired && <Text style={styles.text1}>*</Text>}
        </Text>
      </View>
      <TextInput style={styles.textInput} {...props.textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#283237"
  },
  text1: {
    color: "#ed003d"
  },
  label: {
    fontSize: 14,
    fontFamily: "SF Pro",
    textAlign: "left",
  },
  labelStack: {
    flexDirection: "row",
    alignSelf: "stretch"
  },
  textInput: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#3a334c",
    borderWidth: 1,
    height: 48,
    alignSelf: "stretch",
    paddingHorizontal: 12,
  },
  wfInputField: {
    width: "100%",
    justifyContent: "flex-end",
    gap: 8,
    flex: 1,
    alignSelf: "stretch"
  }
});

const InputFieldStyles = styles;
export { InputFieldStyles };

export default InputField;
