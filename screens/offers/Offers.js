import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Offers = () => {
  const { myoffersData, loading, error } = useSelector((state) => state.store);
  return loading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={60} color="#072040" />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={myoffersData}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View style={styles.containerCard}>
            <View style={styles.cover}>
              <ImageBackground
                source={{ uri: item.background }}
                style={styles.imageBackground}
              >
                <View style={styles.imageBackgroundHeart}>
                  <AntDesign name="hearto" size={24} color="white" />
                </View>
              </ImageBackground>
            </View>
            <View style={styles.content}>
              <Text style={styles.caption}>{item.brand.sector.title}</Text>
              <Text style={styles.subtitle}>{item.brand.title}</Text>
              <Text style={styles.caption}>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "flex-start",
  },
  containerCard: {
    position: "relative",
    bottom: 150,
    backgroundColor: "white",
    width: 155,
    height: 230,
    borderRadius: 14,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    marginHorizontal: 20,
    marginTop: 120,
  },
  cover: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: "hidden",
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  imageBackgroundHeart: {
    backgroundColor: "#A8A8A8",
    alignSelf: "baseline",
    padding: 5,
    borderRadius: 30,
    position: "relative",
    top: 50,
    left: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    width: 170,
    marginTop: 20,
    marginLeft: 20,
  },
  content: {
    position: "relative",
    bottom: 70,
    alignItems: "center",
    backgroundColor: "#fff",
    height: 132,
    width: 155,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    borderRadius: 10,
  },
  logo: {
    width: 44,
    height: 44,
  },
  caption: {
    color: "#969DA7",
    fontSize: 12,
    fontWeight: "300",
    marginTop: 12,
  },
  subtitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
  },
});
