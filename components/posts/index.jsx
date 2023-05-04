import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import PostCategories from "./categories";
import Post from "./Post";
import { FONT } from "../../constants";

const Posts = ({ posts }) => {
  console.log(posts.length);
  return (
    <View style={{ flex: 1 }}>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })
      ) : (
        <View style={styles.noPostsContainer}>
          <Text style={styles.noPostsText}>Nobody don reason this post mata</Text>
        </View>
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  noPostsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    minHeight: 200
  },
  noPostsText: {
    fontSize: 18,
    fontFamily: FONT.bold,
  },
});
