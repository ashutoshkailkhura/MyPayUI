import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useUser} from '../../context/userContext';
import Lottie from 'lottie-react-native';

export default function Loading({route, navigation}) {
  const [loadingDone, setLoadingDone] = useState(false);
  const {mobileNum} = route.params;

  setTimeout(() => {
    setLoadingDone(true);
  }, 2_000);

  return (
    <View style={styles.container}>
      <Text style={styles.loadingStyle}>checking {mobileNum}</Text>
      {loadingDone ? <LoadingDoneAnimation /> : <LoadingAnimation />}
    </View>
  );
}

const LoadingAnimation = () => {
  return (
    <Lottie
      style={styles.loadingAnimation}
      source={require('../../../assets/loading.json')}
      autoPlay
      loop
    />
  );
};

const LoadingDoneAnimation = () => {
  const {setIsLogIn} = useUser();

  return (
    <Lottie
      style={styles.loadingAnimation}
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
  loadingAnimation: {
    height: 120,
  },
});
