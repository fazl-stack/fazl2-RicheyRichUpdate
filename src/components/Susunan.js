import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageCustom from './ImageCustom';

const Susunan = ({
  title = 'Username',
  title2 = 'mini editable',
  describeTitle = 'ini deskripsi',
  textColor = 'grey',
  fontsz = 25,
  weight = 300,
  Background = 'white',
  IconName = 'add-circle-outline',
  arrowAnimate,
  onPress,
  kepala,
  linker,
  gambar,
}) => {
  return (
    <View style={{alignItems: 'center', padding: 20}}>
      {/* <TextInput
        style={{
          width: '80%',
          height: 50,
          borderWidth: 1,
          borderColor: Border,
          padding: 10,
          color: textColor,
          borderRadius: 9,
          margin: 5,
        }}
        placeholder={title}
        placeholderTextColor={textColor}
        value={value}
        onChangeText={onChangeText}
      /> */}

      <View
        style={{
          width: 200,
          height: 150,
          alignItems: 'center',
          padding: 5,
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: kepala ? 'black' : 'white',
          borderColor: '#DAA520',
          borderWidth: 1,
          borderRadius: 50,
          elevation: 5,
        }}>
        <Text style={{fontSize: fontsz, fontWeight: weight, color: textColor}}>
          {title}
        </Text>
        <Text style={{color: textColor, fontFamily: 'monospace'}}>
          {title2}
        </Text>
        <TouchableOpacity>
          <Icon
            name={arrowAnimate ? 'close-circle' : 'chevron-down-circle'}
            size={40}
            color={textColor}
            onPress={onPress}
          />
        </TouchableOpacity>
      </View>
      {arrowAnimate == true && (
        <View>
          <View
            style={{
              padding: 7,
              height: 300,
              width: 350,
              backgroundColor: kepala ? 'black' : 'white',
              borderRadius: 10,
              elevation: 5,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}>
            <ImageCustom gambar={gambar} />
            <Text
              style={{
                fontSize: fontsz,
                fontWeight: weight,
                color: kepala ? 'white' : 'black',
              }}>
              {describeTitle}
            </Text>
            <Text
              style={{
                color: kepala ? 'white' : 'black',
                padding: 10,
                textAlign: 'center',
              }}>
              Get To Know More !
            </Text>
            <TouchableOpacity style={{paddingLeft: 145, marginBottom: 10}}>
              <Icon
                name={'arrow-forward-circle'}
                size={50}
                color={textColor}
                onPress={linker}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Susunan;
