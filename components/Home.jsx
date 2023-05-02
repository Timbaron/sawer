import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stories, Groups, Posts, Footer} from './index'

const Home = () => {
  return (
    <View>
      <Stories />
      <Groups />
      <Posts />
      <Footer />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})