import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  I18nManager,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import i18n from "../localization/translations";

import { useEffect, useState } from "react";
import Offers from "../screens/offers/Offers";
import Retails from "../screens/retails/Retails";
export default function HomeNavigation() {
  const [locales, setLocales] = useState(i18n.locale);
  const changeLanguage = (lang) => {
    i18n.locale = lang;
    setLocales(lang);
    return lang;
  };
  useEffect(() => {
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
  }, []);

  // console.log(locales)
  console.log(i18n.t("home"));
  const { height } = useWindowDimensions();
  const tabBarStyle = {
    backgroundColor: "#fff",
    height: height < 450 ? 40 : "8%",
  };
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: tabBarStyle,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "#0000",
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: "#072040",
          height: 110,
        },
      }}
      //   backBehavior="history"
      sceneContainerStyle={{ backgroundColor: "#FFF" }}
      initialRouteName="Home"
    >
      <Screen
        name="Profile"
        component={Profile}
        initialParams={{ changeLanguage: changeLanguage, locales: locales }}
        options={({ route }) => ({
          tabBarStyle: tabBarStyle,
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                direction: i18n.locale === "ar" ? "rtl" : "ltr",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                }}
              >
                <View style={{ position: "relative", backgroundColor: "#000" }}>
                  <Octicons
                    style={{ position: "absolute", zIndex: 2, left: 3 }}
                    name="dot-fill"
                    size={15}
                    color="#3EBDAC"
                  />
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="#fff"
                    style={{ backgroundColor: "#072040" }}
                  />
                </View>
                <AntDesign name="hearto" size={24} color="#fff" />
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "400",
                  marginRight: 70,
                }}
              >
                {i18n.t("profile")}
              </Text>

              <View></View>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={[styles.parent]}>
              {focused ? (
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="#072040"
                />
              ) : (
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color="#C9C9C9"
                />
              )}
              <Text
                style={[
                  styles.titleStyle,
                  focused && { fontWeight: "bold", color: "#072040" },
                ]}
              >
                {i18n.t("profile")}
              </Text>
            </View>
          ),
        })}
      />

      <Screen
        name="Offers"
        component={Offers}
        options={({ route }) => ({
          tabBarStyle: tabBarStyle,
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                direction: i18n.locale === "ar" ? "rtl" : "ltr",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                }}
              >
                <View style={{ position: "relative", backgroundColor: "#000" }}>
                  <Octicons
                    style={{ position: "absolute", zIndex: 2, left: 3 }}
                    name="dot-fill"
                    size={15}
                    color="#3EBDAC"
                  />
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="#fff"
                    style={{ backgroundColor: "#072040" }}
                  />
                </View>
                <AntDesign name="hearto" size={24} color="#fff" />
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "400",
                  marginRight: 70,
                }}
              >
                {i18n.t("offers")}
              </Text>

              <View></View>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={[styles.parent]}>
              <Image
                style={{ width: 24, height: 24, opacity: focused ? 1 : 0.2 }}
                source={require("../assets/discount-outline.png")}
              />
              <Text
                style={[
                  styles.titleStyle,
                  focused && { fontWeight: "bold", color: "#072040" },
                ]}
              >
                {i18n.t("offers")}
              </Text>
            </View>
          ),
        })}
      />
      <Screen
        name="Retail"
        component={Retails}
        options={({ route }) => ({
          tabBarStyle: tabBarStyle,
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                direction: i18n.locale === "ar" ? "rtl" : "ltr",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                }}
              >
                <View style={{ position: "relative", backgroundColor: "#000" }}>
                  <Octicons
                    style={{ position: "absolute", zIndex: 2, left: 3 }}
                    name="dot-fill"
                    size={15}
                    color="#3EBDAC"
                  />
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="#fff"
                    style={{ backgroundColor: "#072040" }}
                  />
                </View>
                <AntDesign name="hearto" size={24} color="#fff" />
              </View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                  fontWeight: "400",
                  marginRight: 70,
                }}
              >
                {i18n.t("retail")}
              </Text>

              <View></View>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={[styles.parent]}>
              {focused ? (
                <Ionicons name="pricetag-sharp" size={24} color="#072040" />
              ) : (
                <Ionicons name="pricetag-outline" size={24} color="#C9C9C9" />
              )}
              <Text
                style={[
                  styles.titleStyle,
                  focused && { fontWeight: "bold", color: "#072040" },
                ]}
              >
                {i18n.t("retail")}
              </Text>
            </View>
          ),
        })}
      />
      <Screen
        name="Home"
        component={Home}
        initialParams={{ locales: locales }}
        options={{
          headerTitle: (props) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                }}
              >
                <View style={{ position: "relative", backgroundColor: "#000" }}>
                  <Octicons
                    style={{ position: "absolute", zIndex: 2, left: 3 }}
                    name="dot-fill"
                    size={15}
                    color="#3EBDAC"
                  />
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="#fff"
                    style={{ backgroundColor: "#072040" }}
                  />
                </View>
                <AntDesign name="hearto" size={24} color="#fff" />
              </View>
              <Image
                resizeMode="center"
                style={{ width: 35, height: 62, marginRight: 40 }}
                source={require("../assets/Group-1791.png")}
              />

              <Ionicons name="ios-search-outline" size={24} color="#fff" />
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={[styles.parent]}>
              {focused ? (
                <MaterialIcons name="home" size={30} color="#072040" />
              ) : (
                <SimpleLineIcons name="home" size={24} color="#C9C9C9" />
              )}
              <Text
                style={[
                  styles.titleStyle,
                  focused && { fontWeight: "bold", color: "#072040" },
                ]}
              >
                {" "}
                {i18n.t("home")}
              </Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  parent: {
    alignItems: "center",
  },
  borderTop: {
    borderTopWidth: 2,
    borderTopColor: "#fff",
    width: "100%",
    paddingTop: 5,
  },
  iconStyle: {
    color: "#fff",
  },
  titleStyle: {
    color: "#C9C9C9",
  },
  numberCard: {
    position: "absolute",
    zIndex: 2,
    fontSize: 18,
  },
  numperCardnotFoucs: {
    color: "#fff",
    bottom: "60%",
  },
});
