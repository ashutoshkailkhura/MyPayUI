import {View} from 'react-native';
import React from 'react';
import EnterMobileNumber from './src/views/onBoarding/EnterMobileNumber';
import SelectLanguage from './src/views/support/SelectLanguage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from './src/views/onBoarding/Loading';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenEnterMobileNumber"
          component={EnterMobileNumber}
        />
        <Stack.Screen name="ScreenSelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="ScreenLoading" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
