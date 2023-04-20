import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

export default function SectionRecentTransaction() {
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
    <View>
      <FlatList
        data={userData}
        ListEmptyComponent={() => (
          <Text style={styles.noDataText}>No Data</Text>
        )}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>------------</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
