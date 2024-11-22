import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const ButtonCustom = ({
  textColor = 'white',
  title = 'Sign In',
  tallHeight = 50,
  background = 'black',
  kepala,
  verif,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: disabled ? 'grey' : kepala ? 'white' : 'black',
        height: tallHeight,
        width: 300,
        borderRadius: 50,
        margin: 20,
        elevation: 10,

        alignSelf: 'center',
      }}
      onPress={verif}>
      <Text
        style={{
          color: kepala ? 'black' : 'white',
          textAlign: 'center',
          padding: 15,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
