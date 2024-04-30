import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from '@hippy/react';
const styles = StyleSheet.create({
  container_style: {
    alignItems: 'center',
  },
  image_style: {
    width: 300,
    height: 180,
    margin: 16,
    borderColor: '#4c9afa',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
  },
  info_style: {
    marginTop: 15,
    marginLeft: 16,
    fontSize: 16,
    color: '#4c9afa',
  },
});
const imageUrl = 'https://user-images.githubusercontent.com/12878546/148736102-7cd9525b-aceb-41c6-a905-d3156219ef16.png';
export function ImageResizeMode() {
  return (
    <View>
      <Image
        style={[styles.image_style]}
        source={{ uri: imageUrl }}
        resizeMode={Image.resizeMode.cover}
      />
      <Image
        style={[styles.image_style]}
        source={{ uri: imageUrl }}
        resizeMode={Image.resizeMode.center}
      />
      <Image
        style={[styles.image_style]}
        source={{ uri: imageUrl }}
        capInsets={{
          top: 50,
          left: 50,
          bottom: 50,
          right: 50,
        }}
        resizeMode={Image.resizeMode.contain}
      />
    </View>
  );
}
