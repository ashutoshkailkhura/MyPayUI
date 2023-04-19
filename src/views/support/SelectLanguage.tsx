import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function SelectLanguage() {
  const languages = [
    {name: 'English'},
    {name: 'Hindi'},
    {name: 'Hinglish'},
    {name: 'Gujrati'},
    {name: 'Bangali'},
    {name: 'Marathi'},
    {name: 'Tamil'},
    {name: 'Kannad'},
    {name: 'Telgu'},
  ];

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(
    languages[0].name,
  );

  return (
    <View>
      <FlatList
        data={languages}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setSelectedAddressIndex(item.name)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
