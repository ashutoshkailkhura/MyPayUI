import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TopAppBar from './TopAppBar';
import BigButton from '../../component/BigButton';
import {useUser} from '../../context/userContext';
import {AppScreenOnBoarding} from '../../navigation/AppScreen';

export default function EnterMobileNumber({navigation}) {
  const [mobileNumber, onChangeMobileNumber] = useState('');
  const {appLang} = useUser();

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem(KEY_LANGUAGE);
  //     if (value !== null) {
  //       // value previously stored
  //       setSelectedLang(value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  // function savePrefAndNavigate(mobileNumber: string) {
  // const storeData = async value => {
  //   try {
  //     await AsyncStorage.setItem('@onBoardingStatus_Key', 'false');
  //   } catch (e) {
  //     // saving error
  //   }
  // };
  //   console.log('enter mobile number ' + mobileNumber);
  // }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TopAppBar appLang={appLang} navigation={navigation} />
        <Image
          source={require('../../../assets/img_india.png')}
          style={styles.appLogo}
        />
        <Text style={styles.header}>Welcome To MyPayUI</Text>
        <Text style={styles.subHeader}>Enter Your Mobile Number</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMobileNumber}
          value={mobileNumber}
          placeholder="Mobile Number"
          keyboardType="numeric"
        />

        <BigButton
          title={'Lets Go'}
          onPress={() =>
            navigation.navigate(AppScreenOnBoarding.OnBoardingLoading, {
              mobileNum: mobileNumber,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  appLogo: {
    width: 100,
    height: 50,
    marginVertical: 22,
  },
  header: {
    fontSize: 22,
    marginVertical: 12,
    fontWeight: '700',
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 2,
  },
  input: {
    fontSize: 22,
    height: 55,
    marginVertical: 24,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 10,
  },
});
