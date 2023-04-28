import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
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

export default function HomeScreen({navigation}) {
  const [userData, setUserData] = useState([]);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <TopBar navigation={navigation} />
            <HeaderAnimation />
            <SectionQuickAction />
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
  noDataText: {
    fontSize: 32,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
