import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Colors from '../../utils/Colors';
import Animated from 'react-native-reanimated';

type AvatarProps = PropsWithChildren<{
  avatarUrl: ImageSourcePropType;
}>;

const AccountImage = ({avatarUrl}: AvatarProps): JSX.Element => {
  return <Image source={avatarUrl} style={styles.accountIcon} />;
};

export default function UserAccount() {
  return (
    <View style={styles.container}>
      <Animated.View sharedTransitionTag="sharedTag">
        <AccountImage avatarUrl={require('../../../assets/ic_avatar.png')} />
      </Animated.View>
      <Text style={styles.textStyle}>UserAccount</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  textStyle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.dark.primary,
  },
  accountIcon: {
    width: 45,
    height: 45,
    marginHorizontal: 4,
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
