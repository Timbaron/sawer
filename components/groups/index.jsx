import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { groups } from '../../constants/groups';
import Group from './group';

const Groups = () => {
  return (
    <FlatList
      data={groups}
      renderItem={({ item }) => <Group group={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={styles.lists}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default Groups

const styles = StyleSheet.create({
  lists: {
    height: 100,
    justifyContent: "space-between",
    gap: 7,
    marginTop: 10
  },
})