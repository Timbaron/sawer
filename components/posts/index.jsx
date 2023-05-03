import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { Categories } from '../../constants/postcategories';
import PostCategories from './categories';

const Posts = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts')
  return (
    <View>
      <PostCategories categories={Categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Text>Posts</Text>
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({})