import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const ScreenHeaderRight = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Feather name="search" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Avatarcontainer} onPress={onPress}>
        <Image style={styles.avatar} source={{uri: 'https://dummyimage.com/600x400/000/fff'}} />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    width: 100,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  button: {
    backgroundColor: COLORS.secondary6,
    borderRadius: 50,
    padding: 5,
  },
  Avatarcontainer: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
});
