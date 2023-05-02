import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stories, Groups, Posts} from './index'

const Home = () => {
  return (
    <View>
      <Stories />
      <Groups />
      <Posts />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})