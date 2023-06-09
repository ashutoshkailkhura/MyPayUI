import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppScreenOnBoarding} from '../../navigation/AppScreen';

export default function TopAppBar({navigation, appLang}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(AppScreenOnBoarding.SelectAppLanguage, {
            appLang: appLang,
          })
        }>
        <View style={styles.box}>
          <Image
            source={require('../../../assets/ic_language.png')}
            style={styles.dropDownLogo}
          />
          <Text>{appLang}</Text>
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
