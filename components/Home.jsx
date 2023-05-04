import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Stories, Groups, Posts, Footer } from "./index";
import { Categories } from "../constants/postcategories";
import PostCategories from "./posts/categories";
import { Allposts } from "../constants/posts";


const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [posts, setPosts] = useState(Allposts);

  useEffect(() => {
    if (activeCategory === "All Posts") {
      setPosts(Allposts);
    } else {
      const filteredPosts = Allposts.filter(
        (post) => post.category.toLowerCase() === activeCategory.toLowerCase()
      );
      setPosts(filteredPosts);
    }
  }, [activeCategory]);


  return (
    <View>
      <Stories />
      <Groups />
      <PostCategories
        categories={Categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Posts posts={posts} />
      
    </View>
  );
};

export default Home;

