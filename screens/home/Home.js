import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  FlatList,
  TouchableHighlight,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  I18nManager,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import axios from "axios";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/Vector3.png";
import Vector4 from "../../assets/Vector4.png";
import i18n from "../../localization/translations";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSectors,
  getAllStores,
  getMyOffers,
  getMyServiceTypes,
} from "../../redux/Slicer/StoreSlice";
import { useNavigation } from "@react-navigation/native";
const Home = ({}) => {
  const navigation = useNavigation();
  const [headers, setHeaders] = useState({
    headers: {
      "Accept-Language": "en",
    },
  });
  const {
    sectorsData,
    storesData,
    myoffersData,
    myservicetypesData,
    loading,
    error,
  } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const [storesFilter, setStoresFilter] = useState([]);
  const [loanSeeLess, setloanSeeLess] = useState(4);
  const [sectorsSeeAll, setSectorsSeeAll] = useState(4);
  useEffect(() => {
    dispatch(getAllSectors(headers));
    dispatch(getAllStores(headers));
    setStoresFilter(storesData);
    dispatch(getMyOffers(headers));
    dispatch(getMyServiceTypes(headers));
  }, [headers]);
  // console.log(i18n._locale)
  useEffect(() => {
    if (i18n.locale === "en") {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
    } else {
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
    }
  }, [i18n.locale]);

  return loading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={60} color="#072040" />
    </View>
  ) : (
    <FlatList
      data={[1]}
      style={{ direction: i18n.locale === "ar" ? "rtl" : "ltr" }}
      renderItem={() => (
        <View style={styles.container}>
          <View style={styles.headerHome}></View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              position: "absolute",
              top: 15,
            }}
          >
            <View style={styles.headerContent}>
              <Image
                style={{ width: 35, height: 39 }}
                source={require("../../assets/writing.png")}
              />
              <View>
                <Text style={styles.writingHeader}>
                  {i18n.t("getYourLimit")}
                </Text>
                <Text style={styles.writingText}>
                  {i18n.t("completeYourInfo")}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.vectorImgSection}>
            <Image
              style={[styles.vectorImg, { width: width - 40 }]}
              source={require("../../assets/Vector.png")}
            />
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                position: "absolute",
                top: 33,
                gap: 12,
              }}
            >
              <Image
                style={{ width: 74, height: 73 }}
                source={require("../../assets/adidas.png")}
              />
              <Text style={{ fontSize: 16, fontWeight: "400", color: "black" }}>
                {i18n.t("checkOutLatestOffers")}
              </Text>
              <SimpleLineIcons name="arrow-right" size={15} color="white" />
            </View>
            <ImageBackground
              source={require("../../assets/arrow-backgound.png")}
            >
              <View style={styles.topBrandsRetail}>
                <Text style={styles.topBrandsText}>
                  {i18n.t("topBrandsInRetail")}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    setSectorsSeeAll(
                      sectorsSeeAll === 4 ? sectorsData.length : 4
                    )
                  }
                >
                  <Text style={styles.viewAllText}>
                    {sectorsSeeAll === 4
                      ? i18n.t("viewAll")
                      : i18n.t("seeLess")}
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <FlatList
            horizontal
            style={styles.flatListSectors}
            data={sectorsData.slice(0, sectorsSeeAll)}
            renderItem={({ item, index }) => (
              // console.log(sectors),
              <View style={{ margin: 7 }} key={index}>
                <TouchableOpacity
                  onPress={() =>
                    setStoresFilter(
                      storesData.filter((items) =>
                        items.sector.title.includes(item.label)
                      )
                    )
                  }
                >
                  <Text style={{ fontSize: 14, fontWeight: "400" }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <FlatList
            horizontal
            style={[styles.flatListSectors, { marginTop: 30 }]}
            data={storesFilter || storesData}
            renderItem={({ item, index }) => (
              <View style={styles.flatListSectorsItem} key={index}>
                {/* <Text>{item.thumbnail}</Text> */}
                <Image
                  source={{ uri: item.thumbnail }}
                  width={74}
                  height={58}
                />
              </View>
            )}
          />

          <View style={styles.serviceTypesList}>
            <View style={styles.topBrandsRetail}>
              <Text style={styles.topBrandsText}>
                {i18n.t("requestAdditionalLoan")}
              </Text>
              <TouchableOpacity
                onPress={() => setloanSeeLess(loanSeeLess === 2 ? 4 : 2)}
              >
                <Text style={styles.viewAllText}>
                  {loanSeeLess === 2 ? i18n.t("seeAll") : i18n.t("seeLess")}
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              numColumns={2}
              // contentContainerStyle={{ gap: 8, marginTop: 16 }}
              columnWrapperStyle={{
                marginTop: 12,
                justifyContent: "space-between",
              }}
              data={myservicetypesData.slice(0, loanSeeLess)}
              renderItem={({ item, index }) => {
                let secondRow = index % 2 == 0;
                let thirdRows = index % 3 == 0;
                let fourthRows = index % 4 == 2;
                return (
                  <ImageBackground
                    source={
                      fourthRows
                        ? Vector4
                        : secondRow
                        ? Vector2
                        : thirdRows
                        ? Vector3
                        : Vector1
                    }
                    style={styles.serviceTypesListView}
                    key={index}
                  >
                    <Text style={styles.serviceTypesListTilte}>
                      {item.name}
                    </Text>
                  </ImageBackground>
                );
              }}
            />
          </View>
          <View style={styles.serviceTypesList}>
            <View style={styles.topBrandsRetail}>
              <Text style={styles.topBrandsText}>
                {i18n.t("offersSelectForYou")}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Offers")}>
                <Text style={styles.viewAllText}>{i18n.t("seeAll")}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={myoffersData.slice(0, 2)}
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
      )}
    />
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  headerHome: {
    transform: [{ scaleX: 1.3 }],
    height: 150,
    backgroundColor: "#072040",
    // width:950,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  writingHeader: {
    color: "#FFC709",
    fontSize: 16,
    fontWeight: "400",
  },
  writingText: {
    color: "#FFC709",
    fontSize: 12,
    fontWeight: "300",
    marginTop: 3,
  },
  headerContent: {
    flexDirection: "row",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#FFC709",
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    gap: 8,
    justifyContent: "flex-start",
  },
  vectorImgSection: {
    alignSelf: "center",
    position: "relative",
    bottom: 63,
  },
  vectorImg: {
    // width: 325,
    height: 138,

    borderWidth: 2,
    borderColor: "#3EBDAC",
    borderRadius: 15,
  },
  topBrandsText: {
    color: "#072040",
    fontSize: 18,
    fontWeight: "700",
  },
  viewAllText: {
    color: "#072040",
    fontSize: 12,
    fontWeight: "400",
  },
  topBrandsRetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 17,
    // marginHorizontal: 20,
  },
  flatListSectors: {
    position: "relative",
    bottom: 50,
    flexGrow: 0.2,
    marginHorizontal: 20,
    // borderWidth:1,
  },
  flatListSectorsItem: {
    marginLeft: 23,
  },
  serviceTypesList: {
    marginHorizontal: 20,
    // justifyContent:'space-between',
    position: "relative",
    bottom: 40,
  },
  serviceTypesListView: {
    width: 156,
    height: 56,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  serviceTypesListTilte: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
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
