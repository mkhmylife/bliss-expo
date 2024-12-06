import {StyleSheet, Text, TextInput, View} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {useState} from "react";
import * as React from "react";
import {InputFieldProps} from "./InputField";

export interface PhoneInputFieldProps extends InputFieldProps {
  value: string;
  onChange: (text: string) => void;
}

export default function PhoneNumberInputField(props: PhoneInputFieldProps) {

  const [countryCode, setCountryCode] = useState<string>('852');

  return (
    <View style={styles.wfInputField}>
      <View style={styles.labelStack}>
        <Text style={styles.label}>
          <Text style={styles.text}>{props.label}</Text>
          {props.isRequired && <Text style={styles.text1}>*</Text>}
        </Text>
      </View>
      <View style={styles.textInput}>
        <PhoneInput
          // ref={phoneInputRef}
          defaultValue={props.value}
          defaultCode="HK"
          placeholder={'請輸入電話號碼'}
          layout="second"
          textContainerStyle={{backgroundColor: '#FFF'}}
          containerStyle={{backgroundColor: '#FFF', height: 48 }}
          codeTextStyle={{ height: 18, fontSize: 15, fontWeight: 'normal' }}
          countryPickerButtonStyle={{width: 50}}
          // flagButtonStyle={{backgroundColor: '#000'}}
          disableArrowIcon={true}
          textInputStyle={{width: '100%', backgroundColor: '#FFF', fontSize: 15 }}
          onChangeText={(text) => {
            props.onChange(text);
          }}
          onChangeCountry={(country) => {
            setCountryCode(country.callingCode[0]);
          }}
          autoFocus
          countryPickerProps={{
            countryCodes: ['HK', 'MO', 'CN'],
            filterProps: {
              placeholder: '選擇國家及地區',
            },
          }}
        />
      </View>
    </View>
  )

}

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
    flex: 1
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
    // height: 48,
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