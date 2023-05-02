import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FONT } from "../../constants";

const ImageWithIcon = ({ onPress, story }) => {
  const getFirstName = (fullName) => {
    const nameArray = fullName.split(" ");
    return nameArray[1];
  };
  return (
    <View style={{alignItems: "center", justifyContent: "space-between"}}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
          source={story.image[story.image.length - 1]}
          style={styles.image}
        />
        <Image source={story.image[0]} style={styles.icon} />
      </TouchableOpacity>
      <Text style={{fontFamily: FONT.medium}}>{getFirstName(story.owner)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "white",
  },
});

export default ImageWithIcon;
