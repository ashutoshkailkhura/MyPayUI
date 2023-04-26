import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function SectionMyUPIId() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.upiBlock}>
        <Image
          source={require('../../../assets/ic_copy.png')}
          style={styles.upiLogo}
        />
        <Text selectable={true} style={styles.upiText}>
          ashi3377@SBI
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flex: 1,
    marginVertical: 8,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  upiBlock: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'grey',
  },
  upiText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  upiLogo: {
    width: 18,
    height: 18,
  },
});
