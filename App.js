import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

import HomeNavigation from "./navigation/HomeNavigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Splash"}>
          {/* Start Home Screen */}
          <Stack.Screen
            name="startApp"
            component={HomeNavigation}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    color: "#fff",
    fontFamily: "cairo-semiBold",
  },
  numberCard: {
    position: "absolute",
    zIndex: 2,
    fontFamily: "cairo-bold",
    fontSize: 18,
  },
  numperCardnotFoucs: {
    color: "#fff",
    bottom: "60%",
  },
});
