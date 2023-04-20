import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderAnimation from './HeaderAnimation';
import SectionQuickAction from './SectionQuickAction';
import SectionMyUPIId from './SectionMyUPIId';
import SectionBusinesses from './SectionBusinesses';
import SectionInviteFriend from './SectionInviteFriend';
import SectionRecentTransaction from './SectionRecentTransaction';

export default function HomeScreen({navigation}) {
  const [userData, setUserData] = useState([]);

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // handle success
      setUserData(response.data);
    })
    .catch(function (_error) {
      // handle error
      setUserData([]);
    })
    .finally(function () {
      // always executed
    });

  return (
    <SafeAreaView>
      <ScrollView>
        <TopBar />
        <HeaderAnimation />
        <SectionQuickAction />
        {/*<SectionMyUPIId />
        <SectionRecentTransaction />
        <SectionBusinesses />
        <SectionInviteFriend /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  noDataText: {
    fontSize: 32,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
