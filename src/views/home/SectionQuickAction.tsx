import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SectionQuickAction() {
  const quickActionItems = [
    {
      id: 1,
      title: 'Scan QR Code',
      src: '',
    },
    {
      id: 2,
      title: 'Contact Payment',
      src: '',
    },
    {
      id: 3,
      title: 'Phone Number',
      src: '',
    },
    {
      id: 4,
      title: 'Bank transfer',
      src: '',
    },
    {
      id: 5,
      title: 'UPI ID Pay',
      src: '',
    },
    {
      id: 6,
      title: 'Self Transfer',
      src: '',
    },
    {
      id: 7,
      title: 'Bill Recharge',
      src: '',
    },
    {
      id: 8,
      title: 'Mobile Recharge',
      src: '',
    },
  ];

  return (
    <View>
      <FlatList
        style={styles.container}
        data={quickActionItems}
        renderItem={({item}) => (
          <View style={styles.item}>
            <View style={styles.itemImg} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    // display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  item: {
    padding: 8,
    marginVertical: 6,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    padding: 2,
    width: 55,
    fontSize: 12,
    fontWeight: '600',
  },
  itemImg: {
    width: 25,
    height: 45,
    borderRadius: 6,
    borderColor: 'cyan',
    borderWidth: 2,
    backgroundColor: 'grey',
  },
});
