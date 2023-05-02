import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { stories } from "../../constants/stories";
import Story from "./story";
import Icon from "react-native-vector-icons/FontAwesome";

const Stories = () => {
  return (
    <FlatList
      data={stories}
      renderItem={({ item }) => <Story story={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={styles.lists}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={listHeader}
    />
  );
};

const listHeader = (item) => {
  const onAddStoryPress = () => {
    console.log("Add a new story");
  };
  const onMyStoryPress = () => {
    console.log("View my story");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onMyStoryPress}>
      <Image source={stories[0].image[1]} style={styles.image} />
      <TouchableOpacity onPress={onAddStoryPress} style={styles.icon}>
        <Icon name="plus" size={10} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Stories;

const styles = StyleSheet.create({
  lists: {
    height: 80,
    justifyContent: "space-between",
    gap: 7,
  },
  image: {
    width: 60,
    height: 70,
    resizeMode: "cover",
    borderRadius: 10,
  },
  container: {
    width: 60,
    height: 70,
  },
  image: {
    width: 60,
    height: 70,
    resizeMode: "cover",
    borderRadius: 10,
  },
  icon: {
    position: "absolute",
    bottom: -10,
    alignSelf: "center",
    width: 20,
    height: 20,
    borderRadius: 15 / 2,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
