import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Story = ({story}) => {
  return (
    <View>
      <Text>{story.owner}</Text>
    </View>
  )
}

export default Story

const styles = StyleSheet.create({})