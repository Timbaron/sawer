import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const GroupDetails = ({ group }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={group.banner} style={styles.image} /> */}
        <Text>Image</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default GroupDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5
  },
  imageContainer: {
    backgroundColor: 'red',
    height: "100%",
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    // height: "70%",
    // width: "70%",
    // resizeMode: "contain",
  },
  boxContainer: {
    height: "70%",
    width: "80%",
    backgroundColor: "white",
    // borderRadius: 10,
    // position: "absolute",
    // bottom: 10,
  },
});
