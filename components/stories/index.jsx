import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { stories } from "../../constants/stories";
import Story from './story';

const Stories = () => {
  return (
    <FlatList
      data={stories}
      renderItem={({ item }) => <Story story={item}/>}
      keyExtractor={(item) => item.id}
      horizontal
    />
  );
};

export default Stories;

const styles = StyleSheet.create({});
