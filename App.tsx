import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserProvider from './src/context/userContext';
import MainNavigator from './src/MainNavigator';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
