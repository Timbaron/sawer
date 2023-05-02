import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Group = ({group}) => {
  return (
    <View>
      <Text>{group.title}</Text>
    </View>
  )
}

export default Group

const styles = StyleSheet.create({})