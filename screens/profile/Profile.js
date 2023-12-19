import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  I18nManager,
  TouchableOpacity,
  Share,
} from "react-native";
import React, { useEffect, useState } from "react";
import Svg, { Circle } from "react-native-svg";
import SelectDropdown from "react-native-select-dropdown";
// import * as Localization from 'expo-localization';
import i18n from "../../localization/translations";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {
  getAllSectors,
  getAllStores,
  getMyOffers,
  getMyServiceTypes,
} from "../../redux/Slicer/StoreSlice";
const Language = ["English", "Arabic"];
const Profile = ({
  route: {
    params: { changeLanguage, locales },
  },
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(locales);
    if (i18n.locale === "en" || locales === "en") {
      I18nManager.forceRTL(false);
    } else {
      I18nManager.forceRTL(true);
    }
  }, [i18n]);

  return (
    <View
      style={[
        styles.container,
        { direction: i18n.locale === "ar" ? "rtl" : "ltr" },
      ]}
    >
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        <Circle cx="50" cy="-215" r="200" fill="#072040" />
      </Svg>
      <View style={styles.profileSection}>
        <Text style={styles.profileSectionText}>{i18n.t("mohammedAdel")}</Text>
        <Image
          resizeMode="center"
          style={{ width: 98, height: 82 }}
          source={require("../../assets/profile-image.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          Share.share({
            message: " sharing the app link",
          })
        }
        style={styles.ShareTheApp}
      >
        <Text>{i18n.t("shareTheApp")}</Text>
      </TouchableOpacity>
      <View style={styles.changeLanguage}>
        <SelectDropdown
          data={Language}
          buttonStyle={{
            width: 90,
            marginHorizontal: 20,
            marginTop: 35,
            backgroundColor: "white",
          }}
          buttonTextStyle={{ fontSize: 13 }}
          defaultButtonText="Language"
          dropdownIconPosition="right"
          onSelect={async (selectedItem, index) => {
            if (selectedItem === "English") {
              new Promise((resolve, reject) => {
                resolve(changeLanguage("en"));
              }).then((lang) => {
                console.log("object", lang);
                const headers = {
                  headers: {
                    "Accept-Language": lang,
                  },
                };
                dispatch(getAllSectors(headers));
                dispatch(getAllStores(headers));
                dispatch(getMyOffers(headers));
                dispatch(getMyServiceTypes(headers));
                navigation.navigate("Home");
              });
            } else {
              new Promise((resolve, reject) => {
                resolve(changeLanguage("ar"));
              }).then((lang) => {
                console.log("object", lang);
                const headers = {
                  headers: {
                    "Accept-Language": lang,
                  },
                };
                dispatch(getAllSectors(headers));
                dispatch(getAllStores(headers));
                dispatch(getMyOffers(headers));
                dispatch(getMyServiceTypes(headers));
                navigation.navigate("Home");
              });
            }
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // console.log('selectedItem',selectedItem)
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // console.log('object',item)
            return item;
          }}
        />
        <Text style={styles.ShareTheApp}>{i18n.t("changeLanguage")}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal:20
  },
  profileSection: {
    marginTop: -560,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 30,
  },
  profileSectionText: {
    color: "#000",
    fontSize: 21,
    fontWeight: "400",
  },
  ShareTheApp: {
    color: "#000",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 40,
    marginHorizontal: 20,
  },
  changeLanguage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
