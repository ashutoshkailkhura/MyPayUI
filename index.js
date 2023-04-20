/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeApp from './src/views/HomeApp';

AppRegistry.registerComponent(appName, () => App);

// try {
//   const value = await AsyncStorage.getItem('@onBoardingStatus_Key');
//   if (value !== null) {
//     // value previously stored
//     AppRegistry.registerComponent(appName, () => HomeApp);
//   } else {
// AppRegistry.registerComponent(appName, () => App);
//   }
// } catch (e) {
//   // error reading value
//   AppRegistry.registerComponent(appName, () => App);
// }
