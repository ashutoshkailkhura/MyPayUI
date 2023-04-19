import {View} from 'react-native';
import React from 'react';
import EnterMobileNumber from './src/views/onBoarding/EnterMobileNumber';
import SelectLanguage from './src/views/support/SelectLanguage';

export default function App() {
  return (
    <View>
      <EnterMobileNumber />
      {/* <SelectLanguage /> */}
    </View>
  );
}
