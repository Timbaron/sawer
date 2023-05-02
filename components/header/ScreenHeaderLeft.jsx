import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '../../constants'

const ScreenHeaderLeft = () => {
  return (
    <View>
      <Text style={styles.containerText}>SAWER</Text>
    </View>
  )
}

export default ScreenHeaderLeft

const styles = StyleSheet.create({
  containerText: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    letterSpacing: SIZES.small / 5,
    color: COLORS.primary
  }
})