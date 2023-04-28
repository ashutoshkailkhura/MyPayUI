import React from 'react';
import EnterMobileNumber from '../views/onBoarding/EnterMobileNumber';
import SelectLanguage from '../views/support/SelectLanguage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from '../views/onBoarding/Loading';
import HomeScreen from '../views/home/HomeScreen';
import {useUser} from '../context/userContext';
import {AppScreenMain, AppScreenOnBoarding} from './AppScreen';
import UserAccount from '../views/myAccount/UserAccount';
import RecentTransactionDetail from '../views/home/recentDetail/RecentTransactionDetail';
import MyTransactionHistory from '../views/home/transactionHistory/MyTransactionHistory';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppScreenMain.HomeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppScreenMain.AccountScreen}
        component={UserAccount}
        options={{
          title: 'My Account',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={AppScreenMain.RecentTransactionDetail}
        component={RecentTransactionDetail}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name={AppScreenMain.MyTransactionHistory}
        component={MyTransactionHistory}
        options={{
          title: 'Transaction History',
        }}
      />
    </Stack.Navigator>
  );
};

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppScreenOnBoarding.EnterMobileNumber}
        component={EnterMobileNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppScreenOnBoarding.SelectAppLanguage}
        component={SelectLanguage}
      />
      <Stack.Screen
        name={AppScreenOnBoarding.OnBoardingLoading}
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
