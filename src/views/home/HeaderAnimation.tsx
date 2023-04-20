import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HeaderAnimation() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/header_animation.png')}
        style={styles.headerImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 195,
  },
  headerImg: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
  },
});
