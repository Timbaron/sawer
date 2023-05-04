import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { posts } from "../../constants/posts";

import PostCategories from "./categories";
import Post from "./Post";

const Posts = () => {
  return (
    <View style={{ flex: 1 }}>
      {
        posts.map((post) => {
          return <Post key={post.id} post={post} />
        })
      }
    </View>
  );
};

export default Posts;


