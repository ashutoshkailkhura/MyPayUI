import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';

export default function UserAccount() {
  return (
    <View>
      <Text style={styles.textStyle}>UserAccount</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.dark.primary,
  },
});
