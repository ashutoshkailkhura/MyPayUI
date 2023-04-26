import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useUser} from '../../context/userContext';
import Lottie from 'lottie-react-native';

export default function Loading({route, navigation}) {
  const {mobileNum} = route.params;
  const [loadingDone, setLoadingDone] = useState(false);

  setTimeout(() => {
    setLoadingDone(true);
  }, 2_000);

  return (
    <View style={styles.container}>
      {loadingDone ? <LoadingDoneAnimation /> : <LoadingAnimation />}
      <Text style={styles.loadingStyle}>Loading...{mobileNum}</Text>
    </View>
  );
}

const LoadingAnimation = () => {
  return (
    <Lottie source={require('../../../assets/loading.json')} autoPlay loop />
  );
};

const LoadingDoneAnimation = () => {
  const {setIsLogIn} = useUser();

  return (
    <Lottie
      source={require('../../../assets/done.json')}
      autoPlay={true}
      loop={false}
      onAnimationFinish={() => {
        setIsLogIn(true);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  loadingStyle: {
    fontSize: 32,
  },
});
