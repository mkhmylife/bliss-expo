import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import translationZhHk from "../locales/zh-HK.json";
import translationEnUs from "../locales/en-US.json";

const resources = {
  "en-US": { translation: translationEnUs },
  "zh-HK": { translation: translationZhHk },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem("language");

  if (!savedLanguage) {
    savedLanguage = 'zh-HK'
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v4",
    resources,
    lng: savedLanguage,
    fallbackLng: "zh-HK",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
