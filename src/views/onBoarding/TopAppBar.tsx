import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function TopAppBar({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ScreenSelectLanguage')}>
        <View style={styles.box}>
          <Image
            source={require('../../../assets/ic_language.png')}
            style={styles.dropDownLogo}
          />
          <Text>English</Text>
          <Image
            source={require('../../../assets/drop_down.png')}
            style={styles.dropDownLogo}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.box}>
        <Image
          source={require('../../../assets/img_india.png')}
          style={styles.dropDownLogo}
        />
        <Text>IN</Text>
        <Image
          source={require('../../../assets/drop_down.png')}
          style={styles.dropDownLogo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  box: {
    flexDirection: 'row',
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
  },
  dropDownLogo: {
    width: 16,
    height: 16,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 2,
  },
});
