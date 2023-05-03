import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FONT, COLORS } from "../../constants";

const Group = ({ group }) => {
  return (
    <TouchableOpacity style={styles.mainView}>
      <ImageBackground source={group.banner} style={styles.backgroundImage}>
        <View style={styles.titleView}>
          <Text style={{ color: "white", fontFamily: FONT.bold}}>{group.title}</Text>
        </View>
        <View style={styles.memberView}>          
            <Text style={{ color: "white", fontFamily: FONT.bold }}>
              {(group.totalMembers / 1000).toFixed(1) + "k"}{" "} Members
            </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Group;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: 150,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: COLORS.primary,
    padding: 1,
    opacity: 0.6,
  },
  memberView: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    backgroundColor: COLORS.secondary4,
    opacity: 0.6,
    padding: 1,
  },
});
