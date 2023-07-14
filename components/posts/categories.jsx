import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

const PostCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <View style={styles.categoryView}>
      <TouchableOpacity onPress={() => setActiveCategory('for_you')} style={styles.lists('for_you',activeCategory, )}>
        <Text style={styles.listsText('for_you',activeCategory, )}>For You</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveCategory('following')}  style={styles.lists('following',activeCategory, )}>
        <Text style={styles.listsText('following',activeCategory, )}>Following</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostCategories;

const styles = StyleSheet.create({
  // categoryView: (category, activeCategory) => ({
  //   color: activeCategory === category ? COLORS.primary : COLORS.secondary4,
  //   fontFamily: FONT.bold,
  //   fontSize: activeCategory === category ? SIZES.small + 3 : SIZES.small + 1.6,
  // }),
  categoryView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    gap: 5,
    marginTop: 10
  },
  lists: (category, activeCategory) => ( {
    height: '100%',
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: activeCategory === category ? COLORS.secondary : COLORS.secondary4,
    borderBottomWidth: activeCategory === category ? 2 : null,

  }),
  listsText: (category, activeCategory) => ( {
    // height: '100%',
    // width: '49%',
    // justifyContent: 'center',
    // alignItems: 'center',
    color: activeCategory === category ? COLORS.primary : COLORS.secondary4,
    fontFamily: FONT.medium,
    fontSize: activeCategory === category ? SIZES.medium + 2 : SIZES.medium 
    // borderBottomWidth: activeCategory === category ? 2 : null,

  }),
});
