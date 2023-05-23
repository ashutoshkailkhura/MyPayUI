import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {AppScreenMain} from '../../navigation/AppScreen';
import Animated from 'react-native-reanimated';

type AvatarProps = PropsWithChildren<{
  avatarUrl: ImageSourcePropType;
}>;

const AccountImage = ({avatarUrl}: AvatarProps): JSX.Element => {
  return <Image source={avatarUrl} style={styles.accountIcon} />;
};

export default function TopBar({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require('../../../assets/ic_search.png')}
          style={styles.searchLogo}
        />
        <Text style={styles.searchText}>Search | Payment | Contacts</Text>
      </View>
      <View>
        <Animated.View sharedTransitionTag="sharedTag">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(AppScreenMain.AccountScreen);
            }}>
            <AccountImage
              avatarUrl={require('../../../assets/ic_avatar.png')}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    height: 50,
  },
  searchBar: {
    flexDirection: 'row',
    flexGrow: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 4,
    borderRadius: 22,
    padding: 2,
  },
  searchLogo: {
    marginStart: 4,
    width: 25,
    height: 25,
    marginVertical: 18,
  },
  accountIcon: {
    width: 45,
    height: 45,
    backgroundColor: 'cyan',
    marginHorizontal: 4,
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountText: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
  },
  searchText: {
    fontSize: 18,
    marginStart: 6,
    fontWeight: '400',
    textAlign: 'center',
  },
});
