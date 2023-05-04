import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, SIZES } from "../../constants";
import Custombutton from "./custombutton";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Post = ({ post }) => {
  console.log(post.likeCount);
  const [liked, setLiked] = useState(false);
  const [follow, setFollow] = useState(post.following);

  const handleLikePress = () => {
    setLiked(!liked);
    if (liked) {
      post.likeCount -= 1;
    } else {
      post.likeCount += 1;
    }
  };
  const handleFollowPress = () => {
    setFollow(!follow);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLHS}>
          <Image style={styles.avatar} source={post.profilePic} />
          <View>
            <Text style={{ fontSize: SIZES.small + 3, fontFamily: FONT.bold }}>
              {post.name}
            </Text>
            <Text style={{ fontSize: SIZES.small }}>{post.timePosted}</Text>
          </View>
        </View>
        <View>
          <Custombutton following={follow} onPress={handleFollowPress} />
        </View>
      </View>
      <View style={styles.content}>
        {/* <Text style={styles.contentText}>
          {post.content.length > 120
            ? post.content.substr(0, 120) + "..."
            : post.content}
        </Text> */}
        <Text style={styles.contentText}>
          {post.content.split(" ").map((word, index) => {
            if (word.startsWith("#")) {
              return (
                <Text key={index} style={{ color: COLORS.primary }}>
                  {word}{" "}
                </Text>
              );
            } else {
              return <Text key={index}>{word} </Text>;
            }
          })}
        </Text>
        {post.images && (
          <FlatList
            data={post.images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={item.image} style={{ width: 200, height: 200 }} />
            )}
            horizontal
            contentContainerStyle={styles.lists}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
      <View
        style={[styles.footer, { justifyContent: "space-around", margin: 5 }]}
      >
        {/* like button */}
        <TouchableOpacity
          onPress={handleLikePress}
          style={styles.iconContainer}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "red" : "black"}
          />
          <Text>{post.likeCount}</Text>
        </TouchableOpacity>

        {/* share count */}
        <View style={styles.iconContainer}>
          <Ionicons name="share-social-outline" size={24} color="black" />
          <Text>{post.shareCount}</Text>
        </View>

        {/* comment count */}
        <View style={styles.iconContainer}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
          <Text>{post.commentCount}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="eye" size={24} color="black" />
          <Text style={styles.iconCount}>{post.viewCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    // minHeight: 170,
    borderBottomColor: COLORS.secondary6,
    borderBottomWidth: 1,
    marginTop: 10,
    justifyContent: "space-between",
    // flexGrow: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
    height: 60,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  lists: {
    backgroundColor: "red",
    height: 320,
    marginTop: 5,
    overflow: "scroll",
  },
  headerLHS: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  content: {
    display: "flex",
    paddingHorizontal: 10,
  },
  contentText: {
    fontFamily: FONT.medium,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    gap: 3,
  },
  lists: {
    // justifyContent: "space-between",
    gap: 7,
    marginTop: 10,
  },
});
