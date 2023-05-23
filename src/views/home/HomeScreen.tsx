import {
  FlatList,
  Appearance,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TopBar from './TopBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderAnimation from './HeaderAnimation';
import SectionQuickAction from './SectionQuickAction';
import SectionMyUPIId from './SectionMyUPIId';
import SectionBusinesses from './SectionBusinesses';
import SectionInviteFriend from './SectionInviteFriend';
import SectionRecentTransaction from './SectionRecentTransaction';
import SectionPersonal from './SectionPersonal';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

export default function HomeScreen({navigation}) {
  const [userData, setUserData] = useState([]);

  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
    // Switch to dark theme
    console.log(colorScheme);
  }

  // FIX ME - place it in relevant screen
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to view your contacts.',
    buttonPositive: 'Please accept bare mortal',
  })
    .then(res => {
      console.log('Permission: ', res);
      Contacts.getAll()
        .then(contacts => {
          // work with contacts
          // console.log(contacts);
        })
        .catch(e => {
          console.log(e);
        });
    })
    .catch(error => {
      console.error('Permission error: ', error);
    });

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <TopBar navigation={navigation} />
            <HeaderAnimation />
            <SectionQuickAction navigation={navigation} />
            <SectionMyUPIId />
            <SectionBusinesses />
          </>
        }
        ListFooterComponent={
          <>
            <SectionRecentTransaction navigation={navigation} />
            <SectionPersonal navigation={navigation} />
            <SectionInviteFriend />
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // noDataText: {
  //   fontSize: 32,
  //   alignContent: 'center',
  //   justifyContent: 'center',
  // },
});
