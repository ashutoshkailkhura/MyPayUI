import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import TopAppBar from './TopAppBar';
import BigButton from '../../component/BigButton';

export default function EnterMobileNumber({navigation}) {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TopAppBar navigation={navigation} />
        <Image
          source={require('../../../assets/img_india.png')}
          style={styles.appLogo}
        />
        <Text style={styles.header}>Welcome To MyPayUI</Text>
        <Text style={styles.subHeader}>Enter Your Mobile Number</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Mobile Number"
          keyboardType="numeric"
        />

        <BigButton
          onPress={() => navigation.navigate('ScreenLoading')}
          children={'Click Me'}
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
    marginVertical: 18,
  },
  header: {
    fontSize: 22,
    fontWeight: 700,
    marginVertical: 4,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 2,
  },
  input: {
    fontSize: 22,
    height: 55,
    marginVertical: 22,
    borderWidth: 1,
    padding: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});