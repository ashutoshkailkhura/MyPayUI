import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_LANGUAGE} from '../../utils/AppConstant';
import {useUser} from '../../context/userContext';

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

  const [language, setLangauge] = useState(language);

  // const [selectedLang, setSelectedLang] = useState(appLang);

  const {appLang, setAppLang} = useUser();

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem(KEY_LANGUAGE);
  //     if (value !== null) {
  //       // value previously stored
  //       setSelectedLang(value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem(KEY_LANGUAGE, value);
    } catch (e) {
      // saving error
    }
    // setSelectedLang(value);
    setAppLang(value);
  };

  // useEffect(() => {
  //   getData();
  // }, [selectedLang]);

  console.log('app langauge ' + appLang);

  return (
    <View>
      <FlatList
        data={languages}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.languageRow}
            onPress={() => storeData(item.name)}>
            {item.name === appLang ? (
              <SelectedLangRow language={item.name} />
            ) : (
              <NotSelectedLangRow language={item.name} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const SelectedLangRow = ({language}) => {
  return (
    <View style={styles.selectedItem}>
      <Text style={styles.item}>{language}</Text>
    </View>
  );
};

const NotSelectedLangRow = ({language}) => {
  return <Text style={styles.item}>{language}</Text>;
};

const styles = StyleSheet.create({
  item: {
    // flex: 1,
    padding: 8,
    margin: 4,
    fontSize: 18,
    height: 44,
  },
  languageRow: {
    // display: 'flex',
    // flexDirection: 'row',
  },
  selectedItem: {
    // display: 'flex',
    marginHorizontal: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
});
