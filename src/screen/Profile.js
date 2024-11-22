import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

const Profile = ({kepala}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        borderWidth: 0.5,
      }}>
      <TouchableOpacity
        style={{
          width: '85%',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        {kepala ? (
          <Image
            source={require('../assets/ayam.png')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              margin: 10,
            }}
          />
        ) : (
          <Image
            source={require('../assets/barca.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              margin: 10,
            }}
          />
        )}
        ;
        <View style={{flexDirection: 'column', paddingRight: 100}}>
          {kepala ? (
            <>
              <Text style={{fontSize: 20, color: 'grey'}}>Real Madrid FC</Text>
              <Text style={{fontSize: 13, color: 'grey'}}>Los Blancos</Text>
            </>
          ) : (
            <>
              <Text style={{fontSize: 20, color: 'grey'}}>Barcelona FC</Text>
              <Text style={{fontSize: 13, color: 'grey'}}>Los Cules</Text>
            </>
          )}
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'column',
          marginTop: 20,
        }}>
        {kepala ? (
          <>
            <TouchableOpacity>
              <Icon name="add-circle-outline" size={30} color="blue" />
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20}}>
              <Icon name="qr-code-outline" size={30} color="blue" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity>
              <Icon name="add-circle-outline" size={30} color="red" />
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20}}>
              <Icon name="qr-code-outline" size={30} color="red" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Profile;
