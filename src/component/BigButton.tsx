import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const BigButton = ({title, ...props}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={{...styles.buttonText, ...props.textStyling}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#006699',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    padding: 4,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

export default BigButton;
