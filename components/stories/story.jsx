import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ImageWithIcon = ({ onPress, story }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={story.image[story.image.length - 1]} style={styles.image} />
      <Image source={story.image[0]} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 70,
  },
  image: {
    width: 60,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10
  },
  icon: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    width: 20,
    height: 20,
    borderRadius: 15/2,
    backgroundColor: 'white',
  },
});

export default ImageWithIcon;
