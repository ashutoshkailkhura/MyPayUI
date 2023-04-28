import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function RecentTransactionDetail({route}) {
  const {id, name} = route.params;
  return (
    <View>
      <Text>RecentTransactionDetail - {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
