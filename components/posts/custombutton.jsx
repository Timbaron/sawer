import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../constants";

const FollowButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.followButton} onPress={onPress}>
      <Text style={styles.followButtonText}>Following</Text>
    </TouchableOpacity>
  );
};

const UnFollowButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.unfollowButton} onPress={onPress}>
      <Text style={styles.unfollowButtonText}>Unfollow</Text>
    </TouchableOpacity>
  );
};
const Custombutton = ({ following, onPress }) => {
  return <View>{following ? <UnFollowButton onPress={onPress} /> : <FollowButton onPress={onPress} />}</View>;
};

export default Custombutton;

const styles = StyleSheet.create({
  followButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontFamily: FONT.bold,
  },
  unfollowButton: {
    backgroundColor: "#FFFFFF",
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  unfollowButtonText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
});
