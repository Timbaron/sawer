import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../constants";

const Category = ({ category, activeCategory, setActiveCategory }) => {
  const handleCategoryChange = () => {
    setActiveCategory(category);
  }
  return (
    <TouchableOpacity style={styles.categoryView} onPress={handleCategoryChange}>
      <Text style={styles.category(category, activeCategory)}>{category}</Text>      
    </TouchableOpacity>
  );
};

const PostCategories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <Category
          category={item}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={styles.lists}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default PostCategories;

const styles = StyleSheet.create({
  category: (category, activeCategory) => ({
    color: activeCategory === category ? COLORS.primary : COLORS.secondary4,
    fontFamily: FONT.bold,
    fontSize: activeCategory === category ? SIZES.small + 4 : SIZES.small + 2,
  }),
  categoryView: {
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  lists: {
    height: 100,
    justifyContent: "space-between",
    gap: 7,
    marginTop: 10,
  },
});
