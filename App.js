import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [posters, setPosters] = useState([
    {
      id: 1,
      name: "Tam Long Trieu Nghia",
      image: require("./assets/iu1.png"),
      likeCount: 100,
      avatar: require("./assets/ava1.jpg")
    },
    {
      id: 2,
      name: "Nguoi Anh Hung Tham Lang",
      image: require("./assets/iu2.jpg"),
      likeCount: 1000,
      avatar: require("./assets/ava2.jpg")
    },
    {
      id: 3,
      name: "Soai ca tu mot hanh tinh khac den",
      image: require("./assets/iu3.jpg"),
      likeCount: 999,
      avatar: require("./assets/ava2.jpg")
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {/*Header */}
      <View style={styles.headerContainer}>
        <View style={{ width: 27 }} />
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
          }}
          style={{
            flex: 1,
            width: null,
            height: 44,
          }}
          resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>
      {/*Poster*/}
      <FlatList
        data={posters}
        renderItem={({ item }) => (
          <View>

            {/*Avatar wrapper*/}
            
              <View style={styles.avatarWrapper}>
                <Image
                  source={item.avatar}
                  style={styles.avatarImage}
                  resizeMode="contain"
                />
                <Text style={styles.avatarName}>{item.name}</Text>
              </View>         

            {/*Poster*/}
            <TouchableOpacity onPress={()=>{Alert.alert('Thay roi nhe! :3')}}>
            <View style={styles.imageWrapper}>
              <Image
                source={item.image}
                style={styles.imagePoster}
                resizeMode="cover"
              />
            </View>
            </TouchableOpacity>

            {/*Interact wrapper*/}
            <View style={styles.interactWrapper}>
              <Feather
                style={styles.interactIcon}
                name="heart"
                size={27}
                color="black"
                onPress={()=>Alert.alert('Loved')}               
              />
              <Feather
                style={styles.interactIcon}
                name="message-square"
                size={27}
                color="black"
              />
              <Feather
                style={styles.interactIcon}
                name="share"
                size={27}
                color="black"
              />
            </View>
            <Text style={{marginBottom:10}}>{item.likeCount} likes</Text>
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f6fa",
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
    marginHorizontal: 12,
  },
  avatarImage: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  avatarName: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
  },
  imageWrapper: {
    height: 300,
  },
  imagePoster: {
    flex: 1,
    width: null,
    height: null,
  },
  interactWrapper: {
    flex: 1,
    flexDirection: "row",
    marginVertical:15
  },
  interactIcon: {
    marginLeft: 10,
  },
});
