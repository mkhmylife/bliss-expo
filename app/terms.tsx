import {Image, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View} from "react-native";
import * as React from "react";
import BackButton from "../components/BackButton";
import RenderHtml from 'react-native-render-html';
import {COLORS} from "../lib/colors";
import AuthHeader from "../components/AuthHeader";

const source = {
  html: `
<h1>預約須知</h1>
<ul>
  <li>預約須提供名稱、電話、電郵地址作登記；</li>
  <li>請以 Whatsapp 進行預約；</li>
  <li>師傅及房間會因應項目及預約情況而分配；</li>
  <li>如二人同行之預約，本公司會優先安排雙人房間, 如顧客需要獨立房間，請在預約時與我們客戶服務說明所需以作安排；</li>
  <li>如客人需要指定師傅或房間需視乎實際情況，如情況許可我們會盡量優先安排；</li>
  <li>所有療程須預先支付全額費用；</li>
  <li>收到預約確認訊息後方為成功預約；</li>
  <li>敬請提早5-10分鐘到達，遲到將會扣減按摩時間並會扣取原定預約療程費用；</li>
  <li>如有任何更改/取消，請提前WhatsApp 或致電通知我們 ( 星期一至五: 24小時前, 星期六日及公眾假期: 48小時前 ) 否則視為缺席；</li>
  <li>留位時間為 15 分鐘，如客人未有到店而未有通知將視為缺席；</li>
  <li>客人將只能預約往後不多於一次療程（VIP 客戶可預約不超過三次往後日子療程）以保障其他客戶；</li>
  <li>抱歉現階段未能接受以下人士之預約：</li>
  <li>孕婦及病人、嚴重皮膚病，心臟病、高血壓、視網膜脫落、頸背嚴重損傷者 、嚴重受傷、重病或接受手術後之人士 (如客户於預約時有所隱瞞，後果一律由客戶自行承擔)</li>
  <li>建議於療程前一小時內不進食</li>
  <li>請於療程前告知你的任何傷患及健康狀況</li>
  <li>按摩後請保充適量水份</li>
  <li>如選用香薰精油，客人於療程前應自行核實任何有關資訊或尋求專業人士意見。過敏症患者、皮膚敏感者、呼吸系統敏感者、高血壓患者、低血壓患者如參加此療程，須自行承擔所有風險。(本店另有無香料有機荷荷巴油提供與對香薰敏感之人士使用)</li>
  <li>本店不設退款。</li>
  <li>新冠肺炎應對措施：所有已預付之療程或VIP會籍如遇政府規例而需要停業而不能使用，我們將為你重新安排預約、使用限期亦相應延長而不設退款。</li>
</ul>
  `
}

export default function TermsScreen() {

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20, }}>
        <AuthHeader showSegmentControl={false} />
        <RenderHtml
          contentWidth={width}
          source={source}
          baseStyle={{ fontSize: 16, lineHeight: 24, color: COLORS.brandNeutral900 }}
          tagsStyles={{
            h1: {fontSize: 20},
            ul: {paddingLeft: 12},
            li: {paddingLeft: 12},
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
