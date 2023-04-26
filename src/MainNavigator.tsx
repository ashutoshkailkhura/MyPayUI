import React from 'react';
import EnterMobileNumber from './views/onBoarding/EnterMobileNumber';
import SelectLanguage from './views/support/SelectLanguage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from './views/onBoarding/Loading';
import HomeScreen from './views/home/HomeScreen';
import {useUser} from './context/userContext';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScreenHome"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScreenEnterMobileNumber"
        component={EnterMobileNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ScreenSelectLanguage" component={SelectLanguage} />
      <Stack.Screen
        name="ScreenLoading"
        component={Loading}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const {isLogIn} = useUser();
  return isLogIn ? <HomeNavigator /> : <OnBoardingNavigator />;
};

export default MainNavigator;
