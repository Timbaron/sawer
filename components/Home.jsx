import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stories, Groups, Posts, Footer } from "./index";
import { Categories } from "../constants/postcategories";
import PostCategories from "./posts/categories";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  return (
    <View>
      <Stories />
      <Groups />
      <PostCategories
        categories={Categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Posts />
      <Footer />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
