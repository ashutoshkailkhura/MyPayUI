import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require('../../../assets/ic_search.png')}
          style={styles.searchLogo}
        />
        <Text style={styles.searchText}>Search | Payment | Contacts</Text>
      </View>
      <View style={styles.accountIcon}>
        <Text style={styles.accountText}>A</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 4,
    height: 50,
  },
  searchBar: {
    flexDirection: 'row',
    flexGrow: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
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
    backgroundColor: 'yellow',
    margin: 4,
    borderRadius: 45 / 2,
    alignContent: 'center',
    alignItems: 'center',
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
