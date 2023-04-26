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
      <Text style={styles.header}>Recent Transaction</Text>
      <FlatList
        style={styles.container}
        data={userData}
        ListEmptyComponent={() => (
          <Text style={styles.noDataText}>No Data</Text>
        )}
        renderItem={({item}) => (
          <View style={styles.item}>
            <View style={styles.itemImg}>
              <Text style={styles.userIni}>{item.name.charAt(0)}</Text>
            </View>
            <Text style={styles.itemTitle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 8,
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
  },
  container: {
    flex: 1,
    marginVertical: 8,
    // display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
  },
  item: {
    alignSelf: 'baseline',
    padding: 8,
    marginVertical: 6,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    maxHeight: 20,
    // these property are not working
    // numberOfLines: 2,
    // ellipsizeMode: 'tail',
    // adjustsFontSizeToFit: true,
    padding: 2,
    width: 55,
    fontSize: 14,
    fontWeight: '600',
  },
  itemImg: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIni: {
    fontSize: 35,
    fontWeight: '600',
    color: 'white',
  },
});
