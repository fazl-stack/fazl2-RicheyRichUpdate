import React, {useState} from 'react';
import {Text, View, Switch, Alert, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// syarat buat props
//1. buat variable di field parameter function component dalamnya
//2. panggil variablenya di bagian komponent custom

const Header = ({
  title = 'Header',
  kepala,
  SwitchOn,
  onValueChange,
  textColor,
}) => {
  // const BackButton = () => {
  //   return Alert.alert('Logout', 'Are you sure?', [
  //     {text: 'No'},
  //     {text: 'Yes'},
  //   ]);
  // };

  return (
    <View
      style={{
        height: 100,
        width: '100%',
        backgroundColor: kepala ? 'black' : 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        marginBottom: 10,
        padding: 30,
      }}>
      {/* <View style={{flexDirection: 'row', padding: 5}}>
        <TouchableOpacity style={{marginTop: 5}}>
          <Icon
            name="arrow-back-outline"
            size={30}
            color={kepala ? 'black' : 'white'}
            onPress={BackButton}
          />
        </TouchableOpacity>
      </View> */}
      <Text
        style={{
          fontSize: 30,
          color: textColor,
          fontWeight: 300,
          fontFamily: 'serif',
        }}>
        {title}
        <Icon name="diamond" size={25} />
      </Text>
      <Switch
        trackColor={{false: 'grey', true: 'grey'}}
        thumbColor={SwitchOn ? '#DAA520' : '#DAA520'}
        onValueChange={onValueChange}
        value={SwitchOn}
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};

export default Header;
